import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources:{
        en: {
            translation:{
                H_Greet1:"Who We Are",
                H_Greet12:"Innovating the Future, One Experience at a Time", 
                 H_Sen1:"Our initiative is built on the belief that technology should not just work, but inspire.",
                 H_Sen12:"At Tribe-9, we are a team of designers, engineers, and visionaries passionate about creating transformative digital experiences.",
                 H_sen123:"Our mission is to craft bespoke solutions that empower businesses and redefine how users interact with technology. By blending creativity, innovation, and a user-first approach, we turn ideas into impactful realities.",
                 
                 H_Greet2:"Why This Initiative?",
                 H_Greet22:"Bridging the Gap Between Vision and Reality",
                 H_Sen2:"By blending creativity, innovation, and a user-first approach, we turn ideas into impactful realities.",
                 H_Sen22:"In a world where digital transformation is essential, many businesses struggle with engagement, accessibility, and seamless functionality.",
                 H_Sen23:"At Tribe-9, we saw the need for solutions that go beyond aesthetics—solutions that enhance usability, drive trust, and foster connections.",
                
                 H_Greeet3:"The Impact We Want to Create",
                 H_Greeet32:"Empowering Businesses, Elevating Experiences",

                 H_Greet4:"We Expertise in",


                 feature1: "Software Development",

                 feature2: "UI/UX",

                 feature3: "Graphics Design",


                 feature4: "Digital Marketing",

                 feature5: "Project Management",

                 feature6: "Wealth Management",



                 aboutH1:"DESIGN",
                 aboutH2:"DEVELOP",
                 aboutH3:"DELIVER.",
                 aboutH4:"Turning Ideas into Reality, Crafting Innovation with Precision, and Bringing Excellence to Every Step.",

                aboutH4:"We are-",
                aboutpara:"A passionate and innovative group of talented individuals, driven by creativity and expertise , dedicated to transforming your digital presence into an engaging, impactful, and unforgettable experience.",

                contactH1:"Get In Touch",
                contactpara:"Partner with us for innovative digital solutions that elevate user experiences and drive your business forward.",

                // address
                contactH2:"Address",

                // mobile
                contactH3:"Mobile",

                // email
                contactH14:"Email",

                // contact us
                contactH4:"Contact Us",
                contactH5:"Name",
                contactH6:"Email ID",
                contactH7:"Phone Number",
                contactH8:"Software Development",
                contactH9:"Interface UI/UX",
                contactH10:"Graphics Design",
                contactH11:"Project Management",
                contactH12:"Digital Marketing",
                contactH13:"What's on your mind?",

                // Software Development

                service1:"Empowering Your Vision with Cutting-Edge Solutions",
                service2:"projects",
                service3:"customer satisfaction",
                service4:"Custom Application Development:",
                service5:"We design and develop web and mobile applications tailored to your goals and operational needs. 7+ Tech Stacks Mastered",
                service6:"Enterprise Solutions:",
                service7:"Optimize your business processes with enterprise-grade solutions. 10+ Integrations Performed, 40% Operational Efficiency Boost",
                service8:"UI/UX-Centric Development",
                service9:"Our designs prioritize user experience. Designed over 200 unique UI elements and icons. Ensured 100% responsiveness across all screen sizes.",
                service10:"Agile Development Process",
                service11:"90% On-Time Delivery, Daily Standups, Iterative Improvements.",
                service12:"Maintenance and Support",
                service13:"99.9% Uptime Guaranteed. 24/7 Support Coverage, Issues Resolved with in 24 Hours",
                service14:"Give us a call on",
                service15:"or, get in touch",
                service16:"meet our dev team",

                // UI/UX

                service17:"Transforming Ideas into Seamless User Experiences",
                service18:"design projects",
                service19:"satisfied clients globally.",
                service20:"User-Centered Design :",
                service21:"40% Higher Conversion Rates, Achieved better results by aligning user goals with business objectives.",
                service22:"Wireframes & Prototypes :",
                service23:"15+ Design Tools Mastered, Expertise in Figma, Sketch, Adobe XD, and Axure for prototyping and design.",
                service24:"Responsive Design",
                service25:"99% Device Compatibility, Designed for desktops, tablets, and mobile devices, ensuring pixel-perfect layouts on every screen.",
                service26:"Usability Testing :",
                service27:"95% Issue Detection Rate. Identified usability problems early in development, saving time and reducing rework costs.",
                service28:"Brand Integration :",
                service29:"Aligning design elements with your brand’s identity for a cohesive visual impact.",
                service30:"meet our UI/UX team",

                // Graphics Design

                service31:"Bringing Your Brand to Life with Creative Design",
                service32:"Design Projects",
                service33:"Years of Design Excellence",
                service34:"Brand Identity Creation :",
                service35:"Delivered impactful branding within 2 weeks on average, ensuring faster go-to-market readiness for clients.",
                service36:"Marketing Collaterals :",
                service37:"Designed 300+ marketing collaterals, including brochures, flyers, and presentations, that effectively conveyed client messages.",
                service38:"Illustrations & Artwork :",
                service39:"Unique, hand-drawn and digital artwork for 70+ clients across diverse industries, including tech, fashion, and publishing.",
                service40:"Social Media Graphics :",
                service41:"Increased post reach by 80% through creative use of animations, infographics, and carousels.",
                service42:"Packaging Design :",
                service43:"Delivered 100% print-ready designs, ensuring flawless production and faster time-to-market.",
                service44:"meet our design team",

                // Digital Marketing

                service45:"Elevating Your Brand with Strategic Digital Marketing",
                service46:"Campaigns",
                service47:"Success rate ",
                service48:"Search Engine Optimization (SEO) :",
                service49:"50-80% improvement in search engine rankings and organic traffic.",
                service50:"Social Media Marketing :",
                service51:"500+ high-quality social posts created to boost engagement and conversions.",
                service52:"Email Marketing :",
                service53:"Targeted email campaigns that achieve a 25% open rate and drive a 15% increase in conversions.",
                service54:"Pay-Per-Click Advertising (PPC) :",
                service55:"PPC campaigns with a proven track record of achieving a 5x return on ad spend (ROAS) and reducing cost-per-click (CPC) by 20%.",
                service56:"Content Marketing :",
                service57:"High-quality, relevant content to attract, engage, and retain your target audience.",
                service58:"meet our marketing team",

                // Project Management

                service59:"Streamlining Success with Expert Project Management",
                service60:"MNC s",
                service61:"Projects ",
                service62:"Team Management :",
                service63:"40+ professionals managed across projects, ensuring optimal allocation and performance.",
                service64:"Project Planning :",
                service65:"10+ clients and teams managed with clear, transparent communication.",
                service66:"Communication :",
                service67:"Mitigated risks through proactive identification and strategic planning.",
                service68:"Risk Management :",
                service69:"Proactively identified potential risks and developed strategic mitigation plans to minimize impact.",
                service70:"Progress tracking :",
                service71:"90%+ milestones met through task tracking and KPI monitoring.",
                service72:"meet our management team",

                //the creatives page
                service73:"The ",
                service74:"Creatives",
                service75:"Continuously striving for excellence. Our unique approach blends creativity with functionality, ensuring that every project is not only visually captivating but also user-centric. With a passion for innovation and a commitment to delivering high-quality designs, we bring expertise to every step of the creative process, turning ideas into impactful solutions.",

                //navbar
                home:"Home",
                about:"About",
                services:"Services",
                contact:"Contact",

                //team section home page 
                devs:"Developers",
                fins:"Finance",
                mark:"Marketing",

                // the team headings

                meet:"meet",
                the:"the",
                team:"team",
 
                //graphics design heading animation 

                graphichead:"Innovative Designs",
                graphichead2:"Shaping Your Vision",

                graphicpara:"We craft stunning visuals that captivate and inspire. Our team of passionate designers thrives on creativity, turning ideas into eye-catching designs with the latest tools and trends in graphic design.",

                
                
                


            }
            
        },








        fr: {

            translation:{
                H_Greet1:"Qui nous sommes",
                H_Greet12:"Innover l’avenir, une expérience à la fois",
                H_Sen1:"Notre initiative repose sur la conviction que la technologie ne doit pas seulement fonctionner, mais aussi inspirer.",
                H_Sen12:"Chez Tribe-9, nous sommes une équipe de designers, d’ingénieurs et de visionnaires passionnés par la création d’expériences numériques transformatrices.",
                H_sen123:"Notre mission est de concevoir des solutions sur mesure qui responsabilisent les entreprises et redéfinissent la manière dont les utilisateurs interagissent avec la technologie. En alliant créativité, innovation et approche centrée sur l'utilisateur, nous transformons les idées en réalités percutantes.",

                H_Greet2: "Pourquoi cette initiative ?",
H_Greet22: "Combler le fossé entre la vision et la réalité",
H_Sen2: "En alliant créativité, innovation et approche centrée sur l'utilisateur, nous transformons les idées en réalités percutantes.",
H_Sen22: "Dans un monde où la transformation numérique est essentielle, de nombreuses entreprises rencontrent des difficultés en matière d'engagement, d'accessibilité et de fonctionnalité fluide.",
H_Sen23: "Chez Tribe-9, nous avons constaté le besoin de solutions qui vont au-delà de l'esthétique — des solutions qui améliorent l'utilisabilité, instaurent la confiance et favorisent les connexions.",

H_Greeet3: "L'impact que nous voulons créer",
H_Greeet32: "Donner du pouvoir aux entreprises, élever les expériences",

H_Greet4:"Nous sommes spécialisés dans",


feature1: "Développement logiciel",

feature2: "UI/UX",

feature3: "Conception graphique",

feature4: "Marketing numérique",

feature5: "Gestion de projet",
feature6: "Gestion de patrimoine",


aboutH1:"DESIGN",
aboutH2:"DÉV",
aboutH3:"LIVRER.",
aboutH4:"Transformer les idées en réalité, façonner l'innovation avec précision et apporter l'excellence à chaque étape.",

aboutH4:"Nous sommes –", // 
aboutpara:"Un groupe passionné et innovant d'individus talentueux, animé par la créativité et l'expertise, dédié à transformer votre présence digitale en une expérience engageante, percutante et inoubliable.",

contactH1: "Contactez",
contactpara: "Collaborez avec nous pour des solutions numériques innovantes qui améliorent l'expérience utilisateur et propulsent votre entreprise.",

// address
contactH2: "Adresse",

// mobile
contactH3: "Téléphone",

// email
contactH14: "E-mail",

// contact us
contactH4: "Contactez-nous",
contactH5: "Nom",
contactH6: "Adresse e-mail",
contactH7: "Numéro de téléphone",
contactH8: "Dév. logiciel",
contactH9: "Interface UI/UX",
contactH10: "Conception graphique",
contactH11: "Gestion de projet",
contactH12: "Marketing numérique",
contactH13: "Quelle est votre préoccupation ?",

// Software Development

service1: "Donner vie à votre vision avec des solutions de pointe",
service2: "projets",
service3: "satisfaction client",
service4: "Développement d'applications sur mesure :",
service5: "Nous concevons des applications web et mobiles adaptées à vos objectifs. 7+ stacks maîtrisés",
service6: "Solutions d'entreprise :",
service7: "Optimisez vos processus avec des solutions d'entreprise. 10+ intégrations, 40% d'efficacité en plus",
service8: "Développement centré UI/UX",
service9: "Nos designs priorisent l’expérience utilisateur. 200+ éléments UI créés. 100% responsive",
service10: "Processus Agile",
service11: "90% de livraisons à temps, réunions quotidiennes, améliorations continues",
service12: "Maintenance et support",
service13: "99,9% de disponibilité garantie. Support 24/7. Problèmes résolus en 24h",
service14: "Appelez-nous au",
service15: "ou contactez-nous",
service16: "rencontrez notre équipe dev",

// UI/UX

service17: "Transformer les idées en expériences utilisateur fluides",
service18: "projets de design",
service19: "clients satisfaits dans le monde entier.",
service20: "Design centré utilisateur :",
service21: "40% de taux de conversion en plus, grâce à l’alignement des objectifs utilisateur et business.",
service22: "Wireframes & prototypes :",
service23: "15+ outils maîtrisés : Figma, Sketch, Adobe XD, Axure pour prototypage & design.",
service24: "Design responsive",
service25: "99% de compatibilité, adapté aux écrans desktop, tablette et mobile. Mise en page pixel-perfect.",
service26: "Tests d’utilisabilité :",
service27: "95% de détection des problèmes. Détection précoce, moins de retouches, gain de temps.",
service28: "Intégration de marque :",
service29: "Alignement des éléments de design avec votre identité visuelle pour plus d’impact.",
service30: "rencontrez notre équipe UI/UX",

// Graphics Design

service31: "Donner vie à votre marque avec un design créatif",
service32: "Projets de design",
service33: "Années d'excellence en design",
service34: "Création d'identité de marque :",
service35: "Branding livré en 2 semaines en moyenne, pour une mise sur le marché plus rapide.",
service36: "Supports marketing :",
service37: "300+ supports conçus : brochures, flyers, présentations pour transmettre vos messages.",
service38: "Illustrations & œuvres :",
service39: "Œuvres uniques pour 70+ clients, en mode digital ou dessinées à la main.",
service40: "Graphiques pour réseaux sociaux :",
service41: "Portée augmentée de 80% via animations, carrousels et infographies créatives.",
service42: "Design d'emballage :",
service43: "100% designs prêts à imprimer, assurant une production sans faille et rapide.",
service44: "rencontrez notre équipe design",

// Digital Marketing

service45: "Valoriser votre marque grâce au marketing digital stratégique",
service46: "Campagnes",
service47: "Taux succès",
service48: "Référencement naturel (SEO) :",
service49: "Amélioration de 50 à 80 % du classement et du trafic organique.",
service50: "Marketing sur les réseaux sociaux :",
service51: "500+ publications créées pour booster l’engagement et les conversions.",
service52: "Email marketing :",
service53: "Campagnes ciblées atteignant 25 % d’ouverture et +15 % de conversions.",
service54: "Publicité au coût par clic (PPC) :",
service55: "Campagnes PPC avec 5x de retour sur investissement pub et -20 % CPC.",
service56: "Marketing de contenu :",
service57: "Contenu pertinent et qualitatif pour attirer, engager et fidéliser.",
service58: "rencontrez notre équipe marketing",

// Project Management

service59: "Optimiser la réussite grâce à une gestion experte de projet",
service60: "MNC s",
service61: "Projets",
service62: "Gestion d’équipe :",
service63: "40+ pros gérés, avec répartition optimale et performance assurée.",
service64: "Planification de projet :",
service65: "10+ clients et équipes gérés avec une communication claire et fluide.",
service66: "Communication :",
service67: "Risques réduits via une détection proactive et une planification stratégique.",
service68: "Gestion des risques :",
service69: "Risques identifiés en amont, plans de mitigation mis en œuvre pour limiter l’impact.",
service70: "Suivi d’avancement :",
service71: "90%+ des étapes atteintes grâce au suivi des tâches et indicateurs clés.",
service72: "rencontrez notre équipe gestion",


 //the creatives page
                service73:"Les ",
                service74:"Créatifs",
                service75:"Toujours en quête d’excellence. Notre approche unique allie créativité et fonctionnalité, garantissant que chaque projet soit à la fois visuellement captivant et centré sur l’utilisateur. Animés par l’innovation et engagés à offrir des designs de haute qualité, nous apportons notre expertise à chaque étape du processus créatif, transformant les idées en solutions percutantes.",


 //navbar
                home:"Accueil",
                about:"À propos",
                services:"Services",
                contact:"Contact",

// home page team section
                devs:"Développeurs",
                fins:"Finance",
                mark:"Marketing",
                 


                // the team headings

                meet:"réunion",
                the:"le",
                team:"équipe",


                

                //graphics design heading animation 

                graphichead:"Designs innovants",
                graphichead2:"Façonner votre vision",


                graphicpara:"Nous créons des visuels époustouflants qui captivent et inspirent. Notre équipe de designers passionnés s’épanouit grâce à la créativité, transformant les idées en designs accrocheurs avec les outils et tendances les plus récents du design graphique.",

                

                





            }
            
        },
        es: {

            translation:{
                H_Greet1: "Wer wir sind",
H_Greet12: "Wir gestalten die Zukunft – eine Erfahrung nach der anderen",
H_Sen1: "Unsere Initiative basiert auf der Überzeugung, dass Technologie nicht nur funktionieren, sondern auch inspirieren sollte.",
H_Sen12: "Bei Tribe-9 sind wir ein Team aus Designern, Ingenieuren und Visionären, die sich leidenschaftlich für die Schaffung transformativer digitaler Erlebnisse einsetzen.",
H_sen123: "Unsere Mission ist es, maßgeschneiderte Lösungen zu entwickeln, die Unternehmen stärken und die Art und Weise neu definieren, wie Nutzer mit Technologie interagieren. Durch die Kombination von Kreativität, Innovation und einem nutzerzentrierten Ansatz verwandeln wir Ideen in bedeutungsvolle Realitäten.",

H_Greet2: "Warum diese Initiative?",
H_Greet22: "Die Lücke zwischen Vision und Realität schließen",
H_Sen2: "Durch die Kombination von Kreativität, Innovation und einem nutzerzentrierten Ansatz verwandeln wir Ideen in bedeutungsvolle Realitäten.",
H_Sen22: "In einer Welt, in der digitale Transformation unerlässlich ist, stehen viele Unternehmen vor Herausforderungen in Bezug auf Engagement, Zugänglichkeit und nahtlose Funktionalität.",
H_Sen23: "Bei Tribe-9 haben wir den Bedarf an Lösungen erkannt, die über Ästhetik hinausgehen – Lösungen, die die Benutzerfreundlichkeit verbessern, Vertrauen schaffen und Verbindungen fördern.",

H_Greeet3: "Die Wirkung, die wir erzielen wollen",
H_Greeet32: "Unternehmen stärken, Erlebnisse verbessern",

H_Greet4: "Wir sind spezialisiert auf",

feature1: "Softwareentwicklung",

feature2: "UI/UX",

feature3: "Grafikdesign",

feature4: "Digitales Marketing",

feature5: "Projektmanagement",

feature6: "Gestion de patrimoine",
   
aboutH1:"DESIGN",
aboutH2:"DEV",
aboutH3:"LIEFERN.",
aboutH4:"Ideen in die Realität umsetzen, Innovation mit Präzision gestalten und Exzellenz in jeden Schritt bringen.",

aboutH4:"Wir sind –",
aboutpara:"Eine leidenschaftliche und innovative Gruppe talentierter Persönlichkeiten, angetrieben von Kreativität und Fachwissen, die sich der Aufgabe widmet, Ihre digitale Präsenz in ein fesselndes, wirkungsvolles und unvergessliches Erlebnis zu verwandeln.",


contactH1: "Kontakt",
contactpara: "Arbeiten Sie mit uns zusammen für innovative digitale Lösungen, die Benutzererlebnisse verbessern und Ihr Geschäft voranbringen.",

// address
contactH2: "Adresse",

// mobile
contactH3: "Telefon",

// email
contactH14: "E-Mail",

// contact us
contactH4: "Kontaktieren Sie uns",
contactH5: "Name",
contactH6: "E-Mail-Adresse",
contactH7: "Telefonnummer",
contactH8: "Software-Entwicklung",
contactH9: "UI/UX-Design",
contactH10: "Grafik-design",
contactH11: "Projekt-management",
contactH12: "Digitales Marketing",
contactH13: "Woran denken Sie?",

// Software Development
service1: "Verwirklichen Sie Ihre Vision mit modernen Lösungen",
service2: "Projekte",
service3: "Kundenzufriedenheit",
service4: "Individuelle App-Entwicklung:",
service5: "Wir entwickeln Web- und Mobile-Apps nach Ihren Zielen. 7+ Tech-Stacks beherrscht",
service6: "Unternehmenslösungen:",
service7: "Optimieren Sie Abläufe mit Enterprise-Lösungen. 10+ Integrationen, 40% effizienter",
service8: "UI/UX-zentrierte Entwicklung",
service9: "Designs mit Fokus auf UX. 200+ UI-Elemente entworfen. 100% responsiv",
service10: "Agiler Entwicklungsprozess",
service11: "90% pünktliche Lieferung, tägliche Standups, iterative Verbesserungen",
service12: "Wartung und Support",
service13: "99,9% Verfügbarkeit garantiert. 24/7 Support. Probleme in 24h gelöst",
service14: "Rufen Sie uns an unter",
service15: "oder kontaktieren Sie uns",
service16: "lernen Sie unser Dev-Team kennen",

// UI/UX

service17: "Ideen in nahtlose Nutzererlebnisse verwandeln",
service18: "Designprojekte",
service19: "zufriedene Kunden weltweit.",
service20: "Nutzerzentriertes Design:",
service21: "40% höhere Conversion-Rate durch Ausrichtung von Nutzerzielen und Geschäftszielen.",
service22: "Wireframes & Prototypen:",
service23: "15+ Design-Tools beherrscht, Expertise in Figma, Sketch, Adobe XD und Axure.",
service24: "Responsives Design",
service25: "99% Gerätekompatibilität, optimiert für Desktop, Tablet & Smartphone, pixelgenaues Layout.",
service26: "Usability-Tests:",
service27: "95% Fehlererkennung. Probleme früh erkannt, Zeit gespart, weniger Nacharbeit.",
service28: "Markenintegration:",
service29: "Designelemente mit der Markenidentität abstimmen für starken visuellen Auftritt.",
service30: "lernen Sie unser UI/UX-Team kennen",

// Graphics Design

service31: "Kreatives Design erweckt Ihre Marke zum Leben",
service32: "Designprojekte",
service33: "Jahre an Design-Exzellenz",
service34: "Markenidentität erstellen:",
service35: "Markenauftritt in Ø 2 Wochen geliefert – schneller startbereit am Markt.",
service36: "Marketingmaterialien:",
service37: "300+ Marketingmaterialien gestaltet: Broschüren, Flyer, Präsentationen mit Wirkung.",
service38: "Illustrationen & Kunstwerke:",
service39: "Einzigartige Werke – handgezeichnet oder digital – für 70+ Kunden weltweit.",
service40: "Social-Media-Grafiken:",
service41: "80% höhere Reichweite durch kreative Animationen, Karussells & Infografiken.",
service42: "Verpackungsdesign:",
service43: "100% druckfertige Designs – fehlerfreie Produktion & schnelle Markteinführung.",
service44: "lernen Sie unser Designteam kennen",

// Digital Marketing

service45: "Stärken Sie Ihre Marke mit strategischem Digitalmarketing",
service46: "Kampagnen",
service47: "Erfolgsquote",
service48: "Suchmaschinenoptimierung (SEO):",
service49: "50–80 % bessere Rankings & mehr organischer Traffic.",
service50: "Social-Media-Marketing:",
service51: "500+ hochwertige Posts zur Steigerung von Engagement & Conversions.",
service52: "E-Mail-Marketing:",
service53: "Gezielte Kampagnen mit 25 % Öffnungsrate & 15 % mehr Conversions.",
service54: "Pay-per-Click-Werbung (PPC):",
service55: "PPC-Kampagnen mit 5x ROAS und 20 % geringeren CPC-Kosten.",
service56: "Content-Marketing:",
service57: "Hochwertiger Content zur Ansprache, Bindung & Konversion Ihrer Zielgruppe.",
service58: "lernen Sie unser Marketingteam kennen",

// Project Management

service59: "Erfolg sichern mit professionellem Projektmanagement",
service60: "MNC s",
service61: "Projekte",
service62: "Teammanagement:",
service63: "40+ Fachkräfte über Projekte gesteuert – optimal verteilt und effektiv.",
service64: "Projektplanung:",
service65: "10+ Kunden & Teams betreut mit klarer, transparenter Kommunikation.",
service66: "Kommunikation:",
service67: "Risiken reduziert durch proaktive Erkennung & strategische Planung.",
service68: "Risikomanagement:",
service69: "Risiken früh erkannt und strategische Pläne zur Minimierung erstellt.",
service70: "Fortschrittskontrolle:",
service71: "90%+ Meilensteine erreicht durch Aufgaben- & KPI-Tracking.",
service72: "lernen Sie unser Managementteam kennen",

//the creatives page
                service73:"Die ",
                service74:"Kreativen",
                service75:"Stets auf der Suche nach Exzellenz. Unser einzigartiger Ansatz vereint Kreativität mit Funktionalität und stellt sicher, dass jedes Projekt nicht nur visuell beeindruckt, sondern auch benutzerzentriert ist. Mit Leidenschaft für Innovation und dem Anspruch, höchste Designqualität zu liefern, bringen wir in jeder Phase des kreativen Prozesses unser Fachwissen ein – und verwandeln Ideen in wirkungsvolle Lösungen.",

                //navbar
                home:"Startseite",
                about:"Über uns",
                services:"Leistungen",
                contact:"Kontakt",

// home page team section
                devs:"Entwickler",
                fins:"Finanzen",
                mark:"Marketing",


                // the team headings

                meet:"Besprechung",
                the:"das",
                team:"team",


                

                //graphics design heading animation 

                graphichead:"Innovative Designs",
                graphichead2:"Ihre Vision gestalten",



                graphicpara:"Wir gestalten beeindruckende visuelle Werke, die fesseln und inspirieren. Unser Team leidenschaftlicher Designer lebt von Kreativität und verwandelt Ideen mit den neuesten Werkzeugen und Trends im Grafikdesign in auffällige Designs.",
                
            }
            
        }
    }
})