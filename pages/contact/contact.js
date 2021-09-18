const hamburger = document.querySelector('.hamburger-container');
const navOptions = document.querySelector('.nav-options-container');


function showHideNav() {
    if(!navOptions.classList.contains('nav-active')){
        navOptions.classList.add('nav-active');
        console.log('active')
    }else{
        navOptions.classList.remove('nav-active');
        console.log('not active')
    }
}


hamburger.addEventListener('click', showHideNav);