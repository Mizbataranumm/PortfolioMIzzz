const projects = [
  {
    id: "password-analyzer",
    name: "Password Strength Analyzer",
    title: "Password Strength Analyzer",
    tagline: "Password security lab with entropy scoring and breach-aware guidance.",
    status: "Next Build",
    image: "assets/password-analyzer.png",
    accent: "blue",
    features: [
      "Real-time password entropy score",
      "Breach detection flow using k-anonymity principles",
      "Secure password generator",
      "No password storage",
      "OWASP-aligned user guidance",
    ],
    impact:
      "A fast first cybersecurity project that demonstrates password security, privacy-aware API design, and security UX.",
    category: ["security", "planned", "fullstack"],
    description:
      "Educational security tool for entropy scoring, breach detection through HaveIBeenPwned-style k-anonymity checks, secure generation, and actionable password guidance.",
    tags: ["React", "Node.js", "REST API", "Cryptography", "Security UX"],
    links: [
      { label: "Planned Repo", href: "https://github.com/Mizbataranumm" },
      { label: "Build Plan", href: "#experience" },
    ],
  },
  {
    id: "vulnerability-scanner",
    name: "Web Vulnerability Scanner",
    title: "Web Vulnerability Scanner",
    tagline: "Authorized web scanner for headers, HTTPS, forms, and OWASP checks.",
    status: "Planned",
    image: "assets/vulnerability-scanner.png",
    accent: "teal",
    features: [
      "Security header checks",
      "HTTPS and TLS validation",
      "Basic reflected XSS test flow",
      "Risk scoring with remediation tips",
      "Scan history and report view",
    ],
    impact:
      "Shows practical application security knowledge and how to communicate findings responsibly.",
    category: ["security", "planned", "fullstack"],
    description:
      "Automated scanner concept for OWASP Top 10 checks including XSS, SQL injection indicators, CSRF token validation, security headers, SSL checks, and remediation reports.",
    tags: ["FastAPI", "React", "Puppeteer", "MongoDB", "OWASP ZAP"],
    links: [
      { label: "Planned Repo", href: "https://github.com/Mizbataranumm" },
      { label: "Roadmap", href: "#experience" },
    ],
  },
  {
    id: "auth-server",
    name: "JWT & OAuth2 Authorization Server",
    title: "JWT & OAuth2 Authorization Server",
    tagline: "Secure backend auth service with tokens, roles, and abuse controls.",
    status: "Planned",
    image: "assets/auth-server.png",
    accent: "gold",
    features: [
      "Register and login with bcrypt hashing",
      "JWT access tokens and refresh token flow",
      "Token revocation and logout",
      "Role-based protected routes",
      "Login rate limiting and activity history",
    ],
    impact:
      "A backend security project that maps directly to application security and secure API engineering roles.",
    category: ["security", "planned"],
    description:
      "Enterprise-grade authentication service with JWT access tokens, refresh token handling, OAuth2 login, rate limiting, bcrypt hashing, and suspicious activity tracking.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "OAuth2", "bcrypt"],
    links: [
      { label: "Planned Repo", href: "https://github.com/Mizbataranumm" },
      { label: "Case Study", href: "#contact" },
    ],
  },
  {
    id: "civicpulse",
    name: "Secure CivicPulse",
    title: "Secure CivicPulse",
    status: "Deployed",
    tagline: "Civic issue platform reframed around secure public-service workflows.",
    image: "assets/civicpulse.png",
    accent: "teal",
    features: [
      "JWT role-based authentication",
      "Citizen, official, and supervisor access paths",
      "AI-assisted complaint categorization",
      "Audit-log friendly workflow design",
      "Secure API validation approach",
    ],
    impact:
      "Demonstrates how full-stack product work can be presented through an application-security lens.",
    category: ["security", "fullstack"],
    description:
      "Civic issue platform reframed around secure public service workflows: JWT authentication, role-based access control, audit logs, validation, and protected complaint handling.",
    tags: ["React", "FastAPI", "MongoDB", "JWT", "Gemini AI", "RBAC"],
    links: [
      { label: "GitHub", href: "https://github.com/Mizbataranumm" },
      { label: "Security Notes", href: "#skills" },
    ],
  },
  {
    id: "coderift",
    name: "Coderift Secure Collaboration",
    title: "Coderift Secure Collaboration",
    status: "Deployed",
    tagline: "Secure collaborative IDE with real-time rooms and sandboxed execution.",
    image: "assets/coderift.png",
    accent: "blue",
    features: [
      "Secure WebSocket collaboration model",
      "Room-based access control",
      "Sandboxed code execution through Judge0",
      "Rate-limited execution concept",
      "AI-assisted code review direction",
    ],
    impact:
      "Connects real-time engineering with secure session design, safe execution, and access control.",
    category: ["security", "fullstack"],
    description:
      "Collaborative code editor with secure real-time sessions, access-controlled rooms, sandboxed execution through Judge0, input sanitization, and rate-limited code runs.",
    tags: ["React", "Node.js", "Socket.io", "Judge0 API", "WebSockets"],
    links: [
      { label: "GitHub", href: "https://github.com/Mizbataranumm" },
      { label: "Discuss", href: "#contact" },
    ],
  },
];

