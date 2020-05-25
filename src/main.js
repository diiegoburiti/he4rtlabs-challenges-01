const form = document.getElementById('form');
const valorProjeto = document.getElementById('project_price');
const tempoDiario = document.getElementById('daily_time');
const diasEfetivos = document.getElementById('effective_days');
const diasFerias = document.getElementById('vacation_days');
const span = document.getElementById('result');
const result = document.getElementById('content_result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let valorHora = valorProjeto.value / (diasEfetivos.value * 4 * tempoDiario.value)
   + diasFerias.value * diasEfetivos.value * tempoDiario.value;

  span.innerHTML = "R$ " + valorHora.toFixed(2).replace('.', ',');
  result.appendChild(span);
});