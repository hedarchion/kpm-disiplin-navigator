const C="kpm-disiplin-v5";
// HTML/navigations are NEVER served from cache (always fresh).
// Only PDFs + catalog are cached for offline reading.
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./index.html"])).then(()=>self.skipWaiting()).catch(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const u=new URL(e.request.url);
 if(e.request.mode==="navigate"||/\.html?$|\/$/.test(u.pathname)){
  e.respondWith(fetch(e.request).catch(()=>caches.match("./index.html")));
 }else if(u.pathname.endsWith(".pdf")||u.pathname.endsWith("catalog.json")){
  e.respondWith(caches.open(C).then(async c=>{const h=await c.match(e.request);if(h)return h;const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>caches.match(e.request)));
 }
});
