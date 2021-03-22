  document.addEventListener("DOMContentLoaded", () => {
    let projectBtn = document.getElementById("projects")
    projectBtn.addEventListener("click", () => {
      let homeIcon = document.getElementById("scroll")
      homeIcon.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline:"center",
      });
    })
  })

  document.addEventListener("DOMContentLoaded", () => {
    let skillsbtn = document.getElementById("skills")
    skillsbtn.addEventListener("click", () => {
      let homeIcon = document.getElementById("skills-section")
      homeIcon.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline:"center",
      });
    })
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    let homeBtn = document.getElementById("home")
    homeBtn.addEventListener("click", () => {
      let homeIcon = document.getElementById("img1")
      homeIcon.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline:"center",
      });
    })
  })

  document.addEventListener("DOMContentLoaded", () => {
    let resumeClick = document.getElementById("mewresume")
    resumeClick.addEventListener("click", () => {
      window.alert("You clicked on my favorite button!")
    })
  })