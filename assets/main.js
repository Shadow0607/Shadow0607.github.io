// 共用：導覽列、頁尾、專案卡片渲染
(function () {
  const user = window.SITE.githubUser;
  const ghUrl = `https://github.com/${user}`;
  // 子目錄頁面（projects/*.html）需要往上一層
  const base = document.body.dataset.base || "";

  const LANG_COLORS = {
    "C#": "#178600", Vue: "#41b883", Python: "#3572A5", C: "#555555",
    JavaScript: "#f1e05a", TypeScript: "#3178c6", HTML: "#e34c26",
  };

  const escapeHtml = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // 只接受 Google 表單網址，避免設定錯誤時連到其他網站
  const formUrl = (() => {
    const u = (window.SITE.contactFormUrl || "").trim();
    return /^https:\/\/(forms\.gle\/|docs\.google\.com\/forms\/)/.test(u) ? u : "";
  })();

  function renderHeader() {
    const el = document.querySelector("[data-header]");
    if (!el) return;
    const page = document.body.dataset.page;
    const link = (href, key, text) =>
      `<a href="${base}${href}" class="${page === key ? "active" : ""}">${text}</a>`;
    el.innerHTML = `
      <div class="container">
        <a class="brand" href="${base}index.html">${escapeHtml(window.SITE.displayName)}</a>
        <nav class="nav">
          ${link("index.html", "home", "首頁")}
          ${link("projects.html", "projects", "專案")}
          ${link("about.html", "about", "關於")}
          ${formUrl ? `<a href="${escapeHtml(formUrl)}" target="_blank" rel="noopener">聯絡 ↗</a>` : ""}
          <a href="${ghUrl}" target="_blank" rel="noopener">GitHub ↗</a>
        </nav>
      </div>`;
  }

  function renderFooter() {
    const el = document.querySelector("[data-footer]");
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <span>© ${new Date().getFullYear()} ${escapeHtml(window.SITE.displayName)}</span>
        <a href="${ghUrl}" target="_blank" rel="noopener">github.com/${escapeHtml(user)}</a>
      </div>`;
  }

  // 「關於我」頁的聯絡表單按鈕
  function renderContact() {
    const block = document.querySelector("[data-contact-block]");
    if (!block || !formUrl) return;
    block.querySelector("[data-contact-link]").href = formUrl;
    block.hidden = false;
  }

  function card(p) {
    const repoUrl = `${ghUrl}/${encodeURIComponent(p.name)}`;
    const color = LANG_COLORS[p.language] || "var(--muted)";
    const tags = (p.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const lang = p.language
      ? `<span><span class="dot" style="background:${color}"></span> ${escapeHtml(p.language)}</span>` : "";
    const status = p.status ? `<span class="badge">${escapeHtml(p.status)}</span>` : "";
    const fork = p.fork ? `<span class="badge">Fork</span>` : "";
    const detail = p.detail ? `<a href="${base}${p.detail}">專案介紹 →</a>` : "";
    const homepage = p.homepage ? `<a href="${escapeHtml(p.homepage)}" target="_blank" rel="noopener">Demo ↗</a>` : "";
    return `
      <article class="card">
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.description || "（尚無描述）")}</p>
        ${tags ? `<div class="tags">${tags}</div>` : ""}
        <div class="meta">${lang}${status}${fork}${p.updated ? `<span>更新 ${escapeHtml(p.updated)}</span>` : ""}</div>
        <div class="links">
          <a href="${repoUrl}" target="_blank" rel="noopener">GitHub ↗</a>
          ${homepage}${detail}
        </div>
      </article>`;
  }

  // 以 GitHub API 最新資料合併靜態資料（描述、標籤以靜態為主）
  async function loadProjects() {
    const local = window.PROJECTS || [];
    try {
      const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`);
      if (!res.ok) throw new Error(res.status);
      const repos = await res.json();
      const map = new Map(local.map((p) => [p.name, p]));
      const merged = repos.map((r) => {
        const l = map.get(r.name) || {};
        return {
          ...l,
          name: r.name,
          language: r.language || l.language || "",
          description: l.description || r.description || "",
          fork: r.fork,
          homepage: r.homepage || l.homepage || "",
          updated: (r.pushed_at || r.updated_at || "").slice(0, 10),
          stars: r.stargazers_count,
        };
      });
      return { list: merged, source: "live" };
    } catch (e) {
      return { list: local, source: "static" };
    }
  }

  window.Site = { card, loadProjects, escapeHtml };
  renderHeader();
  renderFooter();
  renderContact();
})();
