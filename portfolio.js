//navbar
const nav = document.getElementById("nav");
const navHeight = nav.getBoundingClientRect().height;
const sec1 = document.querySelector(".sec1");
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    //yani jb sec1 intersect na hoirha ho root yani viewport se tb sticky class lgao
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const sec1_Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //yani jb 0% display ho is sec ka tb display ho nav
  rootMargin: `-${navHeight}px`,
});
sec1_Observer.observe(sec1);

//opacity
const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//email.js
const form = document.querySelector(".contact-form");
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    "service_ywvdopl",
    "template_n3kjyma",
    "#contact-form",
    "iCtrQkJU_kD5VOfjn"
  );
  //   .then(() => (contactMessage.textContent = "Message sent successfully"));
  // setTimeout(() => (contactMessage.textContent = "5000"));
};
form.addEventListener("submit", sendEmail);

//smooth scroll nav
let sec = document.getElementsByClassName("sec");

for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].addEventListener("click", function () {
    sec[i].scrollIntoView({ behavior: "smooth" });
  });
}
