console.log("Hi, welcome to my portfolio.");

//$("#nav").addClass("js");
//$("#nav").addClass("js").before('<div id="menu">☰</div>');

function SubmissonSuccess()
{
    alert("Submisson was not a Success. Please email me diectly, or try again later.");
    window.location.href ='contact.html';
}

//current year in the footer
const date = new Date();
const currentYear = date.getFullYear(); 
document.getElementById("year").innerHTML = currentYear;

