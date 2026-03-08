// ── DATA PORTFOLIO (edit sesuai data asli) ────────────────────
const portfolioData = [
    {
        title: 'Scholarship Program',
        desc: 'Sebagai seorang HR, saya menjalankan dan mengawasi jalannya program beasiswa sebagai bagian dari strategi pengembangan dan retensi talenta. Memberikan kesempatan bagi karyawan potensial untuk meningkatkan kompetensi dan pertumbuhan karier mereka. Hingga saat ini 10+ karyawan telah mendapatkan manfaat dari program yang sudah berjalan selama hampir 3 tahun dan tersebar ke beberapa universitas seperti Binus University, Swiss Germany University untuk tingkat sarjana dan master.',
        tags: ['People Development'],
        category: 'HR Program',
        url: null,
        github: null,
        image: 'foto/portfolios/scholarship.jpg',
    },
    {
        title: 'Talent Development Program',
        desc: 'Sebagai HR yang berfokus pada pertumbuhan sumber daya manusia, saya tidak hanya mengelola administrasi pelatihan, tetapi merancang dan mengawal ekosistem pengembangan bakat yang adaptif. Fokus utama saya adalah memastikan setiap talent memiliki kompetensi yang relevan dengan tantangan industri yang dinamis, guna mendukung akselerasi bisnis perusahaan. Melalui rangkaian program ini, saya berhasil meningkatkan kualitas kompetensi karyawan sebesar dan berkontribusi langsung pada peningkatan produktivitas tim yang lebih terukur serta penurunan skill gap di internal perusahaan.',
        tags: ['People Development'],
        category: 'HR Program',
        url: null,
        github: null,
        image: 'foto/portfolios/talent.jpg',
    },
    {
        title: 'Implementation Recruitment System',
        desc: 'Sebagai seorang HR, saya mencoba untuk membuat inovasi dalam proses rekrutmen, sehingga tercipta sebuah Sistem Rekrutmen yang dapat membantu Proses seleksi kandidat secara efektif dan tentu saja sesuai dengan kebutuhan perusahaan. Selain bagi perusahaan sistem ini juga telah membantu dalam Proses ribuan kandidat dari berbagai Universitas/Sekolah yang membutuhkan informasi lowongan kerja yang tersedia pada perusahaan kami. Terbukti setelah berjalannya sistem, proses rekrutmen menjadi lebih tersistematis dan user dapat memonitor juga proses rekrutmen yang sedang berlangsung dan profiling kandidat sesuai kebutuhannya.',
        tags: ['People Development', 'Rekrutmen','Administration'],
        category: 'HR Program',
        url: 'https://karir.traspac.id/',
        github: null,
        image: 'foto/portfolios/rekrutmen.png',
    },
    {
        title: 'Talent Pipeline & Employer Branding',
        desc: 'Sebagai seorang HR, saya membangun pipeline talenta melalui kolaborasi dengan SMK dan universitas, serta menginisiasi kompetisi tingkat nasional untuk menjaring talenta sejak dini sekaligus memperkuat employer branding perusahaan. Untuk saat ini kami telah berhasil menjaring dan merekrut siswa terbaik dari setiap sekolah melalui kerjasama yang berjalan dan kompetisi yang dijalankan setiap tahun.',
        tags: ['Rekrutmen', 'People Development','Management Talent'],
        category: 'HR Program',
        url: 'http://trascom.traspac.id',
        github: null,
        image: 'foto/portfolios/trascom.png',
    },
    {
        title: 'Created Governance & Organizational Structure',
        desc: 'Sebagai seorang HR, saya menyusun regulasi perusahaan dan SOP yang terstandarisasi untuk meningkatkan kejelasan peran, kepatuhan, serta menciptakan proses kerja yang lebih konsisten dan scalable.',
        tags: ['Administration'],
        category: 'HR Program',
        url: null,
        github: null,
        image: 'foto/portfolios/sop.jpg',
    },
    // {
    //     title: 'Learning Management System',
    //     desc: 'Membangun Learning Management System sebagai media pembelajaran Konveksi sesuai dengan request klien.',
    //     tags: ['WordPress', 'MySQL','PHP'],
    //     category: 'Developer',
    //     url: 'https://akademikonveksiindonesia.com/',
    //     github: null,
    //     image: 'foto/portfolios/academy.png',
    // },
    // {
    //     title: 'E-Commerce System',
    //     desc: 'Membangun E-Commerce System sebagai media jual beli Produk milik Klien dalam Bisnis Fashion sesuai dengan request.',
    //     tags: ['WordPress', 'MySQL','WooCommerce'],
    //     category: 'Developer',
    //     url: 'https://liceria.id/',
    //     github: null,
    //     image: 'foto/portfolios/ecommerce.jpg',
    // },
];

