(() => {
  const content = window.SITE_CONTENT;
  const workGrid = document.getElementById("work-grid");
  const journalList = document.getElementById("journal-list");
  const detailView = document.getElementById("detail-view");
  const detailContent = document.getElementById("detail-content");
  const detailNumber = document.getElementById("detail-number");
  const nav = document.getElementById("main-nav");
  const menuToggle = document.getElementById("menu-toggle");

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("local-date").textContent = "EST. " + new Date().getFullYear();

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    }[ch]));
  }

  function renderWorks() {
    workGrid.innerHTML = content.works.map(work => `
      <article class="work-card" data-shape="${escapeHTML(work.shape || "landscape")}">
        <a href="#work/${encodeURIComponent(work.id)}" aria-label="查看作品：${escapeHTML(work.title)}">
          <div class="work-image">
            <img src="${escapeHTML(work.cover)}" alt="${escapeHTML(work.alt || work.title)}" loading="lazy">
          </div>
          <div class="work-meta">
            <div><h3 class="work-title">${escapeHTML(work.title)}</h3><p class="work-subtitle">${escapeHTML(work.english)} · ${escapeHTML(work.category)}</p></div>
            <span class="work-year">${escapeHTML(work.year)}</span>
          </div>
        </a>
      </article>`).join("");
  }

  function renderJournals() {
    journalList.innerHTML = content.journals.map((entry, index) => `
      <article class="journal-item">
        <div class="journal-date">${escapeHTML(entry.date)}<br>NO. 00${index + 1}</div>
        <div><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.excerpt)}</p></div>
        <div class="journal-tag">${escapeHTML(entry.tag)}</div>
      </article>`).join("");
  }

  function openWork(id) {
    const work = content.works.find(item => item.id === id);
    if (!work) {
      detailView.hidden = true;
      document.body.classList.remove("detail-open");
      return;
    }
    detailNumber.textContent = `WORK / ${work.number}`;
    const gallery = (work.gallery && work.gallery.length ? work.gallery : [work.cover]);
    detailContent.innerHTML = `
      <div class="detail-heading">
        <div><p class="eyebrow">${escapeHTML(work.category)} / ${escapeHTML(work.year)}</p><h1>${escapeHTML(work.title)}</h1><p class="detail-en">${escapeHTML(work.english)}</p></div>
        <div class="detail-meta">LOCATION&nbsp;&nbsp; ${escapeHTML(work.location)}<br>DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${escapeHTML(work.date)}<br>COLLECTION&nbsp; ${escapeHTML(work.number)}</div>
      </div>
      <p class="detail-story">${escapeHTML(work.story)}</p>
      <div class="detail-gallery">${gallery.map((src, i) => `<img src="${escapeHTML(src)}" alt="${escapeHTML(work.title)} - ${i+1}" loading="${i===0?'eager':'lazy'}">`).join("")}</div>
      <div class="detail-comments">
        <h3>留下你的想法 <em>Comments</em></h3>
        <p>评论区尚未启用。网站发布后，可以免费配置 giscus，让访客通过 GitHub 账号参与讨论。具体步骤请查看随附的《中文使用说明》。 </p>
      </div>`;
    detailView.hidden = false;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }

  function closeWork() {
    detailView.hidden = true;
    document.body.style.overflow = "";
    if (location.hash.startsWith("#work/")) history.replaceState(null, "", "#photography");
  }

  function handleRoute() {
    const hash = decodeURIComponent(location.hash || "#home");
    if (hash.startsWith("#work/")) {
      openWork(hash.slice(6));
      return;
    }
    detailView.hidden = true;
    document.body.style.overflow = "";
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
    nav.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === hash));
  }

  document.getElementById("close-detail").addEventListener("click", closeWork);
  window.addEventListener("hashchange", handleRoute);
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector("span").textContent = isOpen ? "−" : "＋";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("span").textContent = "＋";
  }));

  renderWorks();
  renderJournals();
  if (location.hash.startsWith("#work/")) handleRoute();
})();