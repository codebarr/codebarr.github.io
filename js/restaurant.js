/*=============== SHOW MENU =============== time: 15.01*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /*===MENU SHOW ====*/
      /* Validate if constant exists */
      if(navToggle){
        navToggle.addEventListener('click', () =>{
                  navMenu.classList.add('show-menu')
        })
      }

      /*===MENU SHOW ====*/
      /* Validate if constant exists */
      if(navClose){
        navClose.addEventListener('click', () =>{
                  navMenu.classList.remove('show-menu')
        })
      }



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link,we remove the show-menu //
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the 
    // blur-header class to the header tag 
this.scrollY >= 50 ? header.classList.add('blur-header')
                   : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP =============== time: 1:05:11*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, 
    //add the show scroll class to the 'a' tag with the scrollup class 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')

} 
window.addEventListener('scroll', scrollUp)





/*=============== SCROLL SECTIONS ACTIVE LINK =============== time: 1:06:00*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  sectionsClass.classList.add('active-link')
              }else{
                  sectionsClass.classList.remove('active-link')
              }
              
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const scr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200',
    // reset: true //  Animations repeat
})

scr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
scr.reveal(`.home__card`, {delay: 200, distance: '100px', interval: 100})
scr.reveal(`.about__data, .join__image`, {origin: 'right'})
scr.reveal(`.about__image, .join__data`, {origin: 'left'})
scr.reveal(`.popular__card`, {interval: 100})