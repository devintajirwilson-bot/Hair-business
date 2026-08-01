// ===============================
// Klairilia VISION
// Language + Booking System
// ===============================


let currentLanguage = "en";



function changeLanguage(language){

currentLanguage = language;



// Change normal text

document.querySelectorAll("[data-en]").forEach(element=>{


if(language === "fr"){

element.innerHTML = element.getAttribute("data-fr");

}

else{

element.innerHTML = element.getAttribute("data-en");

}


});




// Change placeholders

document.querySelectorAll("[data-placeholder-en]").forEach(element=>{


if(language === "fr"){

element.placeholder = element.getAttribute("data-placeholder-fr");

}

else{

element.placeholder = element.getAttribute("data-placeholder-en");

}


});




// Change dropdown options

document.querySelectorAll("option[data-en]").forEach(option=>{


if(language === "fr"){

option.textContent = option.getAttribute("data-fr");

}

else{

option.textContent = option.getAttribute("data-en");

}


});


}




// ===============================
// Booking Form
// ===============================


const bookingForm = document.getElementById("bookingForm");



if(bookingForm){


bookingForm.addEventListener("submit", function(event){


event.preventDefault();



if(currentLanguage === "fr"){


alert(

"Merci d'avoir choisi Klairilia VISION!\n\n" +

"Un dépôt NON REMBOURSABLE de 50 $ est requis pour confirmer votre rendez-vous.\n\n" +

"Les frais de déplacement seront calculés selon votre distance en Ontario, Canada."

);


}



else{


alert(

"Thank you for choosing Klairilia VISION!\n\n" +

"A $50 NON-REFUNDABLE deposit is required to confirm your appointment.\n\n" +

"Travel fees will be calculated based on your distance within Ontario, Canada."

);


}



bookingForm.reset();



});


}
