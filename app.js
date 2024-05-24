// Selecting necessary elements
const BtnBar = document.getElementById("bars");
const header = document.querySelector("header");
const btnBar = document.getElementById("btnBar");
const barbtn1 = document.getElementById("btnBar1");
const body = document.body;
const home = document.getElementById("home");
const about = document.getElementById("about");
const work = document.getElementById("work");
const darkMode = document.getElementById("darkMode");
const arrow = document.getElementById("arrow");
const modebtn = document.getElementById("modbtn");
const circll = document.getElementById("circll");
const clse = document.getElementById("close");
const minmiz = document.getElementById("min");
const maxmiz = document.getElementById("max");
const windoww = document.getElementById("window");
const loadingPage = document.getElementById("looding");
const content = document.getElementById("content");
const ele1 = document.getElementById("element");
const contactMe = document.getElementById("contactMe")
const ContactBtn = document.getElementById("ContactBtn")
const max2 = document.getElementById("max2")
const min2 = document.getElementById("min2")
const clse2 = document.getElementById("close2")

// Toggle header shrink on button click and update button state
BtnBar.addEventListener("click", () => {
    header.classList.toggle("shrink");
    if (header.classList.contains("shrink")) {
        barbtn1.classList.add("activeBtn");
    } else {
        barbtn1.classList.remove("activeBtn");
    }
});

// Function to handle tab selection and animations
function selectTab(selectedTab, marginLeft, width, marginTop) {
    btnBar.style.marginLeft = marginLeft;
    btnBar.style.width = width;
    home.classList.remove("home");
    about.classList.remove("home");
    work.classList.remove("home");
    selectedTab.classList.add("home");
    barbtn1.style.marginTop = marginTop;
}

// Event listeners for tab clicks
work.addEventListener("click", () => {
    selectTab(work, "205px", "95px", "-45px");
});
about.addEventListener("click", () => {
    selectTab(about, "105px", "90px", "-90px");
});
home.addEventListener("click", () => {
    selectTab(home, "", "65px", "-125px");
});

// Toggle dark mode and update arrow position
arrow.addEventListener("click", () => {
    darkMode.classList.toggle("expand");
    arrow.classList.toggle("rotat");
    arrow.style.marginLeft = arrow.classList.contains("rotat") ? "70px" : "-30px";
});

// Toggle dark mode on button click
modebtn.addEventListener("click", () => {
    circll.classList.toggle("circll2");
    circll.classList.toggle("animaion1");
    if (circll.classList.contains("circll2")) {
        body.classList.add("DarkeMode");
    } else {
        body.classList.remove("DarkeMode");
    }
});

// Function to expand and shrink the circle
function expandd() {
    circll.style.width = "60px";
    setTimeout(() => {
        circll.style.width = "30px";
    }, 200);
}

// Initialize AOS (Animate On Scroll)
AOS.init();

// Prevent pinch-to-zoom on touch devices
document.addEventListener('touchmove', (event) => {
    if (event.touches.length === 2 && event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });

// Typing animation with TypeIt
new TypeIt("#element", {
    lifeLike: false,
    speed: 0
})
    .type("s").pause(189)
    .type("u").pause(156)
    .type("d").pause(253)
    .type("o").pause(230)
    .type(" ").pause(858)
    .type("w").pause(57)
    .type("h").pause(163)
    .type("o").pause(308)
    .type(" ").pause(234)
    .type("a").pause(204)
    .type("m").pause(169)
    .type("m").pause(486)
    .delete(1).pause(264)
    .type(" ").pause(309)
    .type("i").pause(441)
    .break().pause(1168)
    .type("I").pause(583)
    .type("'").pause(299)
    .type("m").pause(252)
    .type(" ").pause(490)
    .type("A").pause(179)
    .type("b").pause(164)
    .type("d").pause(118)
    .type("u").pause(189)
    .type("l").pause(156)
    .type("l").pause(114)
    .type("a").pause(176)
    .type("h").pause(243)
    .type(" ").pause(634)
    .type("A").pause(212)
    .type("l").pause(239)
    .type(" ").pause(422)
    .type("N").pause(550)
    .type("a").pause(261)
    .type("s").pause(182)
    .type("s").pause(104)
    .type("e").pause(121)
    .type("r").pause(567)
    .break().pause(966)
    .type("W").pause(309)
    .type("e").pause(589)
    .type("l").pause(180)
    .type("l").pause(122)
    .type("c").pause(110)
    .type("o").pause(207)
    .type("m").pause(738)
    .type("e").pause(179)
    .type(" ").pause(233)
    .type("t").pause(120)
    .type("o").pause(203)
    .type(" ").pause(316)
    .type("m").pause(291)
    .type("y").pause(229)
    .type(" ").pause(913)
    .type("b").pause(298)
    .type("e").pause(423)
    .delete(1).pause(190)
    .delete(1).pause(406)
    .type("w").pause(352)
    .type("e").pause(308)
    .type("b").pause(441)
    .type("s").pause(226)
    .type("i").pause(164)
    .type("t").pause(212)
    .type("e").pause(212)
    .type(".")
    .go();

// Window controls for a simulated desktop application
clse.addEventListener("click", () => {
    windoww.style.display = "none";
    
});
minmiz.addEventListener("click", () => {
    windoww.style.width = "60%";
    windoww.style.minHeight = "150px";
});
maxmiz.addEventListener("click", () => {
    windoww.style.width = "140%";
    windoww.style.minHeight = "350px";
});

// Adjust text color in dark mode
if (body.classList.contains("DarkeMode")) {
    ele1.style.color = "white !important";
}

// Show content after loading
window.addEventListener("load", () => {
    setTimeout(() => {
        loadingPage.style.display = "none";
        content.style.display = "block";
    }, 700);
});

// ccontact Me part

contactMe.addEventListener("click",()=>{
    body.classList.add("contactMeForm")
    document.getElementsByClassName("contactForm")[0].style.display="block"
})


max2.addEventListener("click",()=>{
    ContactBtn.style.width= "90%"
    ContactBtn.style.minHeight= "450px"
    
})
min2.addEventListener("click",()=>{
    ContactBtn.style.width= "40%"
    ContactBtn.style.minHeight= "200px"

})
clse2.addEventListener("click",()=>{

    ContactBtn.style.display= "none !important"
    console.log("working")
    document.getElementsByClassName("contactForm")[0].style.display="none"
    body.classList.remove("contactMeForm")
})
