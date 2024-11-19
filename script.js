document.addEventListener('DOMContentLoaded', () => {
  const footerButton = document.querySelector('.back-to-footer');

  if (footerButton) {
    footerButton.onclick = () => {
      window.location.href = 'index.html#footer';
    };
  }
});


