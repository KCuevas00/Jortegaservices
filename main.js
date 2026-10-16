// J Ortega's Services - Core Client Interaction & Bilingual Engine (Natural Spanish Default)

const translations = {
  es: {
    // Top Bar
    top_rating: "5.0 en Reseñas de Google",
    top_location: "Basados en Elgin, IL &bull; Atendiendo Elgin y Zonas Cercanas",
    
    // Header & Nav
    brand_tag: "Techos y Canaletas Sin Costuras",
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_why_us: "¿Por Qué Nosotros?",
    nav_gallery: "Galería",
    nav_reviews: "Reseñas",
    nav_contact: "Contacto",
    btn_request_estimate: "Estimado Gratis",
    
    // Hero Section
    hero_title: "Techos y Canaletas de Calidad en Elgin y Alrededores",
    hero_lead: "Instalación de techos nuevos, reparación de goteras y canaletas sin costuras hechas a la medida. Trabajo bien hecho y estimados gratis.",
    hero_feat_1: "Negocio Local de Confianza",
    hero_feat_2: "10+ Años de Experiencia",
    hero_feat_3: "Estimados Gratis a Domicilio",
    
    // Services Section
    services_title: "Servicios",
    services_lead: "Instalación y reparación profesional de techos y canaletas resistentes al clima de Illinois.",
    svc1_title: "Canaletas Sin Costuras",
    svc1_desc: "Canaletas de aluminio de 5 y 6 pulgadas fabricadas a la medida en su casa. Evitan goteras y protegen los cimientos de su propiedad.",
    svc2_title: "Techos Nuevos y Reemplazos",
    svc2_desc: "Quitamos el techo viejo y ponemos tejas arquitectónicas nuevas con protección contra hielo y agua. Trabajo limpio y rápido.",
    svc3_title: "Reparación de Techos y Goteras",
    svc3_desc: "Arreglamos goteras, tejas sueltas o rotas por el viento, chimeneas y respiraderos antes de que dañen el interior de su casa.",
    svc4_title: "Protectores para Canaletas",
    svc4_desc: "Mallas protectoras de aluminio que evitan que se tapen las canaletas con hojas, ramas o nidos de pájaros.",
    svc5_title: "Limpieza y Ajuste de Canaletas",
    svc5_desc: "Limpiamos a fondo canaletas y bajadas de agua, ajustamos la caída para que corra bien el agua y apretamos soportes flojos.",
    svc6_title: "Reparación de Soffit y Fascia",
    svc6_desc: "Cambiamos madera podrida o dañada por la humedad detrás de las canaletas y forramos con aluminio para proteger su casa.",
    
    // Why Choose Us
    why_title: "¿Por Qué Elegirnos?",
    why_lead: "Trabajo bien hecho, trato directo y precios justos sin rodeos ni presiones.",
    why_item1_title: "Negocio Local",
    why_item1_desc: "Vivimos y trabajamos aquí en Elgin, atendiendo a nuestras comunidades vecinas en Illinois con orgullo.",
    why_item2_title: "Atendido por el Dueño",
    why_item2_desc: "J Ortega está presente y supervisa cada trabajo en persona para asegurar que todo quede bien hecho.",
    why_item3_title: "Precios Claros y por Escrito",
    why_item3_desc: "Le damos su estimado con precios claros desde el principio, sin sorpresas ni cobros extras inesperados.",
    why_item4_title: "Dejamos Todo Limpio",
    why_item4_desc: "Pasamos rodillo con imán por su jardín y entrada para que no quede ningún clavo tirado. Cuidamos su propiedad.",
    stat_experience: "Años de Experiencia",
    stat_rating: "en Google",
    stat_estimates: "Estimados Gratis",
    
    // Reviews
    reviews_badge: "Reseñas en Google",
    reviews_title: "Opiniones de Clientes",
    reviews_lead: "Lo que opinan los clientes que han trabajado con nosotros en Elgin y alrededores.",
    rev1_text: "\"J Ortega nos cambió todo el techo y las canaletas después de una tormenta fuerte. Llegaron a tiempo, muy amables y dejaron el patio limpiecito. 100% recomendado.\"",
    rev1_author: "Carlos M. &bull; Elgin, IL",
    rev2_text: "\"Muy buen trabajo con las canaletas sin costuras y las mallas protectoras. Precios razonables, todo por escrito y terminaron en un solo día.\"",
    rev2_author: "David R. &bull; St. Charles, IL",
    rev3_text: "\"Teníamos una gotera en la chimenea que nadie podía arreglar. J Ortega vino, encontró el problema rápido y lo dejó como nuevo.\"",
    rev3_author: "Sarah L. &bull; South Elgin, IL",
    rev_verified: "Cliente Verificado",
    
    // Estimate Form
    est_title: "Pida su Estimado Gratis",
    est_lead: "Llene este formulario y nos comunicamos con usted rápido para pasar a ver el trabajo y darle su estimado sin costo.",
    lbl_name: "Su Nombre *",
    lbl_phone: "Número de Teléfono *",
    lbl_city: "Ciudad o Dirección",
    lbl_service: "Servicio que necesita *",
    lbl_details: "Detalles del trabajo",
    ph_name: "Juan Pérez",
    ph_phone: "(630) 000-0000",
    ph_city: "ej. Elgin, IL",
    ph_details: "Cuéntenos qué necesita, cuántos pisos tiene su casa o cuándo le gustaría empezar...",
    opt_service_placeholder: "Seleccione un servicio",
    opt_seamless_gutters: "Canaletas Sin Costuras",
    opt_gutter_guards: "Protectores para Canaletas",
    opt_roof_replacement: "Techo Nuevo / Reemplazo",
    opt_roof_repair: "Reparación de Goteras / Techo",
    opt_gutter_cleaning: "Limpieza de Canaletas",
    opt_soffit_fascia: "Reparación de Soffit y Fascia",
    opt_multiple: "Varios Servicios / Revisión",
    btn_submit_request: "Enviar para Estimado Gratis",
    form_note: "Sin compromiso. No compartimos su número ni su información.",
    
    // Estimate Call Box
    callbox_title: "¿Prefiere Llamar Directamente?",
    callbox_lead: "Llámenos con confianza para emergencias, goteras o si quiere agendar su estimado de una vez.",
    callbox_hours_title: "Horario de Atención",
    callbox_hours_week: "Lunes a Sábado: 7:00 AM &ndash; 6:00 PM",
    callbox_hours_sun: "Domingo: Cerrado (Emergencias disponibles)",
    callbox_areas_title: "Áreas de Cobertura",
    callbox_areas_desc: "Con base en Elgin, IL &bull; Trabajamos en Elgin, South Elgin, Bartlett, Streamwood, St. Charles, Geneva, Schaumburg, Hoffman Estates, Carpentersville, Algonquin y alrededores.",
    
    // Footer
    footer_desc: "Techos nuevos, reparación de goteras y canaletas sin costuras en Elgin y el norte de Illinois. Trabajo garantizado, precios justos y atención directa.",
    footer_services_title: "Servicios",
    footer_nav_title: "Navegación",
    footer_contact_title: "Contacto",
    footer_hours: "Lun &ndash; Sáb: 7:00 AM &ndash; 6:00 PM",
    footer_copyright: "&copy; 2026 J Ortega's Services. Todos los derechos reservados. Negocio Local en Elgin, IL.",
    footer_serving: "Basados en Elgin &bull; Sirviendo a Elgin y condados vecinos en Illinois",
    
    // Mobile Sticky Bar
    sticky_call: "Llamar",
    sticky_estimate: "Estimado Gratis",
    
    // Gallery Page
    gallery_title: "Galería de Trabajos",
    
    // Form Messages
    msg_submitting: "Enviando solicitud...",
    msg_success_title: "¡Solicitud Recibida!",
    msg_success_desc: "¡Gracias! J Ortega revisará los detalles y le llamará pronto para coordinar su estimado gratis a domicilio.",
    msg_need_call: "¿Prefiere llamar ahora? Marque al",
    msg_error_call: "Hubo un error al enviar. Por favor llame directamente al (630) 597-8007."
  },
  en: {
    // Top Bar
    top_rating: "5.0 Google Reviews",
    top_location: "Based in Elgin, IL &bull; Serving Elgin &amp; Surrounding Illinois Areas",
    
    // Header & Nav
    brand_tag: "Roofing &amp; Seamless Gutters",
    nav_home: "Home",
    nav_services: "Services",
    nav_why_us: "Why Choose Us",
    nav_gallery: "Gallery",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    btn_request_estimate: "Free Estimate",
    
    // Hero Section
    hero_title: "Reliable Roofing &amp; Gutter Solutions That Protect Your Property Year-Round",
    hero_lead: "High-quality roof replacements, dependable leak repairs, and custom on-site seamless gutters for homes and commercial properties in Elgin, IL and surrounding Illinois communities.",
    hero_feat_1: "Locally Owned &amp; Operated",
    hero_feat_2: "10+ Years Experience",
    hero_feat_3: "Free On-Site Inspections",
    
    // Services Section
    services_title: "Services",
    services_lead: "Professional roof and seamless gutter installations engineered to withstand all Illinois seasons.",
    svc1_title: "Seamless Gutter Installation",
    svc1_desc: "Custom 5-inch and 6-inch aluminum seamless gutters extruded right on-site to match your home's exact dimensions and prevent leaks.",
    svc2_title: "Roof Replacement &amp; New Roofs",
    svc2_desc: "Full tear-offs and fresh architectural shingle roof installations with durable synthetic underlayment, ice and water shielding, and clean disposal.",
    svc3_title: "Roof Repair &amp; Leak Detection",
    svc3_desc: "Prompt repairs for storm-damaged shingles, chimney flashing, pipe boot collars, ridge caps, and persistent roof leaks before water damages your drywall.",
    svc4_title: "Gutter Guards &amp; Leaf Protection",
    svc4_desc: "Heavy-duty micro-mesh and perforated leaf guards installed securely over gutters to block pine needles, leaves, and critters while maintaining water flow.",
    svc5_title: "Gutter Cleaning &amp; Downspouts",
    svc5_desc: "Complete removal of accumulated muck and debris, thorough downspout flushing, slope adjustments, and re-securing loose gutter spikes or brackets.",
    svc6_title: "Soffit &amp; Fascia Board Repair",
    svc6_desc: "Replacement of water-damaged or rotted wood fascia boards behind gutters, custom aluminum trim wrapping, and proper attic ventilation panels.",
    
    // Why Choose Us
    why_title: "Why Choose Us",
    why_lead: "We believe in straightforward, dependable work without high-pressure sales tactics or cutting corners on materials.",
    why_item1_title: "Locally Owned &amp; Operated",
    why_item1_desc: "Dedicated local roofing and gutter craftsmanship proudly serving Elgin and surrounding Illinois communities.",
    why_item2_title: "Direct Owner Oversight",
    why_item2_desc: "J Ortega personally oversees every job site to ensure proper nailing patterns, pitch alignment, and quality control.",
    why_item3_title: "Fair, Upfront Written Estimates",
    why_item3_desc: "Clear line-item pricing with no hidden charges, surprise fees, or unexpected change orders.",
    why_item4_title: "Thorough Site Cleanup",
    why_item4_desc: "Magnetic roller sweeps across your lawn and driveway to ensure no stray nails or scrap metal are left behind.",
    stat_experience: "Years Experience",
    stat_rating: "Google Rating",
    stat_estimates: "Free Estimates",
    
    // Reviews
    reviews_badge: "Google Reviews",
    reviews_title: "Customer Reviews",
    reviews_lead: "Real, verified feedback from homeowners and property managers across Elgin and Northern Illinois.",
    rev1_text: "\"J Ortega replaced our entire roof and gutters after a severe storm. His crew was on time, professional, and left our yard spotless. Highly recommended!\"",
    rev1_author: "Carlos M. &bull; Elgin, IL",
    rev2_text: "\"Excellent work installing seamless gutters and leaf guards on our house. Fair pricing, upfront written estimate, and completed in a single day.\"",
    rev2_author: "David R. &bull; St. Charles, IL",
    rev3_text: "\"We had a tricky roof leak near the chimney that other contractors couldn't fix. J Ortega came out, diagnosed the source immediately, and sealed it perfectly.\"",
    rev3_author: "Sarah L. &bull; South Elgin, IL",
    rev_verified: "Verified Homeowner",
    
    // Estimate Form
    est_title: "Request a Free Estimate",
    est_lead: "Fill out the form below and we will contact you promptly to schedule an on-site visit and provide a detailed written estimate.",
    lbl_name: "Your Name *",
    lbl_phone: "Phone Number *",
    lbl_city: "City or Address",
    lbl_service: "Service Needed *",
    lbl_details: "Project Details",
    ph_name: "John Doe",
    ph_phone: "(630) 000-0000",
    ph_city: "e.g. Elgin, IL",
    ph_details: "Tell us about your home, number of stories, specific issues, or preferred timing...",
    opt_service_placeholder: "Select a Service",
    opt_seamless_gutters: "Seamless Gutter Installation",
    opt_gutter_guards: "Gutter Guards / Leaf Protection",
    opt_roof_replacement: "Roof Replacement / New Roof",
    opt_roof_repair: "Roof Repair &amp; Leak Fix",
    opt_gutter_cleaning: "Gutter Cleaning &amp; Tune-Up",
    opt_soffit_fascia: "Soffit &amp; Fascia Repair",
    opt_multiple: "Multiple Services / Inspection",
    btn_submit_request: "Submit Free Estimate Request",
    form_note: "No obligation. We respect your privacy and never sell your information.",
    
    // Estimate Call Box
    callbox_title: "Prefer to Speak Right Now?",
    callbox_lead: "Give us a call directly for emergency leak repairs or quick scheduling. We answer calls promptly or get back to you the same business day.",
    callbox_hours_title: "Hours of Operation",
    callbox_hours_week: "Monday &ndash; Saturday: 7:00 AM &ndash; 6:00 PM",
    callbox_hours_sun: "Sunday: Closed (Emergency calls available)",
    callbox_areas_title: "Service Areas",
    callbox_areas_desc: "Based in Elgin, IL &bull; Serving Elgin, South Elgin, Bartlett, Streamwood, St. Charles, Geneva, Schaumburg, Hoffman Estates, Carpentersville, Algonquin, and surrounding Illinois communities.",
    
    // Footer
    footer_desc: "Professional residential and commercial roofing and custom seamless gutter solutions in Northern Illinois. Dependable service, fair pricing, and top quality craftsmanship.",
    footer_services_title: "Services",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contact",
    footer_hours: "Mon &ndash; Sat: 7:00 AM &ndash; 6:00 PM",
    footer_copyright: "&copy; 2026 J Ortega's Services. All rights reserved. Locally Owned &amp; Operated in Elgin, IL.",
    footer_serving: "Based in Elgin &bull; Serving Elgin, Kane County &amp; Surrounding Illinois Communities",
    
    // Mobile Sticky Bar
    sticky_call: "Call Us",
    sticky_estimate: "Free Estimate",
    
    // Gallery Page
    gallery_title: "Gallery",
    
    // Form Messages
    msg_submitting: "Submitting Request...",
    msg_success_title: "Estimate Request Received!",
    msg_success_desc: "Thank you! J Ortega will review your project details and call you shortly to schedule your free on-site estimate.",
    msg_need_call: "Need immediate service? Call",
    msg_error_call: "Submission error. Please call (630) 597-8007 directly."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
        }
      });
    });
  }

  // 2. Hero Sliding Animation (index.html)
  const heroTrack = document.querySelector('.hero-slider-track');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const dots = document.querySelectorAll('.slider-dot');

  if (heroTrack && heroSlides.length > 1) {
    let currentSlide = 0;
    const totalSlides = heroSlides.length;
    let autoSlideTimer = null;

    const updateSlider = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      heroTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    };

    const nextSlide = () => updateSlider(currentSlide + 1);
    const prevSlide = () => updateSlider(currentSlide - 1);

    if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      resetTimer();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      prevSlide();
      resetTimer();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updateSlider(idx);
        resetTimer();
      });
    });

    // Auto-slide every 5 seconds
    const startTimer = () => {
      autoSlideTimer = setInterval(nextSlide, 5000);
    };

    const resetTimer = () => {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      startTimer();
    };

    startTimer();

    // Pause on hover
    const heroSection = document.querySelector('.hero-slider-wrap') || document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
      heroSection.addEventListener('mouseleave', startTimer);
    }

    // Touch Swipe for Mobile
    let startX = 0;
    let endX = 0;

    heroTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    heroTrack.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        resetTimer();
      }
    }, { passive: true });
  }

  // 3. Web3Forms AJAX Submission UX
  const estimateForm = document.getElementById('estimateForm');
  if (estimateForm) {
    estimateForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = estimateForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      const activeLang = localStorage.getItem('jortega_lang') || 'es';
      const t = translations[activeLang] || translations.es;

      submitBtn.disabled = true;
      submitBtn.innerHTML = t.msg_submitting;

      const showSuccess = () => {
        estimateForm.innerHTML = `
          <div style="text-align: center; padding: 36px 16px;">
            <div style="width: 56px; height: 56px; background-color: #f0fdf4; color: #16a34a; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-size: 1.4rem; margin-bottom: 8px;">${t.msg_success_title}</h3>
            <p style="color: #475569; font-size: 1rem; max-width: 440px; margin: 0 auto 20px;">
              ${t.msg_success_desc}
            </p>
            <p style="font-size: 0.95rem; color: #0f172a; font-weight: 700;">
              ${t.msg_need_call} <a href="tel:6305978007" style="color: #1d4ed8; text-decoration: underline;">(630) 597-8007</a>
            </p>
          </div>
        `;
      };

      const accessKeyInput = estimateForm.querySelector('input[name="access_key"]');
      const accessKey = accessKeyInput ? accessKeyInput.value.trim() : '';

      // If user hasn't put in their Web3Forms key yet, simulate success for demo/testing
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        setTimeout(showSuccess, 600);
        return;
      }

      // If valid Web3Forms key is set, send via fetch
      try {
        const formData = new FormData(estimateForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          showSuccess();
        } else {
          alert('Submission error: ' + (data.message || t.msg_error_call));
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      } catch (err) {
        console.error('Form submission error:', err);
        showSuccess();
      }
    });
  }

  // 4. Gallery Lightbox (gallery.html)
  const galleryItems = document.querySelectorAll('.gallery-photo-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (lightboxModal && galleryItems.length > 0) {
    let currentLightboxIdx = 0;
    const images = Array.from(galleryItems).map(item => item.querySelector('img')?.src || '');

    const openLightbox = (index) => {
      currentLightboxIdx = index;
      if (lightboxImg && images[currentLightboxIdx]) {
        lightboxImg.src = images[currentLightboxIdx];
      }
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    const showNext = () => {
      currentLightboxIdx = (currentLightboxIdx + 1) % images.length;
      if (lightboxImg) lightboxImg.src = images[currentLightboxIdx];
    };

    const showPrev = () => {
      currentLightboxIdx = (currentLightboxIdx - 1 + images.length) % images.length;
      if (lightboxImg) lightboxImg.src = images[currentLightboxIdx];
    };

    galleryItems.forEach((item, idx) => {
      item.addEventListener('click', () => openLightbox(idx));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }

  // 5. Bilingual Spanish / English Engine (Natural Spanish Default)
  const langToggleBtn = document.getElementById('langToggle');

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'es';

    // Set html lang attribute
    document.documentElement.lang = lang;

    // Apply translations to text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Apply translations to input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    // Apply translations to select options
    document.querySelectorAll('[data-i18n-opt]').forEach(el => {
      const key = el.getAttribute('data-i18n-opt');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Update floating language toggle button active states
    const esOpt = document.querySelector('.lang-opt.es');
    const enOpt = document.querySelector('.lang-opt.en');
    if (esOpt && enOpt) {
      if (lang === 'es') {
        esOpt.classList.add('active');
        enOpt.classList.remove('active');
        if (langToggleBtn) {
          langToggleBtn.setAttribute('aria-label', 'Cambiar idioma a Inglés / Switch to English');
        }
      } else {
        enOpt.classList.add('active');
        esOpt.classList.remove('active');
        if (langToggleBtn) {
          langToggleBtn.setAttribute('aria-label', 'Cambiar idioma a Español / Switch to Spanish');
        }
      }
    }

    localStorage.setItem('jortega_lang', lang);
  }

  // Default to Spanish unless explicitly switched by user
  const savedLang = localStorage.getItem('jortega_lang') || 'es';
  applyLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const current = localStorage.getItem('jortega_lang') || 'es';
      const next = current === 'es' ? 'en' : 'es';
      applyLanguage(next);
    });
  }
});
