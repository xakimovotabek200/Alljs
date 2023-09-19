var activeTab = null; // Yangi o'zgaruvchi

function openCity(evt, cityName) {
  if (activeTab !== cityName) {
    if (activeTab) {
      document.getElementById(activeTab).style.display = "none";
      document.querySelector(".tablinks.active").classList.remove("active");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    activeTab = cityName;
  } else {
    document.getElementById(cityName).style.display = "none";
    evt.currentTarget.classList.remove("active");
    activeTab = null;
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle between adding and removing the "active" class,
    // to highlight the button that controls the panel
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    // Close other open accordions
    var otherAccordions = document.getElementsByClassName("accordion");
    for (var j = 0; j < otherAccordions.length; j++) {
      if (otherAccordions[j] !== this) {
        otherAccordions[j].nextElementSibling.style.display = "none";
        otherAccordions[j].classList.remove("active");
      }
    }
  });
}