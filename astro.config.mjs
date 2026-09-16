import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://taoyuannightmarket.com",
  // 伺服器模式：頁面預設以 export const prerender = true 產生靜態 HTML，
  // 僅「天氣」等需要即時資料的島嶼（server island）於 Cloudflare Workers 上隨請求產生。
  output: "server",
  trailingSlash: "always",
  build: {
    format: "directory"
  },
  integrations: [sitemap()],
  adapter: cloudflare({
    imageService: "passthrough",
    // 於建置階段以 Node 執行預渲染（避免在部分 Windows 環境因 workerd 執行檔崩潰而中斷建置）
    prerenderEnvironment: "node",
    sessionKVBindingName: "SESSION"
  }),
  session: false,
  vite: {
    plugins: [tailwindcss()]
  }
});
