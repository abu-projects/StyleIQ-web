import React, { useRef, useState } from 'react';
import { Img, asset, Footer } from './shared';
import articles from './data/articles.json';
import './worn.css';

const logo = 'https://cdn.whering.co/pages/worn/worn_logo_embroidered.png';
const find = slug => articles.find(a => a.route.endsWith('/' + slug));
const featured = [find('nana-acheampong'), articles[0], find('welcome-to-kemi-alemoru-s-guest-edit')];
const featuredDescriptions = ["A behind-the-scenes look at Fashion Broadcaster and Editor at SheerLuxe Nana Acheampong's wardrobe", 'Photographer Cameron Hendry captures standout looks from the streets of London fashion week', "For Whering's first-ever print and digital issue of Worn, we created a love letter to London fashion"];
const collage = [
  ['welcome-to-kemi-alemoru-s-guest-edit',38,14.5,10.5,26], ['zooey-gleaves-references-whering',47.2,23,8.9,22],
  ['what-are-you-whering-london-fashion-week',64.5,20.8,10.6,26], ['overhead-by-the-runway',31.8,34.2,8,19.5],
  ['what-s-on-ellie-misner-founder-of-ellie-misner',54,35.8,8,20], ['real-runways',69,51.5,8,20],
  ['priya-ahluwalia',55.2,56,10.7,12], ['ameli-lindgren-founder-of-nordic-poetry',39.3,59.5,8,20],
  ['nana-acheampong',18.6,52.2,12,27]
];
function Card({article}) {
  return <a className="worn-card" href={article.route}>
    <div className="worn-card-image"><Img src={article.cover} alt={article.alt}/></div>
    <div className="worn-card-meta"><span>{article.category}</span><span>▱ {article.minutes} MIN</span></div>
    <h3>{article.title}</h3><p>{article.author}</p>
  </a>;
}
function FeaturedMobile() {
  const [index, setIndex] = useState(0);
  const article = featured[index];
  return <section className="worn-mobile-feature">
    <div className="worn-mobile-stack">{featured.map((a,i) => <a key={a.route} href={a.route} style={{transform:i===index?'rotate(-3deg)':`translateX(${i<index?-78:78}px) scale(.68) rotate(${i<index?-12:12}deg)`,zIndex:i===index?3:1}}><Img src={a.cover} alt={a.alt}/>{i===index&&<Img className="worn-mobile-logo" src="/assets/images/worn/mobile/worn-script.png" alt="Worn"/>}</a>)}</div>
    <div className="worn-mobile-caption"><p>{article.date}　▱ {article.minutes} MIN</p><h1>{article.title}</h1><p className="worn-featured-description">{featuredDescriptions[index]} <a href={article.route}>Read more</a></p><p>{article.author}</p></div>
    <div className="worn-carousel-controls"><button aria-label="Previous featured story" onClick={()=>setIndex((index+2)%3)}>←</button><span>{index+1} / 3</span><button aria-label="Next featured story" onClick={()=>setIndex((index+1)%3)}>→</button></div>
  </section>;
}
function Feature({article}) {
  return <a href={article.route} className="worn-feature"><Img src={article.cover} alt={article.alt}/><div><span>{article.category}　▱ {article.minutes} MIN</span><h2>{article.title}</h2><span className="worn-feature-read">Read more ↗</span></div></a>;
}
export default function Worn() {
  const [categories,setCategories]=useState([]), [query,setQuery]=useState(''), [sort,setSort]=useState('newest');
  const allRef=useRef(null), latestRef=useRef(null);
  const toggle=category=>setCategories(current=>current.includes(category)?current.filter(x=>x!==category):[...current,category]);
  const filtered=articles.filter(a=>(!categories.length||categories.includes(a.category))&&`${a.title} ${a.author} ${a.category}`.toLowerCase().includes(query.toLowerCase()));
  if(sort==='oldest') filtered.reverse();
  return <main className="worn-page">
    <FeaturedMobile/>
    <section className="worn-desktop-hero" aria-label="Worn featured stories">
      <Img className="worn-hero-mark" src="/assets/images/worn/hero/hero-01.png" alt="Worn"/>
      {collage.map(([slug,left,top,width,height])=>{const a=find(slug);return <a key={slug} className="worn-collage-photo" href={a.route} aria-label={a.title} style={{left:left+'%',top:top+'%',width:width+'%',height:height+'%'}}><Img src={a.cover} alt=""/></a>})}
      <Img className="worn-hero-tape" src="/assets/images/worn/hero/green-tape.png" alt=""/>
      <Img className="worn-hero-pin" src="/assets/images/worn/hero/safety-pin.png" alt=""/>
      <Img className="worn-hero-bag" src="/assets/images/worn/hero/bag.png" alt=""/>
      <Img className="worn-hero-duct" src="/assets/images/worn/hero/duct-tape.png" alt=""/>
      <button className="worn-scroll" aria-label="Explore Worn" onClick={()=>document.getElementById('worn-stories').scrollIntoView({behavior:'smooth'})}>⌄</button>
    </section>
    <section className="worn-statement" id="worn-stories"><p>The stories behind what we wear.<br/>Real voices, real wardrobes,<br/>all worn.</p></section>
    <section className="worn-latest">
      <div className="worn-category-bar">{['Insider','Scene','Wardrobes'].map(c=><button key={c} className={categories.includes(c)?'selected':''} onClick={()=>{toggle(c);allRef.current.scrollIntoView({behavior:'smooth'})}}>{c}</button>)}<button onClick={()=>{allRef.current.scrollIntoView({behavior:'smooth'});document.getElementById('article-search').focus()}}>Search ↗</button></div>
      <div className="worn-section-heading"><h2>Latest</h2><div><button aria-label="Previous latest articles" onClick={()=>latestRef.current.scrollBy({left:-420,behavior:'smooth'})}>←</button><button aria-label="Next latest articles" onClick={()=>latestRef.current.scrollBy({left:420,behavior:'smooth'})}>→</button></div></div>
      <div className="worn-latest-cards" ref={latestRef}>{articles.map(a=><Card key={a.route} article={a}/>)}</div>
    </section>
    <Feature article={find('nana-acheampong')}/>
    <section className="worn-all" ref={allRef}>
      <div className="worn-all-top"><h2>All articles</h2><label className="worn-search">⌕ <input id="article-search" type="search" placeholder="Search articles" value={query} onChange={e=>setQuery(e.target.value)}/></label><select aria-label="Sort articles" value={sort} onChange={e=>setSort(e.target.value)}><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></div>
      <div className="worn-filter-row">{['Insider','Scene','Wardrobes'].map(c=><label key={c}><input type="checkbox" checked={categories.includes(c)} onChange={()=>toggle(c)}/>{c}</label>)}{(categories.length>0||query)&&<button onClick={()=>{setCategories([]);setQuery('')}}>Clear filters</button>}<span aria-live="polite">{filtered.length} articles</span></div>
      <div className="worn-grid">{filtered.map(a=><Card key={a.route} article={a}/>)}</div>{!filtered.length&&<p className="worn-empty">No articles found. Try another search.</p>}
    </section>
    <Feature article={find('party-pages')}/>
    <section className="worn-101"><h2>Whering 101</h2><div>{[['getting-started.jpg','Getting started'],['add-items.png','How to add your items'],['find-style.png','How to find your style'],['style-friends.jpg','Style friends'],['next-steps.jpg','Next steps']].map(([file,title])=><a key={file} href="/#how-it-works"><Img src={'/assets/images/worn/whering101/'+file} alt=""/><h3>{title}</h3></a>)}</div></section>
    <Footer worn/>
  </main>;
}

