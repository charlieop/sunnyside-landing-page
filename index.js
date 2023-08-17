let showNav = false;

function toggleNav() {
  showNav = !showNav;
  let nav = document.querySelector(".primary-nav__links");
  if (showNav) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}
