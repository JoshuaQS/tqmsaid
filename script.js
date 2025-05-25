onload = () => {
    document.body.classList.remove("container");
  };
  // Añade esto a tu script.js si quieres interacción
  document.querySelector('.love-message').addEventListener('mousemove', (e) => {
    const letters = document.querySelectorAll('.love-message span');
    letters.forEach(letter => {
      const rect = letter.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const distance = Math.sqrt(x * x + y * y);
      const glow = Math.max(0, 1 - distance / 100);
      letter.style.textShadow = `0 0 ${glow * 30}px #ff2d75`;
    });
  });