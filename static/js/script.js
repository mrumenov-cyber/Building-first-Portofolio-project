console.log("Hi, welcome to my portfolio.");

//$("#nav").addClass("js");
//$("#nav").addClass("js").before('<div id="menu">☰</div>');

function SubmissonSuccess()
{
    alert("Submisson was a success. Thank you!");
    window.location.href ='index.html';
}

//current year in the footer
const date = new Date();
const currentYear = date.getFullYear(); 
document.getElementById("year").innerHTML = currentYear;

