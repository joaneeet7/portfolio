// ============================================================================
// CONFIGURACIÓN DE PROYECTOS
// ============================================================================
// 
// INSTRUCCIONES PARA AÑADIR/MODIFICAR PROYECTOS:
// 1. Copia el template de proyecto de abajo
// 2. Completa todos los campos requeridos
// 3. Añade el proyecto al array 'projects' al final
// 4. Para quitar un proyecto, simplemente elimina su objeto del array
//
// TEMPLATE DE PROYECTO:
/*
{
    id: 11, // Incrementa el ID para cada nuevo proyecto
    title: "Nombre del Proyecto",
    description: "Descripción corta (aparece en la tarjeta)",
    fullDescription: "Descripción completa (aparece en el modal)",
    image: "imagenes/nombre-imagen.jpg", // Imagen en la carpeta imagenes/
    technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
    tags: ["Básico"], // Opciones: ["Básico"], ["Avanzado"], ["Profesional"]
    github: "https://github.com/tu-usuario/nombre-repo", // Enlace real o "#" si no está disponible
    demo: "https://tu-demo.com" // Enlace real o "#" si no está disponible
}
*/

// Projects data
const projects = [
    {
        id: 1,
        title: "Organización en el Cloud",
        description: "Proyecto centrado en la gestión de cuentas AWS con buenas prácticas organizativas",
        fullDescription: "Arquitectura multi cuenta con AWS Organizations, ideal para separar entornos, controlar facturación y aplicar políticas centralizadas de seguridad y acceso.",
        image: "imagenes/AWS_Organization.jpg",
        technologies: ["AWS Organizations", "IAM", "CloudTrail", "Config"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Aplicación Web con Angular desplegada en AWS",
        description: "Muestra cómo servir sitios web estáticos o SPA en la nube",
        fullDescription: "Sitio web estático Angular alojado en Amazon S3, distribuido globalmente con CloudFront y protegido con HTTPS mediante AWS Certificate Manager.",
        image: "imagenes/App_Web_Desplegada_AWS.jpg",
        technologies: ["Amazon S3", "CloudFront", "Route 53", "Certificate Manager"],
        tags: ["Básico"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Arquitectura ECS",
        description: "Enfocado en orquestación, escalabilidad y arquitectura de microservicios",
        fullDescription: "Despliegue escalable de servicios en contenedores usando Amazon ECS, balanceador ALB, subredes privadas y públicas, con monitoreo en CloudWatch.",
        image: "imagenes/Arquitectura_ECS.jpg",
        technologies: ["Amazon ECS", "Amazon CloudWatch", "Amazon ECR", "Amazon VPC", "ALB", "NAT Gateway"],
        tags: ["Avanzado"],
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "Kubernetes en AWS",
        description: "CI/CD, despliegue con contenedores y uso de múltiples lenguajes y tecnologías",
        fullDescription: "Aplicación distribuida en clúster de Kubernetes gestionado con múltiples APIs backend en contenedores, base de datos MongoDB y servicios de AWS.",
        image: "imagenes/Kubernetes_AWS.jpg",
        technologies: ["Angular", "Docker", "Amazon ECR", "MongoDB", "Amazon SES", "Minikube"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 6,
        title: "Seguimiento de ubicación",
        description: "Integran dispositivos IoT, rastreo de ubicación y procesamiento en tiempo real",
        fullDescription: "Sistema IoT con rastreo en tiempo real usando AWS IoT, Lambda, DynamoDB, EventBridge, y visualización de eventos con Amazon Location Service.",
        image: "imagenes/Seguimiento_Ubicacion.jpg",
        technologies: ["AWS IoT Core", "Location Service", "Lambda", "Cognito", "WebSocket", "EventBridge", "DynamoDB"],
        tags: ["Avanzado"],
        github: "#",
        demo: "#"
    },
    {
        id: 7,
        title: "Migración de base de datos de EC2 a RDS",
        description: "Migración de bases de datos alojadas en instancias EC2 hacia Amazon RDS usando RDS Proxy para optimizar conexiones",
        fullDescription: "Este proyecto muestra cómo migrar una base de datos administrada en EC2 hacia Amazon RDS, mejorando la eficiencia de conexión con RDS Proxy. Se asegura el acceso mediante políticas IAM y una subred privada para mayor seguridad. Ideal para entornos productivos con múltiples instancias",
        image: "imagenes/bases_datos_ec2_a_RDS.jpg",
        technologies: ["EC2", "Amazon RDS", "RDS Proxy", "IAM", "VPC"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 8,
        title: "ETL con instancias spot y bucket S3",
        description: "Proceso de ETL económico usando instancias EC2 Spot para procesar datos y almacenarlos en Amazon S3",
        fullDescription: "Se utiliza una instancia EC2 Spot para ejecutar un proceso ETL que toma un archivo de entrada, lo transforma y almacena el resultado en un bucket de S3. El proyecto destaca la optimización de costos usando Spot y el uso correcto de permisos IAM para acceso a S3",
        image: "imagenes/Ejecución_proceso_ETL.jpg",
        technologies: ["EC2 Spot", "Amazon S3", "IAM"],
        tags: ["Básico"],
        github: "#",
        demo: "#"
    },
    {
        id: 9,
        title: "Lambda con acceso multi cuenta",
        description: "Función Lambda que permite llamadas entre cuentas de AWS con políticas de identidad y recursos.",
        fullDescription: "El proyecto permite invocar funciones Lambda entre cuentas A y B de AWS. Se emplean políticas de identidad (salida) y de recursos (entrada) para establecer la confianza necesaria. Ideal para arquitecturas multi cuenta donde Lambda centraliza el procesamiento",
        image: "imagenes/lambda_acceso_multicuenta.jpg",
        technologies: ["AWS Lambda", "IAM", "Cross-account", "Resource Policy"],
        tags: ["Avanzado"],
        github: "#",
        demo: "#"
    },
    {
        id: 10,
        title: "Monitorización con Prometheus y Grafana",
        description: "Arquitectura para monitoreo de contenedores usando Prometheus, Grafana, Loki y Alloy",
        fullDescription: "Este proyecto implementa una solución completa de observabilidad que incluye métricas con Prometheus, logs centralizados con Loki y visualización unificada con Grafana. La recolección de datos se realiza mediante Grafana Alloy, que extrae métricas como uso de CPU, memoria y actividad de servicios desarrollados en Python o C#. Toda la solución se despliega mediante Docker Compose, lo que facilita su puesta en marcha local o en entornos de desarrollo. Prometheus almacena y expone las métricas, Loki centraliza los logs de aplicación, y Grafana permite su consulta desde paneles personalizados y alertas automáticas, habilitando al equipo de ingeniería a tomar decisiones basadas en datos en tiempo real.",
        image: "imagenes/Prometheus_Grafana.jpg",
        technologies: ["Prometheus", "Grafana", "Loki", "Alloy", "Docker", "Docker Compose", "Python", "C#"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    }
];

// DOM Elements
let projectsGrid, modal, modalClose, filterBtns, contactForm, particlesContainer;

// Initialize DOM elements when document is ready
function initializeDOMElements() {
    projectsGrid = document.getElementById('projectsGrid');
    modal = document.getElementById('projectModal');
    modalClose = document.querySelector('.modal-close');
    filterBtns = document.querySelectorAll('.filter-btn');
    contactForm = document.getElementById('contactForm');
    particlesContainer = document.getElementById('particles');
}

// Current filter
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDOMElements();
    loadProjects();
    initializeModal();
    initializeAnimations();
    initializeContactForm();
    initializeProjectFilter();
    initializeParticles();
    initializeTechStack();
    initializeScrollAnimations();
});

// Load projects into the grid
function loadProjects(filter = 'all') {
    console.log('Loading projects...', projects.length, 'projects found');
    
    if (!projectsGrid) {
        console.error('Projects grid element not found!');
        return;
    }
    
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.tags.includes(filter));
    
    console.log('Filtered projects:', filteredProjects.length);
    
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
    
    // Trigger animation
    setTimeout(() => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => card.classList.add('animate-in'));
    }, 100);
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openModal(project);
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag" data-tag="${tag}">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link primary" onclick="event.stopPropagation(); if(this.href === '#') { alert('Enlace no disponible'); return false; }">
                    <i class="fab fa-github"></i>
                    Ver Código
                </a>
                <a href="${project.demo}" target="_blank" class="project-link secondary" onclick="event.stopPropagation(); if(this.href === '#') { alert('Enlace no disponible'); return false; }">
                    <i class="fas fa-external-link-alt"></i>
                    Ver Demo
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Project filter functionality
function initializeProjectFilter() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Load filtered projects
            currentFilter = filter;
            loadProjects(filter);
        });
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Modal functionality
function initializeModal() {
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Close button
    modalClose.addEventListener('click', closeModal);
}

