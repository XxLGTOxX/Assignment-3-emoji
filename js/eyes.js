document.addEventListener("mousemove", (e) => {
  const ojos = document.querySelectorAll(".eye");

  ojos.forEach(ojo => {
    const bolita = ojo.querySelector(".pupil");
    const cajaOjo = ojo.getBoundingClientRect();

    // Centro del ojo
    const centroX = cajaOjo.left + cajaOjo.width / 2;
    const centroY = cajaOjo.top + cajaOjo.height / 2;

    // Calcular la dirección hacia el mouse
    const x = e.clientX - centroX;
    const y = e.clientY - centroY;

    // Calcular distancia y ángulo
    const dist = Math.sqrt(x * x + y * y);
    const angulo = Math.atan2(y, x);

    // Área de movimiento
    const maxMov = cajaOjo.width * 0.25;
    const mov = Math.min(dist, maxMov);

    // Calcular nueva posición
    const movX = Math.cos(angulo) * mov;
    const movY = Math.sin(angulo) * mov;

    // Aplicar la transformación
    bolita.style.transform = `translate(calc(-50% + ${movX}px), calc(-50% + ${movY}px))`;
  });
});

// Resetear cuando el mouse sale de la ventana
document.addEventListener("mouseleave", () => {
  const bolitas = document.querySelectorAll(".pupil");
  bolitas.forEach(bolita => {
    bolita.style.transform = "translate(-50%, -50%)";
  });
});