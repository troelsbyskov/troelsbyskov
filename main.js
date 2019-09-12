/* Hide header / navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsById("header").style.top = "0";
    document.getElementsByClassName("navigation").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-220px";
    document.getElementsByClassName("navigation").style.top = "-220px";
  }
  prevScrollpos = currentScrollPos;
}
/* Slut på Hide header / navbar */

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
    if (document.body.scrollTop > 515 || document.documentElement.scrollTop > 515) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}
/*Slut på Back to top*/

/* Expand/collapse text */
function toggleMe(a){
    var e=document.getElementById(a);
    var i = document.getElementById(a+'_image');
        if(!e)return true;
        if(e.style.display=="none"){
            e.style.display="block"
            i.style.backgroundPosition="0 -100%";
        } else {
            e.style.display="none"
            i.style.backgroundPosition="0 0";
        }
        return true;
}
/* Slut på Expand/collapse text */

/* Scrollmenu-dropdown */
function smDropdownMenu() {
    document.getElementById("smDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.smdropbtn')) {

    var dropdowns = document.getElementsByClassName("smdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* Slut på Scrollmenu-dropdown */
