window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("stickyNavbar");
var dropdownControl = document.getElementById("dropdownControl");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    dropdownControl.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    dropdownControl.style.display = "none";
	dropdownToggleButton();
  }
}

function dropdownToggle(x) {
    x.classList.toggle("change");
}

function dropdownToggleButton() {
	x = document.getElementById("dropdownToggleButton");
	if (x.classList.contains("change")) {
		x.click();
	}
}