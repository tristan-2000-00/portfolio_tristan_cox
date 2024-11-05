console.log("Welcome to my portfolio!")

function menuToggle() {
  var nav = document.getElementById('main-nav');
  if (nav.className === 'navtoggle') {
    nav.className += ' show';
  } else {
    nav.className = 'navtoggle';
  }
}