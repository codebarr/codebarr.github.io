let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close_btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
})
closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
})






//  ===================TRAVERSE CODE TEST ========================//
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}






// ====CHAT GPT 5 =====//
/*const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;
let autoSlideInterval;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        clearInterval(autoSlideInterval); // Clear the auto-slide interval
        slideShowcase();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });
});

function slideShowcase() {
    const slideContent = document.querySelector('.showcase-content');
    slideContent.style.transition = 'transform 0.5s ease-in-out';
    slideContent.style.transform = `translateX(-${slideCount * 100}%)`;
}

window.addEventListener('resize', () => {
    const slideContent = document.querySelector('.showcase-content');
    slideContent.style.transition = 'none';
    slideShowcase();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideCount = (slideCount + 1) % dottedBtns.length;
        slideShowcase();
    }, 5000); // Change slides every 5 seconds (adjust as needed)
}

startAutoSlide();*/





// ====CHAT GPT 4 =====//
/*const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;
let autoSlideInterval;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        clearInterval(autoSlideInterval); // Clear the auto-slide interval
        slideShowcase();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });
});

function slideShowcase() {
    const slideContent = document.querySelector('.showcase-content');
    slideContent.style.transition = 'transform 0.5s ease-in-out';
    slideContent.style.transform = `translateX(-${slideCount * 100}%)`;
}

window.addEventListener('resize', () => {
    const slideContent = document.querySelector('.showcase-content');
    slideContent.style.transition = 'none';
    slideShowcase();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideCount = (slideCount + 1) % dottedBtns.length;
        slideShowcase();
    }, 5000); // Change slides every 5 seconds (adjust as needed)
}

startAutoSlide();*/





// ====CHAT GPT 3 =====//
/*const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;
let autoSlideInterval;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        clearInterval(autoSlideInterval); // Clear the auto-slide interval
        slideShowcase();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });
});

function slideShowcase() {
    const slideContent = document.querySelector('.showcase-content');
    slideContent.style.transition = 'transform 0.5s ease-in-out';
    slideContent.style.transform = `translateX(-${slideCount * 100}%)`;
}

window.addEventListener('resize', () => {
    const slideContent = document.querySelector('.showcase-content');
    slideContent.style.transition = 'none';
    slideShowcase();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideCount = (slideCount + 1) % dottedBtns.length;
        slideShowcase();
    }, 5000); // Change slides every 5 seconds (adjust as needed)
}

startAutoSlide();*/







    // ====CHAT GPT 2 ====//
    /*const dottedBtns = document.querySelectorAll('.dotted-btns span');
    let slideCount = 0;

    dottedBtns.forEach((item) => {
        item.addEventListener('click', () => {
            slideCount = item.dataset.id;
            slideShowcase();
        });
    });

    function slideShowcase() {
        const slideContent = document.querySelector('.showcase-content');
        slideContent.style.transition = 'transform 0.5s ease-in-out';
        slideContent.style.transform = `translateX(-${slideCount * 100}%)`;
    }

    window.addEventListener('resize', () => {
        const slideContent = document.querySelector('.showcase-content');
        slideContent.style.transition = 'none';
        slideShowcase();
    });

    let autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            slideCount = (slideCount + 1) % dottedBtns.length;
            slideShowcase();
        }, 5000); // Change slides every 5 seconds (adjust as needed)
    }

    startAutoSlide();

    document.addEventListener('mousemove', () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    });*/




    // CHAT GPT 1===//
/*const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        slideShowcase();
    });
});

function slideShowcase(){
    const displayWidth = document.querySelector('.showcase').clientWidth;
    document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`;
}

window.addEventListener('resize', slideShowcase);*/

