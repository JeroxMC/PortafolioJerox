// ===== Contadores animados =====
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const speed = 50; // velocidad de animación
      const increment = Math.ceil(target / 100);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// ===== Barras de progreso =====
function animateSkills() {
  const skills = document.querySelectorAll('.skill-bar div');
  skills.forEach(skill => {
    const width = skill.style.width || skill.getAttribute('data-width');
    skill.style.width = width; // aplicar el ancho de la barra
  });
}

// ===== Detectar scroll para animaciones =====
function animateOnScroll() {
  const statsSection = document.querySelector('.stats');
  const toolsSection = document.querySelector('.tools-grid');
  let statsAnimated = false;
  let skillsAnimated = false;

  function onScroll() {
    if (!statsAnimated && statsSection) {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        statsAnimated = true;
        animateCounters();
      }
    }

    if (!skillsAnimated && toolsSection) {
      const rect = toolsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        skillsAnimated = true;
        animateSkills();
      }
    }

    if (statsAnimated && skillsAnimated) {
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Ejecutar al cargar por si ya está visible
}

// ===== Inicializar =====
document.addEventListener('DOMContentLoaded', animateOnScroll);


