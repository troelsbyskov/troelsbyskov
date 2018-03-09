/* Dropdown menu */
function dropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* Slut på Dropdown menu */

/* Popups */
function myPopup() {
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    document.getElementById('kryds').style.display='block';
}

function myPopup2() {
    document.getElementById('light2').style.display='block';
    document.getElementById('fade').style.display='block';
    document.getElementById('kryds').style.display='block';
}

function closePopup() {
    document.getElementById('light').style.display='none';
    document.getElementById('light2').style.display='none';
    document.getElementById('fade').style.display='none';
    document.getElementById('kryds').style.display='none';
}
/* Slut på Popups */

/* Back to top */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
/*Slut på Back to top*/
