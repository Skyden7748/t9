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
                aboutpara:"A passionate and innovative group of talented individuals, driven by creativity and expertise , dedicated to transforming your digital presence into an engaging, impactful, and unforgettable experience."

                



                 


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

aboutH4:"Nous sommes –",
aboutpara:"Un groupe passionné et innovant d'individus talentueux, animé par la créativité et l'expertise, dédié à transformer votre présence digitale en une expérience engageante, percutante et inoubliable."



























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
aboutpara:"Eine leidenschaftliche und innovative Gruppe talentierter Persönlichkeiten, angetrieben von Kreativität und Fachwissen, die sich der Aufgabe widmet, Ihre digitale Präsenz in ein fesselndes, wirkungsvolles und unvergessliches Erlebnis zu verwandeln."


            }
            
        }
    }
})