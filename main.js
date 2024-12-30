document.addEventListener('DOMContentLoaded', () => {
  // Configurar una fecha de prueba para 10 segundos en el futuro
  const testDate = new Date();
  testDate.setSeconds(testDate.getSeconds() + 10);
  const nextYear = (new Date()).getFullYear() + 1;
  const nextYearDate = new Date(nextYear, 0, 1);
  const myButton = document.getElementById('myButton');
  if (myButton) {
    myButton.style.display = 'none'; // Ocultar el botón al inicio
    console.log('Botón oculto al inicio');
  } else {
    console.error('No se encontró el botón con id "myButton".');
  }

  const dayElement = document.getElementById('dayElement');
  const hourElement = document.getElementById('hourElement');
  const minElement = document.getElementById('minElement');
  const secElement = document.getElementById('secElement');

  // Verificar si los elementos se seleccionaron correctamente
  console.log('dayElement:', dayElement);
  console.log('hourElement:', hourElement);
  console.log('minElement:', minElement);
  console.log('secElement:', secElement);

  if (!dayElement || !hourElement || !minElement || !secElement) {
    console.error('Uno o más elementos del temporizador no se encontraron en el DOM.');
    return;
  }

  const interval = setInterval(() => {
    const todayDate = new Date();
    const secDiff = Math.floor((nextYearDate.Time() - todayDate.getTime()) / 1000);
    const days = Math.floor((secDiff / (60 * 60)) / 24);
    const hours = Math.floor(secDiff / (60 * 60)) % 24;
    const minutes = Math.floor(secDiff / 60) % 60;
    const seconds = Math.floor(secDiff) % 60;
    
    // Verificar los valores calculados
    console.log('days:', days, 'hours:', hours, 'minutes:', minutes, 'seconds:', seconds);

    dayElement.innerText = days;
    hourElement.innerText = hours;
    minElement.innerText = minutes;
    secElement.innerText = seconds;

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      myButton.style.display = 'block'; // Mostrar el botón cuando el temporizador llegue a 0:0:0
      console.log('Botón mostrado');
      clearInterval(interval); // Detener el intervalo
    }
  }, 1000);
  myButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Carta.pdf';
    link.download = 'Carta.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
