// script login
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    
    if (loginButton && loginModal && overlay) {
      loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('active');
      });
      
      overlay.addEventListener('click', function() {
        loginModal.classList.remove('active');
      });
      
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          loginModal.classList.remove('active');
        }
      });
    }
  });