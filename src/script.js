const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav-bar')

menuBtn.addEventListener('click', () => {
  const navOn = navBar.classList.contains('active')
  if (!navOn) {
    navBar.classList.add('active')
    menuBtn.classList.add('active')
  }
  else {
    navBar.classList.remove('active')
    menuBtn.classList.remove('active')
  }
})