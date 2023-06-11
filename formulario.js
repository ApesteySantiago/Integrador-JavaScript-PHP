// Obtener los elementos del DOM
formulario = document.getElementById('formulario');
cantidadInput = document.getElementById('cantidad');
categoriaSelect = document.getElementById('categoria');
totalMsg = document.getElementById('total-msg');
borrarBtn = document.getElementById('borrar-btn');
resumenBtn = document.getElementById('resumen-btn');

// Asignar evento de clic al botón de Borrar
borrarBtn.addEventListener('click', function() {
  formulario.reset();
});

// Asignar evento de clic al botón de Resumen
resumenBtn.addEventListener('click', function() {
  cantidad = parseInt(cantidadInput.value);
  categoria = categoriaSelect.value;
  let descuento = 0;

  switch (categoria) {
    case 'estudiante':
      descuento = 0.8;
      break;
    case 'trainee':
      descuento = 0.5;
      break;
    case 'junior':
      descuento = 0.14;
      break;
    default:
      descuento = 0;
  }

  const total = 200 * cantidad * (1 - descuento).toFixed(2);
  totalMsg.textContent = `Total a pagar: $${total}`;
});