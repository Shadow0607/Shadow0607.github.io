# Shadow0607 作品集網站

純靜態網頁（HTML / CSS / JS，無需建置），用 GitHub Pages 發布，連結到 GitHub 上的公開專案。

## 頁面

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁：簡介、精選專案、技術領域 |
| `projects.html` | 所有公開專案（即時從 GitHub API 取得，可依語言篩選、切換顯示 Fork） |
| `about.html` | 關於我（待本人填寫） |
| `projects/minifactory.html` | MiniFactory 專案介紹 |
| `projects/ig-ai-vision.html` | IG AI Vision System 專案介紹 |

## 維護

- 專案描述、標籤、精選設定：編輯 `assets/data.js`
- 新增專案介紹頁：複製 `projects/` 底下任一頁修改，並在 `data.js` 對應專案加上 `detail` 路徑

## 本機預覽

```bash
npx serve .
```

## 發布到 GitHub Pages

1. 建立 repo（建議命名 `Shadow0607.github.io`，網址即為 `https://shadow0607.github.io/`）
2. 推送本資料夾內容到 `main` 分支
3. Repo → Settings → Pages → Source 選 `Deploy from a branch`，分支 `main`、資料夾 `/ (root)`
