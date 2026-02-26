/**
 * translations.js — Luna Piena
 * ─────────────────────────────────────────────────────────────
 * Three-language system: EN (source) · ES (manual) · IT (AI)
 *
 * HOW IT WORKS
 * ────────────
 * 1. EN strings are the source of truth. Edit them here.
 * 2. ES strings are maintained manually below.
 * 3. IT strings are generated automatically by the Claude API
 *    the first time a visitor switches to Italian, then cached
 *    in localStorage. They regenerate automatically whenever
 *    the EN strings change (detected via a hash).
 *
 * TO FORCE A RETRANSLATION
 * ────────────────────────
 * Add ?refresh=1 to any URL, or open the browser console and run:
 *   localStorage.removeItem('lp_it_translations');
 *   location.reload();
 *
 * ADDING A NEW STRING
 * ───────────────────
 * 1. Add  data-i18n="your_key"  to the HTML element
 * 2. Add  your_key: "English text"  to TRANSLATIONS.en below
 * 3. Add  your_key: "Spanish text"  to TRANSLATIONS.es below
 * 4. Italian will auto-generate on next cache miss
 */

// ─────────────────────────────────────────────────────────────
// STRINGS
// ─────────────────────────────────────────────────────────────
const TRANSLATIONS = {

  en: {
    // Navigation
    nav_rooms:              "Rooms",
    nav_dining:             "Dining",
    nav_events:             "Events",
    nav_about:              "Who We Are",
    nav_journal:            "Journal",
    guest_portal:           "Guest Portal",

    // Hero
    hero_tagline:           "LUNA PIENA By Lupo Group",
    hero_title:             "Every Night Like a Full Moon",
    hero_description:       "A boutique sanctuary nestled in the heart of Tuscany. Peaceful. Welcoming. Unforgettable.",
    hero_cta:               "Reserve Your Stay",
    explore_rooms:          "Explore Rooms",
    discover:               "Discover",

    // Rooms
    rooms_label:            "Accommodations",
    rooms_title:            "Our Rooms",
    view_all:               "View All",
    serena_suite:           "Serena Suite",
    serena_details:         "45 sqm · King Bed · Garden View",
    luna_room:              "Luna Room",
    luna_details:           "35 sqm · Queen Bed · Courtyard View",
    piena_grand:            "Piena Grand",
    piena_details:          "65 sqm · King Bed · Terrace",
    per_night:              "/ night",
    reserve:                "Reserve",

    // Values / Promise
    values_label:           "Our Promise",
    values_title:           "Where Every Detail Matters",
    values_description:     "We focus on creating an atmosphere of connection and comfort, where every detail is crafted to leave a lasting impression.",
    value_hospitality:      "Hospitality",
    value_hospitality_desc: "A warm and welcoming environment where every guest feels at home from the moment they arrive.",
    value_comfort:          "Comfort",
    value_comfort_desc:     "Thoughtful details and calming spaces ensure harmony and balance throughout your stay.",
    value_memorability:     "Memorability",
    value_memorability_desc:"Experiences guests will cherish long after their visit — moments that become treasures.",
    value_connection:       "Connection",
    value_connection_desc:  "Meaningful bonds through personalized service and genuine care for every guest.",

    // Availability calendar
    availability_label:     "Plan Your Visit",
    availability_title:     "Availability",
    availability_desc:      "Check our calendar to find the perfect dates for your stay.",
    legend_available:       "Available",
    legend_booked:          "Booked",

    // Dining page
    dining_label:           "Culinary Experience",
    dining_title:           "Homemade With Love",
    dining_description:     "Experience authentic home-cooked meals prepared with care. From Venezuelan arepas to comforting pasta, our kitchen celebrates tradition and warmth with every dish.",
    view_menu:              "View Our Menu",
    dining_page_title:      "Dine With Us",
    dining_page_subtitle:   "Homemade meals prepared with love, blending Colombian, Italian and Venezuelan traditions with comforting flavors from around the world.",
    philosophy_label:       "Our Philosophy",
    philosophy_title:       "Made With Love",
    philosophy_p1:          "At Luna Piena, food is an expression of care. Our menu features homemade dishes inspired by Colombian, Italian and Venezuelan cuisine and comfort food classics, prepared fresh upon request.",
    philosophy_p2:          "From fluffy arepas in the morning to comforting pasta in the evening, every meal is crafted to make you feel at home — nourished and happy.",
    philosophy_callout:     "Our special menu is available upon request. Please let us know your preferences and we'll prepare something delicious for you.",
    menu_label:             "What We Serve",
    menu_title:             "The Menu",
    breakfast:              "Breakfast",
    dinner:                 "Dinner",
    drinks:                 "Drinks",
    lucy_note_title:        "A Note About Lucy",
    lucy_note:              "Our beloved companion Lucy may join you during meals. We kindly ask that you please do not feed her any human food — she has special dietary needs. (Unless it's parmesan cheese, she says that's okay.)",

    // About page
    about_page_title:       "Who We Are",
    story_label:            "Our Story",
    story_title:            "Born From a Dream of Warm Hospitality",
    story_p1:               "Luna Piena by Lupo is a boutique hotel experience that blends Italian charm with a modern, thoughtful touch. Each stay is carefully designed to feel like a full-moon night: peaceful, welcoming, and unforgettable.",
    story_p2:               "We focus on creating an atmosphere of connection and comfort, where every detail is crafted to leave a lasting impression. From the moment you arrive, you become part of our family.",
    philosophy_label_about: "Our Philosophy",
    philosophy_title_about: "Clean, Peaceful, Thoughtful",
    philosophy_p1_about:    "Our spaces are designed to inspire calm and connection, offering a timeless retreat from the everyday. We believe in the power of simplicity — that the most memorable experiences come from genuine warmth, not excess.",
    philosophy_p2_about:    "Every element of Luna Piena reflects this vision, from our carefully curated interiors to the personalized service that anticipates your every need.",
    values_label_about:     "Our Values",
    values_title_about:     "What Guides Us",
    quote:                  "Each stay is carefully designed to feel like a full-moon night: peaceful, welcoming, and unforgettable.",
    quote_attribution:      "— The Luna Piena Promise",

    // Events page
    events_page_title:      "Host Your Event",
    events_page_subtitle:   "Create unforgettable moments in our intimate, elegant spaces designed for gatherings that matter.",
    features_label:         "What We Offer",
    features_title:         "Everything You Need",
    weddings:               "Weddings",
    weddings_desc:          "Celebrate your love story in an intimate setting that feels like a dream. From ceremony to reception, every detail is crafted with care.",
    corporate:              "Corporate Retreats",
    corporate_desc:         "Inspire your team in a tranquil environment. Perfect for strategic planning, team building, and creative workshops.",
    private_dining:         "Private Dining",
    private_dining_desc:    "Host an exclusive dinner for your closest friends, family, or colleagues with personalized menus and impeccable service.",
    intimate_venue:         "Intimate Venue",
    intimate_venue_desc:    "Exclusive access to our beautiful spaces",
    guest_rooms:            "Guest Rooms",
    guest_rooms_desc:       "Accommodations for your guests",
    custom_catering:        "Custom Catering",
    custom_catering_desc:   "Personalized menus for your event",
    event_planning:         "Event Planning",
    event_planning_desc:    "Dedicated support from start to finish",
    inquiry_label:          "Get in Touch",
    inquiry_title:          "Plan Your Event",
    inquiry_description:    "Tell us about your vision and we'll help bring it to life. Whether it's an intimate gathering or a grand celebration, we're here to make it unforgettable.",
    full_name:              "Full Name",
    email:                  "Email",
    event_type:             "Event Type",
    select_event_type:      "Select event type",
    event_wedding:          "Wedding",
    event_celebration:      "Birthday / Anniversary",
    event_corporate:        "Corporate Retreat",
    event_private_dining:   "Private Dining",
    event_other:            "Other",
    preferred_date:         "Preferred Date",
    estimated_guests:       "Estimated Guests",
    tell_us:                "Tell Us About Your Event",
    tell_us_placeholder:    "Share your vision, special requests, or questions...",
    send_inquiry:           "Send Inquiry",
    select:                 "Select",

    // Blog / Journal
    journal_title:          "The Journal",
    featured_category:      "Travel & Wellness",
    featured_title:         "The Art of Slow Travel: Finding Peace in Boutique Hospitality",
    featured_excerpt:       "In a world that moves faster each day, slow travel has become not just a preference but a necessity. At Luna Piena, we've built our philosophy around this idea.",
    read_article:           "Read Article",
    stay_connected:         "Stay Connected",
    newsletter_subtitle:    "Subscribe for stories, recipes, and exclusive offers.",
    subscribe:              "Subscribe",
    your_name:              "Your name",
    your_email:             "Your email address",


    // Rooms page
    rooms_page_title:       "Our Rooms",
    rooms_page_subtitle:    "Each space designed to be your sanctuary — peaceful, elegant, unforgettable.",
    signature_suite:        "Signature Suite",
    classic_room:           "Classic Room",
    grand_suite:            "Grand Suite",
    serena_description:     "Our signature suite offers an expansive retreat with garden views, featuring warm terracotta tones, handcrafted furnishings, and modern comforts that blend Tuscan elegance with contemporary design.",
    luna_description:       "Intimate and serene, the Luna Room captures the essence of Italian elegance. Soft linens in earthy tones, warm ambient lighting, and courtyard views create the perfect space for peaceful restoration.",
    piena_description:      "Our most luxurious accommodation features a spacious living area, master bedroom with panoramic views, and thoughtful amenities. Rich textures, warm woods, and golden accents create an atmosphere of refined comfort.",
    king_bed:               "King Bed",
    queen_bed:              "Queen Bed",
    garden_view:            "Garden View",
    courtyard_view:         "Courtyard View",
    private_terrace:        "Private Terrace",
    panoramic_terrace:      "Panoramic Terrace",
    premium_amenities:      "Premium Amenities",
    quiet_serene:           "Quiet & Serene",
    reserve_this_room:      "Reserve This Room",
    in_every_room:          "In Every Room",
    amenities:              "Amenities",
    premium_linens:         "Premium Linens",
    thread_count:           "400 thread count",
    smart_tv:               "Smart TV",
    wifi:                   "High-Speed WiFi",
    complimentary:          "Complimentary",
    climate_control:        "Climate Control",
    adjustable_ac:          "Adjustable AC",
    toiletries:             "Toiletries",
    quality_essentials:     "Quality essentials",
    coffee_tea:             "Coffee & Tea",
    in_room_selection:      "In-room selection",
    bedside_outlets:        "Bedside Outlets",
    both_sides:             "Both sides",
    smart_assistant:        "Smart Assistant",

    // Seasonal menu page
    menu_page_title:        "Seasonal Menu",
    menu_page_subtitle:     "Fresh, homemade dishes that change with the seasons.",
    menu_section_starters:  "Starters",
    menu_section_mains:     "Mains",
    menu_section_desserts:  "Desserts",
    menu_section_drinks:    "Drinks",
    menu_request_note:      "All dishes are prepared fresh upon request. Please let us know your preferences and any dietary restrictions when booking.",
    menu_price_label:       "per person",
    menu_available_note:    "Seasonal availability may vary.",

    // Footer
    footer_explore:         "Explore",
    footer_info:            "Information",
    footer_tagline:         "A boutique hotel experience by Lupo, where Italian charm meets modern thoughtfulness.",
  },

  // ─────────────────────────────────────────────────────────────
  // SPANISH — edit manually
  // ─────────────────────────────────────────────────────────────
  es: {
    nav_rooms:              "Habitaciones",
    nav_dining:             "Gastronomía",
    nav_events:             "Eventos",
    nav_about:              "Quiénes Somos",
    nav_journal:            "Diario",
    guest_portal:           "Portal de Huéspedes",

    hero_tagline:           "LUNA PIENA Por Lupo Group",
    hero_title:             "Cada Noche Como Luna Llena",
    hero_description:       "Un santuario boutique en el corazón de Toscana. Tranquilo. Acogedor. Inolvidable.",
    hero_cta:               "Reserva Tu Estadía",
    explore_rooms:          "Ver Habitaciones",
    discover:               "Descubrir",

    rooms_label:            "Alojamientos",
    rooms_title:            "Nuestras Habitaciones",
    view_all:               "Ver Todo",
    serena_suite:           "Suite Serena",
    serena_details:         "45 m² · Cama King · Vista al Jardín",
    luna_room:              "Habitación Luna",
    luna_details:           "35 m² · Cama Queen · Vista al Patio",
    piena_grand:            "Piena Grand",
    piena_details:          "65 m² · Cama King · Terraza",
    per_night:              "/ noche",
    reserve:                "Reservar",

    values_label:           "Nuestra Promesa",
    values_title:           "Donde Cada Detalle Importa",
    values_description:     "Nos enfocamos en crear una atmósfera de conexión y confort, donde cada detalle está diseñado para dejar una impresión duradera.",
    value_hospitality:      "Hospitalidad",
    value_hospitality_desc: "Un entorno cálido y acogedor donde cada huésped se siente como en casa desde el primer momento.",
    value_comfort:          "Confort",
    value_comfort_desc:     "Detalles cuidadosos y espacios tranquilos aseguran armonía y equilibrio durante toda tu estadía.",
    value_memorability:     "Memorabilidad",
    value_memorability_desc:"Experiencias que los huéspedes atesorarán mucho después de su visita.",
    value_connection:       "Conexión",
    value_connection_desc:  "Vínculos significativos a través de un servicio personalizado y un cuidado genuino.",

    availability_label:     "Planifica Tu Visita",
    availability_title:     "Disponibilidad",
    availability_desc:      "Consulta nuestro calendario para encontrar las fechas perfectas para tu estadía.",
    legend_available:       "Disponible",
    legend_booked:          "Reservado",

    dining_label:           "Experiencia Culinaria",
    dining_title:           "Hecho con Amor",
    dining_description:     "Disfruta comidas caseras auténticas preparadas con cariño. Desde arepas venezolanas hasta pasta reconfortante, nuestra cocina celebra la tradición y el calor en cada plato.",
    view_menu:              "Ver Nuestro Menú",
    dining_page_title:      "Dine Con Nosotros",
    dining_page_subtitle:   "Comidas caseras preparadas con amor, combinando tradiciones colombianas, italianas y venezolanas con sabores reconfortantes de todo el mundo.",
    philosophy_label:       "Nuestra Filosofía",
    philosophy_title:       "Hecho con Amor",
    philosophy_p1:          "En Luna Piena, la comida es una expresión de cuidado. Nuestro menú incluye platos caseros inspirados en la cocina colombiana, italiana y venezolana, preparados frescos bajo pedido.",
    philosophy_p2:          "Desde arepas esponjosas por la mañana hasta pasta reconfortante por la noche, cada comida está diseñada para hacerte sentir en casa.",
    philosophy_callout:     "Nuestro menú especial está disponible bajo pedido. Cuéntanos tus preferencias y prepararemos algo delicioso para ti.",
    menu_label:             "Lo Que Servimos",
    menu_title:             "El Menú",
    breakfast:              "Desayuno",
    dinner:                 "Cena",
    drinks:                 "Bebidas",
    lucy_note_title:        "Una Nota Sobre Lucy",
    lucy_note:              "Nuestra querida compañera Lucy puede unirse a ti durante las comidas. Te pedimos amablemente que no le des comida humana — tiene necesidades dietéticas especiales. (A menos que sea queso parmesano, ella dice que está bien.)",

    about_page_title:       "Quiénes Somos",
    story_label:            "Nuestra Historia",
    story_title:            "Nacido de un Sueño de Hospitalidad Cálida",
    story_p1:               "Luna Piena by Lupo es una experiencia de hotel boutique que combina el encanto italiano con un toque moderno y reflexivo.",
    story_p2:               "Nos enfocamos en crear una atmósfera de conexión y confort. Desde el momento en que llegas, te conviertes en parte de nuestra familia.",
    philosophy_label_about: "Nuestra Filosofía",
    philosophy_title_about: "Limpio, Tranquilo, Reflexivo",
    philosophy_p1_about:    "Nuestros espacios están diseñados para inspirar calma y conexión, ofreciendo un refugio atemporal de lo cotidiano.",
    philosophy_p2_about:    "Cada elemento de Luna Piena refleja esta visión, desde nuestros interiores cuidadosamente seleccionados hasta el servicio personalizado.",
    values_label_about:     "Nuestros Valores",
    values_title_about:     "Lo Que Nos Guía",
    quote:                  "Cada estadía está cuidadosamente diseñada para sentirse como una noche de luna llena: tranquila, acogedora e inolvidable.",
    quote_attribution:      "— La Promesa de Luna Piena",

    events_page_title:      "Organiza Tu Evento",
    events_page_subtitle:   "Crea momentos inolvidables en nuestros espacios íntimos y elegantes.",
    features_label:         "Lo Que Ofrecemos",
    features_title:         "Todo Lo Que Necesitas",
    weddings:               "Bodas",
    weddings_desc:          "Celebra tu historia de amor en un entorno íntimo que parece un sueño.",
    corporate:              "Retiros Corporativos",
    corporate_desc:         "Inspira a tu equipo en un ambiente tranquilo. Ideal para planificación estratégica y talleres creativos.",
    private_dining:         "Cena Privada",
    private_dining_desc:    "Organiza una cena exclusiva con menús personalizados y servicio impecable.",
    intimate_venue:         "Venue Íntimo",
    intimate_venue_desc:    "Acceso exclusivo a nuestros hermosos espacios",
    guest_rooms:            "Habitaciones para Huéspedes",
    guest_rooms_desc:       "Alojamiento para tus invitados",
    custom_catering:        "Catering Personalizado",
    custom_catering_desc:   "Menús personalizados para tu evento",
    event_planning:         "Planificación de Eventos",
    event_planning_desc:    "Apoyo dedicado de principio a fin",
    inquiry_label:          "Contáctanos",
    inquiry_title:          "Planifica Tu Evento",
    inquiry_description:    "Cuéntanos sobre tu visión y te ayudaremos a hacerla realidad.",
    full_name:              "Nombre Completo",
    email:                  "Correo Electrónico",
    event_type:             "Tipo de Evento",
    select_event_type:      "Selecciona el tipo de evento",
    event_wedding:          "Boda",
    event_celebration:      "Cumpleaños / Aniversario",
    event_corporate:        "Retiro Corporativo",
    event_private_dining:   "Cena Privada",
    event_other:            "Otro",
    preferred_date:         "Fecha Preferida",
    estimated_guests:       "Número Estimado de Invitados",
    tell_us:                "Cuéntanos sobre tu Evento",
    tell_us_placeholder:    "Comparte tu visión, solicitudes especiales o preguntas...",
    send_inquiry:           "Enviar Consulta",
    select:                 "Seleccionar",

    journal_title:          "El Diario",
    featured_category:      "Viajes y Bienestar",
    featured_title:         "El Arte del Viaje Lento: Encontrando Paz en la Hospitalidad Boutique",
    featured_excerpt:       "En un mundo que se mueve más rápido cada día, el viaje lento se ha convertido en una necesidad. En Luna Piena, hemos construido nuestra filosofía alrededor de esta idea.",
    read_article:           "Leer Artículo",
    stay_connected:         "Mantente Conectado",
    newsletter_subtitle:    "Suscríbete para historias, recetas y ofertas exclusivas.",
    subscribe:              "Suscribirse",
    your_name:              "Tu nombre",
    your_email:             "Tu correo electrónico",


    // Rooms page
    rooms_page_title:       "Nuestras Habitaciones",
    rooms_page_subtitle:    "Cada espacio diseñado para ser tu santuario — tranquilo, elegante, inolvidable.",
    signature_suite:        "Suite Insignia",
    classic_room:           "Habitación Clásica",
    grand_suite:            "Suite Grand",
    serena_description:     "Nuestra suite insignia ofrece un retiro amplio con vistas al jardín, con tonos terracota cálidos, muebles artesanales y comodidades modernas que combinan la elegancia toscana con el diseño contemporáneo.",
    luna_description:       "Íntima y serena, la Habitación Luna captura la esencia de la elegancia italiana. Ropa de cama suave en tonos terrosos, iluminación ambiental cálida y vistas al patio crean el espacio perfecto para el descanso.",
    piena_description:      "Nuestro alojamiento más lujoso cuenta con una espaciosa sala de estar, dormitorio principal con vistas panorámicas y comodidades cuidadosas. Texturas ricas, maderas cálidas y acentos dorados crean una atmósfera de confort refinado.",
    king_bed:               "Cama King",
    queen_bed:              "Cama Queen",
    garden_view:            "Vista al Jardín",
    courtyard_view:         "Vista al Patio",
    private_terrace:        "Terraza Privada",
    panoramic_terrace:      "Terraza Panorámica",
    premium_amenities:      "Amenidades Premium",
    quiet_serene:           "Tranquilo y Sereno",
    reserve_this_room:      "Reservar Esta Habitación",
    in_every_room:          "En Cada Habitación",
    amenities:              "Amenidades",
    premium_linens:         "Ropa de Cama Premium",
    thread_count:           "400 hilos",
    smart_tv:               "Smart TV",
    wifi:                   "WiFi de Alta Velocidad",
    complimentary:          "Gratuito",
    climate_control:        "Control de Clima",
    adjustable_ac:          "AC Ajustable",
    toiletries:             "Artículos de Tocador",
    quality_essentials:     "Esenciales de calidad",
    coffee_tea:             "Café y Té",
    in_room_selection:      "Selección en habitación",
    bedside_outlets:        "Enchufes al Lado de la Cama",
    both_sides:             "Ambos lados",
    smart_assistant:        "Asistente Inteligente",

    // Seasonal menu page
    menu_page_title:        "Menú de Temporada",
    menu_page_subtitle:     "Platos caseros frescos que cambian con las estaciones.",
    menu_section_starters:  "Entradas",
    menu_section_mains:     "Platos Principales",
    menu_section_desserts:  "Postres",
    menu_section_drinks:    "Bebidas",
    menu_request_note:      "Todos los platos se preparan frescos bajo pedido. Infórmenos sus preferencias y restricciones dietéticas al reservar.",
    menu_price_label:       "por persona",
    menu_available_note:    "La disponibilidad estacional puede variar.",

    footer_explore:         "Explorar",
    footer_info:            "Información",
    footer_tagline:         "Una experiencia de hotel boutique de Lupo, donde el encanto italiano se une a la modernidad.",
  },

  // IT is populated at runtime from the cache or the Claude API
  it: {}
};

