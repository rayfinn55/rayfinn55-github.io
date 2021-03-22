mybutton = document.getElementById("myBtn");
window.onscroll = scrollFunction();

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "none";
    } else {
      mybutton.style.display = "block";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
