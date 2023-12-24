const navlinkEls = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;

navlinkEls.forEach((navlinkEls) => {
  const navLinkPathname = new URL(navlinkEls.href).pathname;
  if (windowPathname === navLinkPathname) {
    navlinkEls.classList.add("colored");
  }
});

const bar = document.getElementById("bar");
const nav = document.querySelector(".links ul");
const close = document.querySelector(".close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.style.display = "block";
  });
}
if (close) {
  close.addEventListener("click", (e) => {
    nav.style.display = "none";
  });
}