// ─────────────────────────────────────────────────────────────
// RUNTIME ENGINE
// ─────────────────────────────────────────────────────────────
(function () {
  const CACHE_KEY    = 'lp_it_translations';
  const HASH_KEY     = 'lp_en_hash';
  const LANGS        = ['en', 'es', 'it'];

  let currentLang = localStorage.getItem('lp_lang') || 'en';
  let itReady      = false;   // true once IT strings are loaded
  let itPending    = false;   // true while fetch is in flight

  // ── Simple hash of the EN strings to detect changes ─────────
  function hashEN() {
    const str = JSON.stringify(TRANSLATIONS.en);
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return h.toString(36);
  }

  // ── Apply translations to every data-i18n element ───────────
  function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined && dict[key] !== '') {
        el.textContent = dict[key];
      } else if (lang !== 'en' && TRANSLATIONS.en[key]) {
        // Fallback to EN if translation missing
        el.textContent = TRANSLATIONS.en[key];
      }
    });

    // Update active state on language toggle buttons
    document.querySelectorAll('.lang-toggle a').forEach(a => {
      a.classList.toggle('active', a.textContent.trim().toLowerCase() === lang);
    });

    // Persist choice
    localStorage.setItem('lp_lang', lang);
    currentLang = lang;
    document.documentElement.lang = lang;
  }

  // ── Load IT from localStorage cache ─────────────────────────
  function loadCachedIT() {
    try {
      const cached    = localStorage.getItem(CACHE_KEY);
      const cachedHash = localStorage.getItem(HASH_KEY);
      const currentHash = hashEN();

      // Force refresh via URL param
      const forceRefresh = new URLSearchParams(window.location.search).get('refresh') === '1';

      if (!forceRefresh && cached && cachedHash === currentHash) {
        TRANSLATIONS.it = JSON.parse(cached);
        itReady = true;
        return true;   // cache hit
      }
    } catch (e) { /* ignore parse errors */ }
    return false;      // cache miss
  }

  // ── Fetch IT from Claude API ─────────────────────────────────
  async function fetchItalianTranslations() {
    if (itPending) return;
    itPending = true;

    // Show subtle loading indicator only if user is on IT
    const indicator = document.createElement('div');
    if (currentLang === 'it') {
      indicator.style.cssText = 'position:fixed;bottom:20px;right:20px;background:rgba(244,147,33,0.9);color:#1a1a1a;padding:10px 18px;font-family:Nunito,sans-serif;font-size:0.75rem;letter-spacing:0.1em;z-index:9999;';
      indicator.textContent = 'Translating to Italian…';
      document.body.appendChild(indicator);
    }

    try {
      const enStrings = TRANSLATIONS.en;
      const prompt = `You are a professional Italian translator specializing in luxury hospitality.

Translate the following JSON object from English to Italian. Return ONLY valid JSON — no markdown, no explanation, no backticks. Preserve all keys exactly as-is. Keep brand names (Luna Piena, Lupo Group, Serena Suite, Luna Room, Piena Grand, Lucy) untranslated. Keep currency symbols, measurements (sqm, m²), and punctuation patterns similar to the original.

${JSON.stringify(enStrings, null, 2)}`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      if (!response.ok) throw new Error('API error ' + response.status);

      const data = await response.json();
      const raw  = data.content.find(b => b.type === 'text')?.text || '{}';

      // Strip any accidental markdown fences
      const clean = raw.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);

      // Save to cache
      TRANSLATIONS.it = parsed;
      localStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
      localStorage.setItem(HASH_KEY, hashEN());
      itReady = true;

      // Apply immediately if user is waiting on IT
      if (currentLang === 'it') applyLang('it');

    } catch (err) {
      console.warn('[Luna Piena i18n] Italian translation failed:', err);
      // Fallback: use EN strings for IT
      TRANSLATIONS.it = { ...TRANSLATIONS.en };
      itReady = true;
      if (currentLang === 'it') applyLang('it');
    } finally {
      itPending = false;
      if (indicator.parentNode) indicator.parentNode.removeChild(indicator);
    }
  }

  // ── Wire up language toggle buttons ─────────────────────────
  function initToggles() {
    document.querySelectorAll('.lang-toggle a').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = a.textContent.trim().toLowerCase();
        if (!LANGS.includes(lang)) return;

        if (lang === 'it') {
          if (itReady) {
            applyLang('it');
          } else {
            // Apply EN as placeholder while fetching
            applyLang('en');
            fetchItalianTranslations();
          }
        } else {
          applyLang(lang);
        }
      });
    });
  }

  // ── Boot ─────────────────────────────────────────────────────
  function init() {
    // Try to load IT from cache immediately (synchronous)
    loadCachedIT();

    // If user's last language was IT and we have the cache, apply it
    // Otherwise fall back to EN while we fetch
    if (currentLang === 'it' && !itReady) {
      applyLang('en');
      fetchItalianTranslations();
    } else {
      applyLang(currentLang);
    }

    // Pre-fetch IT in the background if not cached
    // (so it's instant when user clicks IT)
    if (!itReady) {
      // Delay background fetch to not compete with page render
      setTimeout(fetchItalianTranslations, 2000);
    }

    initToggles();
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
