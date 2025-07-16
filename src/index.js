import "./style.css";
import loadHome from "./pages/home.js";
import loadMenu from"./pages/menu.js";
import loadAbout from "./pages/about.js";

const homebtn=document.querySelector("#home");
const menubtn=document.querySelector("#menu");
const aboutbtn=document.querySelector("#about");

homebtn.addEventListener('click' ,loadHome);
menubtn.addEventListener('click',loadMenu);
aboutbtn.addEventListener('click', loadAbout);

loadHome();