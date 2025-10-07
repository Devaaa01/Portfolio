console.log("JS loaded");

function toggleList(id) {
  const list = document.getElementById(id);
  list.classList.toggle('show');
}

const navbarLink = document.querySelector('.navbar-link');
document.querySelector("#menu").onclick = () => {
  navbarLink.classList.toggle('active');
}

const Menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
  if(!Menu.contains(e.target) && !navbarLink.contains(e.target)){
    navbarLink.classList.remove('active');
  }
});

document.querySelectorAll('.navbar-link a').forEach(link => {
  link.addEventListener('click', () => {
    navbarLink.classList.remove('active');
  });
});