const C="kpm-disiplin-v1";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./data/catalog.json"])).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.pathname.endsWith(".pdf")){e.respondWith(caches.open(C).then(async c=>{const h=await c.match(e.request);if(h)return h;const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>fetch(e.request)))}else{e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request)))}});
