// Contadores animados
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const speed = 50; // ms
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

// Ejecutar cuando la sección sea visible
const statsSection = document.querySelector('.stats');
let statsShown = false;

function onScrollCounters() {
  if (!statsSection) return;
  const rect = statsSection.getBoundingClientRect();
  if (!statsShown && rect.top < window.innerHeight) {
    statsShown = true;
    animateCounters();
    window.removeEventListener('scroll', onScrollCounters);
  }
}
window.addEventListener('scroll', onScrollCounters);
onScrollCounters(); // por si ya es visible al cargar