const skills = [
  {
    category: "Security",
    icon: "SEC",
    items: ["JWT", "RBAC", "OAuth2", "OWASP Top 10", "API Security", "Rate Limiting"],
  },
  {
    category: "Languages",
    icon: "{}",
    items: ["Java", "Python", "JavaScript", "C", "C++"],
  },
  {
    category: "Frontend",
    icon: "UI",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: "API",
    items: ["Node.js", "Express", "FastAPI", "Spring Boot", "REST APIs", "Socket.io"],
  },
  {
    category: "AI / ML",
    icon: "AI",
    items: ["Gemini AI", "Scikit-learn", "Pandas", "NumPy", "Prompt Engineering"],
  },
  {
    category: "Database & Cloud",
    icon: "DB",
    items: ["MongoDB", "MySQL", "PostgreSQL", "AWS Security", "Cloud Operations"],
  },
  {
    category: "Tools",
    icon: "TL",
    items: ["Git", "Postman", "VS Code", "Vercel", "Render", "MongoDB Atlas"],
  },
  {
    category: "Learning Path",
    icon: "LAB",
    items: ["Burp Suite", "OWASP ZAP", "CTFs", "Penetration Testing", "Zero Trust"],
  },
];

const techLogos = [
  "React",
  "FastAPI",
  "Node.js",
  "MongoDB",
  "Python",
  "Java",
  "Tailwind",
  "Gemini AI",
  "AWS",
  "Socket.io",
  "JWT",
  "RBAC",
  "OWASP",
  "Postman",
  "Pandas",
  "Scikit-learn",
];

const achievements = [
  { title: "CGPA 8.96 in Computer Engineering", meta: "Academic Excellence", icon: "AC" },
  { title: "AWS Cloud Security Foundations", meta: "Cloud Security", icon: "AWS" },
  { title: "AWS Cloud Architecting, Operations & Developing", meta: "Cloud", icon: "CL" },
  { title: "Google Foundations of Cybersecurity", meta: "Cybersecurity", icon: "SEC" },
  { title: "NPTEL Blockchain & Applications", meta: "Certification", icon: "BC" },
  { title: "GeeksforGeeks Campus Mantri LOR", meta: "Leadership", icon: "GFG" },
  { title: "ZYNEX National Hackathon Shortlisted", meta: "Hackathon", icon: "HK" },
];

