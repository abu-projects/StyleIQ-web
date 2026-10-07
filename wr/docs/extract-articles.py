"""Extract public editorial content, not application code, from saved source HTML."""
import json, re
from pathlib import Path
from bs4 import BeautifulSoup

root = Path(__file__).resolve().parents[1]
pages = json.loads((root / 'src/data/pages.json').read_text())
listing = BeautifulSoup((root / 'docs/research/worn.html').read_text(), 'html.parser')

def clean_url(value):
    return value.split('?')[0]

def rich(node):
    soup = BeautifulSoup(str(node), 'html.parser')
    for element in soup.find_all(True):
        element.attrs = {key: val for key, val in element.attrs.items() if key in ['href', 'target', 'rel']}
    return str(soup)

articles = []
for route, page in pages.items():
    if not route.startswith('/worn/') or not page.get('articleHtml'):
        continue
    doc = BeautifulSoup(page['articleHtml'], 'html.parser')
    sections = doc.article.find_all('section', recursive=False)
    hero = sections[0]
    title = hero.h1.get_text(' ', strip=True)
    cover = hero.find_all('img')[1]
    date_match = re.search(r'(\d+ SEPTEMBER 2026)', hero.get_text(' ', strip=True))
    minutes = re.search(r'(\d+)\s*MIN', hero.get_text(' ', strip=True))
    category, author = 'Insider', ''
    for link in listing.select('a[href]'):
        if link.get('href') != route:
            continue
        text = link.get_text(' | ', strip=True)
        if text.startswith(('SCENE', 'INSIDER', 'WARDROBES')):
            category = text.split(' | ')[0].title()
            author = text.split(' | ')[-1]
            break
    item = dict(route=route, title=title, cover=clean_url(cover['src']), alt=cover.get('alt', ''), category=category, author=author,
                date=date_match.group(1) if date_match else '17 SEPTEMBER 2026', minutes=int(minutes.group(1)) if minutes else 1, sections=[])
    for index, section in enumerate(sections[1:]):
        blocks, seen = [], set()
        if index == 0 and section.h2:
            heading = section.h2.get_text(' ', strip=True)
            by = next((x.get_text(' ', strip=True) for x in section.find_all('span') if x.get_text(' ', strip=True).startswith('BY ')), '')
            item['author'] = by.removeprefix('BY ') or author
            intro = {'type': 'intro', 'heading': heading, 'day': item['date'].split()[0], 'links': [], 'body': []}
            for link in section.select('a[href]'):
                intro['links'].append({'text': link.get_text(' ', strip=True), 'href': link['href']})
            for node in section.select('p, .payload-richtext'):
                if node.name == 'p' and node.find_parent(class_='payload-richtext'):
                    continue
                text = node.get_text(' ', strip=True)
                if text and text not in seen:
                    intro['body'].append(rich(node)); seen.add(text)
            blocks.append(intro)
        else:
            for node in section.find_all(['p', 'h2', 'h3', 'h4', 'ul', 'ol', 'blockquote', 'img', 'video', 'iframe']):
                if node.name in ['p', 'h2', 'h3', 'h4', 'ul', 'ol', 'blockquote']:
                    if node.find_parent(['p', 'ul', 'ol', 'blockquote']):
                        continue
                    text = node.get_text(' ', strip=True)
                    if text and text not in seen:
                        if node.name == 'p' and '--font-space-mono' in node.get('style', ''):
                            blocks.append({'type': 'quote', 'text': text})
                        else:
                            blocks.append({'type': 'text', 'html': rich(node)})
                        seen.add(text)
                elif node.name == 'img':
                    url = clean_url(node.get('src', ''))
                    if url and url not in seen:
                        caption = node.find_parent('figure')
                        caption = caption.find('figcaption') if caption else None
                        blocks.append({'type': 'image', 'src': url, 'alt': node.get('alt', ''), 'caption': caption.get_text(' ', strip=True) if caption else ''}); seen.add(url)
                elif node.name == 'video':
                    source = node.find('source')
                    url = clean_url(node.get('src') or (source.get('src') if source else ''))
                    if url and url not in seen:
                        blocks.append({'type': 'video', 'src': url, 'label': node.get('aria-label', 'Article video')}); seen.add(url)
                else:
                    url = node.get('src', '')
                    if url and url not in seen:
                        blocks.append({'type': 'embed', 'src': url, 'title': node.get('title', 'Embedded post')}); seen.add(url)
            if not blocks:
                text = section.get_text(' ', strip=True)
                if text:
                    blocks.append({'type': 'quote', 'text': text})
        if blocks:
            item['sections'].append(blocks)
    articles.append(item)

articles.sort(key=lambda x: (-int(x['date'].split()[0]), list(pages).index(x['route'])))
(root / 'src/data/articles.json').write_text(json.dumps(articles, ensure_ascii=False, indent=2))
print('Extracted', len(articles), 'articles;', sum(len(s) for a in articles for s in a['sections']), 'content blocks')
