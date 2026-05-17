// ============================================================
// PortfolioBuilder — script.js
// Converted from React JSX to Vanilla JS by Claude
// ============================================================

// ── DATA ──────────────────────────────────────────────────
const TEMPLATES = [
  // Students (8)
  { id:1,  name:"Scholar",     category:"Student",    style:"minimal",  emoji:"🎓", accent:"#6c63ff", desc:"Clean academic layout" },
  { id:2,  name:"Campus",      category:"Student",    style:"card",     emoji:"📚", accent:"#3b82f6", desc:"Friendly card-based design" },
  { id:3,  name:"Fresh Grad",  category:"Student",    style:"gradient", emoji:"🌟", accent:"#10b981", desc:"Bright and energetic" },
  { id:4,  name:"Research Pro",category:"Student",    style:"dark",     emoji:"🔬", accent:"#f59e0b", desc:"Academic & professional" },
  { id:5,  name:"Intern Ready",category:"Student",    style:"creative", emoji:"💼", accent:"#ec4899", desc:"Modern internship style" },
  { id:6,  name:"Class of 25", category:"Student",    style:"minimal",  emoji:"🏛️", accent:"#8b5cf6", desc:"Traditional yet modern" },
  { id:7,  name:"STEM Star",   category:"Student",    style:"dark",     emoji:"⚛️", accent:"#06b6d4", desc:"Tech-focused academic" },
  { id:8,  name:"Achiever",    category:"Student",    style:"gradient", emoji:"🏆", accent:"#f97316", desc:"Highlight your wins" },
  // Developers (8)
  { id:9,  name:"Code Dark",   category:"Developer",  style:"dark",     emoji:"💻", accent:"#6c63ff", desc:"Developer-focused dark theme" },
  { id:10, name:"Terminal",    category:"Developer",  style:"dark",     emoji:"⌨️", accent:"#00ff9f", desc:"Hacker terminal aesthetic" },
  { id:11, name:"Clean Code",  category:"Developer",  style:"minimal",  emoji:"🧹", accent:"#3b82f6", desc:"Minimal & professional" },
  { id:12, name:"Full Stack",  category:"Developer",  style:"card",     emoji:"🔧", accent:"#8b5cf6", desc:"Showcase full stack skills" },
  { id:13, name:"Open Source", category:"Developer",  style:"gradient", emoji:"🐙", accent:"#374151", desc:"GitHub-inspired look" },
  { id:14, name:"API Master",  category:"Developer",  style:"creative", emoji:"🚀", accent:"#06b6d4", desc:"Bold backend developer" },
  { id:15, name:"DevOps Pro",  category:"Developer",  style:"dark",     emoji:"⚙️", accent:"#f59e0b", desc:"Infrastructure & DevOps" },
  { id:16, name:"Mobile Dev",  category:"Developer",  style:"card",     emoji:"📱", accent:"#10b981", desc:"Mobile-first portfolio" },
  // Designers (7)
  { id:17, name:"Portfolio X", category:"Designer",   style:"creative", emoji:"🎨", accent:"#ec4899", desc:"Bold creative expression" },
  { id:18, name:"Bauhaus",     category:"Designer",   style:"minimal",  emoji:"⬛", accent:"#1a1a1a", desc:"Classic Bauhaus geometry" },
  { id:19, name:"Vivid",       category:"Designer",   style:"gradient", emoji:"🌈", accent:"#a855f7", desc:"Colorful & vivid layouts" },
  { id:20, name:"Noir",        category:"Designer",   style:"dark",     emoji:"🖤", accent:"#d4af37", desc:"Elegant dark luxury" },
  { id:21, name:"Pastel",      category:"Designer",   style:"card",     emoji:"🌸", accent:"#f9a8d4", desc:"Soft pastel aesthetics" },
  { id:22, name:"Bold Type",   category:"Designer",   style:"creative", emoji:"Tt", accent:"#dc2626", desc:"Typography-first design" },
  { id:23, name:"Glass UI",    category:"Designer",   style:"gradient", emoji:"🔮", accent:"#6366f1", desc:"Glassmorphism inspired" },
  // Freelancers (7)
  { id:24, name:"Hustle",      category:"Freelancer", style:"gradient", emoji:"💸", accent:"#16a34a", desc:"Results-driven freelancer" },
  { id:25, name:"Consultant",  category:"Freelancer", style:"minimal",  emoji:"🤝", accent:"#0f172a", desc:"Executive & polished" },
  { id:26, name:"Creator",     category:"Freelancer", style:"creative", emoji:"✨", accent:"#f97316", desc:"Content creator vibes" },
  { id:27, name:"Agency",      category:"Freelancer", style:"card",     emoji:"🏢", accent:"#1d4ed8", desc:"Agency-level presence" },
  { id:28, name:"Remote Pro",  category:"Freelancer", style:"dark",     emoji:"🌍", accent:"#14b8a6", desc:"Work from anywhere" },
  { id:29, name:"Pitch Deck",  category:"Freelancer", style:"gradient", emoji:"📊", accent:"#7c3aed", desc:"Impress clients fast" },
  { id:30, name:"Solo Brand",  category:"Freelancer", style:"creative", emoji:"🦁", accent:"#b45309", desc:"Strong personal brand" },
];

const PALETTE = ["#6c63ff","#ec4899","#10b981","#f59e0b","#3b82f6","#ef4444","#8b5cf6","#06b6d4","#f97316","#14b8a6","#a855f7","#0ea5e9","#84cc16","#d97706","#e11d48","#7c3aed"];

const FONTS = [
  { name:"DM Sans, sans-serif",      label:"DM Sans" },
  { name:"Syne, sans-serif",         label:"Syne" },
  { name:"Space Mono, monospace",    label:"Space Mono" },
  { name:"Georgia, serif",           label:"Georgia" },
  { name:"Inter, sans-serif",        label:"Inter" },
  { name:"Playfair Display, serif",  label:"Playfair" },
];

