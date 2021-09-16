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


// Salon Services Price List

// Full Highlight or Balayage $200+

// Partial Highlight $150

// Money piece or face framing (individual service) $100

// All over color $110+

// Root Touchup (Color) $75

// Toner (individual service) $50

// Root Melt (individual service) $100

// Haircut with wash & style (individual service) $55

// Dry Cut (no wash or style) $45