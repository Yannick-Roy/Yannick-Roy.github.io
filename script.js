// ==========================================
// 1. DICTIONNAIRE DE TRADUCTION COMPLET (i18n)
// ==========================================
const translations = {
  fr: {
    nav_projects: "Projets",
    nav_expertise: "Expertise",
    nav_contact: "Contact",
    nav_cv: "CV",
    hero_status: "Disponible pour un poste permanent Senior / Lead UX",
    hero_subtitle: "Lead UX & Product Designer avec 17 ans d’expérience. Spécialisé en <strong>ergonomie cognitive</strong>, <strong>design centré utilisateur</strong>.",
    hero_cta_primary: "Découvrir mes projets",

    // Bento Grid Projets
    projects_title: "Projets",
    projects_subtitle: "Une démonstration de design d’impact, de recherche rigoureuse et de systèmes robustes.",
    project_bdc_desc: "Refonte d'un système national d'autorisation de prêts. Réduction du cycle de validation de 10 jours à 24 heures, facilitant 240 M$ de transactions.",
    project_bdc_stat: "vs 10 jours d'autorisation d'origine",
    project_bell_desc: "Benchmark, tests utilisateurs et audit d'accessibilité pour Bell Canada. Exemple d'application au portail EPP.",
    project_bell_stat: "Tests utilisateurs individuels",
    project_boires_desc: "Design d'une plateforme spécialisée vin. Alignement des règles d'affaires et définition des parcours utilisateurs.",
    project_boires_stat: "Sur mesure & centré utilisateur",

    // Section Expertise
    expertise_title: "Expertise",
    expertise_subtitle: "Une méthodologie rigoureuse basée sur les sciences cognitives et les données probantes.",
    expertise_1_title: "Ergonomie Cognitive",
    expertise_1_desc: "Compréhension du fonctionnement humain (système attentionnel, mémoire, théories de l'apprentissage) appliquée à la conception d'interfaces pour réduire la charge mentale.",
    expertise_2_title: "Design Centré Utilisateur (UX)",
    expertise_2_desc: "Philosophie et processus holistiques plaçant l'humain au cœur de la conception, de la recherche exploratoire à la validation continue.",
    expertise_3_title: "Architecture d'Information & Systèmes",
    expertise_3_desc: "Structuration de systèmes d'information, modélisation de flux d'affaires complexes (workflows) et gouvernance de solutions évolutives.",

    // Arsenal Méthodologique Tags
    methodologies_title: "Méthodes & pratiques",
    exp_tag_heuristics: "Évaluation heuristique",
    exp_tag_card_sorting: "Tri de cartes",
    exp_tag_tree_jack: "Tree testing / Tree jack",
    exp_tag_user_testing: "Test utilisateur",
    exp_tag_interview: "Entrevue",
    exp_tag_user_journey: "User journey",
    exp_tag_persona: "Persona",
    exp_tag_benchmark: "Benchmark",
    exp_tag_info_architecture: "Information architecture",
    exp_tag_workflow: "Workflow",
    exp_tag_design_system: "Design System",
    exp_tag_roadmap: "Feuille de route (Roadmap)",
    exp_tag_wcag: "WCAG",
    tech_stack_title: "outils",

    // Section Contact & Footer
    contact_title: "Prêt à rejoindre votre équipe",
    contact_subtitle: "Actuellement ouvert aux opportunités permanentes en tant que Senior ou Lead UX / Product Designer. Basé à Ottawa (disponible pour le télétravail).",
    contact_btn: "Discuter d’une opportunité",
    footer_credits: "Tous droits réservés.",
    footer_luciole: "Ce portfolio utilise la typographie Luciole, conçue spécifiquement pour la déficience visuelle et la dyslexie."
  },
  en: {
    nav_projects: "Projects",
    nav_expertise: "Expertise",
    nav_contact: "Contact",
    nav_cv: "Resume",
    hero_status: "Seeking permanent Senior / Lead UX roles",
    hero_subtitle: "Lead UX & Product Designer with 17 years of experience. Specialized in <strong>cognitive ergonomics</strong>, <strong>user-centered design</strong>.",
    hero_cta_primary: "Explore my work",

    // Bento Grid Projects
    projects_title: "Projects",
    projects_subtitle: "A showcase of high-impact product design, strategic research, and data-driven solutions.",
    project_bdc_desc: "Redesign of a national loan approval system. Reduced approval cycle from 10 days to under 24 hours, facilitating $240M in transactions.",
    project_bdc_stat: "vs original 10-day waiting cycle",
    project_bell_desc: "Benchmark, user testing and accessibility audit for Bell Canada. EPP portal application example.",
    project_bell_stat: "Individual user tests conducted",
    project_boires_desc: "Design of a specialized wine platform. Alignment of business rules and definition of user journeys.",
    project_boires_stat: "Custom-made & deeply user-centric",

    // Section Expertise
    expertise_title: "Expertise",
    expertise_subtitle: "A rigorous methodology grounded in cognitive science and evidence-based design.",
    expertise_1_title: "Cognitive Ergonomics",
    expertise_1_desc: "Understanding human cognition (attention, working memory, learning theories) applied to interface design to systematically reduce cognitive load.",
    expertise_2_title: "User-Centered Design (UX)",
    expertise_2_desc: "Holistic philosophy and process placing humans at the heart of design, from exploratory research to continuous validation.",
    expertise_3_title: "Information Architecture & Systems",
    expertise_3_desc: "Structuring information systems, modeling complex business workflows, and establishing scalable Design System governance.",

    // Expertise Tags
    methodologies_title: "Methods & Practices",
    exp_tag_heuristics: "Heuristic Evaluation",
    exp_tag_card_sorting: "Card Sorting",
    exp_tag_tree_jack: "Tree Testing / Tree Jack",
    exp_tag_user_testing: "User Testing",
    exp_tag_interview: "User Interview",
    exp_tag_user_journey: "User Journey",
    exp_tag_persona: "Persona",
    exp_tag_benchmark: "UX Benchmark",
    exp_tag_info_architecture: "Information Architecture",
    exp_tag_workflow: "Workflow",
    exp_tag_design_system: "Design System",
    exp_tag_roadmap: "UX Roadmap",
    exp_tag_wcag: "WCAG Compliance",
    tech_stack_title: "Tools",

    // Section Contact & Footer
    contact_title: "Ready to join your team",
    contact_subtitle: "Currently seeking permanent Senior or Lead UX / Product Designer roles. Based in Ottawa, fully equipped for remote collaboration.",
    contact_btn: "Let's discuss opportunities",
    footer_credits: "All rights reserved.",
    footer_luciole: "This portfolio is set in Luciole, a typeface specifically designed for visual impairment and dyslexia."
  }
};