const timelineItems = [
  {
    year: "2022",
    title: "Engineering Journey Begins",
    body: "Started Computer Engineering at PES Institute of Technology & Management, building foundations in programming, systems, and software craft.",
  },
  {
    year: "2023",
    title: "AI/ML Foundations",
    body: "Explored Scikit-learn, Pandas, NumPy, and model-building workflows through machine learning projects and data visualization.",
  },
  {
    year: "2024",
    title: "Full-Stack & Cloud",
    body: "Shipped React, FastAPI, and Node.js projects while completing AWS Academy certifications across architecting, operations, security, and development.",
  },
  {
    year: "2025",
    title: "AI-Native Product Builds",
    body: "Built CivicPulse and Coderift with Gemini AI, real-time collaboration, voice workflows, JWT, APIs, and product-focused dashboards.",
  },
  {
    year: "2026",
    title: "Application Security Direction",
    body: "Focusing the portfolio around secure backend engineering, OWASP-aware design, cloud security, authentication, and hands-on security projects.",
  },
  {
    year: "2027",
    title: "B.E. Computer Engineering",
    body: "Expected graduation with a current CGPA of 8.96 and a career target in application security, cloud security, and secure full-stack engineering.",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const skillGrid = document.querySelector("#skillGrid");
const techMarquee = document.querySelector("#techMarquee");
const achievementGrid = document.querySelector("#achievementGrid");
const timeline = document.querySelector("#timeline");
const timelineList = document.querySelector("#timelineList");
const timelineProgress = document.querySelector("#timelineProgress");
const projectModal = document.querySelector("#projectModal");
const modalBody = document.querySelector("#modalBody");
const modalClose = document.querySelector("#modalClose");
const modalBackdrop = document.querySelector("#modalBackdrop");
const filters = document.querySelectorAll(".filter");
const contactForm = document.querySelector("#contactForm");
const contactSubmit = document.querySelector("#contactSubmit");
const formStatus = document.querySelector("#formStatus");
const footerYear = document.querySelector("#footerYear");
const loadingScreen = document.querySelector("#loadingScreen");
const cursorGlow = document.querySelector("#cursorGlow");
const siteHeader = document.querySelector("#siteHeader");
const menuToggle = document.querySelector("#menuToggle");
const mobilePanel = document.querySelector("#mobilePanel");
const particles = document.querySelector("#particles");
const heroTyper = document.querySelector("#heroTyper");
const counters = document.querySelectorAll(".counter");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const navLinks = document.querySelectorAll(".nav-link");
const navSections = ["home", "about", "skills", "projects", "achievements", "experience", "contact"];

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.category.includes(filter));

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card spotlight trace-border" data-project-id="${project.id}">
          <div class="project-media accent-${project.accent}">
            <img src="${project.image}" alt="${project.title} project preview" />
            <div class="project-media-shade"></div>
            <div class="project-tech-overlay">
              ${project.tags
                .slice(0, 4)
                .map((tag) => `<span>${tag}</span>`)
                .join("")}
              ${project.tags.length > 4 ? `<span>+${project.tags.length - 4}</span>` : ""}
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-topline">
              <p class="eyebrow">${project.category.includes("security") ? "Security" : "Project"}</p>
              <span class="status">${project.status}</span>
            </div>
            <div class="project-title-row">
              <div>
                <h3>${project.title}</h3>
                <p>${project.tagline}</p>
              </div>
              <button class="project-open" type="button" data-open-project="${project.id}" aria-label="Open case study for ${project.title}">NE</button>
            </div>
            <p>${project.description}</p>
            <ul class="tag-list">
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
            <div class="project-links">
              ${project.links
                .map((link) => `<a href="${link.href}" target="${link.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${link.label}</a>`)
                .join("")}
              <button type="button" data-open-project="${project.id}">Case study</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  attachProjectInteractions();
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project || !projectModal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-media accent-${project.accent}">
      <img src="${project.image}" alt="${project.title} case study preview" />
    </div>
    <div class="modal-content">
      <p class="eyebrow">Case Study</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p>${project.impact}</p>
      <div class="modal-columns">
        <div>
          <h4>Key Features</h4>
          <ul>
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Tech Stack</h4>
          <div class="modal-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-links modal-actions">
            ${project.links
              .map((link) => `<a href="${link.href}" target="${link.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${link.label}</a>`)
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose?.focus();
}

function closeProjectModal() {
  projectModal?.classList.remove("open");
  projectModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function attachProjectInteractions() {
  document.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openProjectModal(button.dataset.openProject));
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = (y / rect.height - 0.5) * -6;
      const rotateY = (x / rect.width - 0.5) * 6;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

modalClose?.addEventListener("click", closeProjectModal);
modalBackdrop?.addEventListener("click", closeProjectModal);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});