function EditorialSection({blocks,author}) {
  const onlyImages=blocks.every(b=>b.type==='image');
  return <section className={'editorial-section '+(onlyImages?'editorial-gallery':'')}>
    {blocks.map((block,i)=>{
      if(block.type==='intro') return <div key={i} className="editorial-intro"><div><span className="editorial-day" aria-hidden="true">{block.day}</span><h2>{block.heading}</h2><p className="editorial-by">BY {author}</p><div className="editorial-author-links">{block.links.map(link=><a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.text} ↗</a>)}</div></div><div className="editorial-intro-copy">{block.body.map((html,j)=><div className={html.startsWith('<div')?'editorial-intro-rich':''} key={j} dangerouslySetInnerHTML={{__html:html}}/>)}</div></div>;
      if(block.type==='text') return <div className="editorial-prose" key={i} dangerouslySetInnerHTML={{__html:block.html}}/>;
      if(block.type==='image') return <figure key={i}><Img src={block.src} alt={block.alt}/>{block.caption&&<figcaption>{block.caption}</figcaption>}</figure>;
      if(block.type==='video') return <video key={i} className="editorial-video" src={asset(block.src)} controls playsInline preload="metadata" aria-label={block.label}/>;
      if(block.type==='embed') return <div key={i} className="editorial-embed"><iframe title={block.title} src={block.src} loading="lazy" allow="encrypted-media; fullscreen; picture-in-picture"/><a href={block.src.replace('/embed/','/')} target="_blank" rel="noreferrer">View original post ↗</a></div>;
      return <blockquote key={i} className="editorial-quote">{block.text}</blockquote>;
    })}
  </section>;
}
export function Article({route}) {
  const article=articles.find(a=>a.route===route);
  const [liked,setLiked]=useState(()=>localStorage.getItem('worn-like:'+route)==='true'), [shared,setShared]=useState('');
  if(!article) return <main className="worn-page"><h1>Article not found</h1><a href="/worn">Back to Worn</a></main>;
  async function share(){try{await navigator.clipboard.writeText(window.location.href);setShared('Link copied');}catch{setShared('Copy this page URL from your address bar');}setTimeout(()=>setShared(''),4000)}
  return <main className="worn-page article-page"><article>
    <section className="article-hero"><Img className="article-backdrop" src={article.cover} alt=""/><a className="article-back" href="/worn" aria-label="Back to Worn">←</a><div className="article-cover"><Img className="article-cover-photo" src={article.cover} alt={article.alt}/><Img className="article-cover-logo" src={logo} alt="Worn"/><h1>{article.title}</h1></div><p className="article-date">{article.date.replace('2026','26')}　▱ {article.minutes} MIN</p><div className="article-actions"><button aria-label="Like this article" aria-pressed={liked} onClick={()=>{setLiked(!liked);localStorage.setItem('worn-like:'+route,String(!liked))}}>{liked?'♥':'♡'}</button><button aria-label="Share this article" onClick={share}>↗</button></div><span className="article-share-message" role="status">{shared}</span></section>
    {article.sections.map((blocks,i)=><EditorialSection key={i} blocks={blocks} author={article.author}/>)}
  </article><section className="article-related"><h2>More from Worn</h2><div>{articles.filter(a=>a.route!==route).slice(0,3).map(a=><Card key={a.route} article={a}/>)}</div><a className="worn-back-link" href="/worn">View all articles ↗</a></section><Footer worn/></main>;
}