const defaultData = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  email: "alex@email.com",
  phone: "+91 98765 43210",
  address: "Bangalore, India",
  about: "Passionate developer with 3 years of experience building web applications. I love creating clean, efficient code and beautiful user experiences.",
  photo: "",
  skills: ["React","Node.js","Python","MongoDB","TypeScript","Docker"],
  projects: [
    { id:1, title:"E-Commerce Platform", desc:"Full-stack shopping app with payment integration", link:"github.com/alex/shop" },
    { id:2, title:"Chat Application",    desc:"Real-time messaging app using WebSocket and React", link:"github.com/alex/chat" },
    { id:3, title:"Portfolio Builder",   desc:"Drag-and-drop portfolio creation tool", link:"github.com/alex/portfolio" },
  ],
  education: [
    { id:1, degree:"B.Tech Computer Science", school:"VTU, Bangalore",   year:"2024" },
    { id:2, degree:"ITI COPA Certificate",    school:"Government ITI",   year:"2021" },
  ],
  experience: [
    { id:1, role:"Junior Developer", company:"TechCorp Pvt Ltd", period:"2023 - Present" },
    { id:2, role:"Web Dev Intern",   company:"StartupXYZ",       period:"2022 - 2023" },
  ],
  social: { github:"github.com/alex", linkedin:"linkedin.com/in/alex", website:"alex.dev" },
  sections: { about:true, skills:true, projects:true, education:true, experience:true, contact:true },
};

// ── APP STATE ──────────────────────────────────────────────
let state = {
  page: "gallery",
  filter: "All",
  selectedTemplate: null,
  previewTemplateIdx: null,
  // Editor state
  data: JSON.parse(JSON.stringify(defaultData)),
  panelTab: "content",
  themeColor: "#6c63ff",
  font: "DM Sans, sans-serif",
  device: "desktop",
  skillInput: "",
  openSections: { personal:true, about:true, skills:true, projects:true, education:true, experience:true, social:true },
  downloading: false,
  downloaded: false,
};

// ── GALLERY ───────────────────────────────────────────────
function setFilter(cat, btn) {
  state.filter = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGallery();
}

