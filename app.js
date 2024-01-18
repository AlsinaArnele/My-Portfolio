const hoverelement = document.querySelector('.animated');
const socials = document.querySelector('.socials');
const socialsLinks = document.getElementById('logos-placeholder');
const body = document.getElementById('center');
let isRotated = false;
let istoggled = false;

function rotate() {
  if (isRotated) {
    body.removeEventListener('click', rotate);
    hoverelement.style.transform = 'rotate(0deg)';
    socialsLinks.style.animation = 'fade-out 0.4s linear';
    setTimeout(() => {
      socialsLinks.style.display = 'none';
    }, 300);
  } else {
    body.addEventListener('click', rotate);
    hoverelement.style.transform = 'rotate(90deg)';
    socialsLinks.style.display = 'flex';
    socialsLinks.style.animation = 'fade-in 0.3s linear';
  }
  isRotated = !isRotated;
}
socials.addEventListener('click', rotate);


const sidebar = document.getElementById('sidebar');
const sidebarButton = document.querySelector('.closer-container');
const sidebarbutton2 = document.querySelector('.nav');

function toggle() {
  if (istoggled) {
    body.addEventListener('click', toggle);
    sidebar.style.display = 'flex';
    sidebar.style.animation = 'slide-in 0.4s linear';
  } else {
    body.removeEventListener('click', toggle)
    sidebar.style.animation = 'slide-out 0.4s linear';
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 300);
  }

  istoggled = !istoggled;
}

sidebarButton.addEventListener('click', toggle);
sidebarbutton2.addEventListener('click', toggle);
