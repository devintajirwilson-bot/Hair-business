const words = {

en:{

hero:"Luxury Hair Starts Here",

subtitle:"Luxury Braids • Locs • Silk Press • Color",

book:"Book Appointment"

},

fr:{

hero:"Le Luxe Commence Ici",

subtitle:"Tresses • Locks • Lissage • Coloration",

book:"Prendre Rendez-vous"

}

};

function changeLanguage(language){

document.querySelector(".hero h1").innerHTML=
words[language].hero;

document.querySelector(".hero p").innerHTML=
words[language].subtitle;

document.querySelector(".hero a").innerHTML=
words[language].book;

}

document.querySelectorAll(".language button")[0]
.onclick=()=>changeLanguage("en");

document.querySelectorAll(".language button")[1]
.onclick=()=>changeLanguage("fr");
