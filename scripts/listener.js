const main = document.getElementById('main');

// listener to footer height
const footer = document.getElementById('footer');

function setFooterHeight() {
  document.documentElement.style.setProperty('--h-footer', `${footer.getBoundingClientRect().height}px`)
}
setFooterHeight()

// listener hero img mobile
const heroImg = document.querySelector("#img-hero");
function setHeroImg() {
  if (window.innerWidth <= 880) {
    heroImg.src = "images/photos/photo_2.jpg"
  } else {
    heroImg.src = "images/photos/photo_3.jpg"
  }
}
setHeroImg();

window.onresize = () => {
  setFooterHeight();
  setHeroImg();
}


// listener to navbar
const navbar = document.getElementById('navbar');
const links = navbar.querySelectorAll('#navbar-wrapper a');
const arrSections = [
  main.children.about,
  main.children.tools,
  main.children.works,
  main.children.contact,
];

// check if section is into viewport
function isIntoViewport() {
  arrSections.forEach(section => {
    if (section) {
      const positions = section.getBoundingClientRect().top + window.scrollY;
      const scroll = document.documentElement.scrollTop;
      if (positions >= scroll && positions <= scroll + 200) {
        links.forEach(link => section.dataset.type === link.dataset.type ? setNavSelectorProperies(link) : '');
      } else if (window.scrollY + window.innerHeight >= document.documentElement.getBoundingClientRect().height - 1) {
        links.forEach(link => link.dataset.type === 'contact' ? setNavSelectorProperies(link) : '');
      }
    }
  });
}

// set navbar links selection
function setNavSelectorProperies(item) {
  // active class
  links.forEach(link => link.classList.remove('active'));
  item.classList.add('active');
  // positions
  navbar.style.setProperty('--top', `${item.offsetTop}px`)
  navbar.style.setProperty('--left', `${item.getBoundingClientRect().left}px`)
  navbar.style.setProperty('--width', `${item.getBoundingClientRect().width}px`)
  navbar.style.setProperty('--height', `${item.getBoundingClientRect().height}px`)
}

// set link if section is into viewport
isIntoViewport();

// listener scroll
window.onscroll = () => {
  // scroll down button
  const scroll_down = document.getElementById('scroll-down');
  document.documentElement.scrollTop > 100 ? scroll_down.classList.add('hide') : scroll_down.classList.remove('hide');

  // style navbar on top
  navbar.offsetTop > 0 ? navbar.classList.add('style') : navbar.classList.remove('style');

  // sections on scroll top
  isIntoViewport();
}