// ── DATA BLOG (edit sesuai artikel asli) ─────────────────────
const blogData = [
    {
        title: 'Designing HR Processes That Actually Scale',
        excerpt: 'Most HR processes break when the company grows. Here is how I approach building systems that scale with the team.',
        category: 'HR Strategy',
        date: '22 Feb 2026',
        url: 'https://medium.com/@bagasadynotes',
        image: null,
    },
    {
        title: 'What Makes a Good Talent Pipeline',
        excerpt: 'Building a sustainable talent pipeline is more than just sourcing candidates — it is about creating a system.',
        category: 'Talent Management',
        date: '15 Feb 2026',
        url: 'https://medium.com/@bagasadynotes',
        image: null,
    },
    {
        title: 'How I Implemented HRIS from Scratch',
        excerpt: 'A practical walkthrough of implementing a digital HR system in a mid-sized company, from requirements to rollout.',
        category: 'HR Technology',
        date: '08 Feb 2026',
        url: 'https://medium.com/@bagasadynotes',
        image: null,
    },
];

// ── RENDER PORTFOLIO ──────────────────────────────────────────
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    portfolioData.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';

        const imgHtml = p.image
            ? `<img src="${p.image}" class="portfolio-img" alt="${p.title}">`
            : `<div class="portfolio-img-placeholder"><span>◈</span></div>`;

        const overlayBtns = p.url
            ? `<a href="${p.url}" class="overlay-btn overlay-btn-primary" target="_blank">↗ Live Demo</a>`
            : '';
        const overlayGhost = p.github
            ? `<a href="${p.github}" class="overlay-btn overlay-btn-ghost" target="_blank">GitHub</a>`
            : '';
        const overlayPrivate = (!p.url && !p.github)
            ? `<span class="overlay-btn overlay-btn-ghost" style="cursor:default">Private Project</span>`
            : '';

        const tagsHtml = p.tags
            ? p.tags.slice(0, 4).map(t => `<span class="portfolio-tag">${t}</span>`).join('')
            : '';

        const footerLinks = [
            p.url ? `<a href="${p.url}" class="portfolio-link" target="_blank">↗ Demo</a>` : '',
            p.github ? `<a href="${p.github}" class="portfolio-link" target="_blank">GitHub</a>` : '',
        ].join('');

        card.innerHTML = `
            <div class="portfolio-img-wrap">
                ${imgHtml}
                <div class="portfolio-overlay">
                    ${overlayBtns}${overlayGhost}${overlayPrivate}
                </div>
            </div>
            <div class="portfolio-body">
                ${tagsHtml ? `<div class="portfolio-tags">${tagsHtml}</div>` : ''}
                <h3 class="portfolio-title">${p.title}</h3>
                <p class="portfolio-desc">${p.desc}</p>
                <div class="portfolio-footer">
                    <div class="portfolio-links">${footerLinks}</div>
                    ${p.category ? `<span class="portfolio-category">${p.category}</span>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ── RENDER BLOG ───────────────────────────────────────────────
function renderBlog() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    blogData.forEach((b) => {
        const card = document.createElement('a');
        card.href = b.url || '#';
        card.className = 'post-card';
        if (b.url && b.url !== '#') card.target = '_blank';

        const imgHtml = b.image
            ? `<img src="${b.image}" class="post-img" alt="${b.title}">`
            : `<div class="post-img-placeholder">No Image</div>`;

        card.innerHTML = `
            <div class="post-img-wrap">${imgHtml}</div>
            <div class="post-body">
                ${b.category ? `<div class="post-category">${b.category}</div>` : ''}
                <h3 class="post-title">${b.title}</h3>
                ${b.excerpt ? `<p class="post-excerpt">${b.excerpt}</p>` : ''}
                <div class="post-footer">
                    <span>${b.date}</span>
                    <span class="post-arrow">→</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ── HAMBURGER MENU ────────────────────────────────────────────
function initNav() {
    const toggle = document.getElementById('navToggle');
    const links  = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('open');
            links.classList.remove('open');
        });
    });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── ACTIVE NAV ON SCROLL ──────────────────────────────────────
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + current) a.classList.add('active');
        });
    }, { passive: true });
}

// ── FOOTER YEAR ───────────────────────────────────────────────
function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    renderBlog();
    initNav();
    initReveal();
    initActiveNav();
    initYear();
});