function renderSkills() {
  if (!skillGrid || !techMarquee) return;

  skillGrid.innerHTML = skills
    .map(
      (skill, index) => `
        <article class="skill-card trace-border">
          <div class="skill-card-top">
            <span class="skill-icon">${skill.icon}</span>
            <span class="skill-index">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>${skill.category}</h3>
          <div class="skill-tags">
            ${skill.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  const marqueeItems = [...techLogos, ...techLogos];
  techMarquee.innerHTML = marqueeItems.map((item) => `<span>${item}</span>`).join("");
}

function renderAchievements() {
  if (!achievementGrid) return;

  achievementGrid.innerHTML = achievements
    .map(
      (achievement, index) => `
        <article class="achievement-card trace-border">
          <span class="achievement-icon">${achievement.icon}</span>
          <div>
            <p>${achievement.meta}</p>
            <h3>${achievement.title}</h3>
          </div>
          <span class="achievement-index">${String(index + 1).padStart(2, "0")}</span>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  if (!timelineList) return;

  timelineList.innerHTML = timelineItems
    .map(
      (item, index) => `
        <li class="timeline-item ${index % 2 === 0 ? "left" : "right"}">
          <span class="timeline-dot" aria-hidden="true"></span>
          <article class="timeline-card">
            <p>${item.year}</p>
            <h3>${item.title}</h3>
            <span>${item.body}</span>
          </article>
        </li>
      `
    )
    .join("");
}

function updateTimelineProgress() {
  if (!timeline || !timelineProgress) return;

  const rect = timeline.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const start = viewportHeight * 0.75;
  const end = viewportHeight * 0.3;
  const total = rect.height + start - end;
  const progressed = start - rect.top;
  const percent = Math.max(0, Math.min(1, progressed / total));
  timelineProgress.style.height = `${percent * 100}%`;
}

function createParticles(count = 28) {
  if (!particles) return;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    const size = 1 + Math.random() * 2;
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDelay = `${Math.random() * 12}s`;
    particle.style.animationDuration = `${10 + Math.random() * 14}s`;
    particle.style.setProperty("--drift", `${(Math.random() - 0.5) * 80}px`);
    fragment.appendChild(particle);
  }

  particles.appendChild(fragment);
}

function typeHeroText(speed = 38) {
  if (!heroTyper) return;
  const text = heroTyper.dataset.text || "";
  let index = 0;

  function tick() {
    heroTyper.textContent = text.slice(0, index);
    if (index < text.length) {
      index += 1;
      window.setTimeout(tick, speed);
    }
  }

  tick();
}

function animateCounter(counter) {
  const target = Number(counter.dataset.value || "0");
  const decimals = Number(counter.dataset.decimals || "0");
  const suffix = counter.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  counter.dataset.renderSuffix = suffix;

  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = (target * eased).toFixed(decimals);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      counter.textContent = target.toFixed(decimals);
    }
  }

  requestAnimationFrame(tick);
}

function observeCounters() {
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.counted === "true") return;
        entry.target.dataset.counted = "true";
        animateCounter(entry.target);
      });
    },
    { threshold: 0.35, rootMargin: "0px 0px -80px 0px" }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initLoadingScreen() {
  if (!loadingScreen) return;
  window.setTimeout(() => {
    loadingScreen.classList.add("hide");
  }, 1500);
}

function initCursorGlow() {
  if (!cursorGlow || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.setProperty("--cursor-x", `${event.clientX}px`);
    cursorGlow.style.setProperty("--cursor-y", `${event.clientY}px`);
    cursorGlow.style.opacity = "1";
  });

  window.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

function closeMenu() {
  siteHeader?.classList.remove("menu-open");
  mobilePanel?.classList.remove("open");
  menuToggle?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function updateHeaderState() {
  siteHeader?.classList.toggle("scrolled", window.scrollY > 30);
  const y = window.scrollY + 130;
  let activeId = "home";

  navSections.forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= y) {
      activeId = id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.scrollTarget === activeId);
  });
}

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scrollTarget);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  });
});

menuToggle?.addEventListener("click", () => {
  const isOpen = !mobilePanel?.classList.contains("open");
  siteHeader?.classList.toggle("menu-open", isOpen);
  mobilePanel?.classList.toggle("open", isOpen);
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("scroll", updateTimelineProgress, { passive: true });
window.addEventListener("resize", updateTimelineProgress);

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  formStatus?.classList.remove("success", "error");

  if (!name || !email || !message) {
    formStatus?.classList.add("error");
    formStatus.textContent = "Please fill in all fields.";
    return;
  }

  if (contactSubmit) {
    contactSubmit.disabled = true;
    contactSubmit.textContent = "Preparing...";
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
  const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
  formStatus.textContent = "Preparing your email message...";

  window.setTimeout(() => {
    window.location.href = `mailto:mizbataranum309@gmail.com?subject=${subject}&body=${body}`;
    formStatus?.classList.add("success");
    formStatus.textContent = "Email app opened with your message.";
    contactForm.reset();

    if (contactSubmit) {
      contactSubmit.disabled = false;
      contactSubmit.textContent = "Send message";
    }
  }, 450);
});

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}

renderProjects();
renderSkills();
renderAchievements();
renderTimeline();
updateHeaderState();
updateTimelineProgress();
createParticles();
typeHeroText();
observeCounters();
initLoadingScreen();
initCursorGlow();
