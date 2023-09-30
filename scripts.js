const navbarButton = document.querySelector('.navbar-nav');
const hm = document.querySelector('#hamburger-menu');

// button burger ketika di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarButton.classList.toggle('active');
    e.preventDefault();
}

document.addEventListener('click',function(e) {
    if(!hm.contains(e.target) && !navbarButton.contains(e.target)) {
        navbarButton.classList.remove('active');

    }
})


const setBg = document.querySelector('#set-bg')
const userPhoto = document.querySelector('#photo-profile')
const navbar = document.querySelector('.navbar')
const navbarLogo = document.querySelector('.navbar-logo')


setBg.addEventListener('click', function (e) {
    const linkCss = document.querySelector('.hai')
    linkCss.href.toggle = 'src/bang.css'
    // DarkToLight()
    // heroSection()
    e.preventDefault()

})

const prevScroll = window.pageYOffset;
window.addEventListener('scroll', function() {
    this.window.pageYOffset
})



function DarkToLight() {
    document.body.classList.toggle('white')
    userPhoto.classList.toggle('bg-profile')
    navbar.classList.toggle('white')
    hm.classList.toggle('color-black')
    navbarLogo.classList.toggle('color-black')
    navbarButton.classList.toggle('white')
    for (let acnhor of navbarButton.children) {
        
        acnhor.classList.toggle('white')
    }
}

