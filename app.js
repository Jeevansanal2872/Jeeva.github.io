// Data Provider
const DATA = {
    roles: [
        "Graphic Designer @ IEEE SPS KC",
        "Deputy CFA @ FOSS CEAL",
        "CREATE101 Lead @ CEAL",
        "Webmaster @ IEEE SBC SB CEAL",
        "WebTeam member @ AlchemyIEDC CEAL"
    ],
    profileImage: "Assets/JEEVAN-Qe9HH1S-.jpg",
    about: [
        "Hey there! I'm Jeevan S, a Computer Science Engineering student at the College of Engineering, Attingal with a deep passion for UI/UX design, visual branding, and creative technology.",
        "I believe great design isn't just about how something looks—it's about how effortlessly it connects with people. I focus on crafting clean, intuitive, and engaging digital experiences using Figma, React, and modern web standards.",
        "Beyond code, I actively lead design culture across student communities as Graphic Designer at IEEE Signal Processing Society Kerala Chapter, Deputy CFA at FOSS CEAL, CREATE101 Lead at CEAL, Webmaster at IEEE SBC SB CEAL, and WebTeam member at AlchemyIEDC CEAL.",
        "Whether it's building interactive digital products, architecting brand identities, or mentoring peers in design, I thrive on turning creative ideas into tangible impact."
    ],
    skills: [
        { title: "Creative Design", items: ["Figma", "Adobe Photoshop", "Adobe Premiere Pro", "Canva", "After Effects"], icon: "palette" },
        { title: "Web & Development", items: ["HTML5", "CSS3", "JavaScript", "React", "Python"], icon: "code" },
        { title: "Tools & Workflow", items: ["Git & GitHub", "VS Code", "MS Office Suite", "Notion"], icon: "layout" }
    ],
    projects: [
        {
            title: "IRIS",
            subtitle: "Official Event Platform",
            desc: "Designed and developed an immersive, mobile-responsive event website built to deliver seamless event registration, timetable navigation, and clear visual hierarchy.",
            tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
            link: "#",
            image: "iris_website_preview_1778136891629.png"
        },
        {
            title: "PowerNexus",
            subtitle: "Smart Power & Energy Analytics",
            desc: "An intelligent energy monitoring solution engineered for intuitive power consumption tracking, device-level metrics, and electrical efficiency optimization.",
            tech: ["Python", "IoT", "React", "REST API"],
            link: "https://github.com/Jeevansanal2872/PowerNexus",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
        }
    ],
    experience: [
        {
            title: "Graphic Designer @ IEEE SPS KC",
            date: "2024 - Present",
            desc: "Leading visual design, marketing aesthetics, and digital branding campaigns for the IEEE Signal Processing Society Kerala Chapter.",
            icon: "brush",
            link: "#"
        },
        {
            title: "Deputy CFA @ FOSS CEAL",
            date: "2024 - Present",
            desc: "Spearheading creative affairs, community branding, and open-source design culture at FOSS CEAL.",
            icon: "radio",
            link: "https://foss.ceal.in/team/"
        },
        {
            title: "CREATE101 Lead @ CEAL",
            date: "2024 - Present",
            desc: "Mentoring emerging designers, conducting creative design bootcamps, and leading community design projects.",
            icon: "palette",
            link: "https://foss.ceal.in/chamber/101/create.html"
        },
        {
            title: "Webmaster @ IEEE SBC SB CEAL",
            date: "2024 - Present",
            desc: "Directing web portal architecture, digital presence, and visual interface consistency for IEEE Student Branch CEAL.",
            icon: "layout",
            link: "https://ieee.ceal.in/execom/?year=2026"
        },
        {
            title: "WebTeam Member @ AlchemyIEDC CEAL",
            date: "2023 - Present",
            desc: "Designing web applications and startup ecosystem media assets for Alchemy IEDC CEAL.",
            icon: "message-square",
            link: "https://iedc.ceal.in/team-26/"
        }
    ],
    defaultPosters: [
        "posters/1.png", "posters/2.png", "posters/3.png", "posters/4.png",
        "posters/5.png", "posters/6.png", "posters/7.png", "posters/8.png",
        "posters/9.png", "posters/10.png", "posters/11.png", "posters/12.png",
        "posters/13.png", "posters/14.png", "posters/15.jpeg", "posters/16.png",
        "posters/17.png", "posters/18.png", "posters/19.png", "posters/20.png"
    ]
};

