/*  THE ODIN PROJECT - JAVASCRIPT - RESTAURANT PAGE PROJECT

STATUS: can't get elements to show in HTML DOM.

*/

import { renderHome } from './home.js';
import { renderSquad } from './squad.js';

function main () {
    let tab = document.createElement("tab");
    let body = document.getElementsByTagName("BODY")[0];    //LEARNED: to get "body" tag, must use this method.
    body.appendChild(tab);

    let button1 = document.createElement("button");
    button1.class = "tablinks";
    button1.onclick = "openPage(event, 'home')";
    button1.innerHTML = "Home";
    tab.appendChild(button1);
    
    let button2 = document.createElement("button");
    button2.class = "tablinks";
    button2.onclick = "openPage(event, 'squad')";
    button2.innerHTML = "Squad";
    tab.appendChild(button2);
    
    let button3 = document.createElement("button");
    button3.class = "tablinks";
    button3.onclick = "openPage(event, 'home')";
    button3.innerHTML = "Contact";
    tab.appendChild(button3);
    
    renderHome();
    renderSquad();
    openPage();

}

function openPage(evt, pageName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

main();