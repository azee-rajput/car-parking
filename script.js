carinfo = [
    {
        name:"car 1", 
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan fringilla nunc. Aenean iaculis interdum ipsum at tempor."
    },
    {
        name:"car 2", 
        info:"Suspendisse vel commodo elit. Morbi aliquet neque magna, at iaculis neque fringilla id. Fusce elementum mi a erat pellentesque"
    },
    {
        name:"car 3", 
        info:"eu vestibulum elit pretium. Proin eget nisi nec lectus sollicitudin vestibulum. In vitae aliquam tortor."
    },
    {
        name:"car 4", 
        info:"Phasellus ex lacus, aliquet porttitor efficitur eget, rhoncus nec orci. Etiam ut aliquam ipsum."
    },
]

function show(src, info){
    bgImage = "url("+src+")"
    // document.getElementById("wrapper").style.backgroundImage= bgImage;
    document.getElementById('carImg').src = src;
    document.getElementById("name").innerHTML = carinfo[info].name;
    document.getElementById("info").innerHTML = carinfo[info].info;

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#wrapper:before {background: "+bgImage+";background-repeat: no-repeat;background-size: cover;}";
}