function renderGallery() {
  const search = document.getElementById("search-input")?.value.toLowerCase() || "";
  const filtered = TEMPLATES.filter(t =>
    (state.filter === "All" || t.category === state.filter) &&
    (t.name.toLowerCase().includes(search) || t.desc.toLowerCase().includes(search))
  );
  const grid = document.getElementById("template-grid");
  const empty = document.getElementById("empty-state");
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = filtered.map((t, i) => `
    <div class="tmpl-card" data-idx="${TEMPLATES.indexOf(t)}">
      <div class="tmpl-thumb" style="background:linear-gradient(135deg,${t.accent}22,${t.accent}08);border:1px solid ${t.accent}22">
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <span style="font-size:52px">${t.emoji}</span>
          <span style="font-size:11px;color:${t.accent};font-family:Space Mono,monospace;font-weight:700">${t.style.toUpperCase()}</span>
        </div>
        <div class="tmpl-badge" style="background:${t.accent};color:white">${t.category}</div>
        <div style="position:absolute;bottom:10px;left:10px;right:10px;height:3px;background:linear-gradient(90deg,${t.accent},${t.accent}44);border-radius:2px"></div>
      </div>
      <div class="tmpl-info">
        <div class="tmpl-name">${t.name}</div>
        <div class="tmpl-meta">${t.desc} · #${String(t.id).padStart(2,"0")}</div>
        <div class="tmpl-actions">
          <button class="btn-preview" onclick="openPreviewModal(${TEMPLATES.indexOf(t)})">👁 Preview</button>
          <button class="btn-use" onclick="selectTemplate(${TEMPLATES.indexOf(t)})">Use Template →</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ── PAGE NAVIGATION ───────────────────────────────────────
function showGallery() {
  state.page = "gallery";
  document.getElementById("page-gallery").style.display = "";
  document.getElementById("page-editor").style.display = "none";
  document.getElementById("nav-templates").classList.add("active");
  document.getElementById("nav-editor").classList.remove("active");
  document.getElementById("nav-cta").textContent = "🚀 Start Building";
}

function showEditor() {
  if (!state.selectedTemplate) { selectTemplate(0); return; }
  state.page = "editor";
  document.getElementById("page-gallery").style.display = "none";
  document.getElementById("page-editor").style.display = "";
  document.getElementById("nav-templates").classList.remove("active");
  document.getElementById("nav-editor").classList.add("active");
  document.getElementById("nav-cta").textContent = "⬇️ Download";
  renderEditor();
}

function handleCTA() {
  if (state.page === "editor") handleDownload();
  else if (state.selectedTemplate) showEditor();
  else selectTemplate(0);
}

function selectTemplate(idx) {
  state.selectedTemplate = TEMPLATES[idx];
  state.themeColor = TEMPLATES[idx].accent;
  state.data = JSON.parse(JSON.stringify(defaultData));
  closePreviewModal();
  showEditor();
}

// ── PREVIEW MODAL ─────────────────────────────────────────
function openPreviewModal(idx) {
  const t = TEMPLATES[idx];
  state.previewTemplateIdx = idx;
  document.getElementById("modal-emoji").textContent = t.emoji;
  document.getElementById("modal-title").textContent = `${t.name} — ${t.category}`;
  const sampleData = { ...defaultData, name:"Your Name", title:`${t.category} · ${t.name}` };
  document.getElementById("modal-preview-container").innerHTML = buildPreviewHTML(sampleData, t, t.accent, "DM Sans, sans-serif");
  document.getElementById("preview-modal").style.display = "flex";
}

function closePreviewModal() {
  document.getElementById("preview-modal").style.display = "none";
  state.previewTemplateIdx = null;
}

function useModalTemplate() {
  if (state.previewTemplateIdx !== null) selectTemplate(state.previewTemplateIdx);
}

// ── EDITOR ────────────────────────────────────────────────
function renderEditor() {
  const t = state.selectedTemplate;
  document.getElementById("preview-title").textContent = `LIVE PREVIEW — ${t.name.toUpperCase()}`;
  updateCompleteness();
  renderPanelBody();
  renderPreview();
}

function updateCompleteness() {
  const d = state.data;
  let score = 0;
  if (d.name)            score += 15;
  if (d.title)           score += 10;
  if (d.email)           score += 10;
  if (d.about)           score += 15;
  if (d.skills?.length)  score += 15;
  if (d.projects?.length)score += 15;
  if (d.education?.length)score += 10;
  if (d.experience?.length)score += 10;
  document.getElementById("progress-fill").style.width = score + "%";
  document.getElementById("progress-pct").textContent = score + "%";
  const badge = document.getElementById("completeness-badge");
  if (score < 50)       badge.textContent = "🟡 Fill in more details";
  else if (score < 80)  badge.textContent = "🟠 Looking good!";
  else                  badge.textContent = "🟢 Portfolio ready!";
}

function renderPreview() {
  const container = document.getElementById("preview-container");
  if (container) container.innerHTML = buildPreviewHTML(state.data, state.selectedTemplate, state.themeColor, state.font);
}

function setPanelTab(tab, el) {
  state.panelTab = tab;
  document.querySelectorAll(".panel-tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
  renderPanelBody();
}

function setDevice(device, btn) {
  state.device = device;
  document.querySelectorAll(".device-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const wrapper = document.getElementById("preview-wrapper");
  wrapper.className = "preview-frame-wrapper " + device;
}

function renderPanelBody() {
  const body = document.getElementById("panel-body");
  if (!body) return;
  if (state.panelTab === "content")  body.innerHTML = buildContentTab();
  if (state.panelTab === "design")   body.innerHTML = buildDesignTab();
  if (state.panelTab === "sections") body.innerHTML = buildSectionsTab();
  attachPanelEvents();
}

// ── CONTENT TAB ───────────────────────────────────────────
function buildContentTab() {
  const d = state.data;

  const sectionBlock = (id, label, innerHTML) => `
    <div class="section-block">
      <button class="section-collapse-btn ${state.openSections[id]?"open":""}" onclick="toggleSection('${id}')">
        <span>${label}</span><span class="chevron">▼</span>
      </button>
      ${state.openSections[id] ? `<div class="section-collapse-body">${innerHTML}</div>` : ""}
    </div>`;

  // Personal
  const personal = `
    <div class="form-group">
      <label class="form-label">Profile Photo</label>
      <div class="photo-upload">
        <label class="photo-circle" id="photo-label">
          ${d.photo ? `<img src="${d.photo}" alt="avatar">` : "📷"}
          <input type="file" accept="image/*" style="display:none" id="photo-file">
        </label>
        <div style="font-size:12px;color:var(--text3)">Click to upload<br>JPG, PNG, GIF</div>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Full Name *</label>
      <input class="form-input" placeholder="Your full name" value="${esc(d.name)}" data-field="name">
    </div>
    <div class="form-group">
      <label class="form-label">Job Title *</label>
      <input class="form-input" placeholder="e.g. Full Stack Developer" value="${esc(d.title)}" data-field="title">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" placeholder="you@email.com" value="${esc(d.email)}" data-field="email">
      </div>
      <div class="form-group">
        <label class="form-label">Phone</label>
        <input class="form-input" placeholder="+91 98765..." value="${esc(d.phone)}" data-field="phone">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Address / Location</label>
      <input class="form-input" placeholder="City, Country" value="${esc(d.address)}" data-field="address">
    </div>`;

  // About
  const about = `
    <div class="form-group">
      <textarea class="form-textarea" placeholder="Write a short professional bio..." style="min-height:100px" data-field="about">${esc(d.about)}</textarea>
      <div style="font-size:11px;color:var(--text3);margin-top:4px" id="about-char-count">${d.about.length} characters</div>
    </div>`;

  // Skills
  const skillTags = d.skills.map(s => `
    <div class="tag">${esc(s)}<span class="tag-remove" onclick="removeSkill('${esc(s)}')">×</span></div>`).join("");
  const skills = `
    <div class="tags-container">${skillTags}</div>
    <div class="tag-input-row">
      <input class="form-input" placeholder="Add a skill..." id="skill-input" value="${esc(state.skillInput)}">
      <button class="nav-btn btn-primary" style="white-space:nowrap;padding:8px 14px" onclick="addSkill()">+ Add</button>
    </div>`;

  // Projects
  const projectCards = d.projects.map(p => `
    <div class="item-card">
      <div class="item-card-header">
        <div><div class="item-card-title">${esc(p.title)||"Untitled"}</div><div class="item-card-sub">${esc(p.link)}</div></div>
        <div class="item-card-actions">
          <button class="icon-btn" style="color:var(--accent2)" onclick="removeItem('projects',${p.id})">🗑</button>
        </div>
      </div>
      <div style="margin-top:10px">
        <input class="form-input" placeholder="Project Title" value="${esc(p.title)}" style="margin-bottom:6px" data-list="projects" data-id="${p.id}" data-key="title">
        <textarea class="form-textarea" placeholder="Project description..." style="min-height:60px;margin-bottom:6px" data-list="projects" data-id="${p.id}" data-key="desc">${esc(p.desc)}</textarea>
        <input class="form-input" placeholder="Link (github.com/...)" value="${esc(p.link)}" data-list="projects" data-id="${p.id}" data-key="link">
      </div>
    </div>`).join("");
  const projects = projectCards + `<button class="add-btn" onclick="addItem('projects',{title:'',desc:'',link:''})">+ Add Project</button>`;

  // Education
  const eduCards = d.education.map(e => `
    <div class="item-card">
      <div class="item-card-header">
        <div><div class="item-card-title">${esc(e.degree)||"Degree"}</div><div class="item-card-sub">${esc(e.school)}</div></div>
        <button class="icon-btn" style="color:var(--accent2)" onclick="removeItem('education',${e.id})">🗑</button>
      </div>
      <div style="margin-top:10px">
        <input class="form-input" placeholder="Degree / Certificate" value="${esc(e.degree)}" style="margin-bottom:6px" data-list="education" data-id="${e.id}" data-key="degree">
        <div class="form-row">
          <input class="form-input" placeholder="Institution" value="${esc(e.school)}" data-list="education" data-id="${e.id}" data-key="school">
          <input class="form-input" placeholder="Year" value="${esc(e.year)}" data-list="education" data-id="${e.id}" data-key="year">
        </div>
      </div>
    </div>`).join("");
  const education = eduCards + `<button class="add-btn" onclick="addItem('education',{degree:'',school:'',year:''})">+ Add Education</button>`;

  // Experience
  const expCards = d.experience.map(e => `
    <div class="item-card">
      <div class="item-card-header">
        <div><div class="item-card-title">${esc(e.role)||"Role"}</div><div class="item-card-sub">${esc(e.company)}</div></div>
        <button class="icon-btn" style="color:var(--accent2)" onclick="removeItem('experience',${e.id})">🗑</button>
      </div>
      <div style="margin-top:10px">
        <input class="form-input" placeholder="Job Role / Title" value="${esc(e.role)}" style="margin-bottom:6px" data-list="experience" data-id="${e.id}" data-key="role">
        <div class="form-row">
          <input class="form-input" placeholder="Company" value="${esc(e.company)}" data-list="experience" data-id="${e.id}" data-key="company">
          <input class="form-input" placeholder="2023 - Present" value="${esc(e.period)}" data-list="experience" data-id="${e.id}" data-key="period">
        </div>
      </div>
    </div>`).join("");
  const experience = expCards + `<button class="add-btn" onclick="addItem('experience',{role:'',company:'',period:''})">+ Add Experience</button>`;

  // Social
  const socialRows = [["github","🐙","GitHub URL"],["linkedin","💼","LinkedIn URL"],["website","🌍","Your Website"]].map(([k,icon,ph]) => `
    <div class="social-input-row">
      <div class="social-icon" style="background:var(--surface2)">${icon}</div>
      <input class="form-input" placeholder="${ph}" value="${esc(d.social?.[k]||"")}" data-social="${k}">
    </div>`).join("");

  return [
    sectionBlock("personal","👤 Personal Info", personal),
    sectionBlock("about","✍️ About Me", about),
    sectionBlock("skills","🛠️ Skills", skills),
    sectionBlock("projects","🚀 Projects", projects),
    sectionBlock("education","🎓 Education", education),
    sectionBlock("experience","💼 Experience", experience),
    sectionBlock("social","🌐 Social Links", socialRows),
  ].join("");
}

// ── DESIGN TAB ────────────────────────────────────────────
function buildDesignTab() {
  const swatches = PALETTE.map(c => `
    <div class="color-swatch ${state.themeColor===c?"selected":""}" style="background:${c}" onclick="setThemeColor('${c}')" title="${c}"></div>`).join("");

  const fontOpts = FONTS.map(f => `
    <div class="font-option ${state.font===f.name?"active":""}" style="font-family:${f.name}" onclick="setFont('${f.name.replace(/'/g,"\\'")}')">
      ${f.label}
    </div>`).join("");

  const t = state.selectedTemplate;
  return `
    <div class="section-block">
      <div class="section-header"><span class="section-title-label">🎨 Theme Color</span></div>
      <div class="color-grid">${swatches}</div>
      <div class="color-picker-row">
        <span style="font-size:13px;color:var(--text2)">Custom:</span>
        <input type="color" value="${state.themeColor}" oninput="setThemeColor(this.value)">
        <code class="color-hex" id="color-hex-display">${state.themeColor}</code>
      </div>
    </div>
    <div class="section-block">
      <div class="section-header"><span class="section-title-label">🔤 Font Family</span></div>
      <div class="font-options">${fontOpts}</div>
    </div>
    <div class="section-block">
      <div class="section-header"><span class="section-title-label">📋 Template</span></div>
      <div style="background:var(--surface2);border-radius:12px;padding:16px;display:flex;gap:12px;align-items:center;margin-bottom:12px">
        <span style="font-size:32px">${t.emoji}</span>
        <div>
          <div style="font-family:Syne,sans-serif;font-weight:700">${t.name}</div>
          <div style="font-size:12px;color:var(--text3)">${t.category} · ${t.style}</div>
        </div>
      </div>
      <button class="nav-btn btn-ghost" style="width:100%" onclick="showGallery()">← Change Template</button>
    </div>`;
}

// ── SECTIONS TAB ──────────────────────────────────────────
function buildSectionsTab() {
  const rows = [["about","About Me","✍️"],["skills","Skills","🛠️"],["projects","Projects","🚀"],["education","Education","🎓"],["experience","Experience","💼"],["contact","Contact","📬"]];
  const items = rows.map(([k,l,icon]) => `
    <div class="toggle-row">
      <span class="toggle-label">${icon} ${l}</span>
      <button class="toggle ${state.data.sections?.[k]?"on":""}" onclick="toggleVisible('${k}')"></button>
    </div>`).join("");
  return `<p style="font-size:13px;color:var(--text3);margin-bottom:20px">Toggle sections to show or hide them in your portfolio.</p>${items}`;
}

// ── ATTACH EVENTS ─────────────────────────────────────────
function attachPanelEvents() {
  // Simple field inputs
  document.querySelectorAll("[data-field]").forEach(el => {
    el.addEventListener("input", () => {
      const field = el.dataset.field;
      state.data[field] = el.value;
      if (field === "about") {
        const cc = document.getElementById("about-char-count");
        if (cc) cc.textContent = el.value.length + " characters";
      }
      debouncedUpdate();
    });
  });
  // List item inputs
  document.querySelectorAll("[data-list]").forEach(el => {
    el.addEventListener("input", () => {
      const list = el.dataset.list;
      const id = parseInt(el.dataset.id);
      const key = el.dataset.key;
      state.data[list] = state.data[list].map(x => x.id === id ? { ...x, [key]: el.value } : x);
      debouncedUpdate();
    });
  });
  // Social inputs
  document.querySelectorAll("[data-social]").forEach(el => {
    el.addEventListener("input", () => {
      const key = el.dataset.social;
      state.data.social = { ...state.data.social, [key]: el.value };
      debouncedUpdate();
    });
  });
  // Skill enter key
  const skillEl = document.getElementById("skill-input");
  if (skillEl) {
    skillEl.addEventListener("keydown", e => { if (e.key === "Enter") addSkill(); });
    skillEl.addEventListener("input", e => { state.skillInput = e.target.value; });
  }
  // Photo upload
  const photoFile = document.getElementById("photo-file");
  if (photoFile) {
    photoFile.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => {
          state.data.photo = ev.target.result;
          renderPanelBody();
          renderPreview();
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

// ── EDITOR ACTIONS ────────────────────────────────────────
function toggleSection(id) {
  state.openSections[id] = !state.openSections[id];
  renderPanelBody();
}

function toggleVisible(key) {
  state.data.sections = { ...state.data.sections, [key]: !state.data.sections[key] };
  renderPanelBody();
  renderPreview();
}

function addSkill() {
  const input = document.getElementById("skill-input");
  const s = (input ? input.value : state.skillInput).trim();
  if (s && !state.data.skills.includes(s)) {
    state.data.skills = [...state.data.skills, s];
    state.skillInput = "";
  }
  renderPanelBody();
  renderPreview();
}

function removeSkill(s) {
  state.data.skills = state.data.skills.filter(x => x !== s);
  renderPanelBody();
  renderPreview();
}

function addItem(field, item) {
  state.data[field] = [...state.data[field], { id: Date.now(), ...item }];
  renderPanelBody();
  renderPreview();
}

function removeItem(field, id) {
  state.data[field] = state.data[field].filter(x => x.id !== id);
  renderPanelBody();
  renderPreview();
}

function setThemeColor(color) {
  state.themeColor = color;
  const hex = document.getElementById("color-hex-display");
  if (hex) hex.textContent = color;
  document.querySelectorAll(".color-swatch").forEach(s => {
    s.classList.toggle("selected", s.title === color);
  });
  renderPreview();
}

function setFont(fontName) {
  state.font = fontName;
  document.querySelectorAll(".font-option").forEach(f => {
    f.classList.toggle("active", f.textContent.trim() === FONTS.find(x => x.name === fontName)?.label);
  });
  renderPreview();
}

let updateTimer = null;
function debouncedUpdate() {
  clearTimeout(updateTimer);
  updateTimer = setTimeout(() => {
    updateCompleteness();
    renderPreview();
  }, 200);
}

// ── PORTFOLIO PREVIEW BUILDER ──────────────────────────────
function buildPreviewHTML(data, template, themeColor, font) {
  const t = template || TEMPLATES[0];
  const style = t.style;
  const color = themeColor || t.accent;
  const ff = font || "DM Sans, sans-serif";
  const isDark = style === "dark";

  const avatarBg = `linear-gradient(135deg, ${color}, ${color}aa)`;
  const avatarInit = (data.name || "A").charAt(0).toUpperCase();
  const avatarContent = data.photo
    ? `<img src="${data.photo}" style="width:100%;height:100%;object-fit:cover" alt="avatar">`
    : avatarInit;

  const avatar = (size, radius = "50%", rotate = "0deg") =>
    `<div style="width:${size}px;height:${size}px;border-radius:${radius};background:${avatarBg};display:flex;align-items:center;justify-content:center;font-size:${size*0.4}px;font-weight:800;color:white;flex-shrink:0;transform:rotate(${rotate});overflow:hidden">${avatarContent}</div>`;

  const sectionTitle = text =>
    `<div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;font-weight:700;color:${color};margin-bottom:16px;opacity:0.9">${text}</div>`;

  const skillPill = s =>
    `<span style="display:inline-block;padding:5px 14px;border-radius:6px;background:${isDark?color+"22":color+"15"};border:1px solid ${color}44;color:${color};font-size:12px;font-weight:500;margin:0 4px 6px 0;font-family:${ff}">${s}</span>`;

  const baseStyle = `font-family:${ff};background:${isDark?"#0d0d1a":"#ffffff"};color:${isDark?"#e8e8f8":"#1a1a2e"};min-height:600px`;

  const contactRow = `
    <div style="display:flex;gap:16px;margin-top:10px;flex-wrap:wrap">
      ${data.email  ? `<span style="font-size:12px;color:${isDark?"#8888aa":"#888"}">✉ ${data.email}</span>`   : ""}
      ${data.phone  ? `<span style="font-size:12px;color:${isDark?"#8888aa":"#888"}">📞 ${data.phone}</span>`  : ""}
      ${data.address? `<span style="font-size:12px;color:${isDark?"#8888aa":"#888"}">📍 ${data.address}</span>`: ""}
    </div>`;

  const socialLinks = (dark) => {
    const linkStyle = dark
      ? `padding:4px 12px;border-radius:6px;background:${color}22;color:${color};font-size:12px;text-decoration:none;border:1px solid ${color}44`
      : `padding:4px 10px;border-radius:6px;background:${color}15;color:${color};font-size:12px;text-decoration:none;font-weight:600`;
    return `<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
      ${data.social?.github   ? `<a href="#" style="${linkStyle}">GitHub</a>`   : ""}
      ${data.social?.linkedin ? `<a href="#" style="${linkStyle}">LinkedIn</a>` : ""}
      ${data.social?.website  ? `<a href="#" style="${linkStyle}">Website</a>`  : ""}
    </div>`;
  };

  // Projects grid helper
  const projectsGrid = (colStyle) => (data.sections?.projects && data.projects?.length > 0)
    ? data.projects.map(p => `
        <div style="${colStyle}">
          <div style="font-weight:700;font-family:Syne,sans-serif;margin-bottom:6px;font-size:15px">${p.title}</div>
          <div style="font-size:12px;color:${isDark?"#8888aa":"#666"};line-height:1.5">${p.desc}</div>
          ${p.link ? `<div style="font-size:11px;color:${color};margin-top:8px">🔗 ${p.link}</div>` : ""}
        </div>`).join("")
    : "";

  const eduItems = (data.sections?.education && data.education?.length > 0)
    ? data.education.map(e => `<div style="margin-bottom:14px;padding-left:12px;border-left:2px solid ${color}33"><div style="font-weight:700;font-size:14px">${e.degree}</div><div style="font-size:12px;color:${isDark?"#8888aa":"#888"};margin-top:2px">${e.school} · ${e.year}</div></div>`).join("")
    : "";

  const expItems = (data.sections?.experience && data.experience?.length > 0)
    ? data.experience.map(e => `<div style="margin-bottom:14px;padding-left:12px;border-left:2px solid ${color}33"><div style="font-weight:700;font-size:14px">${e.role}</div><div style="font-size:12px;color:${isDark?"#8888aa":"#888"};margin-top:2px">${e.company} · ${e.period}</div></div>`).join("")
    : "";

  // ── DARK STYLE ──
  if (style === "dark") {
    return `<div style="${baseStyle}">
      <div style="background:linear-gradient(135deg,${color}22,transparent);padding:60px 50px 40px;border-bottom:1px solid #2a2a3d">
        <div style="display:flex;gap:32px;align-items:flex-start">
          ${avatar(90,"16px")}
          <div>
            <div style="font-size:42px;font-weight:800;font-family:Syne,sans-serif;line-height:1.1">${data.name}</div>
            <div style="color:${color};font-size:16px;margin-top:6px;font-weight:500">${data.title}</div>
            ${contactRow}
            ${socialLinks(true)}
          </div>
        </div>
      </div>
      ${data.sections?.about && data.about ? `<div style="padding:32px 50px;border-bottom:1px solid #2a2a3d">${sectionTitle("About")}<p style="font-size:14px;line-height:1.7;color:#aaaacc">${data.about}</p></div>` : ""}
      ${data.sections?.skills && data.skills?.length > 0 ? `<div style="padding:32px 50px;border-bottom:1px solid #2a2a3d">${sectionTitle("Skills")}<div style="display:flex;flex-wrap:wrap">${data.skills.map(skillPill).join("")}</div></div>` : ""}
      ${data.sections?.projects && data.projects?.length > 0 ? `<div style="padding:32px 50px;border-bottom:1px solid #2a2a3d">${sectionTitle("Projects")}<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${projectsGrid("background:#1a1a2e;border-radius:12px;padding:16px;border:1px solid #2a2a3d")}</div></div>` : ""}
      <div style="display:grid;grid-template-columns:1fr 1fr">
        ${data.sections?.education && data.education?.length > 0 ? `<div style="padding:32px 50px;border-right:1px solid #2a2a3d">${sectionTitle("Education")}${eduItems}</div>` : ""}
        ${data.sections?.experience && data.experience?.length > 0 ? `<div style="padding:32px 50px">${sectionTitle("Experience")}${expItems}</div>` : ""}
      </div>
    </div>`;
  }

  // ── CREATIVE STYLE ──
  if (style === "creative") {
    return `<div style="${baseStyle}">
      <div style="background:linear-gradient(135deg,${color}18,${color}08);padding:60px 50px;border-bottom:3px solid ${color}">
        ${avatar(90,"20px","0deg")}
        <div style="margin-top:20px;font-size:54px;font-weight:800;font-family:Syne,sans-serif;line-height:1;color:#1a1a2e">${data.name}</div>
        <div style="color:${color};font-size:20px;margin-top:8px;font-weight:600">${data.title}</div>
        <div style="display:flex;gap:16px;margin-top:12px;flex-wrap:wrap">
          ${data.email ? `<span style="font-size:13px;color:#666">✉ ${data.email}</span>` : ""}
          ${data.phone ? `<span style="font-size:13px;color:#666">📞 ${data.phone}</span>` : ""}
        </div>
      </div>
      ${data.sections?.about && data.about ? `<div style="padding:36px 50px;display:grid;grid-template-columns:1fr 1fr;gap:40px;border-bottom:1px solid ${color}22">
        <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:${color};font-weight:700;margin-bottom:12px">About Me</div><p style="font-size:14px;line-height:1.7;color:#555">${data.about}</p></div>
        ${data.sections?.skills && data.skills?.length > 0 ? `<div><div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:${color};font-weight:700;margin-bottom:12px">Skills</div><div style="display:flex;flex-wrap:wrap">${data.skills.map(skillPill).join("")}</div></div>` : ""}
      </div>` : ""}
      ${data.sections?.projects && data.projects?.length > 0 ? `<div style="padding:36px 50px;border-bottom:1px solid ${color}22">${sectionTitle("Projects")}<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">${projectsGrid("border:2px solid "+color+"33;border-radius:12px;padding:16px")}</div></div>` : ""}
      <div style="display:grid;grid-template-columns:1fr 1fr">
        ${data.sections?.education && data.education?.length > 0 ? `<div style="padding:32px 50px;border-right:1px solid ${color}22">${sectionTitle("Education")}${eduItems}</div>` : ""}
        ${data.sections?.experience && data.experience?.length > 0 ? `<div style="padding:32px 50px">${sectionTitle("Experience")}${expItems}</div>` : ""}
      </div>
    </div>`;
  }

  // ── GRADIENT STYLE ──
  if (style === "gradient") {
    return `<div style="${baseStyle};background:#f8fafc">
      <div style="background:linear-gradient(135deg,${color},${color}99);padding:60px 50px;color:white">
        <div style="display:flex;gap:32px;align-items:center">
          ${avatar(90,"50%")}
          <div>
            <div style="font-size:44px;font-weight:800;font-family:Syne,sans-serif;line-height:1.1">${data.name}</div>
            <div style="font-size:18px;margin-top:6px;opacity:0.9">${data.title}</div>
            <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap">
              ${data.email   ? `<span style="font-size:12px;opacity:0.8">✉ ${data.email}</span>` : ""}
              ${data.phone   ? `<span style="font-size:12px;opacity:0.8">📞 ${data.phone}</span>` : ""}
              ${data.address ? `<span style="font-size:12px;opacity:0.8">📍 ${data.address}</span>` : ""}
            </div>
          </div>
        </div>
      </div>
      ${data.sections?.about && data.about ? `<div style="padding:36px 50px;border-bottom:1px solid #e2e8f0">${sectionTitle("About Me")}<p style="font-size:14px;line-height:1.7;color:#555">${data.about}</p></div>` : ""}
      ${data.sections?.skills && data.skills?.length > 0 ? `<div style="padding:36px 50px;border-bottom:1px solid #e2e8f0">${sectionTitle("Skills")}<div style="display:flex;flex-wrap:wrap">${data.skills.map(skillPill).join("")}</div></div>` : ""}
      ${data.sections?.projects && data.projects?.length > 0 ? `<div style="padding:36px 50px;border-bottom:1px solid #e2e8f0">${sectionTitle("Projects")}${data.projects.map(p=>`<div style="border-left:4px solid ${color};padding:12px 16px;margin-bottom:10px;background:#f0f4ff;border-radius:0 8px 8px 0"><div style="font-weight:700;font-size:15px;font-family:Syne,sans-serif">${p.title}</div><div style="font-size:13px;color:#666;margin-top:4px">${p.desc}</div></div>`).join("")}</div>` : ""}
      <div style="display:grid;grid-template-columns:1fr 1fr">
        ${data.sections?.education && data.education?.length > 0 ? `<div style="padding:32px 50px;border-right:1px solid #e2e8f0">${sectionTitle("Education")}${data.education.map(e=>`<div style="margin-bottom:12px"><div style="font-weight:700;font-size:14px">${e.degree}</div><div style="font-size:12px;color:#888">${e.school} · ${e.year}</div></div>`).join("")}</div>` : ""}
        ${data.sections?.experience && data.experience?.length > 0 ? `<div style="padding:32px 50px">${sectionTitle("Experience")}${data.experience.map(e=>`<div style="margin-bottom:12px"><div style="font-weight:700;font-size:14px">${e.role}</div><div style="font-size:12px;color:#888">${e.company} · ${e.period}</div></div>`).join("")}</div>` : ""}
      </div>
    </div>`;
  }

  // ── CARD STYLE ──
  if (style === "card") {
    return `<div style="${baseStyle};background:#f5f5ff">
      <div style="background:white;padding:50px;border-bottom:1px solid #eee;display:flex;gap:32px;align-items:center">
        ${avatar(100,"20px")}
        <div>
          <div style="font-size:38px;font-weight:800;font-family:Syne,sans-serif;color:#1a1a2e">${data.name}</div>
          <div style="color:${color};font-size:16px;margin-top:6px;font-weight:600">${data.title}</div>
          <div style="display:flex;gap:12px;margin-top:10px;flex-wrap:wrap">
            ${data.email   ? `<span style="font-size:12px;color:#888">✉ ${data.email}</span>` : ""}
            ${data.phone   ? `<span style="font-size:12px;color:#888">📞 ${data.phone}</span>` : ""}
            ${data.address ? `<span style="font-size:12px;color:#888">📍 ${data.address}</span>` : ""}
          </div>
          ${socialLinks(false)}
        </div>
      </div>
      <div style="padding:32px 50px">
        ${data.sections?.about && data.about ? `<div style="background:white;border-radius:16px;padding:24px;margin-bottom:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">${sectionTitle("About")}<p style="font-size:14px;line-height:1.7;color:#555">${data.about}</p></div>` : ""}
        ${data.sections?.skills && data.skills?.length > 0 ? `<div style="background:white;border-radius:16px;padding:24px;margin-bottom:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">${sectionTitle("Skills")}<div style="display:flex;flex-wrap:wrap">${data.skills.map(skillPill).join("")}</div></div>` : ""}
        ${data.sections?.projects && data.projects?.length > 0 ? `<div style="background:white;border-radius:16px;padding:24px;margin-bottom:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">${sectionTitle("Projects")}<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${data.projects.map(p=>`<div style="border:1px solid #eee;border-radius:10px;padding:14px"><div style="font-weight:700;font-size:14px;margin-bottom:4px">${p.title}</div><div style="font-size:12px;color:#666">${p.desc}</div></div>`).join("")}</div></div>` : ""}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          ${data.sections?.education && data.education?.length > 0 ? `<div style="background:white;border-radius:16px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">${sectionTitle("Education")}${data.education.map(e=>`<div style="margin-bottom:10px"><div style="font-weight:700;font-size:13px">${e.degree}</div><div style="font-size:12px;color:#888">${e.school} · ${e.year}</div></div>`).join("")}</div>` : ""}
          ${data.sections?.experience && data.experience?.length > 0 ? `<div style="background:white;border-radius:16px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">${sectionTitle("Experience")}${data.experience.map(e=>`<div style="margin-bottom:10px"><div style="font-weight:700;font-size:13px">${e.role}</div><div style="font-size:12px;color:#888">${e.company} · ${e.period}</div></div>`).join("")}</div>` : ""}
        </div>
      </div>
    </div>`;
  }

  // ── MINIMAL STYLE (default) ──
  return `<div style="${baseStyle}">
    <div style="padding:60px 60px 40px;display:flex;gap:48px;align-items:center;border-bottom:1px solid #f0f0f0">
      ${avatar(100,"50%")}
      <div>
        <div style="font-size:44px;font-weight:800;font-family:Syne,sans-serif;color:#1a1a2e;line-height:1.1">${data.name}</div>
        <div style="color:${color};font-size:18px;margin-top:6px;font-weight:500">${data.title}</div>
        <div style="display:flex;gap:16px;margin-top:10px;flex-wrap:wrap">
          ${data.email   ? `<span style="font-size:13px;color:#888">✉ ${data.email}</span>` : ""}
          ${data.phone   ? `<span style="font-size:13px;color:#888">📞 ${data.phone}</span>` : ""}
          ${data.address ? `<span style="font-size:13px;color:#888">📍 ${data.address}</span>` : ""}
        </div>
        ${socialLinks(false)}
      </div>
    </div>
    ${data.sections?.about && data.about ? `<div style="padding:36px 60px;border-bottom:1px solid #f0f0f0">${sectionTitle("About")}<p style="font-size:15px;line-height:1.7;color:#555;max-width:640px">${data.about}</p></div>` : ""}
    ${data.sections?.skills && data.skills?.length > 0 ? `<div style="padding:36px 60px;border-bottom:1px solid #f0f0f0">${sectionTitle("Skills")}<div style="display:flex;flex-wrap:wrap">${data.skills.map(skillPill).join("")}</div></div>` : ""}
    ${data.sections?.projects && data.projects?.length > 0 ? `<div style="padding:36px 60px;border-bottom:1px solid #f0f0f0">${sectionTitle("Projects")}<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">${data.projects.map(p=>`<div style="border:1px solid #eee;border-radius:10px;padding:18px"><div style="font-weight:700;font-family:Syne,sans-serif;margin-bottom:6px;font-size:15px">${p.title}</div><div style="font-size:13px;color:#666;line-height:1.5">${p.desc}</div>${p.link?`<div style="font-size:11px;color:${color};margin-top:8px;font-weight:600">🔗 ${p.link}</div>`:""}</div>`).join("")}</div></div>` : ""}
    <div style="display:grid;grid-template-columns:1fr 1fr">
      ${data.sections?.education && data.education?.length > 0 ? `<div style="padding:36px 60px;border-right:1px solid #f0f0f0">${sectionTitle("Education")}${data.education.map(e=>`<div style="margin-bottom:14px;padding-left:12px;border-left:2px solid ${color}33"><div style="font-weight:700;font-size:14px">${e.degree}</div><div style="font-size:12px;color:#888;margin-top:2px">${e.school} · ${e.year}</div></div>`).join("")}</div>` : ""}
      ${data.sections?.experience && data.experience?.length > 0 ? `<div style="padding:36px 60px">${sectionTitle("Experience")}${data.experience.map(e=>`<div style="margin-bottom:14px;padding-left:12px;border-left:2px solid ${color}33"><div style="font-weight:700;font-size:14px">${e.role}</div><div style="font-size:12px;color:#888;margin-top:2px">${e.company} · ${e.period}</div></div>`).join("")}</div>` : ""}
    </div>
  </div>`;
}

// ── DOWNLOAD ──────────────────────────────────────────────
function generatePortfolioHTML() {
  const d = state.data;
  const color = state.themeColor;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${d.name} — Portfolio</title>
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
<header class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="avatar">${d.name.charAt(0)}</div>
      <div>
        <h1>${d.name}</h1>
        <p class="title">${d.title}</p>
        <div class="contact-row">
          ${d.email   ? `<span>✉ ${d.email}</span>` : ""}
          ${d.phone   ? `<span>📞 ${d.phone}</span>` : ""}
          ${d.address ? `<span>📍 ${d.address}</span>` : ""}
        </div>
        <div class="social-links">
          ${d.social?.github   ? `<a href="https://${d.social.github}" target="_blank">GitHub</a>` : ""}
          ${d.social?.linkedin ? `<a href="https://${d.social.linkedin}" target="_blank">LinkedIn</a>` : ""}
          ${d.social?.website  ? `<a href="https://${d.social.website}" target="_blank">Website</a>` : ""}
        </div>
      </div>
    </div>
  </div>
</header>
${d.sections?.about && d.about ? `<section class="section"><div class="container"><h2 class="section-title">About Me</h2><p class="about-text">${d.about}</p></div></section>` : ""}
${d.sections?.skills && d.skills?.length > 0 ? `<section class="section alt"><div class="container"><h2 class="section-title">Skills</h2><div class="skills-grid">${d.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div></div></section>` : ""}
${d.sections?.projects && d.projects?.length > 0 ? `<section class="section"><div class="container"><h2 class="section-title">Projects</h2><div class="projects-grid">${d.projects.map(p=>`<div class="project-card"><h3>${p.title}</h3><p>${p.desc}</p>${p.link?`<a href="https://${p.link}" target="_blank" class="project-link">View Project →</a>`:""}</div>`).join("")}</div></div></section>` : ""}
${d.sections?.education && d.education?.length > 0 ? `<section class="section alt"><div class="container"><h2 class="section-title">Education</h2>${d.education.map(e=>`<div class="edu-item"><h3>${e.degree}</h3><p>${e.school} · ${e.year}</p></div>`).join("")}</div></section>` : ""}
${d.sections?.experience && d.experience?.length > 0 ? `<section class="section"><div class="container"><h2 class="section-title">Experience</h2>${d.experience.map(e=>`<div class="exp-item"><h3>${e.role}</h3><p>${e.company} · ${e.period}</p></div>`).join("")}</div></section>` : ""}
<footer class="footer"><div class="container"><p>© 2025 ${d.name}. Built with PortfolioBuilder.</p></div></footer>
<script src="script.js"><\/script>
</body>
</html>`;
}

function generatePortfolioCSS() {
  const fontName = state.font.split(",")[0].replace(/'/g,"");
  return `:root {
  --color: ${state.themeColor};
  --font: '${fontName}', sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font), 'DM Sans', sans-serif; color: #1a1a2e; line-height: 1.6; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
.hero { background: linear-gradient(135deg, color-mix(in srgb,var(--color) 12%,transparent), color-mix(in srgb,var(--color) 5%,transparent)); padding: 80px 0; border-bottom: 3px solid var(--color); }
.hero-content { display: flex; gap: 40px; align-items: center; flex-wrap: wrap; }
.avatar { width: 100px; height: 100px; border-radius: 50%; background: var(--color); display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: 800; color: white; flex-shrink: 0; }
h1 { font-family: 'Syne', sans-serif; font-size: 48px; font-weight: 800; line-height: 1.1; }
.title { font-size: 20px; color: var(--color); margin-top: 8px; font-weight: 500; }
.contact-row { display: flex; gap: 20px; margin-top: 12px; flex-wrap: wrap; color: #888; font-size: 13px; }
.social-links { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
.social-links a { padding: 5px 14px; border-radius: 8px; background: color-mix(in srgb,var(--color) 12%,transparent); color: var(--color); text-decoration: none; font-weight: 600; font-size: 13px; }
.section { padding: 60px 0; }
.section.alt { background: #f8f9ff; }
.section-title { font-family: 'Syne', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: var(--color); margin-bottom: 28px; font-weight: 700; }
.about-text { font-size: 15px; line-height: 1.8; color: #555; max-width: 700px; }
.skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.skill-tag { padding: 6px 16px; border-radius: 6px; background: color-mix(in srgb,var(--color) 10%,transparent); border: 1px solid color-mix(in srgb,var(--color) 30%,transparent); color: var(--color); font-size: 13px; font-weight: 500; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 20px; }
.project-card { border: 1px solid #eee; border-radius: 12px; padding: 24px; transition: 0.2s; }
.project-card:hover { border-color: var(--color); box-shadow: 0 4px 20px rgba(0,0,0,0.08); transform: translateY(-2px); }
.project-card h3 { font-family: 'Syne', sans-serif; font-size: 18px; margin-bottom: 8px; }
.project-card p { font-size: 13px; color: #666; }
.project-link { display: inline-block; margin-top: 12px; color: var(--color); text-decoration: none; font-weight: 600; font-size: 13px; }
.edu-item, .exp-item { margin-bottom: 20px; padding-left: 16px; border-left: 3px solid var(--color); }
.edu-item h3, .exp-item h3 { font-size: 16px; font-weight: 700; }
.edu-item p, .exp-item p { font-size: 13px; color: #888; margin-top: 4px; }
.footer { background: #1a1a2e; color: #888; text-align: center; padding: 30px; font-size: 13px; }
@media (max-width: 768px) {
  h1 { font-size: 32px; }
  .hero { padding: 50px 0; }
  .section { padding: 40px 0; }
  .projects-grid { grid-template-columns: 1fr; }
  .container { padding: 0 20px; }
}`;
}

function generatePortfolioJS() {
  return `// Portfolio Script — Generated by PortfolioBuilder
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animate on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  console.log('Portfolio loaded! Built with PortfolioBuilder.');
});`;
}

async function handleDownload() {
  if (state.downloading) return;
  state.downloading = true;
  const btn = document.getElementById("dl-btn");
  btn.textContent = "⏳ Generating files...";
  btn.disabled = true;

  await new Promise(r => setTimeout(r, 800));

  const html = generatePortfolioHTML();
  const css  = generatePortfolioCSS();
  const js   = generatePortfolioJS();
  const d    = state.data;

  try {
    // Try JSZip
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
    document.head.appendChild(script);
    await new Promise((res, rej) => { script.onload = res; script.onerror = rej; });

    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("style.css", css);
    zip.file("script.js", js);
    zip.file("README.md", `# ${d.name}'s Portfolio\n\nGenerated by PortfolioBuilder.\n\n## How to Host\n1. Upload all files to GitHub repository\n2. Go to Settings → Pages → Deploy from branch\n3. Your site will be live at https://yourusername.github.io/repo-name\n\n## Files\n- index.html — Main page\n- style.css — Styles\n- script.js — Interactions\n`);
    const blob = await zip.generateAsync({ type:"blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${d.name.replace(/\s+/g,"-").toLowerCase()}-portfolio.zip`;
    a.click(); URL.revokeObjectURL(url);
  } catch(e) {
    // Fallback: download files individually
    [["index.html", html, "text/html"], ["style.css", css, "text/css"], ["script.js", js, "text/javascript"]].forEach(([name, content, type]) => {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url);
    });
  }

  state.downloading = false;
  btn.textContent = "⬇️ Download Portfolio (ZIP)";
  btn.disabled = false;

  const success = document.getElementById("dl-success");
  success.style.display = "block";
  btn.style.display = "none";
  setTimeout(() => { success.style.display = "none"; btn.style.display = ""; }, 4000);
}

// ── UTILS ─────────────────────────────────────────────────
function esc(str) {
  if (!str) return "";
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
});
