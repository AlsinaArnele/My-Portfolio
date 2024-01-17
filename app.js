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


// PARALLAX STUFF

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})
