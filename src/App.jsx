import { useState, useEffect } from 'react'
import './App.css'

// Import photo
import photoManon from './assets/photo-manon.jpg'

// Import logos entreprises
import logoArtapisserie from './assets/logos/artapisserie.png'
import logoLeroyMerlin from './assets/logos/leroy-merlin.png'
import logoAdeo from './assets/logos/adeo.png'
import logoEasypanel from './assets/logos/easypanel.png'
import logoIveco from './assets/logos/iveco.png'

// Import logos formations
import logoEpitech from './assets/logos/epitech.png'
import logoLaCapsule from './assets/logos/la-capsule.png'
import logoEfficom from './assets/logos/efficom.png'

// Import logo Présidence
import logoPresidence from './assets/logos/presidence.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isVisible, setIsVisible] = useState({})

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = 'about'
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#about" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
            Manon Fournier <span className="nav-logo-subtitle">Product Management</span>
          </a>
          
          <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>À propos</a></li>
            <li><a href="#experiences" className={activeSection === 'experiences' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>Expériences</a></li>
            <li><a href="#formation" className={activeSection === 'formation' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('formation') }}>Formations</a></li>
            <li><a href="#competences" className={activeSection === 'competences' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('competences') }}>Compétences</a></li>
            <li><a href="#projet" className={activeSection === 'projet' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('projet') }}>Projet</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            <li>
              <a href="https://www.linkedin.com/in/manon-fournier1/" target="_blank" rel="noopener noreferrer" className="nav-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* À propos - Section principale */}
      <section id="about" className={`about-hero ${isVisible.about ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="about-hero-grid">
            {/* Colonne gauche - Photo */}
            <div className="about-hero-image">
              <div className="about-image-wrapper">
                <img src={photoManon} alt="Manon Fournier" />
                <div className="about-image-decoration"></div>
              </div>
            </div>

            {/* Colonne droite - Contenu */}
            <div className="about-hero-content">
              <span className="hero-badge">🎯 Recherche alternance en Product Management</span>
              <span className="section-label">À PROPOS</span>
              <h1 className="hero-title">
                Product Owner <span className="highlight">Manager</span>
              </h1>
              
              <div className="about-text">
                <p className="about-intro">
                  Passionnée par la création de produits à impact, je combine une expertise solide en <strong>communication stratégique</strong> avec une maîtrise croissante des <strong>méthodologies Agiles</strong> et du <strong>pilotage produit</strong>.
                </p>
                <p>
                  Mon parcours de 10 ans en communication interne m'a permis de développer une compréhension fine des organisations, des enjeux de transformation et de l'importance de placer l'utilisateur au centre des décisions. Cette expérience est un atout majeur pour le métier de Product Owner.
                </p>
                <p>
                  Aujourd'hui, je mets ces compétences au service de projets digitaux ambitieux, en facilitant les échanges entre équipes métiers et techniques, et en garantissant la livraison de solutions qui répondent aux vrais besoins.
                </p>
              </div>

              {/* Bloc Epitech */}
              <div className="hero-current">
                <img src={logoEpitech} alt="Epitech" className="hero-school-logo" />
                <div className="hero-current-text">
                  <span className="hero-current-label">Master 2 en cours</span>
                  <span className="hero-current-title">Strategic Project Management & Entrepreneurship</span>
                  <span className="hero-current-school">Epitech Lille • 09/2025 - En cours</span>
                </div>
              </div>

              {/* Boutons CTA */}
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Me contacter</a>
                <a href="#experiences" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>Voir mon parcours</a>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">🎯</span>
              <h3>Product Owner</h3>
              <p>Gestion de backlog, priorisation, user stories, sprints</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🔄</span>
              <h3>Méthodologies Agiles</h3>
              <p>Scrum, Kanban, rituels Agile, facilitation</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">💬</span>
              <h3>Communication</h3>
              <p>10 ans d'expertise en communication interne et conduite du changement</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🛠️</span>
              <h3>Outils</h3>
              <p>Office, Google, Jira, Asana, Trello, Notion, Miro, Git, Gitlab, Github, IA, Adobe, Canva, Affinity, Gsite, Wordpress, HTML, CSS (...)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences */}
      <section id="experiences" className={`experiences ${isVisible.experiences ? 'visible' : ''}`}>
        <div className="section-container">
          <span className="section-label">PARCOURS</span>
          <h2 className="section-title">Parcours professionnel</h2>
          
          <div className="timeline">
            {/* Artapisserie - Product Owner */}
            <div className="timeline-item current">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={logoArtapisserie} alt="Artapisserie" className="timeline-logo" />
                  <div className="timeline-info">
                    <h3>Product Owner</h3>
                    <p className="timeline-company">Artapisserie - Lezennes - CDD</p>
                    <p className="timeline-date">09/2025 - Actuel</p>
                    <span className="timeline-badge">3 mois</span>
                  </div>
                </div>
                <ul className="timeline-details">
                  <li><strong>Stratégie Produit & Performance :</strong> Construction et pilotage de la roadmap produit alignée aux OKR de l'entreprise. Pilotage des produits digitaux (optimisation du site e-commerce et des outils internes).</li>
                  <li><strong>Découverte & Backlog :</strong> Recueil, priorisation et formalisation des besoins métiers (user stories, ateliers, analyse des irritants).</li>
                  <li><strong>Gestion Agile & Delivery :</strong> Animation de l'équipe projet (rituels agiles, planification des sprints, suivi de la vélocité, coordination des livrables). Interface transverse entre métiers, terrain et développeurs pour garantir l'alignement et la cohérence produit.</li>
                  <li><strong>Acculturation & Change Management :</strong> Création et structuration des canaux de communication interne pour partager l'avancement IT, acculturer l'entreprise à l'agilité et renforcer la transparence produit. Mise en place d'un programme de formation interne à l'IA, accompagné d'une stratégie de change management pour favoriser l'adoption des nouveaux usages. Contribution à l'amélioration continue des pratiques agiles au sein de la PME.</li>
                </ul>
              </div>
            </div>

            {/* Leroy Merlin - Responsable communication */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={logoLeroyMerlin} alt="Leroy Merlin" className="timeline-logo" />
                  <div className="timeline-info">
                    <h3>Responsable communication</h3>
                    <p className="timeline-company">Leroy Merlin France - Lezennes - CDI</p>
                    <p className="timeline-date">09/2020 - 08/2025</p>
                    <span className="timeline-badge">5 ans</span>
                  </div>
                </div>
                <ul className="timeline-details">
                  <li><strong>Stratégie & Conseil :</strong> Définition et déploiement de la stratégie de communication interne, institutionnelle et lobbying. Conseil auprès des managers et du Comex.</li>
                  <li><strong>Production & Éditorial :</strong> Élaboration de la stratégie et du plan de communication, avec production éditoriale. Création visuelle multicanale.</li>
                  <li><strong>Canaux & Animation :</strong> Structuration et animation des canaux internes. Organisation d'événements (jusqu'à 800 personnes en présentiel et/ou digital).</li>
                  <li><strong>Analyse & Management :</strong> Analyse des enquêtes collaborateurs et écoute terrain. Coordination de l'agenda et management d'un alternant.</li>
                </ul>
              </div>
            </div>

            {/* Leroy Merlin - Chargée de communication interne */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={logoLeroyMerlin} alt="Leroy Merlin" className="timeline-logo" />
                  <div className="timeline-info">
                    <h3>Chargée de communication interne</h3>
                    <p className="timeline-company">Leroy Merlin France - Lezennes - CDD</p>
                    <p className="timeline-date">09/2019 - 09/2020</p>
                    <span className="timeline-badge">1 an et 1 mois</span>
                  </div>
                </div>
                <ul className="timeline-details">
                  <li><strong>Gestion de Projet de Transformation :</strong> Définition et déploiement de la stratégie de communication en appui au change management, dans le cadre d'un projet de transformation d'une direction financière.</li>
                  <li><strong>Canaux & Événementiel :</strong> Création et pilotage des canaux internes. Organisation d'événements (kick-offs, séminaires, workshops - jusqu'à 200 personnes + formats digitaux).</li>
                  <li><strong>Production de Contenus :</strong> Production éditoriale & création de supports print / web / vidéo.</li>
                  <li><strong>Vision & Déploiement :</strong> Prise de parole devant les équipes et accompagnement à l'appropriation de la vision. Gestion du planning de déploiement.</li>
                </ul>
              </div>
            </div>

            {/* ADEO - Chargée de communication interne */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={logoAdeo} alt="Adeo" className="timeline-logo" />
                  <div className="timeline-info">
                    <h3>Chargée de communication interne</h3>
                    <p className="timeline-company">Adeo - Lezennes - CDD</p>
                    <p className="timeline-date">09/2018 - 09/2020</p>
                    <span className="timeline-badge">2 ans et 1 mois</span>
                  </div>
                </div>
                <ul className="timeline-details">
                  <li><strong>Stratégie de Transformation :</strong> Définition de stratégies de communication alignées aux objectifs de transformation.</li>
                  <li><strong>Change Management :</strong> Appui au change management dans le déploiement des projets.</li>
                  <li><strong>Événementiel Majeur :</strong> Organisation d'événements (kick-offs, séminaires, workshops) pouvant aller jusqu'à 2000 personnes, en présentiel et en formats digitaux.</li>
                  <li><strong>Production de Contenus :</strong> Rédaction de contenus éditoriaux, y compris en anglais. Création de livrables print / web / vidéo.</li>
                </ul>
              </div>
            </div>

            {/* EasyPanel - Chargée de communication 360° */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={logoEasypanel} alt="EasyPanel" className="timeline-logo" />
                  <div className="timeline-info">
                    <h3>Chargée de communication 360°</h3>
                    <p className="timeline-company">EasyPanel - Marcq-en-Barœul - CDD</p>
                    <p className="timeline-date">09/2017 - 09/2018</p>
                    <span className="timeline-badge">1 an et 1 mois</span>
                  </div>
                </div>
                <ul className="timeline-details">
                  <li><strong>Communication Interne :</strong> Pilotage de la communication interne pour assurer une diffusion cohérente des informations.</li>
                  <li><strong>Communication Externe :</strong> Développement de la communication externe, incluant les réseaux sociaux et les campagnes e-mailing.</li>
                  <li><strong>Études Qualitatives :</strong> Appui à la réalisation d'études qualitatives et coordination des panélistes.</li>
                </ul>
              </div>
            </div>

            {/* IVECO - Assistante communication et marketing */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={logoIveco} alt="Iveco" className="timeline-logo" />
                  <div className="timeline-info">
                    <h3>Assistante communication et marketing</h3>
                    <p className="timeline-company">Iveco - Lesquin - CDD</p>
                    <p className="timeline-date">09/2015 - 09/2017</p>
                    <span className="timeline-badge">2 ans et 1 mois</span>
                  </div>
                </div>
                <ul className="timeline-details">
                  <li><strong>Communication Interne :</strong> Développement et pilotage de la communication interne.</li>
                  <li><strong>Contenus & Intranet :</strong> Création de contenus éditoriaux et animation de l'intranet. Réalisation de supports visuels.</li>
                  <li><strong>Événementiel :</strong> Organisation d'événements clients et coordination d'événements internes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className={`formation ${isVisible.formation ? 'visible' : ''}`}>
        <div className="section-container">
          <span className="section-label">FORMATIONS</span>
          <h2 className="section-title">Parcours académique</h2>
          
          <div className="formation-grid">
            {/* Epitech */}
            <div className="formation-card featured">
              <div className="formation-card-header">
                <img src={logoEpitech} alt="Epitech" className="formation-logo" />
                <span className="formation-badge">En cours</span>
              </div>
              <h3>Master of Science</h3>
              <h4>RNCP 7 - Strategic Project Management & Entrepreneurship</h4>
              <p className="formation-school">Agilité & stratégie produit (Agile, Lean, pilotage de projets, roadmap & budgets), conception produit UX/UI (design, prototypage, delivery), transformation digitale (data, IA/ML, web, growth), business & management (business model, business plan, stratégie, change).</p>
              <p className="formation-school">Epitech - L'école de l'excellence informatique</p>
              <p className="formation-date">oct. 2025 - sept. 2027</p>
            </div>

            {/* La Capsule */}
            <div className="formation-card">
              <div className="formation-card-header">
                <img src={logoLaCapsule} alt="La Capsule" className="formation-logo" />
              </div>
              <h3>Cloud & DevOps Engineer</h3>
              <h4>RNCP 6 - Administrateur Système DevOps</h4>
              <p className="formation-school">Terminal & scripting, réseaux & administration, programmation, Mise en production, Infrastructure, Sécurité, Python, PostgreSQL, Git/GitLab, SonarQube, Docker, Kubernetes, AWS, Grafana, Prometheus, Ansible..</p>
              <p className="formation-school">La Capsule</p>
              <p className="formation-date">mars 2025 - juin 2025</p>
            </div>

            {/* EFFICOM Master */}
            <div className="formation-card">
              <div className="formation-card-header">
                <img src={logoEfficom} alt="EFFICOM" className="formation-logo" />
              </div>
              <h3>Master</h3>
              <h4>RNCP 7 - Management Marketing Communication en alternance</h4>
              <p className="formation-school">Stratégie de marque, communication marketing, data marketing, stratégie digitale, management de projet, innovation, outils professionnels (communication, créativité, personal branding).</p>
              <p className="formation-school">EFFICOM</p>
              <p className="formation-date">2018 - 2020</p>
            </div>

            {/* EFFICOM Bachelor */}
            <div className="formation-card">
              <div className="formation-card-header">
                <img src={logoEfficom} alt="EFFICOM" className="formation-logo" />
              </div>
              <h3>Bachelor</h3>
              <h4>RNCP 6 - Communication Marketing en alternance</h4>
              <p className="formation-school">Analyse de marché & audit marketing, stratégie de marque & plan de communication, marketing digital (UX/UI, CMS, social media, trafic, e-mailing), droit & gestion commerciale, gestion de projet (Agile, budget, risques), outils professionnels (créativité, présentation, storytelling), anglais professionnel.</p>
              <p className="formation-school">EFFICOM</p>
              <p className="formation-date">2017 - 2018</p>
            </div>

            {/* EFFICOM BTS */}
            <div className="formation-card">
              <div className="formation-card-header">
                <img src={logoEfficom} alt="EFFICOM" className="formation-logo" />
              </div>
              <h3>BTS</h3>
              <h4>Négociation relation client en alternance</h4>
              <p className="formation-school">ATechniques de prospection, vente et négociation, gestion du point de vente, marketing fondamental et événementiel, communication digitale et de marque, animation de communautés, culture e-commerce, gestion de projet (méthodo, budget, clients/fournisseurs), prise de parole, communication interpersonnelle, anglais professionnel.</p>
              <p className="formation-school">EFFICOM</p>
              <p className="formation-date">2015 - 2017</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications">
            <h3 className="certifications-title">Certifications</h3>
            <div className="certifications-grid">
              <div className="certification-item">
                <span className="certification-icon">🎓</span>
                <div>
                  <h4>Professional Scrum Product Owner I (PSPO I)</h4>
                  <p>Scrum.org • Juin 2025</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🌍</span>
                <div>
                  <h4>Anglais professionnel</h4>
                  <p>Loquendi • Juin 2025</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🤖</span>
                <div>
                  <h4>L'intelligence artificielle au service des métiers</h4>
                  <p>Cegos France • Déc. 2024</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">💬</span>
                <div>
                  <h4>Questionner pour mieux impacter</h4>
                  <p>Les coachs au pull jaune • Nov. 2024</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🧠</span>
                <div>
                  <h4>Développer son intelligence émotionnelle</h4>
                  <p>Symbos • Juin 2024</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">👥</span>
                <div>
                  <h4>Animer en situation non hiérarchique</h4>
                  <p>Némemjumé • Juin 2023</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🌐</span>
                <div>
                  <h4>Créer et animer un réseau de communicants</h4>
                  <p>AFCI • Mai 2023</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🎯</span>
                <div>
                  <h4>Mener les entretiens de campagne</h4>
                  <p>Amplitude • Fév. 2023</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">✍️</span>
                <div>
                  <h4>Formation écriture journalistique</h4>
                  <p>SKOLAE Formation • Sept. 2022</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🎨</span>
                <div>
                  <h4>Facilitation Graphique - Fondamentaux</h4>
                  <p>L'e-maginarium • Juin 2022</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">💪</span>
                <div>
                  <h4>S'affirmer dans sa communication</h4>
                  <p>PROconseils • Mai 2022</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🏥</span>
                <div>
                  <h4>Sauveteur secouriste du travail</h4>
                  <p>INRS France • Mars 2023</p>
                </div>
              </div>
              <div className="certification-item">
                <span className="certification-icon">🤝</span>
                <div>
                  <h4>La communication inclusive</h4>
                  <p>AlterNego • Janv. 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className={`competences ${isVisible.competences ? 'visible' : ''}`}>
        <div className="section-container">
          <span className="section-label">EXPERTISE</span>
          <h2 className="section-title">Compétences</h2>
          
          <div className="competences-block">
            {/* Soft Skills */}
            <div className="competences-category">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Soft Skills
              </h3>
              <div className="skills-tags">
                <span className="skill-tag">Collaboration & facilitation d'équipe</span>
                <span className="skill-tag">Leadership collaboratif</span>
                <span className="skill-tag">Gestion des parties prenantes</span>
                <span className="skill-tag">Esprit décisionnel</span>
                <span className="skill-tag">Vision produit & pensée stratégique</span>
                <span className="skill-tag">Capacité à gérer l’ambiguïté</span>
                <span className="skill-tag">Communication claire (écrit/oral)</span>
                <span className="skill-tag">Adaptabilité & gestion du changement</span>
                <span className="skill-tag">Résolution de problèmes</span>
                <span className="skill-tag">Autonomie & curiosité</span>
                <span className="skill-tag">Organisation & méthode</span>
                <span className="skill-tag">Écoute active</span>
                <span className="skill-tag">Attitude positive</span>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="competences-category">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
                Hard Skills
              </h3>
              <div className="skills-tags">
                <span class="skill-tag">Gestion de projet & méthodes agiles (Scrum, Kanban)</span>
<span class="skill-tag">Discovery produit (entretiens utilisateurs, problématisation)</span>
<span class="skill-tag">Priorisation & analyse fonctionnelle (user stories, ateliers, refinement)</span>
<span class="skill-tag">Pilotage produit (roadmap, OKR, KPI, vision produit)</span>
<span class="skill-tag">Écriture de critères d’acceptation (BDD / Gherkin)</span>
<span class="skill-tag">Design thinking & ateliers de co-conception</span>
<span class="skill-tag">Cartographie utilisateur (user journey..)</span>
<span class="skill-tag">Stratégie de communication interne / externe</span>
<span class="skill-tag">Prise de parole & aisance orale</span>
<span class="skill-tag">Change management & acculturation digitale</span>
<span class="skill-tag">Créativité & innovation</span>
<span class="skill-tag">Analyse & synthèse</span>
<span class="skill-tag">IA appliquée aux métiers</span>
<span class="skill-tag">Terminal, scripting, code (Bash, HTML, CSS, Python)</span>
<span class="skill-tag">Notions techniques (API, bases de données, environnements)</span>
<span class="skill-tag">Testing</span>

            
              </div>
            </div>

            {/* Outils */}
            <div className="competences-category">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                Outils
              </h3>
              <div className="tools-categories">
                <div className="tool-category">
                  <span className="tool-category-label">Productivité</span>
                  <span className="tool-category-items">Office 365, Google Workspace</span>
                </div>
                <div className="tool-category">
                  <span className="tool-category-label">Gestion & agility</span>
                  <span className="tool-category-items">Jira, Asana, Trello, Notion, Miro</span>
                </div>
                <div className="tool-category">
                  <span className="tool-category-label">Versioning</span>
                  <span className="tool-category-items">Git, GitLab, GitHub</span>
                </div>
                <div className="tool-category">
                  <span className="tool-category-label">IA / Assistants</span>
                  <span className="tool-category-items">ChatGPT, Claude, Gemini</span>
                </div>
                <div className="tool-category">
                  <span className="tool-category-label">Création</span>
                  <span className="tool-category-items">Adobe, Canva, Affinity, Figma</span>
                </div>
                <div className="tool-category">
                  <span className="tool-category-label">Web</span>
                  <span className="tool-category-items">Wordpress, Gsuite, HTML, CSS</span>
                </div>
                <div className="tool-category">
                  <span className="tool-category-label">Communication</span>
                  <span className="tool-category-items">outils emailing, réseaux sociaux</span>
                </div>
              </div>
            </div>
          </div>

          {/* Langues */}
          <div className="languages">
            <h3 className="languages-title">Langues</h3>
            <div className="languages-grid">
              <div className="language-card">
                <span className="language-flag">🇫🇷</span>
                <h4>Français</h4>
                <p>Langue maternelle</p>
                <div className="language-bar">
                  <div className="language-progress" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="language-card">
                <span className="language-flag">🇬🇧</span>
                <h4>Anglais</h4>
                <p>Opérationnel - B2</p>
                <div className="language-bar">
                  <div className="language-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="language-card">
                <span className="language-flag">🇪🇸</span>
                <h4>Espagnol</h4>
                <p>Débutant - A2</p>
                <div className="language-bar">
                  <div className="language-progress" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projet HEXAVAX */}
      <section id="projet" className={`projet ${isVisible.projet ? 'visible' : ''}`}>
        <div className="section-container">
          <span className="section-label">PROJET PHARE</span>
          <h2 className="section-title">HEXAVAX</h2>
          
          <div className="projet-content">
            <div className="projet-header">
              <img src={logoPresidence} alt="Présidence de la République" className="projet-logo" />
              <div className="projet-intro">
                <h3>Partenariat Présidence de la République</h3>
                <p className="projet-tagline">Plateforme d'optimisation des campagnes vaccinales développée en collaboration avec le Palais de l'Alma</p>
              </div>
            </div>

            {/* Classement */}
            <div className="projet-ranking">
              <div className="ranking-card">
                <span className="ranking-icon">🏆</span>
                <div className="ranking-info">
                  <span className="ranking-position">2ème place</span>
                  <span className="ranking-label">sur le podium</span>
                </div>
              </div>
              <div className="ranking-card">
                <span className="ranking-icon">🎯</span>
                <div className="ranking-info">
                  <span className="ranking-position">Top 10</span>
                  <span className="ranking-label">sur 850 élèves</span>
                </div>
              </div>
            </div>

            <div className="projet-video">
              <iframe 
                width="100%" 
                height="450" 
                src="https://www.youtube.com/embed/Sn1Yg1jge-U" 
                title="HEXAVAX Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="projet-details">
              <div className="projet-pillars">
                <h4>Les 5 piliers</h4>
                <div className="pillars-grid">
                  <div className="pillar">
                    <span className="pillar-icon">🔮</span>
                    <span>Anticipation</span>
                  </div>
                  <div className="pillar">
                    <span className="pillar-icon">🎯</span>
                    <span>Priorisation</span>
                  </div>
                  <div className="pillar">
                    <span className="pillar-icon">🤝</span>
                    <span>Aide</span>
                  </div>
                  <div className="pillar">
                    <span className="pillar-icon">🔍</span>
                    <span>Identification</span>
                  </div>
                  <div className="pillar">
                    <span className="pillar-icon">📋</span>
                    <span>Duplication</span>
                  </div>
                </div>
              </div>

              <div className="projet-users">
                <h4>Cibles</h4>
                <div className="users-grid">
                  <div className="user-type">
                    <span className="user-icon">🏛️</span>
                    <span>État français</span>
                  </div>
                  <div className="user-type">
                    <span className="user-icon">💊</span>
                    <span>Pharmaciens</span>
                  </div>
                </div>
              </div>

              <div className="projet-features">
                <h4>Fonctionnalités clés</h4>
                <div className="features-list">
                  <div className="feature">
                    <span className="feature-number">01</span>
                    <div>
                      <h5>Vision synthétique</h5>
                      <p>5 campagnes vaccinales : tendances passées, urgences médicales et couverture sanitaire</p>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-number">02</span>
                    <div>
                      <h5>Prédictions XGBoost</h5>
                      <p>Modélisation prédictive optimisée pour les données saisonnières</p>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-number">03</span>
                    <div>
                      <h5>Carte interactive</h5>
                      <p>4 vues (nationale, régionale, départementale, DOM-TOM), 6 calques d'analyse, slider temporel et export CSV</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projet-impact">
                <div className="impact-card">
                  <span className="impact-icon">⚡</span>
                  <div>
                    <h5>Impact</h5>
                    <p>Gain de <strong>4 à 6 semaines</strong> de réactivité pour les autorités sanitaires</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`contact ${isVisible.contact ? 'visible' : ''}`}>
        <div className="section-container">
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">Échangeons !</h2>
          <p className="contact-intro">Vous avez un projet, une opportunité d'alternance ou simplement envie d'échanger ? N'hésitez pas à me contacter.</p>
          
          <div className="contact-grid">
            <a href="mailto:manon.fournier59@gmail.com" className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>manon.fournier59@gmail.com</p>
            </a>

            <a href="tel:+33660177007" className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Téléphone</h3>
              <p>06 60 17 70 07</p>
            </a>

            <a href="https://www.linkedin.com/in/manon-fournier1/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <p>manon-fournier1</p>
            </a>

            <div className="contact-card location">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Localisation</h3>
              <p>Wambrechies (59)</p>
              <span className="contact-extra">Permis B • Véhiculée</span>
            </div>
          </div>

          <div className="contact-cta">
            <a href="mailto:manon.fournier59@gmail.com" className="btn btn-primary btn-large">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Envoyer un message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>© 2025 Manon Fournier • Fait avec 💚 et beaucoup de café</p>
        </div>
      </footer>
    </div>
  )
}

export default App
