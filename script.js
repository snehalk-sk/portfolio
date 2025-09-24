// AOS Initialization
AOS.init({
  duration: 800,
  once: true,
});

// Modal logic for project details
const modalBg = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const modalCloseBtn = document.querySelector('.modal-close');

const projects = [
  {
    title: 'Recipe Finder App',
    description: 'A web app to find recipes based on ingredients with filters and favorites. Built with React and REST APIs.',
    link: 'https://github.com/yourusername/recipe-finder',
  },
  {
    title: 'Personal Portfolio',
    description: 'My own portfolio website showcasing projects, skills, and contact info. Built with HTML, CSS, and JS.',
    link: 'https://yourusername.github.io/portfolio',
  },
  {
    title: 'Task Manager',
    description: 'A todo list app with user authentication and persistent storage using Firebase and React.',
    link: 'https://github.com/yourusername/task-manager',
  },
];

document.querySelectorAll('.open-modal').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const index = Number(card.dataset.projectIndex);
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalLink.href = project.link;
    modalLink.textContent = 'View Project';
    modalBg.classList.add('active');
    modalBg.focus();
  });
});

modalCloseBtn.addEventListener('click', () => {
  modalBg.classList.remove('active');
});

modalBg.addEventListener('click', (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBg.classList.contains('active')) {
    modalBg.classList.remove('active');
  }
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial-item');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.dataset.theme === 'light') {
    body.dataset.theme = 'dark';
    themeToggle.textContent = 'Light Mode';
  } else {
    body.dataset.theme = 'light';
    themeToggle.textContent = 'Dark Mode';
  }
});



// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animate skill bars when in viewport
const skillBars = document.querySelectorAll('.skill-level');
const skillsSection = document.querySelector('.skills');

function animateSkills() {
  const triggerPoint = window.innerHeight * 0.8;
  if (skillsSection.getBoundingClientRect().top < triggerPoint) {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-level');
      bar.style.width = width;
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in-section');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.9;
  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;
    if (top < triggerBottom) {
      fader.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
checkFadeIn(); // Run on page load

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sticky header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
