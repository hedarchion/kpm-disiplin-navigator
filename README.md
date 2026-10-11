# Navigator Pekeliling Disiplin KPM

Aplikasi web statik pantas (GitHub Pages) — semua Surat Pekeliling Ikhtisas / Surat Siaran KPM berkaitan disiplin murid, disusun ikut **topik, tahun & kronologi**, dengan paparan PDF terbina dalam.

- 🚀 Tiada framework, tiada build — `index.html` + `data/catalog.json` + `pdfs/`
- 📱 Mesra telefon & desktop; PDF dimuat malas (lazy) — sifar bait PDF sebelum pengguna tekan Lihat
- 🔍 Carian kata kunci + penapis topik + tahun + susunan terbaru/tertua + pautan deep-link `#id=`
- 📴 Service worker: halaman + katalog cache-first; PDF di-cache selepas dilihat

## Struktur

```
index.html  data/catalog.json  pdfs/*.pdf  sw.js  404.html
```

## Sumber

Portal rasmi: https://www.moe.gov.my/pekeliling-ikhtisas — PDF di sini ialah salinan cerminan untuk capaian pantas sekolah. Pembetulan: SPI 9/2018 = Perpaduan (seksual = SPI 13/2023); SPI 6/2019 = KSSM (buli = SPI 8/2010 & SPI 12/2023).
