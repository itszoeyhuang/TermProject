// SCROLL REVEAL
document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.reveal1', {
      distance: '100px', //the distance between every move
      origin: 'bottom',    
      duration: 500,      
      interval: 150, //this is the delay between animation
      easing: 'ease-in-out',
      reset: true,        
      opacity: 0           
    });
  });