// 專案資料（靜態備援）
// projects.html 會先嘗試從 GitHub API 抓最新清單，失敗時才用這份資料。
// featured: 首頁精選；detail: 有專屬介紹頁的路徑
window.SITE = {
  githubUser: "Shadow0607",
  displayName: "Wayne W.",
  // Google 表單公開網址（https://forms.gle/... 或 https://docs.google.com/forms/...）
  // 留空時，導覽列與「關於我」的聯絡按鈕都不會顯示
  contactFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdltdWO41opMc8UPq1CUzIaqfv7hUrBd7-5pmCh2DqC0YqPGg/viewform",
};

window.PROJECTS = [
  {
    name: "MiniFactory",
    language: "C#",
    status: "規劃中",
    description: "純軟體智慧工廠任務調度與異常監控平台：以虛擬產線與設備模擬製造現場，練習派工、重送去重、Outbox 與監控追蹤。",
    tags: ["ASP.NET Core", "Vue 3", "PostgreSQL", "RabbitMQ", "Redis", "SignalR", "OpenTelemetry"],
    featured: true,
    detail: "projects/minifactory.html",
    updated: "2026-09-21",
  },
  {
    name: "ig_ai_vision_system",
    language: "C#",
    status: "",
    description: "分散式微服務架構的社群媒體爬蟲與 AI 視覺辨識系統：Python 爬蟲／AI Worker、.NET API、Vue 3 監控儀表板。",
    tags: ["ASP.NET Core", "Python", "Vue 3", "MySQL", "Redis", "MinIO", "Qdrant"],
    featured: true,
    detail: "projects/ig-ai-vision.html",
    updated: "2026-08-10",
  },
  {
    name: "course",
    language: "",
    description: "安全程式設計課程作業與報告。",
    tags: ["Secure Coding"],
    updated: "2025-04-23",
  },
  {
    name: "new-blog",
    language: "Vue",
    description: "以 Nuxt 3 建置的部落格專案。",
    tags: ["Nuxt 3", "Vue"],
    updated: "2024-07-09",
  },
  {
    name: "myweb",
    language: "Vue",
    description: "以 Nuxt 3 建置的個人網站專案。",
    tags: ["Nuxt 3", "Vue"],
    updated: "2024-05-10",
  },
  {
    name: "LeetCode",
    language: "C#",
    description: "LeetCode 解題紀錄。",
    tags: ["Algorithm"],
    updated: "2024-06-19",
  },
  {
    name: "C-",
    language: "C",
    description: "C 語言練習。",
    tags: ["C"],
    updated: "2024-05-14",
  },
  {
    name: "yungchingInterView",
    language: "C#",
    description: "面試題實作。",
    tags: ["C#"],
    updated: "2023-07-13",
  },
  {
    name: "LuaTaint",
    language: "Python",
    fork: true,
    description: "An automated static taint analysis tool for the Lua web framework.",
    tags: ["Static Analysis"],
    updated: "2025-05-04",
  },
  {
    name: "ConflictCTF",
    language: "Python",
    fork: true,
    description: "Let you know how to solve the conflict.",
    tags: ["CTF"],
    updated: "2025-04-23",
  },
];