// ==========================================
// 2. GESTION DE LA LANGUE INITIALE & CHANGEMENT
// ==========================================
function getInitialLanguage() {
  const savedLang = localStorage.getItem("user_lang");
  if (savedLang && (savedLang === "fr" || savedLang === "en")) {
    return savedLang;
  }
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === "fr" ? "fr" : "en";
}

let currentLang = getInitialLanguage();

function updatePageLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  const langText = document.getElementById("lang-text");
  if (langText) {
    langText.textContent = lang === "fr" ? "EN" : "FR";
  }

  // Lien du CV selon la langue
  const cvBtn = document.querySelector(".btn-cv");
  if (cvBtn) {
    if (lang === "fr") {
      cvBtn.setAttribute("href", "CV_Yannick-Roy_2026_fr.pdf");
    } else {
      cvBtn.setAttribute("href", "CV_Yannick-Roy_2026_en.pdf");
    }
  }
}

// ==========================================
// 3. ACTIONS AU CHARGEMENT DU DOM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  updatePageLanguage(currentLang);

  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      localStorage.setItem("user_lang", currentLang);
      updatePageLanguage(currentLang);
    });
  }

  initHistogramScrollAnimation();
});

// ==========================================
// 4. ANIMATION AU SCROLL DE L'HISTOGRAMME BELL
// ==========================================
function initHistogramScrollAnimation() {
  const histogram = document.getElementById('bell-histogram-wrapper');
  if (!histogram) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = histogram.querySelectorAll('.chart-bar-fill');
        bars.forEach((bar) => {
          const targetHeight = bar.getAttribute('data-height');
          if (targetHeight) {
            bar.style.height = targetHeight;
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(histogram);
}

// ==========================================
// 5. COMPARATEUR DE VUE AVANT/APRÈS (BOIRES)
// ==========================================
function switchBoiresView(view) {
  const imgFr = document.getElementById('img-boires-compare');
  const captionFr = document.getElementById('caption-boires-compare');
  const btnOldFr = document.getElementById('btn-old-boires');
  const btnNewFr = document.getElementById('btn-new-boires');

  const imgEn = document.getElementById('img-boires-compare-en');
  const captionEn = document.getElementById('caption-boires-compare-en');
  const btnOldEn = document.getElementById('btn-old-boires-en');
  const btnNewEn = document.getElementById('btn-new-boires-en');

  if (view === 'old') {
    if (imgFr) {
      imgFr.src = 'images/Boires/Boires-OldSite.jpg';
      captionFr.innerHTML = `<strong>Ancienne page d'accueil :</strong> Structure de blog linéaire sur fond blanc, peu hiérarchisée, sans orientation transactionnelle claire ni entonnoir de conversion.`;
    }
    if (btnOldFr && btnNewFr) {
      btnOldFr.classList.add('active');
      btnNewFr.classList.remove('active');
    }

    if (imgEn) {
      imgEn.src = 'images/Boires/Boires-OldSite.jpg';
      captionEn.innerHTML = `<strong>Legacy Homepage:</strong> Classic linear layout, missing e-commerce conversion triggers and clear purchase pathways.`;
    }
    if (btnOldEn && btnNewEn) {
      btnOldEn.classList.add('active');
      btnNewEn.classList.remove('active');
    }

  } else if (view === 'new') {
    if (imgFr) {
      imgFr.src = 'images/Boires/Boires-InProduction-accueil.png';
      captionFr.innerHTML = `<strong>Nouvelle page d'accueil :</strong> Design épuré haut de gamme focalisé sur l'immersion sensorielle et le tunnel d'achat fluide.`;
    }
    if (btnNewFr && btnOldFr) {
      btnNewFr.classList.add('active');
      btnOldFr.classList.remove('active');
    }

    if (imgEn) {
      imgEn.src = 'images/Boires/Boires-InProduction-accueil.png';
      captionEn.innerHTML = `<strong>Redesigned Homepage:</strong> High-end immersive aesthetic focused on sensory experience and fluid checkout paths.`;
    }
    if (btnNewEn && btnOldEn) {
      btnNewEn.classList.add('active');
      btnOldEn.classList.remove('active');
    }
  }
}

// ==========================================
// 6. LIGHTBOX DE ZOOM INTERACTIVE
// ==========================================
function zoomImage(imgElement) {
  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = imgElement.src;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-overlay');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

// ==========================================
// 8. SWITCHERS INTERACTIFS BELL EPP (LANDING & REPORTS)
// ==========================================
function switchBellLanding(view) {
  const imgFr = document.getElementById('img-bell-landing');
  const btnOldFr = document.getElementById('btn-bell-landing-old');
  const btnNewFr = document.getElementById('btn-bell-landing-new');

  const imgEn = document.getElementById('img-bell-landing-en');
  const btnOldEn = document.getElementById('btn-bell-landing-old-en');
  const btnNewEn = document.getElementById('btn-bell-landing-new-en');

  let imgSrc = view === 'new' ? 'images/BellEPP/Epp-LandingNew.png' : 'images/BellEPP/EPP-LandingOld.jpg';

  if (imgFr) imgFr.src = imgSrc;
  if (imgEn) imgEn.src = imgSrc;

  if (btnOldFr && btnNewFr) {
    btnOldFr.classList.toggle('active', view === 'old');
    btnNewFr.classList.toggle('active', view === 'new');
  }
  if (btnOldEn && btnNewEn) {
    btnOldEn.classList.toggle('active', view === 'old');
    btnNewEn.classList.toggle('active', view === 'new');
  }
}

function switchBellReport(tab) {
  const imgFr = document.getElementById('img-bell-report');
  const btn0Fr = document.getElementById('btn-bell-report-0');
  const btn1Fr = document.getElementById('btn-bell-report-1');
  const btn2Fr = document.getElementById('btn-bell-report-2');

  const imgEn = document.getElementById('img-bell-report-en');
  const btn0En = document.getElementById('btn-bell-report-0-en');
  const btn1En = document.getElementById('btn-bell-report-1-en');
  const btn2En = document.getElementById('btn-bell-report-2-en');

  let imgSrc = 'images/BellEPP/EPP-Carousel-report.png';
  if (tab === 'carousel') {
    imgSrc = 'images/BellEPP/EPP-Carousel-report.png';
  } else if (tab === 'email') {
    imgSrc = 'images/BellEPP/Epp-ComparativeTest-OldVScurrent-report.png';
  } else if (tab === 'filters') {
    imgSrc = 'images/BellEPP/EPP-NavigationState-report.png';
  }

  if (imgFr) imgFr.src = imgSrc;
  if (imgEn) imgEn.src = imgSrc;

  const updateBtns = (b0, b1, b2) => {
    if (!b0) return;
    b0.classList.toggle('active', tab === 'carousel');
    b1.classList.toggle('active', tab === 'email');
    b2.classList.toggle('active', tab === 'filters');
  };

  updateBtns(btn0Fr, btn1Fr, btn2Fr);
  updateBtns(btn0En, btn1En, btn2En);
}


// ==========================================
// 5. SWITCHERS INTERACTIFS BOIRES.CA (IMPACT & WIREFRAMES)
// ==========================================
function switchBoiresImpact(view) {
  const imgFr = document.getElementById('img-boires-impact');
  const btnNewFr = document.getElementById('btn-boires-impact-new');
  const btnOldFr = document.getElementById('btn-boires-impact-old');

  const imgEn = document.getElementById('img-boires-impact-en');
  const btnNewEn = document.getElementById('btn-boires-impact-new-en');
  const btnOldEn = document.getElementById('btn-boires-impact-old-en');

  let imgSrc = view === 'new' ? 'images/Boires/Boires-InProduction-accueil.png' : 'images/Boires/Boires-OldSite.jpg';

  if (imgFr) imgFr.src = imgSrc;
  if (imgEn) imgEn.src = imgSrc;

  if (btnNewFr && btnOldFr) {
    btnNewFr.classList.toggle('active', view === 'new');
    btnOldFr.classList.toggle('active', view === 'old');
  }
  if (btnNewEn && btnOldEn) {
    btnNewEn.classList.toggle('active', view === 'new');
    btnOldEn.classList.toggle('active', view === 'old');
  }
}

function switchBoiresWireframes(tab) {
  const imgFr = document.getElementById('img-boires-wireframes');
  const btnHomeFr = document.getElementById('btn-boires-wf-home');
  const btnProdFr = document.getElementById('btn-boires-wf-prod');
  const btnCartFr = document.getElementById('btn-boires-wf-cart');
  const btnCheckoutFr = document.getElementById('btn-boires-wf-checkout');

  const imgEn = document.getElementById('img-boires-wireframes-en');
  const btnHomeEn = document.getElementById('btn-boires-wf-home-en');
  const btnProdEn = document.getElementById('btn-boires-wf-prod-en');
  const btnCartEn = document.getElementById('btn-boires-wf-cart-en');
  const btnCheckoutEn = document.getElementById('btn-boires-wf-checkout-en');

  let imgSrc = 'images/Boires/Boires-Wireframes-AccueilDesktop.png';
  if (tab === 'home') {
    imgSrc = 'images/Boires/Boires-Wireframes-AccueilDesktop.png';
  } else if (tab === 'product') {
    imgSrc = 'images/Boires/Boires-Wireframes-Produit.png';
  } else if (tab === 'cart') {
    imgSrc = 'images/Boires/Boires-Wireframes-Panier.png';
  } else if (tab === 'checkout') {
    imgSrc = 'images/Boires/Boires-Wireframes-Commande.png';
  }

  if (imgFr) imgFr.src = imgSrc;
  if (imgEn) imgEn.src = imgSrc;

  const updateWfBtns = (bHome, bProd, bCart, bCheckout) => {
    if (!bHome) return;
    bHome.classList.toggle('active', tab === 'home');
    bProd.classList.toggle('active', tab === 'product');
    bCart.classList.toggle('active', tab === 'cart');
    bCheckout.classList.toggle('active', tab === 'checkout');
  };

  updateWfBtns(btnHomeFr, btnProdFr, btnCartFr, btnCheckoutFr);
  updateWfBtns(btnHomeEn, btnProdEn, btnCartEn, btnCheckoutEn);
}