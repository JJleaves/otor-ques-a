const buttons = [...document.querySelectorAll('.report-button')];
const frame = document.getElementById('pdfFrame');
function activate(button) {
  buttons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  frame.src = button.dataset.pdf;
}
buttons.forEach(button => button.addEventListener('click', () => activate(button)));
if (buttons[0]) activate(buttons[0]);
