document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
      const answer = box.nextElementSibling; 
      if (answer.style.display === 'block') {
        answer.style.display = 'none'; 
      } else {
        answer.style.display = 'block'; 
      }
    });
  });
  