
const menuData= {
    Coffee: [
        {name: "Espresso" , desc: "bold and rich , single shot"},
        {name: "Americano" , desc: "Espresso with hot water"},
        {name:"Cappuccino", desc: "Foamed Milk + espresso"},
    ],
    Tea: [
        {name: "Green Tea" , desc: "Light,earthly and refershing"},
        {name: "Chai Latte" , desc: "Spicied Indian tea wiht milk"},
    ],
    Pastries: [
        {name: "Crossaint", desc: "Buttery, flaky French pastry"},
        {name: "Muffin" , desc: "Moist muffin wiht fresh berries"},
    ],
};
const content=document.querySelector("#content");

function loadMenu() {
    content.innerHTML="";
    const menuwrapper=document.createElement("div");
    menuwrapper.classList.add("menu-wrapper");
    for(const category in menuData) {
        const section=document.createElement("details");
        section.classList.add("menu-selection");
        const summary=document.createElement("summary");
        summary.textContent=category;
        const list=document.createElement("ul");
        menuData[category].forEach(item => {
            const li=document.createElement("li");
            li.innerHTML=`<strong>${item.name}</strong> - ${item.desc}`;
            list.appendChild(li);
        });
        section.appendChild(summary);
        section.appendChild(list);
        menuwrapper.appendChild(section)
    }
    content.appendChild(menuwrapper);
}

export default loadMenu;