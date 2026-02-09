/**
 * Luna Piena - Language Translation System
 * 
 * This script handles EN/ES translations using a hybrid approach:
 * 1. Pre-defined translations for key UI elements (fast, reliable)
 * 2. Stores user preference in localStorage
 * 
 * To use: Include this script in all pages and add data-i18n attributes
 * to elements that need translation.
 */

const LunaPienaTranslations = {
    en: {
        // Navigation
        nav_rooms: "Rooms",
        nav_dining: "Dining", 
        nav_events: "Events",
        nav_about: "Who We Are",
        nav_journal: "News",
        
        // Homepage Hero
        hero_tagline: "By Lupo Hospitality",
        hero_title: "Every Night Like a <em>Full Moon</em>",
        hero_description: "A boutique sanctuary nestled in the heart of Tuscany. Peaceful. Welcoming. Unforgettable.",
        hero_cta: "Reserve Your Stay",
        explore_rooms: "Explore Rooms",
        discover: "Discover",
        scroll_text: "Scroll",
        
        // Values Section
        values_label: "Our Promise",
        values_title: "Where Every Detail Matters",
        values_description: "We focus on creating an atmosphere of connection and comfort, where every detail is crafted to leave a lasting impression.",
        value_hospitality: "Hospitality",
        value_hospitality_desc: "A warm and welcoming environment where every guest feels at home from the moment they arrive.",
        value_comfort: "Comfort",
        value_comfort_desc: "Thoughtful details and calming spaces ensure harmony and balance throughout your stay.",
        value_memorability: "Memorability",
        value_memorability_desc: "Creating experiences guests will cherish long after their visit—moments that become treasures.",
        value_connection: "Connection",
        value_connection_desc: "Meaningful bonds through personalized service and genuine care for every guest.",
        
        // Rooms Section
        rooms_label: "Accommodations",
        rooms_title: "Our Rooms",
        view_all: "View All",
        per_night: "/ night",
        reserve: "Reserve",
        reserve_this_room: "Reserve This Room",
        
        // Room Names & Details
        serena_suite: "Serena Suite",
        serena_details: "45 sqm • King Bed • Garden View",
        luna_room: "Luna Room",
        luna_details: "35 sqm • Queen Bed • Courtyard View",
        piena_grand: "Piena Grand",
        piena_details: "65 sqm • King Bed • Terrace",
        
        // Dining Section
        dining_label: "Culinary Experience",
        dining_title: "Homemade With Love",
        dining_description: "Experience authentic home-cooked meals prepared with care. From Venezuelan arepas to comforting pasta, our kitchen celebrates tradition and warmth with every dish.",
        view_menu: "View Our Menu",
        
        // Dining Page
        dining_page_title: "Dine <em>With Us</em>",
        dining_page_subtitle: "Homemade meals prepared with love, blending Venezuelan traditions with comforting flavors from around the world.",
        philosophy_label: "Our Philosophy",
        philosophy_title: "Made With Love",
        philosophy_p1: "At Luna Piena, food is an expression of care. Our menu features homemade dishes inspired by Venezuelan cuisine and comfort food classics, prepared fresh upon request.",
        philosophy_p2: "From fluffy arepas in the morning to comforting pasta in the evening, every meal is crafted to make you feel at home—nourished and happy.",
        philosophy_callout: "Our special menu is available upon request. Please let us know your preferences and we'll prepare something delicious for you.",
        menu_label: "What We Serve",
        menu_title: "The Menu",
        breakfast: "Breakfast",
        dinner: "Dinner",
        drinks: "Drinks",
        lucy_note_title: "A Note About Lucy",
        lucy_note: "Our beloved companion Lucy may join you during meals. We kindly ask that you <strong>please do not feed her any human food</strong>—she has special dietary needs. (Unless it's parmesan cheese, she says that's okay.)",
        
        // Events Page
        events_page_title: "Host Your <em>Event</em>",
        events_page_subtitle: "Create unforgettable moments in our intimate, elegant spaces designed for gatherings that matter.",
        weddings: "Weddings",
        weddings_desc: "Celebrate your love story in an intimate setting that feels like a dream. From ceremony to reception, every detail is crafted with care.",
        corporate: "Corporate Retreats",
        corporate_desc: "Inspire your team in a tranquil environment. Perfect for strategic planning, team building, and creative workshops.",
        private_dining: "Private Dining",
        private_dining_desc: "Host an exclusive dinner for your closest friends, family, or colleagues with personalized menus and impeccable service.",
        features_label: "What We Offer",
        features_title: "Everything You Need",
        intimate_venue: "Intimate Venue",
        intimate_venue_desc: "Exclusive access to our beautiful spaces",
        custom_catering: "Custom Catering",
        custom_catering_desc: "Personalized menus for your event",
        guest_rooms: "Guest Rooms",
        guest_rooms_desc: "Accommodations for your guests",
        event_planning: "Event Planning",
        event_planning_desc: "Dedicated support from start to finish",
        inquiry_label: "Get in Touch",
        inquiry_title: "Plan Your Event",
        inquiry_description: "Tell us about your vision and we'll help bring it to life. Whether it's an intimate gathering or a grand celebration, we're here to make it unforgettable.",
        
        // Forms
        full_name: "Full Name",
        email: "Email",
        checkin_date: "Check-in Date",
        checkout_date: "Check-out Date",
        arrival_time: "Arrival Time (Optional)",
        num_guests: "Number of Guests",
        select: "Select",
        select_room: "Select Room",
        choose_room: "Choose a room",
        occasion: "Occasion (Optional)",
        select_occasion: "Select an occasion",
        occasion_romantic: "Romantic Getaway",
        occasion_anniversary: "Anniversary",
        occasion_honeymoon: "Honeymoon",
        occasion_birthday: "Birthday Celebration",
        occasion_business: "Business Trip",
        occasion_family: "Family Vacation",
        additional_needs: "Additional Needs",
        kids_bed: "I need a bed for kids",
        bringing_pet: "I'm bringing a pet",
        contact_info: "Contact Information",
        your_name: "Your name",
        your_email: "your@email.com",
        check_availability: "Check Availability",
        event_type: "Event Type",
        select_event_type: "Select event type",
        event_wedding: "Wedding",
        event_corporate: "Corporate Retreat",
        event_private_dining: "Private Dining",
        event_celebration: "Birthday / Anniversary",
        event_other: "Other",
        preferred_date: "Preferred Date",
        estimated_guests: "Estimated Guests",
        tell_us: "Tell Us About Your Event",
        tell_us_placeholder: "Share your vision, special requests, or any questions you have...",
        send_inquiry: "Send Inquiry",
        
        // About Page
        about_page_title: "Who <em>We Are</em>",
        story_label: "Our Story",
        story_title: "Born From a Dream of Warm Hospitality",
        story_p1: "Luna Piena by Lupo is a boutique hotel experience that blends Italian charm with a modern, thoughtful touch. Each stay is carefully designed to feel like a full-moon night: peaceful, welcoming, and unforgettable.",
        story_p2: "We focus on creating an atmosphere of connection and comfort, where every detail is crafted to leave a lasting impression. From the moment you arrive, you become part of our family.",
        philosophy_label_about: "Our Philosophy",
        philosophy_title_about: "Clean, Peaceful, Thoughtful",
        philosophy_p1_about: "Our spaces are designed to inspire calm and connection, offering a timeless retreat from the everyday. We believe in the power of simplicity—that the most memorable experiences come from genuine warmth, not excess.",
        philosophy_p2_about: "Every element of Luna Piena reflects this vision, from our carefully curated interiors to the personalized service that anticipates your every need.",
        values_label_about: "Our Values",
        values_title_about: "What Guides Us",
        quote: "Each stay is carefully designed to feel like a full-moon night: peaceful, welcoming, and unforgettable.",
        quote_attribution: "— The Luna Piena Promise",
        
        // Blog
        journal_title: "The <em>Journal</em>",
        featured_category: "Travel & Wellness",
        featured_title: "The Art of Slow Travel: Finding Peace in Boutique Hospitality",
        featured_excerpt: "In a world that moves faster each day, the concept of slow travel has become not just a preference but a necessity. At Luna Piena, we've built our entire philosophy around this idea—that the best journeys are the ones where you truly stop and breathe.",
        read_article: "Read Article",
        stay_connected: "Stay Connected",
        newsletter_subtitle: "Subscribe to our journal for stories, recipes, and exclusive offers.",
        subscribe: "Subscribe",
        
        // Booking Modal
        modal_title: "Reserve Your Stay",
        modal_subtitle: "Begin your unforgettable experience",
        
        // Guest Portal
        guest_welcome: "Welcome to Luna Piena",
        guest_greeting: "Hello,",
        guest_message: "It's an honor to have you with us. We've prepared everything to make your stay as peaceful and memorable as a full-moon night. Please make yourself at home.",
        your_guide: "Your Guide",
        
        // Footer
        footer_tagline: "A boutique hotel experience by Lupo, where Italian charm meets modern thoughtfulness.",
        footer_explore: "Explore",
        footer_info: "Information",
        guest_portal: "Guest Portal",
        
        // Calendar
        availability_label: "Plan Your Visit",
        availability_title: "Availability",
        availability_desc: "Check our calendar to find the perfect dates for your stay.",
        legend_available: "Available",
        legend_booked: "Booked",
        
        // Misc
        guests: "guests",
        guest: "Guest",
        min_read: "min read",
        
        // Rooms page additional
        rooms_page_title: "Our <em>Rooms</em>",
        rooms_page_subtitle: "Each space designed to be your sanctuary—peaceful, elegant, unforgettable.",
        signature_suite: "Signature Suite",
        classic_room: "Classic Room",
        grand_suite: "Grand Suite",
        serena_description: "Our signature suite offers an expansive retreat with garden views, featuring warm terracotta tones, handcrafted furnishings, and modern comforts that blend Tuscan elegance with contemporary design.",
        luna_description: "Intimate and serene, the Luna Room captures the essence of Italian elegance. Soft linens in earthy tones, warm ambient lighting, and courtyard views create the perfect space for peaceful restoration.",
        piena_description: "Our most luxurious accommodation features a spacious living area, master bedroom with panoramic views, and thoughtful amenities. Rich textures, warm woods, and golden accents create an atmosphere of refined comfort.",
        king_bed: "King Bed",
        queen_bed: "Queen Bed",
        garden_view: "Garden View",
        courtyard_view: "Courtyard View",
        private_terrace: "Private Terrace",
        panoramic_terrace: "Panoramic Terrace",
        quiet_serene: "Quiet & Serene",
        premium_amenities: "Premium Amenities",
        in_every_room: "In Every Room",
        amenities: "Amenities",
        premium_linens: "Premium Linens",
        thread_count: "400 thread count sheets",
        smart_tv: "Smart TV",
        wifi: "High-Speed WiFi",
        complimentary: "Complimentary",
        smart_assistant: "Smart assistant",
        climate_control: "Climate Control",
        adjustable_ac: "Adjustable AC",
        toiletries: "Toiletries",
        quality_essentials: "Quality essentials",
        coffee_tea: "Coffee & Tea",
        in_room_selection: "In-room selection",
        bedside_outlets: "Bedside Outlets",
        both_sides: "Both sides of bed"
    },
    
    es: {
        // Navigation
        nav_rooms: "Habitaciones",
        nav_dining: "Gastronomía",
        nav_events: "Eventos",
        nav_about: "Nosotros",
        nav_journal: "Noticias",
        
        // Homepage Hero
        hero_tagline: "Por Lupo Hospitality",
        hero_title: "Cada Noche Como una <em>Luna Llena</em>",
        hero_description: "Un santuario boutique en el corazón de la Toscana. Tranquilo. Acogedor. Inolvidable.",
        hero_cta: "Reserva Tu Estadía",
        explore_rooms: "Explorar Habitaciones",
        discover: "Descubre",
        scroll_text: "Desliza",
        
        // Values Section
        values_label: "Nuestra Promesa",
        values_title: "Donde Cada Detalle Importa",
        values_description: "Nos enfocamos en crear una atmósfera de conexión y comodidad, donde cada detalle está diseñado para dejar una impresión duradera.",
        value_hospitality: "Hospitalidad",
        value_hospitality_desc: "Un ambiente cálido y acogedor donde cada huésped se siente en casa desde el momento en que llega.",
        value_comfort: "Comodidad",
        value_comfort_desc: "Detalles cuidadosos y espacios tranquilos aseguran armonía y equilibrio durante tu estadía.",
        value_memorability: "Memorabilidad",
        value_memorability_desc: "Creando experiencias que los huéspedes atesorarán mucho después de su visita—momentos que se convierten en tesoros.",
        value_connection: "Conexión",
        value_connection_desc: "Vínculos significativos a través de un servicio personalizado y cuidado genuino por cada huésped.",
        
        // Rooms Section
        rooms_label: "Alojamiento",
        rooms_title: "Nuestras Habitaciones",
        view_all: "Ver Todas",
        per_night: "/ noche",
        reserve: "Reservar",
        reserve_this_room: "Reservar Esta Habitación",
        
        // Room Names & Details
        serena_suite: "Suite Serena",
        serena_details: "45 m² • Cama King • Vista al Jardín",
        luna_room: "Habitación Luna",
        luna_details: "35 m² • Cama Queen • Vista al Patio",
        piena_grand: "Piena Grand",
        piena_details: "65 m² • Cama King • Terraza",
        
        // Dining Section
        dining_label: "Experiencia Culinaria",
        dining_title: "Hecho Con Amor",
        dining_description: "Disfruta de auténticas comidas caseras preparadas con cariño. Desde arepas venezolanas hasta pasta reconfortante, nuestra cocina celebra la tradición y la calidez en cada plato.",
        view_menu: "Ver Nuestro Menú",
        
        // Dining Page
        dining_page_title: "Come <em>Con Nosotros</em>",
        dining_page_subtitle: "Comidas caseras preparadas con amor, mezclando tradiciones venezolanas con sabores reconfortantes de todo el mundo.",
        philosophy_label: "Nuestra Filosofía",
        philosophy_title: "Hecho Con Amor",
        philosophy_p1: "En Luna Piena, la comida es una expresión de cariño. Nuestro menú presenta platos caseros inspirados en la cocina venezolana y clásicos reconfortantes, preparados frescos a pedido.",
        philosophy_p2: "Desde arepas esponjosas por la mañana hasta pasta reconfortante por la noche, cada comida está diseñada para hacerte sentir en casa—nutrido y feliz.",
        philosophy_callout: "Nuestro menú especial está disponible bajo pedido. Déjanos saber tus preferencias y prepararemos algo delicioso para ti.",
        menu_label: "Lo Que Servimos",
        menu_title: "El Menú",
        breakfast: "Desayuno",
        dinner: "Cena",
        drinks: "Bebidas",
        lucy_note_title: "Una Nota Sobre Lucy",
        lucy_note: "Nuestra querida compañera Lucy puede acompañarte durante las comidas. Te pedimos amablemente que <strong>no le des comida humana</strong>—tiene necesidades dietéticas especiales. (A menos que sea queso parmesano, ella dice que está bien.)",
        
        // Events Page
        events_page_title: "Organiza Tu <em>Evento</em>",
        events_page_subtitle: "Crea momentos inolvidables en nuestros espacios íntimos y elegantes diseñados para reuniones que importan.",
        weddings: "Bodas",
        weddings_desc: "Celebra tu historia de amor en un entorno íntimo que se siente como un sueño. Desde la ceremonia hasta la recepción, cada detalle está diseñado con cariño.",
        corporate: "Retiros Corporativos",
        corporate_desc: "Inspira a tu equipo en un ambiente tranquilo. Perfecto para planificación estratégica, team building y talleres creativos.",
        private_dining: "Cenas Privadas",
        private_dining_desc: "Organiza una cena exclusiva para tus amigos más cercanos, familia o colegas con menús personalizados y servicio impecable.",
        features_label: "Lo Que Ofrecemos",
        features_title: "Todo Lo Que Necesitas",
        intimate_venue: "Espacio Íntimo",
        intimate_venue_desc: "Acceso exclusivo a nuestros hermosos espacios",
        custom_catering: "Catering Personalizado",
        custom_catering_desc: "Menús personalizados para tu evento",
        guest_rooms: "Habitaciones",
        guest_rooms_desc: "Alojamiento para tus invitados",
        event_planning: "Planificación",
        event_planning_desc: "Apoyo dedicado de principio a fin",
        inquiry_label: "Contáctanos",
        inquiry_title: "Planifica Tu Evento",
        inquiry_description: "Cuéntanos tu visión y te ayudaremos a hacerla realidad. Ya sea una reunión íntima o una gran celebración, estamos aquí para hacerla inolvidable.",
        
        // Forms
        full_name: "Nombre Completo",
        email: "Correo Electrónico",
        checkin_date: "Fecha de Llegada",
        checkout_date: "Fecha de Salida",
        arrival_time: "Hora de Llegada (Opcional)",
        num_guests: "Número de Huéspedes",
        select: "Seleccionar",
        select_room: "Seleccionar Habitación",
        choose_room: "Elige una habitación",
        occasion: "Ocasión (Opcional)",
        select_occasion: "Selecciona una ocasión",
        occasion_romantic: "Escapada Romántica",
        occasion_anniversary: "Aniversario",
        occasion_honeymoon: "Luna de Miel",
        occasion_birthday: "Celebración de Cumpleaños",
        occasion_business: "Viaje de Negocios",
        occasion_family: "Vacaciones Familiares",
        additional_needs: "Necesidades Adicionales",
        kids_bed: "Necesito una cama para niños",
        bringing_pet: "Traigo una mascota",
        contact_info: "Información de Contacto",
        your_name: "Tu nombre",
        your_email: "tu@correo.com",
        check_availability: "Verificar Disponibilidad",
        event_type: "Tipo de Evento",
        select_event_type: "Selecciona tipo de evento",
        event_wedding: "Boda",
        event_corporate: "Retiro Corporativo",
        event_private_dining: "Cena Privada",
        event_celebration: "Cumpleaños / Aniversario",
        event_other: "Otro",
        preferred_date: "Fecha Preferida",
        estimated_guests: "Invitados Estimados",
        tell_us: "Cuéntanos Sobre Tu Evento",
        tell_us_placeholder: "Comparte tu visión, solicitudes especiales o cualquier pregunta que tengas...",
        send_inquiry: "Enviar Consulta",
        
        // About Page
        about_page_title: "Quiénes <em>Somos</em>",
        story_label: "Nuestra Historia",
        story_title: "Nacido de un Sueño de Cálida Hospitalidad",
        story_p1: "Luna Piena by Lupo es una experiencia de hotel boutique que combina el encanto italiano con un toque moderno y cuidadoso. Cada estadía está cuidadosamente diseñada para sentirse como una noche de luna llena: tranquila, acogedora e inolvidable.",
        story_p2: "Nos enfocamos en crear una atmósfera de conexión y comodidad, donde cada detalle está diseñado para dejar una impresión duradera. Desde el momento en que llegas, te conviertes en parte de nuestra familia.",
        philosophy_label_about: "Nuestra Filosofía",
        philosophy_title_about: "Limpio, Tranquilo, Cuidadoso",
        philosophy_p1_about: "Nuestros espacios están diseñados para inspirar calma y conexión, ofreciendo un refugio atemporal de lo cotidiano. Creemos en el poder de la simplicidad—que las experiencias más memorables provienen de la calidez genuina, no del exceso.",
        philosophy_p2_about: "Cada elemento de Luna Piena refleja esta visión, desde nuestros interiores cuidadosamente curados hasta el servicio personalizado que anticipa cada una de tus necesidades.",
        values_label_about: "Nuestros Valores",
        values_title_about: "Lo Que Nos Guía",
        quote: "Cada estadía está cuidadosamente diseñada para sentirse como una noche de luna llena: tranquila, acogedora e inolvidable.",
        quote_attribution: "— La Promesa de Luna Piena",
        
        // Blog
        journal_title: "El <em>Diario</em>",
        featured_category: "Viajes y Bienestar",
        featured_title: "El Arte del Viaje Lento: Encontrando Paz en la Hospitalidad Boutique",
        featured_excerpt: "En un mundo que se mueve más rápido cada día, el concepto de viaje lento se ha convertido no solo en una preferencia sino en una necesidad. En Luna Piena, hemos construido toda nuestra filosofía alrededor de esta idea.",
        read_article: "Leer Artículo",
        stay_connected: "Mantente Conectado",
        newsletter_subtitle: "Suscríbete a nuestro diario para historias, recetas y ofertas exclusivas.",
        subscribe: "Suscribirse",
        
        // Booking Modal
        modal_title: "Reserva Tu Estadía",
        modal_subtitle: "Comienza tu experiencia inolvidable",
        
        // Guest Portal
        guest_welcome: "Bienvenido a Luna Piena",
        guest_greeting: "Hola,",
        guest_message: "Es un honor tenerte con nosotros. Hemos preparado todo para que tu estadía sea tan tranquila y memorable como una noche de luna llena. Por favor, siéntete como en casa.",
        your_guide: "Tu Guía",
        
        // Footer
        footer_tagline: "Una experiencia de hotel boutique por Lupo, donde el encanto italiano se encuentra con la modernidad cuidadosa.",
        footer_explore: "Explorar",
        footer_info: "Información",
        guest_portal: "Portal de Huéspedes",
        
        // Calendar
        availability_label: "Planifica Tu Visita",
        availability_title: "Disponibilidad",
        availability_desc: "Consulta nuestro calendario para encontrar las fechas perfectas para tu estadía.",
        legend_available: "Disponible",
        legend_booked: "Reservado",
        
        // Misc
        guests: "huéspedes",
        guest: "Huésped",
        min_read: "min de lectura",
        
        // Rooms page additional
        rooms_page_title: "Nuestras <em>Habitaciones</em>",
        rooms_page_subtitle: "Cada espacio diseñado para ser tu santuario—tranquilo, elegante, inolvidable.",
        signature_suite: "Suite Exclusiva",
        classic_room: "Habitación Clásica",
        grand_suite: "Gran Suite",
        serena_description: "Nuestra suite exclusiva ofrece un retiro espacioso con vistas al jardín, con tonos terracota cálidos, muebles artesanales y comodidades modernas que combinan la elegancia toscana con el diseño contemporáneo.",
        luna_description: "Íntima y serena, la Habitación Luna captura la esencia de la elegancia italiana. Sábanas suaves en tonos tierra, iluminación ambiental cálida y vistas al patio crean el espacio perfecto para una restauración pacífica.",
        piena_description: "Nuestro alojamiento más lujoso cuenta con una espaciosa sala de estar, dormitorio principal con vistas panorámicas y comodidades cuidadosamente seleccionadas. Texturas ricas, maderas cálidas y acentos dorados crean una atmósfera de confort refinado.",
        king_bed: "Cama King",
        queen_bed: "Cama Queen",
        garden_view: "Vista al Jardín",
        courtyard_view: "Vista al Patio",
        private_terrace: "Terraza Privada",
        panoramic_terrace: "Terraza Panorámica",
        quiet_serene: "Tranquilo y Sereno",
        premium_amenities: "Amenidades Premium",
        in_every_room: "En Cada Habitación",
        amenities: "Amenidades",
        premium_linens: "Sábanas Premium",
        thread_count: "400 hilos",
        smart_tv: "Smart TV",
        wifi: "WiFi de Alta Velocidad",
        complimentary: "Gratuito",
        smart_assistant: "Asistente inteligente",
        climate_control: "Control de Clima",
        adjustable_ac: "AC ajustable",
        toiletries: "Artículos de Tocador",
        quality_essentials: "Esenciales de calidad",
        coffee_tea: "Café y Té",
        in_room_selection: "Selección en habitación",
        bedside_outlets: "Enchufes de Cama",
        both_sides: "Ambos lados de la cama"
    }
};

