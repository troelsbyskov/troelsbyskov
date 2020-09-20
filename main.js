/* Auto-fjern header */
/*var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.cssText = "top: 0;";
  } else {
    document.getElementById("navbar").style.cssText = "top: -82px;";
  }
  prevScrollpos = currentScrollPos;*/

/* Auto-shrink header */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.cssText = "background-color:rgba(91,175,108,1);height:58px;";
    document.getElementById("sprogvalg").style.cssText = "top:15px;";
    document.getElementById("navn").style.cssText = "color: rgba(242,242,242,1);padding:8px;";
    document.getElementById("cv").style.cssText = "color: rgba(242,242,242,1);width:250px;padding:10px;";
    document.getElementById("kontakt").style.cssText = "color: rgba(242,242,242,1);width:250px;padding:10px;";
    document.getElementById("navn").onmouseover = function() {mouseOverNavn2()};
    document.getElementById("cv").onmouseover = function() {mouseOverCv2()};
    document.getElementById("kontakt").onmouseover = function() {mouseOverKontakt2()};
    document.getElementById("navn").onmouseout = function() {mouseOutNavn2()};
    document.getElementById("cv").onmouseout = function() {mouseOutCv2()};
    document.getElementById("kontakt").onmouseout = function() {mouseOutKontakt2()};
    document.getElementById("fanelinje").style.cssText = "top: 56px;";
  } else {
    document.getElementById("navbar").style.cssText = "background-color:rgba(91,175,108,1);height:44px;";
    document.getElementById("sprogvalg").style.cssText = "top:8px;";
    document.getElementById("navn").style.cssText = "color: rgba(242,242,242,1);padding:0;";
    document.getElementById("cv").style.cssText = "color: color: rgba(242,242,242,1);width:150px;padding:0;";
    document.getElementById("kontakt").style.cssText = "color: color: rgba(242,242,242,1);width:150px;padding:0;";
    document.getElementById("navn").onmouseover = function() {mouseOverNavn()};
    document.getElementById("cv").onmouseover = function() {mouseOverCv()};
    document.getElementById("kontakt").onmouseover = function() {mouseOverKontakt()};
    document.getElementById("navn").onmouseout = function() {mouseOutNavn()};
    document.getElementById("cv").onmouseout = function() {mouseOutCv()};
    document.getElementById("kontakt").onmouseout = function() {mouseOutKontakt()};
    document.getElementById("fanelinje").style.cssText = "top: 44px;";
  }
  prevScrollpos = currentScrollPos;
}

function mouseOverKontakt() {
  document.getElementById("kontakt").style.cssText = "color: color: rgba(242,242,242,1);width:150px;padding:0;text-decoration:underline;";
}

function mouseOverCv() {
  document.getElementById("cv").style.cssText = "color: color: rgba(242,242,242,1);width:150px;padding:0;text-decoration:underline;";
}

function mouseOverNavn() {
  document.getElementById("navn").style.cssText = "color: color: rgba(242,242,242,1);padding:0;text-decoration:underline;";
}

function mouseOutKontakt() {
  document.getElementById("kontakt").style.cssText = "color: color: rgba(242,242,242,1);width:150px;padding:0;";
}

function mouseOutCv() {
  document.getElementById("cv").style.cssText = "color: color: rgba(242,242,242,1);width:150px;padding:0;";
}

function mouseOutNavn() {
  document.getElementById("navn").style.cssText = "color: color: rgba(242,242,242,1);padding:0;";
}

function mouseOverKontakt2() {
  document.getElementById("kontakt").style.cssText = "";
}

function mouseOverCv2() {
  document.getElementById("cv").style.cssText = "";
}

function mouseOverNavn2() {
  document.getElementById("navn").style.cssText = "";
}

function mouseOutKontakt2() {
  document.getElementById("kontakt").style.cssText = "";
}

function mouseOutCv2() {
  document.getElementById("cv").style.cssText = "";
}

function mouseOutNavn2() {
  document.getElementById("navn").style.cssText = "";
}

/* Shrink header med delay (kommer kun igen i toppen) */
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.cssText = "background-color:rgba(255,255,255,0.65);height:50px;";
    document.getElementById("navn").style.cssText = "color: black;padding:0;";
    document.getElementById("cv").style.cssText = "color: black;width:150px;padding:0;";
    document.getElementById("kontakt").style.cssText = "color: black;width:150px;padding:0;";
  } else {
    document.getElementById("navbar").style.cssText = "top: -12px;";
    document.getElementById("navn").style.cssText = "color: rgba(242,242,242,1);padding:10px;";
    document.getElementById("cv").style.cssText = "color: rgba(242,242,242,1);width:250px;padding:10px;";
    document.getElementById("kontakt").style.cssText = "color: rgba(242,242,242,1);width:250px;padding:10px;";
  }
}*/
