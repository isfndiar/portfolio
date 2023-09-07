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
