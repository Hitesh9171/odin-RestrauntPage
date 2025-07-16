const content=document.querySelector("#content");

function loadHome() {
    content.innerHTML='';

    const headingdiv=document.createElement("div");
    const heading=document.createElement("h1");
    heading.textContent="Welcome to Brew Berry Cafe";
    heading.classList.add("heading");
    headingdiv.appendChild(heading);
    headingdiv.classList.add("heading-div");
    const homeintro=document.createElement("p");
    homeintro.textContent="Brew Berry Cafe is your cozy corner for rich, hand-crafted coffee and delicious pastries. Whether you're here to work, relax, or catch up with friends — we’ve saved you a seat.";
    homeintro.classList.add("homeinto");
    headingdiv.appendChild(homeintro);

    const hoursdiv=document.createElement("div");
    const hoursheading=document.createElement("h2");
    hoursheading.textContent="Hours";
    hoursheading.classList.add("hours-heading");
    hoursdiv.appendChild(hoursheading);
    const timings=document.createElement("p");
    timings.innerHTML=`Monday : 8am-10pm<br>Tuesday : 8am-10pm<br>Wednesday :8am-9pm<br>Thursday : 8am-9pm<br>Friday : 9am-9pm<br>Saturday : 7am-11pm<br>Sunday : 7am-11pm`;
    timings.classList.add("timings");
    hoursdiv.classList.add("hours-div");
    hoursdiv.appendChild(timings);

    const locationdiv=document.createElement("div");
    const locationheadingdiv=document.createElement("div");
    const locationheading=document.createElement("h2");
    locationheading.textContent="Visit Us";
    locationheading.classList.add("location-heading");
    locationheadingdiv.classList.add("location-heading-div");
    locationdiv.classList.add("location-div");
    const locationdescriptiondiv=document.createElement("div");
    const location=document.createElement("p");
    location.innerHTML=`123 Brew Street<br>Earth,Solar System<br>(just after venus and just before jupiter)`;
    location.classList.add("location");
    locationdescriptiondiv.appendChild(location);
    
    locationheadingdiv.appendChild(locationheading);
    locationdiv.appendChild(locationheading);
    locationdiv.appendChild(locationdescriptiondiv);

    content.appendChild(headingdiv);
    content.appendChild(hoursdiv);
    content.appendChild(locationdiv);
}

export default loadHome;