// Initialize translation system
(function() {
    // Get saved language or default to English
    let currentLang = localStorage.getItem('luna-piena-lang') || 'en';
    
    // Apply translations on page load
    document.addEventListener('DOMContentLoaded', function() {
        applyTranslations(currentLang);
        updateLangToggle(currentLang);
        setupLangToggle();
    });
    
    // Apply translations to all elements with data-i18n attribute
    function applyTranslations(lang) {
        const translations = LunaPienaTranslations[lang];
        if (!translations) return;
        
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                // Check if it's an input placeholder
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[key]);
                } 
                // Check if it's a select option value attribute
                else if (el.tagName === 'OPTION' && el.value === '') {
                    el.textContent = translations[key];
                }
                // Regular text content (supports HTML)
                else {
                    el.innerHTML = translations[key];
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Store preference
        localStorage.setItem('luna-piena-lang', lang);
        currentLang = lang;
    }
    
    // Update active state on language toggle
    function updateLangToggle(lang) {
        document.querySelectorAll('.lang-toggle a').forEach(function(link) {
            const linkLang = link.textContent.trim().toLowerCase();
            if (linkLang === lang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Setup click handlers for language toggle
    function setupLangToggle() {
        document.querySelectorAll('.lang-toggle a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.textContent.trim().toLowerCase();
                applyTranslations(lang);
                updateLangToggle(lang);
            });
        });
    }
    
    // Expose functions globally for manual use if needed
    window.LunaPiena = {
        setLanguage: function(lang) {
            applyTranslations(lang);
            updateLangToggle(lang);
        },
        getCurrentLanguage: function() {
            return currentLang;
        },
        translations: LunaPienaTranslations
    };
})();
