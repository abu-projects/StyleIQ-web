import {build} from 'esbuild';
import fs from 'node:fs/promises';
const result=await build({entryPoints:['src/main.jsx'],bundle:true,external:["/assets/*"],write:false,format:'iife',minify:true,outfile:'app.js',define:{'process.env.NODE_ENV':'"production"'}});
const js=result.outputFiles.find(f=>f.path.endsWith('.js')).text.replaceAll('</script','<\\/script');
const css=result.outputFiles.find(f=>f.path.endsWith('.css')).text;
for(const [target,base] of [['index.html','./public'],['dist/index.html','.']]){
 const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Organise your wardrobe, discover outfit ideas with Olivia, your AI stylist, and plan looks with StyleIQ."><meta name="theme-color" content="#1b1716"><title>StyleIQ — Digital Wardrobe &amp; AI Styling App</title><style>${css.replaceAll('/assets/',base+'/assets/')}</style></head><body><div id="root"></div><script>window.__ASSET_BASE__=${JSON.stringify(base)};</script><script>${js}</script></body></html>`;
 await fs.writeFile(target,html);
}
console.log('Exported index.html and dist/index.html: open directly, no server required.');
