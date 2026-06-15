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
