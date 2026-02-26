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


    // Booking page
    booking_title:          "Begin Your Luna Piena Experience",
    booking_select_room:    "Select Room *",
    serena_price:           "€280 / night · King Bed · Garden View",
    luna_price:             "€220 / night · Queen Bed · Courtyard View",
    piena_price:            "€380 / night · King Bed · Terrace",
    not_sure:               "Not sure yet",
    well_help:              "We'll help you choose",
    checkin_label:          "Check-in Date *",
    checkout_label:         "Check-out Date *",
    first_name_label:       "First Name *",
    last_name_label:        "Last Name *",
    email_label:            "Email Address *",
    phone_label:            "Phone / WhatsApp",
    guests_label:           "Number of Guests",
    notes_label:            "Special Requests or Notes",
    special_needs_label:    "Special Needs",
    needs_kids_bed:         "Bed or crib for kids",
    needs_pet:              "Bringing a pet",
    needs_accessibility:    "Accessibility needs",
    needs_early_checkin:    "Early check-in",
    needs_late_checkout:    "Late check-out",
    needs_special_occasion: "Special occasion",
    send_booking:           "Send Booking Request",
    booking_success_title:  "We received your request!",
    booking_success_msg:    "Thank you for choosing Luna Piena. We'll be in touch within 24 hours to confirm your stay.",

    // Newsletter
    stay_connected:         "Stay Connected",
    newsletter_subtitle:    "Subscribe for stories, recipes, and exclusive offers.",
    subscribe:              "Subscribe",
    your_email:             "Your email address",


    // Booking page - left panel + form header
    booking_reserve_label:  "Reserve Your Room",
    booking_intro_text:     "Fill out the form and we'll confirm your reservation within 24 hours. All stays include breakfast, personalized service, and the warmth of a home away from home.",
    perk_boutique:          "Boutique rooms with curated details",
    perk_breakfast:         "Homemade breakfast included",
    perk_lucy:              "Meet Lucy, our resident companion",
    perk_smarthome:         "Smart home & streaming included",
    perk_confirm:           "We'll confirm by email within 24 hrs",
    booking_form_title:     "Request a Reservation",
    booking_required_note:  "All fields marked * are required",

    // Nav contact
    nav_contact:            "Contact",

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


    // Booking page
    booking_title:          "Comienza Tu Experiencia Luna Piena",
    booking_select_room:    "Seleccionar Habitación *",
    serena_price:           "€280 / noche · Cama King · Vista al Jardín",
    luna_price:             "€220 / noche · Cama Queen · Vista al Patio",
    piena_price:            "€380 / noche · Cama King · Terraza",
    not_sure:               "Aún no estoy seguro",
    well_help:              "Te ayudamos a elegir",
    checkin_label:          "Fecha de Llegada *",
    checkout_label:         "Fecha de Salida *",
    first_name_label:       "Nombre *",
    last_name_label:        "Apellido *",
    email_label:            "Correo Electrónico *",
    phone_label:            "Teléfono / WhatsApp",
    guests_label:           "Número de Huéspedes",
    notes_label:            "Solicitudes Especiales o Notas",
    special_needs_label:    "Necesidades Especiales",
    needs_kids_bed:         "Cama o cuna para niños",
    needs_pet:              "Viajo con mascota",
    needs_accessibility:    "Necesidades de accesibilidad",
    needs_early_checkin:    "Check-in anticipado",
    needs_late_checkout:    "Check-out tardío",
    needs_special_occasion: "Ocasión especial",
    send_booking:           "Enviar Solicitud de Reserva",
    booking_success_title:  "¡Recibimos tu solicitud!",
    booking_success_msg:    "Gracias por elegir Luna Piena. Nos pondremos en contacto en 24 horas para confirmar tu estancia.",

    // Newsletter
    stay_connected:         "Mantente Conectado",
    newsletter_subtitle:    "Suscríbete para historias, recetas y ofertas exclusivas.",
    subscribe:              "Suscribirse",
    your_email:             "Tu correo electrónico",

    // Booking page - left panel + form header
    booking_reserve_label:  "Reserva Tu Habitación",
    booking_intro_text:     "Completa el formulario y confirmaremos tu reserva en 24 horas. Todas las estancias incluyen desayuno, servicio personalizado y la calidez de un hogar lejos del hogar.",
    perk_boutique:          "Habitaciones boutique con detalles cuidados",
    perk_breakfast:         "Desayuno casero incluido",
    perk_lucy:              "Conoce a Lucy, nuestra compañera residente",
    perk_smarthome:         "Smart home y streaming incluidos",
    perk_confirm:           "Confirmamos por correo en 24 hrs",
    booking_form_title:     "Solicitar una Reserva",
    booking_required_note:  "Todos los campos marcados con * son obligatorios",

    // Nav contact
    nav_contact:            "Contacto",

    footer_explore:         "Explorar",
    footer_info:            "Información",
    footer_tagline:         "Una experiencia de hotel boutique de Lupo, donde el encanto italiano se une a la modernidad.",
  },

  // IT is populated at runtime from the cache or the Claude API
  it: {
    nav_rooms:  'Camere',
    nav_dining:  'Gastronomia',
    nav_events:  'Eventi',
    nav_about:  'Chi Siamo',
    nav_journal:  'Diario',
    nav_contact:  'Contatto',
    guest_portal:  'Portale Ospiti',
    hero_tagline:  'LUNA PIENA by Lupo Group',
    hero_title:  'Ogni Notte Come una Luna Piena',
    hero_description: 'Un santuario boutique nel cuore della Toscana. Tranquillo. Accogliente. Indimenticabile.',
    hero_cta:  'Prenota il Tuo Soggiorno',
    explore_rooms:  'Esplora le Camere',
    discover:  'Scopri',
    rooms_label:  'Alloggi',
    rooms_title:  'Le Nostre Camere',
    view_all:  'Vedi Tutto',
    serena_suite:  'Suite Serena',
    serena_details:  '45 m² · Letto King · Vista sul Giardino',
    luna_room:  'Camera Luna',
    luna_details:  '35 m² · Letto Queen · Vista sul Cortile',
    piena_grand:  'Piena Grand',
    piena_details:  '65 m² · Letto King · Terrazza',
    per_night:  '/ notte',
    reserve:  'Prenota',
    values_label:  'La Nostra Promessa',
    values_title:  'Dove Ogni Dettaglio Conta',
    values_description: 'Ci dedichiamo a creare un\'atmosfera di connessione e comfort, dove ogni dettaglio è pensato per lasciare un\'impressione duratura.',
    value_hospitality: 'Ospitalità',
    value_hospitality_desc: 'Un ambiente caldo e accogliente dove ogni ospite si sente a casa fin dal primo momento.',
    value_comfort:  'Comfort',
    value_comfort_desc: 'Dettagli premurosi e spazi rilassanti garantiscono armonia ed equilibrio durante tutto il soggiorno.',
    value_memorability: 'Memorabilità',
    value_connection: 'Connessione',
    value_connection_desc: 'Legami significativi attraverso un servizio personalizzato e una cura genuina per ogni ospite.',
    availability_label: 'Pianifica la Tua Visita',
    availability_title: 'Disponibilità',
    availability_desc: 'Consulta il nostro calendario per trovare le date perfette per il tuo soggiorno.',
    legend_available: 'Disponibile',
    legend_booked:  'Prenotato',
    dining_label:  'Esperienza Culinaria',
    dining_title:  'Fatto con Amore',
    dining_description: 'Assapora pasti casalinghi autentici preparati con cura. Dalle arepas venezuelane alla pasta confortante, la nostra cucina celebra la tradizione e il calore in ogni piatto.',
    view_menu:  'Vedi il Menù',
    dining_page_title: 'Cena con Noi',
    dining_page_subtitle: 'Pasti fatti in casa con amore, unendo le tradizioni colombiane, italiane e venezuelane con sapori confortanti da tutto il mondo.',
    philosophy_label: 'La Nostra Filosofia',
    philosophy_title: 'Fatto con Amore',
    philosophy_p1:  'A Luna Piena, il cibo è un\'espressione di cura. Il nostro menù include piatti casalinghi ispirati alla cucina colombiana, italiana e venezuelana, preparati freschi su richiesta.',
    philosophy_p2:  'Dalle morbide arepas al mattino alla pasta confortante la sera, ogni pasto è pensato per farti sentire a casa — nutrito e felice.',
    philosophy_callout: 'Il nostro menù speciale è disponibile su richiesta. Comunicaci le tue preferenze e prepareremo qualcosa di delizioso per te.',
    menu_label:  'Cosa Serviamo',
    menu_title:  'Il Menù',
    breakfast:  'Colazione',
    dinner:  'Cena',
    drinks:  'Bevande',
    lucy_note_title:  'Una Nota su Lucy',
    lucy_note:  'La nostra amata compagna Lucy potrebbe unirsi a te durante i pasti. Ti chiediamo gentilmente di non darle cibo umano — ha esigenze dietetiche speciali. (A meno che non sia parmigiano, lei dice che va bene.)',
    about_page_title: 'Chi Siamo',
    story_label:  'La Nostra Storia',
    story_title:  'Nato da un Sogno di Calda Ospitalità',
    story_p1:  'Luna Piena by Lupo è un\'esperienza di hotel boutique che fonde il fascino italiano con un tocco moderno e premuroso. Ogni soggiorno è pensato per sembrare una notte di luna piena: tranquillo, accogliente e indimenticabile.',
    story_p2:  'Ci concentriamo sulla creazione di un\'atmosfera di connessione e comfort. Dal momento del tuo arrivo, diventi parte della nostra famiglia.',
    philosophy_label_about: 'La Nostra Filosofia',
    philosophy_title_about: 'Pulito, Tranquillo, Premuroso',
    philosophy_p1_about: 'I nostri spazi sono progettati per ispirare calma e connessione, offrendo un rifugio senza tempo dalla quotidianità. Crediamo nel potere della semplicità.',
    philosophy_p2_about: 'Ogni elemento di Luna Piena riflette questa visione, dagli interni curati al servizio personalizzato che anticipa ogni tua esigenza.',
    values_label_about: 'I Nostri Valori',
    values_title_about: 'Ciò Che Ci Guida',
    quote:  'Ogni soggiorno è pensato per sembrare una notte di luna piena: tranquillo, accogliente e indimenticabile.',
    quote_attribution: '— La Promessa di Luna Piena',
    events_page_title: 'Organizza il Tuo Evento',
    events_page_subtitle: 'Crea momenti indimenticabili nei nostri spazi intimi ed eleganti progettati per incontri speciali.',
    features_label:  'Cosa Offriamo',
    features_title:  'Tutto Ciò di Cui Hai Bisogno',
    weddings:  'Matrimoni',
    weddings_desc:  'Celebra la tua storia d\'amore in un ambiente intimo che sembra un sogno. Da cerimonia a ricevimento, ogni dettaglio è curato con amore.',
    corporate:  'Ritiri Aziendali',
    corporate_desc:  'Ispira il tuo team in un ambiente tranquillo. Ideale per pianificazione strategica, team building e workshop creativi.',
    private_dining:  'Cena Privata',
    private_dining_desc: 'Organizza una cena esclusiva con menù personalizzati e servizio impeccabile.',
    intimate_venue:  'Venue Intimo',
    intimate_venue_desc: 'Accesso esclusivo ai nostri bellissimi spazi',
    guest_rooms:  'Camere per Ospiti',
    guest_rooms_desc: 'Alloggio per i tuoi invitati',
    custom_catering:  'Catering Personalizzato',
    custom_catering_desc: 'Menù personalizzati per il tuo evento',
    event_planning:  'Organizzazione Eventi',
    event_planning_desc: 'Supporto dedicato dall\'inizio alla fine',
    inquiry_label:  'Contattaci',
    inquiry_title:  'Pianifica il Tuo Evento',
    inquiry_description: 'Raccontaci la tua visione e ti aiuteremo a realizzarla. Che sia un incontro intimo o una grande celebrazione, siamo qui per renderlo indimenticabile.',
    full_name:  'Nome Completo',
    email:  'Email',
    event_type:  'Tipo di Evento',
    select_event_type: 'Seleziona il tipo di evento',
    event_wedding:  'Matrimonio',
    event_celebration: 'Compleanno / Anniversario',
    event_corporate:  'Ritiro Aziendale',
    event_private_dining: 'Cena Privata',
    event_other:  'Altro',
    preferred_date:  'Data Preferita',
    estimated_guests: 'Numero Stimato di Ospiti',
    tell_us:  'Raccontaci del Tuo Evento',
    tell_us_placeholder: 'Condividi la tua visione, richieste speciali o domande...',
    send_inquiry:  'Invia Richiesta',
    select:  'Seleziona',
    journal_title:  'Il Diario',
    featured_category: 'Viaggi e Benessere',
    featured_title:  'L\'Arte del Viaggio Lento: Trovare Pace nell\'Ospitalità Boutique',
    featured_excerpt: 'In un mondo che va sempre più veloce, il viaggio lento è diventato non solo una preferenza ma una necessità. A Luna Piena, abbiamo costruito la nostra filosofia attorno a questa idea.',
    read_article:  'Leggi l\'Articolo',
    stay_connected:  'Resta in Contatto',
    newsletter_subtitle: 'Iscriviti per storie, ricette e offerte esclusive.',
    subscribe:  'Iscriviti',
    your_name:  'Il tuo nome',
    your_email:  'Il tuo indirizzo email',
    rooms_page_title: 'Le Nostre Camere',
    rooms_page_subtitle: 'Ogni spazio progettato per essere il tuo santuario — tranquillo, elegante, indimenticabile.',
    signature_suite:  'Suite di Firma',
    classic_room:  'Camera Classic',
    grand_suite:  'Suite Grand',
    serena_description: 'La nostra suite di firma offre un ampio rifugio con vista sul giardino, con caldi toni terracotta, arredi artigianali e comfort moderni che fondono l\'eleganza toscana con il design contemporaneo.',
    luna_description: 'Intima e serena, la Camera Luna cattura l\'essenza dell\'eleganza italiana. Biancheria morbida in toni terrosi, illuminazione ambientale calda e vista sul cortile creano lo spazio perfetto per il riposo.',
    piena_description: 'Il nostro alloggio più lussuoso dispone di un ampio soggiorno, camera da letto principale con vista panoramica e comfort premurosi. Texture ricche, legni caldi e accenti dorati creano un\'atmosfera di raffinato comfort.',
    king_bed:  'Letto King',
    queen_bed:  'Letto Queen',
    garden_view:  'Vista sul Giardino',
    courtyard_view:  'Vista sul Cortile',
    private_terrace:  'Terrazza Privata',
    panoramic_terrace: 'Terrazza Panoramica',
    premium_amenities: 'Servizi Premium',
    quiet_serene:  'Tranquillo e Sereno',
    reserve_this_room: 'Prenota Questa Camera',
    in_every_room:  'In Ogni Camera',
    amenities:  'Servizi',
    premium_linens:  'Biancheria Premium',
    thread_count:  '400 fili',
    smart_tv:  'Smart TV',
    wifi:  'WiFi ad Alta Velocità',
    complimentary:  'Gratuito',
    climate_control:  'Controllo Clima',
    adjustable_ac:  'Aria Condizionata Regolabile',
    toiletries:  'Articoli da Toilette',
    quality_essentials: 'Essenziali di qualità',
    coffee_tea:  'Caffè e Tè',
    in_room_selection: 'Selezione in camera',
    bedside_outlets:  'Prese Comodino',
    both_sides:  'Entrambi i lati',
    smart_assistant:  'Assistente Intelligente',
    menu_page_title:  'Menù Stagionale',
    menu_page_subtitle: 'Piatti casalinghi freschi che cambiano con le stagioni.',
    menu_section_starters: 'Antipasti',
    menu_section_mains: 'Secondi',
    menu_section_desserts: 'Dessert',
    menu_section_drinks: 'Bevande',
    menu_request_note: 'Tutti i piatti sono preparati freschi su richiesta. Comunicaci le tue preferenze e restrizioni alimentari al momento della prenotazione.',
    menu_price_label: 'a persona',
    menu_available_note: 'La disponibilità stagionale può variare.',
    booking_title:  'Inizia la Tua Esperienza Luna Piena',
    booking_select_room: 'Seleziona Camera *',
    serena_price:  '€280 / notte · Letto King · Vista sul Giardino',
    luna_price:  '€220 / notte · Letto Queen · Vista sul Cortile',
    piena_price:  '€380 / notte · Letto King · Terrazza',
    not_sure:  'Non sono ancora sicuro',
    well_help:  'Ti aiutiamo a scegliere',
    checkin_label:  'Data di Arrivo *',
    checkout_label:  'Data di Partenza *',
    first_name_label: 'Nome *',
    last_name_label:  'Cognome *',
    email_label:  'Indirizzo Email *',
    phone_label:  'Telefono / WhatsApp',
    guests_label:  'Numero di Ospiti',
    notes_label:  'Richieste Speciali o Note',
    special_needs_label: 'Esigenze Speciali',
    needs_kids_bed:  'Letto o culla per bambini',
    needs_pet:  'Viaggio con animale domestico',
    needs_accessibility: 'Esigenze di accessibilità',
    needs_early_checkin: 'Check-in anticipato',
    needs_late_checkout: 'Check-out posticipato',
    needs_special_occasion: 'Occasione speciale',
    send_booking:  'Invia Richiesta di Prenotazione',
    booking_success_title: 'Abbiamo ricevuto la tua richiesta!',
    booking_success_msg: 'Grazie per aver scelto Luna Piena. Ti contatteremo entro 24 ore per confermare il soggiorno.',
    booking_reserve_label: 'Prenota la Tua Camera',
    booking_intro_text: 'Compila il modulo e confermeremo la tua prenotazione entro 24 ore. Tutti i soggiorni includono colazione, servizio personalizzato e il calore di una casa lontano da casa.',
    perk_boutique:  'Camere boutique con dettagli curati',
    perk_breakfast:  'Colazione casalinga inclusa',
    perk_lucy:  'Incontra Lucy, la nostra compagna residente',
    perk_smarthome:  'Smart home e streaming inclusi',
    perk_confirm:  'Confermiamo via email entro 24 ore',
    booking_form_title: 'Richiedi una Prenotazione',
    booking_required_note: 'Tutti i campi contrassegnati con * sono obbligatori',
    footer_explore:  'Esplora',
    footer_info:  'Informazioni',
    footer_tagline:  'Un\'esperienza di hotel boutique by Lupo, dove il fascino italiano incontra la modernità.',
  }
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

  // ── IT is hardcoded, always ready ──────────────────────────
  function loadCachedIT() {
    itReady = true;
    return true;
  }

  // ── Italian is hardcoded — no API call needed ───────────────
  function fetchItalianTranslations() {
    itReady = true;
    if (currentLang === 'it') applyLang('it');
  }

  // ── Wire up language toggle buttons ─────────────────────────
  function initToggles() {
    document.querySelectorAll('.lang-toggle a').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = a.textContent.trim().toLowerCase();
        if (!['en', 'es', 'it'].includes(lang)) return;
        applyLang(lang);
      });
    });
  }

  // ── Boot ─────────────────────────────────────────────────────
  function init() {
    loadCachedIT();           // IT always ready — no-op sets itReady=true
    applyLang(currentLang);  // Apply saved or default language immediately
    initToggles();
  }

  // ── Run on DOM ready ─────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
