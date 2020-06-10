// Frecce
var arrowNext = $('.next');
var arrowPrev = $('.prev');


// Funzione per Immagine successiva
function nextImage () {
  // Immagine e cerchio attivi
  var currentImage = $('.images img.active');
  var currentNav = $('.nav i.active');

  // Prima immagine e primo cerchio
  var firstImage = $('.images img.first');
  var firstNav =  $('.nav i.first');

  currentImage.removeClass('active');
  currentNav.removeClass('active');

  if (currentImage.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  else {
    currentImage.next('img').addClass('active');
    currentNav.next('i').addClass('active');
  }
};

// Funzione per immagine precedente
function prevImage () {
  // Immagine e cerchio attivi
  var currentImage = $('.images img.active');
  var currentNav = $('.nav i.active');

  // Prima immagine e primo cerchio
  var firstImage = $('.images img.first');
  var firstNav =  $('.nav i.first');

  currentImage.removeClass('active');
  currentNav.removeClass('active');

  if (currentImage.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
  else {
    currentImage.prev('img').addClass('active');
    currentNav.prev('i').addClass('active');
  }

};


// Quando HTML e CSS completamente caricati, richiamo funzioni
// al click delle frecce
$(document).ready(
  function () {
    // Click freccia destra > Immagine Successiva
    arrowNext.click(
      function () {
        nextImage()
      }
    );

    // Click freccia sinistra < Immagine Precedente
    arrowPrev.click(
      function () {
        prevImage()
      }
    )
  }

)