// Open project modal
function openModal(project) {
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalGithub = document.getElementById('modalGithub');
    const modalDemo = document.getElementById('modalDemo');
    
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDescription.textContent = project.fullDescription;
    
    modalTechnologies.innerHTML = project.technologies.map(tech => 
        `<span class="modal-tech-tag">${tech}</span>`
    ).join('');
    
    modalGithub.href = project.github;
    modalDemo.href = project.demo;
    
    // Add click handlers for modal buttons
    modalGithub.onclick = function(e) {
        if (this.href === '#') {
            e.preventDefault();
            alert('Enlace no disponible');
            return false;
        }
    };
    
    modalDemo.onclick = function(e) {
        if (this.href === '#') {
            e.preventDefault();
            alert('Enlace no disponible');
            return false;
        }
    };
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .skill-item, .contact-card, .about-card').forEach(el => {
        observer.observe(el);
    });
}





// Initialize contact form
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            showNotification('Mensaje enviado correctamente. Te responderé pronto.', 'success');
            this.reset();
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Initialize particles
function initializeParticles() {
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Initialize tech stack interactions
function initializeTechStack() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const tech = this.getAttribute('data-tech');
            this.style.transform = 'translateY(-10px) scale(1.2)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            showNotification(`Tecnología: ${tech}`, 'info');
        });
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    scrollElements.forEach(el => scrollObserver.observe(el));
}

// Add CSS for notifications
const notificationStyles = `
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 16px 20px;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 10000;
    border-left: 4px solid #06b6d4;
}

.notification.show {
    transform: translateX(0);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notification i {
    color: #06b6d4;
    font-size: 18px;
}

.notification.notification-error {
    border-left-color: #ef4444;
}

.notification.notification-error i {
    color: #ef4444;
}

.notification.notification-warning {
    border-left-color: #f59e0b;
}

.notification.notification-warning i {
    color: #f59e0b;
}

.particle {
    pointer-events: none;
}

.nav.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .nav-menu.active {
        display: flex;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', notificationStyles);