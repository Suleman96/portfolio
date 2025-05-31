// Language translations
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.greeting": "Hi, I'm <span class='highlight'>Muhammad Suleman</span>",
        "hero.title": "Machine Learning Engineer | AI & Smart Systems Specialist",
        "hero.subtitle": "Specializing in machine learning, deep learning, NLP and computer vision solutions",
        "hero.projects-btn": "View My Projects",
        "about.title": "About Me",
        "about.subtitle": "Machine Learning Engineer | AI & Smart Systems Specialist",
        "about.description1": "I'm a passionate AI professional with hands-on experience in machine learning, deep learning, and computer vision projects. I specialize in developing, testing and optimizing models, with practical expertise in Python and cloud deployment on AWS.",
        "about.description2": "Currently pursuing my M.Sc. in Artificial Intelligence for Smart Sensors & Actuators at Technische Hochschule Deggendorf with a grade of 1.7.",
        "about.skills": "Technical Skills",
        "experience.title": "Professional Experience",
        "experience.date1": "Jan 2025 - Present",
        "experience.job1.title": "Artificial Intelligence Intern",
        "experience.job1.company": "Diplotech Solutions, Berlin, Germany",
        "experience.job1.point1": "Developed intelligent chatbot leveraging Google DialogFlow ES to automate client interactions",
        "experience.job1.point2": "Designed customized chatbot interface using Node.js, CSS, and integrated RESTful APIs",
        "experience.job1.point3": "Deployed chatbot to company website using AWS web hosting",
        "experience.job1.point4": "Built semantic book recommendation system using transformer-based text embeddings",
        "experience.date2": "2022 - 2025",
        "experience.job2.title": "Master Thesis Student",
        "experience.job2.company": "Technische Hochschule Deggendorf, Germany",
        "experience.job2.thesis": "Thesis:",
        "experience.job2.thesis-title": "Dynamic Environment Perception for Autonomous System: Real-Time Approach to Obstacle Detection (Grade 1.3)",
        "experience.job2.point1": "Conducted meta-analysis of segmentation and relative depth estimation models",
        "experience.job2.point2": "Developed obstacle detection system for autonomous lawn mower on NVIDIA Jetson Nano",
        "experience.job2.point3": "Optimized inference speed: reduced latency by 52% (1.25x detection speed)",
        "experience.date3": "2022 - 2024",
        "experience.job3.title": "Student Research Assistant",
        "experience.job3.company": "Technische Hochschule Deggendorf, Germany",
        "experience.job3.point1": "Developed real-time obstacle detection algorithms using monocular vision",
        "experience.job3.point2": "Performed camera calibration and real-time visual mapping using OpenCV",
        "experience.job3.point3": "Implemented machine learning techniques including ORB, SIFT, and YOLOv8",
        
        "skills.title": "Skills & Expertise",
        "skills.subtitle": "Specialized in AI, robotics, and smart systems with hands-on experience in multiple domains",
        "skills.ml.title": "Machine Learning",
        "skills.ml.description": "Model training, optimization, and deployment with TensorFlow, PyTorch, HuggingFace",
        "skills.cv.title": "Computer Vision",
        "skills.cv.description": "Image processing, recognition systems, OpenCV, CNNs, custom pipelines",
        "skills.nlp.title": "NLP & LLMs",
        "skills.nlp.description": "Language models, text processing, and intelligent chatbot development",
        "skills.robotics.title": "Robotics",
        "skills.robotics.description": "SLAM, trajectory planning, ROS-based robotic systems",
        "skills.embedded.title": "Embedded AI",
        "skills.embedded.description": "Sensor integration, microcontrollers, real-time AI applications",
        "skills.cloud.title": "Cloud & DevOps",
        "skills.cloud.description": "Deployment on AWS, Docker, CI/CD pipelines, and scalable systems",
        "skills.product.title": "Product Design",
        "skills.product.description": "3D modeling, simulation, and prototyping for industrial applications",
        "skills.graphic.title": "Graphic Design",
        "skills.graphic.description": "Digital media creation, branding, and visual communication",
        "projects.title": "Projects",
        "projects.project1.title": "Water Level/Flood Prediction of Passau",
        "projects.project1.description": "Predictive analytics using ARIMA and MLP regression models on historical water level data",
        "projects.project2.title": "Personalized Fitness Recommender App",
        "projects.project2.description": "Kivy-based mobile app using LSTM to analyze user movements with PostgreSQL backend",
        "projects.project3.title": "Detection & Prediction of Car Parking",
        "projects.project3.description": "Trained model to predict parking spot availability using Mask RCNN",
        "projects.project4.title": "GDPR Compliance for Public Images/Video",
        "projects.project4.description": "Object detection and tracking model using MobileNet and YOLOv7 for privacy blurring",
        "projects.project5.title": "Autonomous Parking using LiDAR",
        "projects.project5.description": "Environmental mapping and route optimization via A* pathfinding in ROS",
        "contact.title": "Let's Connect",
        "contact.intro": "Feel free to reach out via email or connect on social media!",
        "contact.email_title": "Email",
        "contact.linkedin_title": "LinkedIn",
        "contact.linkedin": "Connect with me",
        "contact.github_title": "GitHub",
        "contact.github": "View my repositories",
        "footer.copyright": "Muhammad Suleman. All rights reserved."
    },
    de: {
        "nav.home": "Startseite",
        "nav.about": "Über mich",
        "nav.experience": "Berufserfahrung",
        "nav.projects": "Projekte",
        "nav.contact": "Kontakt",
        "hero.greeting": "Hallo, ich bin <span class='highlight'>Muhammad Suleman</span>",
        "hero.title": "KI-Ingenieur & Forscher",
        "hero.subtitle": "Spezialisiert auf maschinelles Lernen, Deep Learning und Computer Vision Lösungen",
        "hero.projects-btn": "Meine Projekte ansehen",
        "about.title": "Über mich",
        "about.subtitle": "KI-Ingenieur & Forscher",
        "about.description1": "Ich bin ein leidenschaftlicher KI-Experte mit praktischer Erfahrung in Projekten zu maschinellem Lernen, Deep Learning und Computer Vision. Ich spezialisiere mich auf die Entwicklung, Testung und Optimierung von Modellen mit praktischer Expertise in Python und Cloud-Bereitstellung auf AWS.",
        "about.description2": "Aktuell studiere ich M.Sc. Künstliche Intelligenz für intelligente Sensoren und Aktoren an der Technischen Hochschule Deggendorf mit einem Notendurchschnitt von 1,7.",
        "about.skills": "Technische Fähigkeiten",
        "experience.title": "Berufserfahrung",
        "experience.date1": "Jan 2025 - Heute",
        "experience.job1.title": "KI-Praktikant",
        "experience.job1.company": "Diplotech Solutions, Berlin, Deutschland",
        "experience.job1.point1": "Entwicklung eines intelligenten Chatbots mit Google DialogFlow ES zur Automatisierung von Kundeninteraktionen",
        "experience.job1.point2": "Gestaltung einer benutzerdefinierten Chatbot-Oberfläche mit Node.js, CSS und RESTful APIs",
        "experience.job1.point3": "Bereitstellung des Chatbots auf der Unternehmenswebsite mit AWS Webhosting",
        "experience.job1.point4": "Aufbau eines semantischen Buch-Empfehlungssystems mit transformerbasierten Texteinbettungen",
        "experience.date2": "2022 - 2025",
        "experience.job2.title": "Masterstudent",
        "experience.job2.company": "Technische Hochschule Deggendorf, Deutschland",
        "experience.job2.thesis": "Abschlussarbeit:",
        "experience.job2.thesis-title": "Dynamische Umgebungswahrnehmung für autonome Systeme: Echtzeitansatz zur Hinderniserkennung (Note 1,3)",
        "experience.job2.point1": "Durchführung einer Metaanalyse von Segmentierungs- und Tiefenschätzmodellen",
        "experience.job2.point2": "Entwicklung eines Hinderniserkennungssystems für autonome Rasenmäher auf NVIDIA Jetson Nano",
        "experience.job2.point3": "Optimierung der Inferenzgeschwindigkeit: Latenz um 52% reduziert (1,25x Erkennungsgeschwindigkeit)",
        "experience.date3": "2022 - 2024",
        "experience.job3.title": "Wissenschaftliche Hilfskraft",
        "experience.job3.company": "Technische Hochschule Deggendorf, Deutschland",
        "experience.job3.point1": "Entwicklung von Echtzeit-Hinderniserkennungsalgorithmen mit monokularem Sehen",
        "experience.job3.point2": "Durchführung von Kamerakalibrierung und Echtzeit-Visualisierung mit OpenCV",
        "experience.job3.point3": "Implementierung von Machine-Learning-Techniken einschließlich ORB, SIFT und YOLOv8",
        
        
        "skills.title": "Fähigkeiten & Expertise",
        "skills.subtitle": "Spezialisiert auf KI, Robotik und intelligente Systeme mit praktischer Erfahrung in mehreren Bereichen",
        "skills.ml.title": "Maschinelles Lernen",
        "skills.ml.description": "Modelltraining, Optimierung und Bereitstellung mit TensorFlow, PyTorch, HuggingFace",
        "skills.cv.title": "Computer Vision",
        "skills.cv.description": "Bildverarbeitung, Erkennungssysteme, OpenCV, CNNs, benutzerdefinierte Pipelines",
        "skills.nlp.title": "NLP & LLMs",
        "skills.nlp.description": "Sprachmodelle, Textverarbeitung und Entwicklung intelligenter Chatbots",
        "skills.robotics.title": "Robotik",
        "skills.robotics.description": "SLAM, Trajektorienplanung, ROS-basierte Robotersysteme",
        "skills.embedded.title": "Embedded KI",
        "skills.embedded.description": "Sensorintegration, Mikrocontroller, Echtzeit-KI-Anwendungen",
        "skills.cloud.title": "Cloud & DevOps",
        "skills.cloud.description": "Bereitstellung auf AWS, Docker, CI/CD-Pipelines und skalierbare Systeme",
        "skills.product.title": "Produktdesign",
        "skills.product.description": "3D-Modellierung, Simulation und Prototyping für industrielle Anwendungen",
        "skills.graphic.title": "Grafikdesign",
        "skills.graphic.description": "Digitale Mediengestaltung, Branding und visuelle Kommunikation",
        "projects.title": "Projekte",
        "projects.project1.title": "Wasserstand-/Hochwasservorhersage für Passau",
        "projects.project1.description": "Prädiktive Analysen mit ARIMA- und MLP-Regressionsmodellen für historische Wasserstandsdaten",
        "projects.project2.title": "Personalisierte Fitness-Empfehlungs-App",
        "projects.project2.description": "Kivy-basierte Mobile App mit LSTM zur Analyse von Benutzerbewegungen mit PostgreSQL-Backend",
        "projects.project3.title": "Erkennung & Vorhersage von Parkplätzen",
        "projects.project3.description": "Trainiertes Modell zur Vorhersage der Parkplatzverfügbarkeit mit Mask RCNN",
        "projects.project4.title": "DSGVO-Konformität für öffentliche Bilder/Videos",
        "projects.project4.description": "Objekt-Erkennungs- und Tracking-Modell mit MobileNet und YOLOv7 zur Privatsphäre-Verschleierung",
        "projects.project5.title": "Autonomes Parken mit LiDAR",
        "projects.project5.description": "Umgebungskartierung und Routenoptimierung via A*-Pfadfindung in ROS",
        "contact.title": "Kontakt aufnehmen",
        "contact.intro": "Kontaktieren Sie mich gerne per E-Mail oder in sozialen Netzwerken!",
        "contact.email_title": "E-Mail",
        "contact.linkedin_title": "LinkedIn",
        "contact.linkedin": "Mit mir vernetzen",
        "contact.github_title": "GitHub",
        "contact.github": "Meine Repositories ansehen",
        "footer.copyright": "Muhammad Suleman. Alle Rechte vorbehalten."
    }
};

// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language-btn');
    let currentLang = localStorage.getItem('language') || 'en';

    // Set initial language
    updateLanguage(currentLang);

    // Add click event listeners to language buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            currentLang = lang;
            localStorage.setItem('language', lang);
            updateLanguage(lang);
            
            // Update active button
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Set active button based on current language
    document.querySelector(`.language-btn[data-lang="${currentLang}"]`).classList.add('active');
});

function updateLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}