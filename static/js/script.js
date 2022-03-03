console.log("Hi, welcome to my portfolio.");

//$("#nav").addClass("js");
//$("#nav").addClass("js").before('<div id="menu">☰</div>');

function SubmissonSuccess()
{
    alert("Submisson Success. Thank you for submitting your Contact information.");
    window.location.href ='Contact.html';
}

//current year in the footer
const date = new Date();
const currentYear = date.getFullYear(); 
document.getElementById("year").innerHTML = currentYear;

