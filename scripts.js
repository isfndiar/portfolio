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

// rotate photo
userPhoto.addEventListener('click', function() {
    this.classList.toggle('rotated')
})

// set mode moon or sun
let isMoonMode = false
setBg.addEventListener('click', function (e) {
    if (isMoonMode) {
        setBg.children[0].className = 'fa-regular fa-sun'
    } else {
        setBg.children[0].className = 'fa-regular fa-moon'
    }

    // set new value
    isMoonMode = !isMoonMode // change true false true false
    DarkMode() // set css
    e.preventDefault()

})

let prevScroll = window.pageYOffset;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100%';
        
    }
    prevScroll = currentScroll
    
})



function DarkMode() {

    const gtsrcCss =  document.querySelector('.modeSetting')
    if (isMoonMode) {
        gtsrcCss.href = 'lightMode.css'
    } else {
        gtsrcCss.href = 'style.css'
    }


}

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