// --- CORE LOGIC ---

// Theme Management (Minimal Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Initialize Typewriter
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function type() {
    if (!typewriterEl) return;
    const currentRole = DATA.roles[roleIdx];
    if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 45 : 120;

    if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2200;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % DATA.roles.length;
        typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
}

// Live Status Clock (UTC)
function updateLiveStatus() {
    const timeEl = document.getElementById('live-time');
    if (!timeEl) return;
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }) + ' UTC';
}

// Render Dynamic Content
function renderDynamicContent() {
    // Profile Image
    const profileImg = document.getElementById('profile-img');
    if (profileImg) profileImg.src = DATA.profileImage;

    // About Bio
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
        aboutContainer.innerHTML = DATA.about.map(p => `<p class="reveal leading-relaxed">${p}</p>`).join('');
    }

    // Technical Projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        DATA.projects.forEach(project => {
            projectsGrid.innerHTML += `
                <div class="flex-none w-[88vw] max-w-[360px] sm:max-w-[420px] md:max-w-[460px] bg-white dark:bg-[#141414] text-black dark:text-white border-4 border-black dark:border-white p-6 sm:p-8 brutal-shadow-hover transition-all group relative overflow-hidden flex flex-col scroll-skew">
                    <div class="flex-grow">
                        <div class="flex justify-between items-start mb-6">
                            <h3 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">${project.title}</h3>
                            <div class="bg-sky-400 text-black border-2 border-black dark:border-white p-2 brutal-shadow-small group-hover:-translate-y-1 transition-transform">
                                <i data-lucide="code-2" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                            </div>
                        </div>
                        <p class="text-xs font-black text-sky-600 dark:text-sky-400 uppercase mb-4 tracking-widest bg-sky-100 dark:bg-sky-950/60 inline-block px-2.5 py-1 border border-sky-600 dark:border-sky-500">${project.subtitle}</p>
                        <p class="text-sm sm:text-base md:text-lg mb-6 opacity-85 leading-snug font-medium">${project.desc}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.tech.map(t => `<span class="bg-black text-white dark:bg-white dark:text-black px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">${t}</span>`).join('')}
                        </div>
                    </div>
                    
                    <a href="${project.link}" ${project.link !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''} class="mt-auto inline-flex items-center justify-between w-full font-black uppercase border-4 border-black dark:border-white p-3.5 sm:p-4 bg-black text-white dark:bg-white dark:text-black hover:bg-sky-400 hover:text-black dark:hover:bg-sky-400 dark:hover:text-black transition-all group/btn text-sm sm:text-base">
                        <span>${project.link !== '#' ? 'View Project' : 'Explore Case Study'}</span>
                        <i data-lucide="arrow-up-right" class="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                    </a>

                    <div class="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
                         <img src="${project.image || 'https://placehold.co/800x800/000/fff?text=' + encodeURIComponent(project.title)}" 
                              alt="${project.title}" 
                              class="w-full h-full object-cover"
                              loading="lazy">
                    </div>
                </div>
            `;
        });
    }

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        DATA.skills.forEach(skill => {
            skillsGrid.innerHTML += `
                <div class="bg-white dark:bg-[#141414] text-black dark:text-white border-4 border-black dark:border-white p-6 sm:p-8 brutal-shadow-hover transition-all group scroll-skew">
                    <div class="bg-black dark:bg-white text-white dark:text-black w-12 h-12 flex items-center justify-center mb-6 brutal-shadow group-hover:bg-sky-500 dark:group-hover:bg-sky-400 group-hover:text-black transition-colors">
                        <i data-lucide="${skill.icon}"></i>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-black uppercase mb-4 tracking-tight">${skill.title}</h3>
                    <ul class="space-y-2 font-bold opacity-80 text-sm sm:text-base">
                        ${skill.items.map(i => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-sky-500"></span> ${i}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    }

    // Experience / Journey (with clickable embedded links)
    const expGrid = document.getElementById('experience-grid');
    if (expGrid) {
        expGrid.innerHTML = '';
        DATA.experience.forEach(exp => {
            const hasLink = exp.link && exp.link !== '#';
            expGrid.innerHTML += `
                <div class="flex flex-col md:flex-row gap-4 sm:gap-6 bg-white dark:bg-[#141414] text-black dark:text-white border-4 border-black dark:border-white p-6 sm:p-8 brutal-shadow-hover transition-all relative overflow-hidden group scroll-skew">
                    <div class="md:w-1/4 flex-shrink-0">
                        <span class="inline-block bg-black dark:bg-white text-white dark:text-black px-3.5 py-1 text-xs sm:text-sm font-black uppercase italic">${exp.date}</span>
                    </div>
                    <div class="md:w-3/4 z-10">
                        <h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-2">
                            ${hasLink ? `
                                <a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors hover:underline decoration-2 underline-offset-4">
                                    <span>${exp.title}</span>
                                    <i data-lucide="arrow-up-right" class="w-4 h-4 sm:w-5 sm:h-5 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                                </a>
                            ` : `
                                <span class="group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">${exp.title}</span>
                            `}
                        </h3>
                        <p class="text-sm sm:text-base md:text-lg font-medium opacity-80">${exp.desc}</p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity pointer-events-none">
                        <i data-lucide="${exp.icon}" class="w-24 h-24 sm:w-32 sm:h-32"></i>
                    </div>
                </div>
            `;
        });
    }
}

// Technical Projects Horizontal Scroll (Mobile & Desktop Adapted)
function setupHorizontalScroll() {
    const container = document.getElementById('projects-horizontal-container');
    const grid = document.getElementById('projects-grid');
    if (!container || !grid) return;

    // Apply scroll listener on screens where horizontal pinned scroll is active
    window.addEventListener('scroll', () => {
        if (window.innerWidth < 768) {
            grid.style.transform = 'none';
            return;
        }

        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const scrollPos = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPos >= containerTop && scrollPos <= containerTop + containerHeight - viewportHeight) {
            const scrollFraction = (scrollPos - containerTop) / (containerHeight - viewportHeight);
            const maxTranslate = grid.scrollWidth - window.innerWidth + 120;
            grid.style.transform = `translateX(-${scrollFraction * Math.max(maxTranslate, 0)}px)`;
        }
    }, { passive: true });
}

// LinkedIn DP Synchronization
async function syncLinkedInDP() {
    const badgeUrl = `https://badges.linkedin.com/profile?locale=en_US&badgetype=VERTICAL&badgetheme=light&uid=1258334476&version=v1&maxsize=medium&trk=profile-badge&vanityname=jeevansanal2872`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(badgeUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const content = data && data.contents;
        const imgRegex = /src=\\"(https:\/\/media\.licdn\.com\/dms\/image\/[^"]+)\\"/;
        const imgMatch = content && content.match(imgRegex);

        if (imgMatch) {
            const liveImageUrl = imgMatch[1].replace(/\\/g, '');
            DATA.profileImage = liveImageUrl;
            document.querySelectorAll('#profile-img, #li-card-img').forEach(img => {
                img.src = liveImageUrl;
            });
        }
    } catch (error) {
        console.warn("LinkedIn DP live fetch fallback:", error);
    }
}
