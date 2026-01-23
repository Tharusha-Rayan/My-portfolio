import { useState, useEffect } from 'react'

// Icon Components
const Icons = {
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Graduation: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  Book: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Award: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  Music: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  CalendarCheck: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <polyline points="9 16 11 18 15 14"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Activity: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Download: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Software Engineerring Student', 'Full-Stack Developer', 'Bass guitarist']
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  // Rotate through roles
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentRole])

  useEffect(() => {
    // Scroll spy for active navigation
    const handleScroll = () => {
      const sections = ['home', 'education', 'projects', 'skills', 'experience', 'leadership', 'interests', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Add shadow to navbar on scroll
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate through roles
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000) // Change role every 3 seconds
    return () => clearTimeout(timer)
  }, [currentRole])

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
    const toggle = document.querySelector('.navbar-toggle')
    const menu = document.querySelector('.navbar-menu')
    if (toggle && menu) {
      toggle.classList.toggle('active')
      menu.classList.toggle('active')
    }
  }

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false)
      const toggle = document.querySelector('.navbar-toggle')
      const menu = document.querySelector('.navbar-menu')
      if (toggle && menu) {
        toggle.classList.remove('active')
        menu.classList.remove('active')
      }
    }
  }

  const projects = [
    {
      title: 'Tea Factory Supply Chain Management System',
      description: 'Comprehensive supply chain management system for tea factory operations with real-time tracking and analytics.',
      image: '/tcms.png',
      technologies: ['Angular', 'ASP.NET Core', 'MSSQL', 'Google Map', 'Chart.js'],
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Shop Mart - E-commerce Application',
      description: 'Full-stack MERN e-commerce platform with secure authentication, shopping cart, and real-time messaging.',
      image: '/shopmart.png',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      year: '2025',
      status: 'Ongoing'
    },
    {
      title: 'Edu Learn - E-Learning System',
      description: 'Full-stack online learning platform with Clean Architecture, role-based access control, and comprehensive course management.',
      image: '/elearning.png',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server'],
      year: '2025',
      status: 'Ongoing'
    },
    {
      title: 'Autocare 360 - Automobile Service Management',
      description: 'Vehicle service platform with appointment booking, real-time tracking, AI chatbot, and automated notifications.',
      image: '/autoMobile.png',
      technologies: ['Spring Boot', 'React', 'Fast API', 'RESTful APIs'],
      year: '2025',
      status: 'Ongoing'
    },
    {
      title: 'Neuro Nest - Cognitive Development Game',
      description: 'Interactive game box enhancing children\'s cognitive skills with fingerprint authentication and progress tracking.',
      image: '/neuronext.jpg',
      technologies: ['Arduino', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Dextron - Line Following Robot',
      description: 'Autonomous line-following robot with PID control system and embedded sensors for precise navigation.',
      image: '/dextron.jpg',
      technologies: ['Arduino', 'Embedded Systems', 'PID Control'],
      year: '2024',
      status: 'Completed'
    }
  ]

  const skills = [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">Tharusha Rayan</a>
          <button 
            className="navbar-toggle" 
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="navbar-menu">
            <li><a href="#home" className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleLinkClick}>Home</a></li>
            <li><a href="#education" className={`navbar-link ${activeSection === 'education' ? 'active' : ''}`} onClick={handleLinkClick}>Education</a></li>
            <li><a href="#projects" className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#skills" className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#experience" className={`navbar-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={handleLinkClick}>Experience</a></li>
            <li><a href="#contact" className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleLinkClick}>Contact</a></li>
            <li>
              <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Hi, I'm <span className="gradient-text typewriter-name">Tharusha Rayan</span>
            </h1>
            <h2 className="hero-subtitle fade-in">
              <span className="role-text" key={currentRole}>{roles[currentRole]}</span>
            </h2>
            <p className="hero-description fade-in">
              I'm a dedicated software engineering student at University of Moratuwa 
              with expertise in full-stack development. I specialize in building modern 
              web applications using React, Angular, and Node.js, with a focus on 
              creating intuitive user experiences and scalable solutions.
            </p>
            <div className="hero-buttons fade-in">
              <a href="#projects" className="btn btn-primary">
                <Icons.ArrowRight />
                View Projects
              </a>
              <a href="/tharusha rayan.pdf" className="btn btn-secondary" download>
                <Icons.Download />
                View Resume
              </a>
            </div>
            <div className="hero-social fade-in">
              <a href="https://linkedin.com/in/tharusha-rayan" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Icons.LinkedIn />
              </a>
              <a href="https://github.com/tharusharayan" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Icons.GitHub />
              </a>
              <a href="mailto:Tharusharayandilhara21@gmail.com" className="social-link" aria-label="Email">
                <Icons.Mail />
              </a>
            </div>
          </div>
          <div className="hero-image fade-in">
            <img src="/profile.jpg" alt="Tharusha Rayan" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="education-container">
          <h2 className="section-title fade-in">Education</h2>
          <p className="section-subtitle fade-in">My academic journey</p>
          
          <div className="education-grid">
            <div className="education-card fade-in">
              <div className="education-icon">
                <Icons.Graduation />
              </div>
              <h3 className="education-degree">Bachelor of Science Honors in Information Technology</h3>
              <p className="education-institution">University of Moratuwa, Sri Lanka</p>
              <span className="education-period">2023 – Present</span>
            </div>
            
            <div className="education-card fade-in">
              <div className="education-icon">
                <Icons.Book />
              </div>
              <h3 className="education-degree">Advanced Level Examination</h3>
              <p className="education-institution">St. Mary's College Chilaw</p>
              <span className="education-period">2021</span>
              <p className="education-details">Combined Mathematics, Physics, ICT | Z-score: 1.48</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="section-title fade-in">Projects</h2>
          <p className="section-subtitle fade-in">Recent work and accomplishments</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card fade-in">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status === 'Completed' ? '✓ Completed' : '⟳ Ongoing'}
                  </span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <Icons.Calendar />
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-container">
          <h2 className="section-title fade-in">Technical Skills</h2>
          <p className="section-subtitle fade-in">Technologies I work with</p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item fade-in">
                <img src={skill.icon} alt={skill.name} className="skill-icon" loading="lazy" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="experience">
        <div className="experience-container">
          <h2 className="section-title fade-in">Work Experience</h2>
          <p className="section-subtitle fade-in">Professional journey</p>
          
          <div className="experience-list">
            <div className="experience-card fade-in">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Data Entry Specialist</h3>
                  <p className="experience-company">Trader Promoters (Pvt) Ltd.</p>
                </div>
                <div className="experience-period">
                  <Icons.Calendar />
                  <span>2025</span>
                </div>
              </div>
              <ul className="experience-duties">
                <li>Managed data entry operations ensuring accuracy and efficiency</li>
                <li>Maintained database integrity and data quality standards</li>
              </ul>
            </div>
            
            <div className="experience-card fade-in">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Assistant Technician</h3>
                  <p className="experience-company">Kumara Electronics</p>
                </div>
                <div className="experience-period">
                  <Icons.Calendar />
                  <span>2022 - 2023</span>
                </div>
              </div>
              <ul className="experience-duties">
                <li>Provided technical support and device troubleshooting</li>
                <li>Performed diagnostics on computers, TVs, and home appliances</li>
                <li>Assisted customers with technical issues and repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section id="leadership" className="leadership">
        <div className="leadership-container">
          <h2 className="section-title fade-in">Leadership & Activities</h2>
          <p className="section-subtitle fade-in">Contributing to the community</p>
          
          <div className="leadership-grid">
            <div className="activity-card fade-in">
              <div className="activity-icon">
                <Icons.Award />
              </div>
              <h3 className="activity-title">Robotic/IoT Session Mentor</h3>
              <p className="activity-organization">IES Labs, Faculty of IT, University of Moratuwa</p>
              <span className="activity-period">Present</span>
              <p className="activity-description">
                Mentoring students and conducting training sessions in robotics and IoT
              </p>
              <div className="activity-gallery">
                <img src="/roboticsession.jpeg" alt="Robotics Session" className="activity-img" loading="lazy" />
              </div>
            </div>
            
            <div className="activity-card fade-in">
              <div className="activity-icon">
                <Icons.Music />
              </div>
              <h3 className="activity-title">Director of Facilitate</h3>
              <p className="activity-organization">Classical Music Society (CSM), University of Moratuwa</p>
              <span className="activity-period">2024/25 - 2025/26</span>
              <p className="activity-description">
                Major events participation as bass and rhythm guitarist
              </p>
              <div className="activity-gallery">
                <img src="/directorOfMusic.jpeg" alt="Director of Facilitate" className="activity-img" loading="lazy" />
              </div>
            </div>
            
            <div className="activity-card fade-in">
              <div className="activity-icon">
                <Icons.Users />
              </div>
              <h3 className="activity-title">Unit Representative</h3>
              <p className="activity-organization">Sri Lanka University Catholic Student Movement</p>
              <span className="activity-period">2025/26</span>
              <p className="activity-description">
                Representing student interests and coordinating activities
              </p>
              <div className="activity-gallery">
                <img src="/unit.jpeg" alt="Unit Representative" className="activity-img" loading="lazy" />
              </div>
            </div>
            
            <div className="activity-card fade-in">
              <div className="activity-icon">
                <Icons.CalendarCheck />
              </div>
              <h3 className="activity-title">Organizing Committee Member</h3>
              <p className="activity-organization">University of Moratuwa</p>
              <span className="activity-period">2024</span>
              <p className="activity-description">
                Organized multiple university events and activities
              </p>
              <div className="activity-gallery">
                <img src="/orgni.jpeg" alt="Organizing Committee" className="activity-img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Skills & Interests */}
      <section id="interests" className="interests">
        <div className="interests-container">
          <h2 className="section-title fade-in">Skills & Interests</h2>
          <p className="section-subtitle fade-in">Beyond technology</p>
          
          <div className="interests-grid">
            <div className="interest-card music-featured fade-in">
              <div className="interest-icon">
                <Icons.Music />
              </div>
              <h3 className="interest-title">Music & Performance</h3>
              <p className="interest-content">Bass & Rhythm Guitarist | Classical Music Society</p>
              <div className="music-gallery">
                <img src="/bass1.jpeg" alt="Bass Guitar Performance 1" className="music-img" loading="lazy" />
                <img src="/bass2.jpeg" alt="Bass Guitar Performance 2" className="music-img" loading="lazy" />
              </div>
            </div>
            
            <div className="interest-card music-featured fade-in">
              <div className="interest-icon">
                <Icons.Activity />
              </div>
              <h3 className="interest-title">Football</h3>
              <p className="interest-content">Passionate Player | Team Sports Enthusiast</p>
              <div className="music-gallery">
                <img src="/football1.jpeg" alt="Football 1" className="music-img" loading="lazy" />
                <img src="/football2.jpeg" alt="Football 2" className="music-img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="contact-title fade-in">Get In Touch</h2>
          <p className="contact-description fade-in">
            Let's connect and discuss opportunities
          </p>
          <div className="contact-buttons fade-in">
            <a href="mailto:Tharusharayandilhara21@gmail.com" className="contact-btn">
              <Icons.Mail />
              Email Me
            </a>
            <a href="https://linkedin.com/in/tharusha-rayan" className="contact-btn" target="_blank" rel="noopener noreferrer">
              <Icons.LinkedIn />
              LinkedIn
            </a>
            <a href="https://github.com/tharusha-rayan" className="contact-btn" target="_blank" rel="noopener noreferrer">
              <Icons.GitHub />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-main">
              <h3 className="footer-name">Tharusha Rayan</h3>
              <p className="footer-tagline">Software Engineer & Full-Stack Developer</p>
            </div>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/tharusha-rayan" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Icons.LinkedIn />
              </a>
              <a href="https://github.com/tharusha-rayan" className="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Icons.GitHub />
              </a>
              <a href="mailto:Tharusharayandilhara21@gmail.com" className="footer-social-link" aria-label="Email">
                <Icons.Mail />
              </a>
            </div>
            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2026 Tharusha Rayan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
