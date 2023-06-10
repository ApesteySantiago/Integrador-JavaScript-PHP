// Obtener los elementos del DOM
const formulario = document.getElementById('formulario');
const cantidadInput = document.getElementById('cantidad');
const categoriaSelect = document.getElementById('categoria');
const totalMsg = document.getElementById('total-msg');
const borrarBtn = document.getElementById('borrar-btn');
const resumenBtn = document.getElementById('resumen-btn');

// Asignar evento de clic al botón de Borrar
borrarBtn.addEventListener('click', function() {
  formulario.reset();
});

// Asignar evento de clic al botón de Resumen
resumenBtn.addEventListener('click', function() {
  const cantidad = parseInt(cantidadInput.value);
  const categoria = categoriaSelect.value;
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

  const total = 200 * cantidad * (1 - descuento);
  totalMsg.textContent = `Total a pagar: $${total}`;
});