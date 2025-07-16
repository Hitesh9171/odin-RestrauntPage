const content=document.querySelector("#content");

function loadAbout() {
    content.innerHTML="";
    const aboutwrapper=document.createElement("div");
    aboutwrapper.classList.add("about-wrapper");
    const heading=document.createElement("div");
    const aboutheading=document.createElement("h2");
    aboutheading.textContent="About Brew Beryy cafe";
    aboutheading.classList.add("about-heading");
    const aboutdetails=document.createElement("p");
    aboutdetails.textContent="Welcome to Brew Berry Cafe – your cozy corner for handcrafted coffee, warm pastries, and chill vibes. Founded in 2024 with a love for slow mornings and good conversations.";
    aboutdetails.classList.add("description");
    heading.appendChild(aboutheading);
    heading.appendChild(aboutdetails);

    const philsophydiv=document.createElement("div");
    const philosophyheading=document.createElement("h3");
    philosophyheading.textContent="Our Philosophy";
    philosophyheading.classList.add("headings");
    const philosphytext=document.createElement("p");
    philosphytext.textContent="We believe in quality over quantity – every cup is brewed fresh, and every guest is family.";
    philosphytext.classList.add("description");
    philsophydiv.appendChild(philosophyheading);
    philsophydiv.appendChild(philosphytext);


    const visitusdiv=document.createElement("div");
    const visitus=document.createElement("h3");
    visitus.textContent="Visit Us";
    visitus.classList.add("headings");
    const visitusText=document.createElement("p");
    visitusText.textContent="123 Main Street , Earth , Solar System";
    visitusText.classList.add("description");
    visitusdiv.appendChild(visitus);
    visitusdiv.appendChild(visitusText);



    aboutwrapper.appendChild(heading);
    aboutwrapper.appendChild(philsophydiv);
    aboutwrapper.appendChild(visitusdiv);
    content.appendChild(aboutwrapper);
}

export default loadAbout;