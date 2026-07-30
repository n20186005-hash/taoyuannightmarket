# TaoyuanNightMarket.com

桃園觀光夜市單頁旅遊攻略網站。全站使用臺灣繁體中文，照片已放入專案本地，不需要資料庫、登入或 CMS。

## 技術

- Astro 7（靜態輸出）
- Tailwind CSS 4（Vite plugin）
- TypeScript
- pnpm
- Cloudflare Workers Static Assets
- GA4：`G-HXM22WWPKP`

## 本地開發

```bash
corepack enable
corepack prepare pnpm@10.15.0 --activate
pnpm install
pnpm dev
```

預設開發網址通常為 `http://localhost:4321`。

## 建置

```bash
pnpm build
pnpm preview
```

輸出目錄為 `dist/`。

## 部署到 Cloudflare Worker

先登入 Wrangler：

```bash
pnpm wrangler login
```

建置並部署：

```bash
pnpm deploy
```

`wrangler.jsonc` 已設定由 Worker Static Assets 發佈 `dist/`。部署完成後，在 Cloudflare Worker 的 Domains & Routes 中綁定：

- `taoyuannightmarket.com`
- `www.taoyuannightmarket.com`（建議 301 轉至裸域）

## 上線前清單

1. 確認域名 DNS 與 HTTPS。
2. 檢查 `https://taoyuannightmarket.com/sitemap-index.xml`。
3. 在 GA4 即時報表確認 `G-HXM22WWPKP` 有收到瀏覽事件。
4. 再次確認照片使用授權，詳見 `PHOTO_CREDITS.md`。
5. 現場核對營業時間、交通、指定店家與洗手間資訊。
6. 將網站提交 Google Search Console，並提交 sitemap。

## 外部連結策略

頁面只保留必要的 Google Maps 導航按鈕；其餘內容均在站內完成。GA4 會載入 Google Tag Manager 的統計腳本，但不會在頁面顯示外部導覽連結。
