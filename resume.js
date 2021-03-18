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