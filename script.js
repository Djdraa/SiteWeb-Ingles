// script.js
window.addEventListener('DOMContentLoaded', () => {
  const filter = document.querySelector('.filter-input');
  filter.addEventListener('input', () => {
    const term = filter.value.toLowerCase();
    document.querySelectorAll('.card').forEach(c => {
      c.style.display = c.querySelector('h3').textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
  });

  const modal = document.createElement('div');
  modal.className = 'modal';
  const dialog = document.createElement('div');
  dialog.className = 'modal-dialog';
  const imgModal = document.createElement('img');
  const close = document.createElement('button');
  close.className = 'modal-close'; close.textContent = '✕';
  close.onclick = () => modal.classList.remove('open');
  dialog.appendChild(imgModal);
  dialog.appendChild(close);
  modal.appendChild(dialog);
  document.body.appendChild(modal);

  document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
      imgModal.src = img.src;
      modal.classList.add('open');
    });
  });
});
