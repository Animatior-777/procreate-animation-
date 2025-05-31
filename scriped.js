document.querySelectorAll('.animation-box').forEach(box => {
    box.addEventListener('click', () => {
      box.classList.add('clicked');
      setTimeout(() => box.classList.remove('clicked'), 300);
    });
  });