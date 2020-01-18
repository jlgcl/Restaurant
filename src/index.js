/*  THE ODIN PROJECT - JAVASCRIPT - RESTAURANT PAGE PROJECT

STATUS: 
- event handler not recognized (STUCKED)
    answer) resolved issue with use of addEventListener; onclick with reference code (commented out) gave so many errors:
        - ERROR: event not recognized (undefined) for currentTarget.
        - ERROR: contents not clearing
        - IDK: what the reference code is trying to do with "tablinks" classes by making them "active".
- continue with adding contents to the page & adjust styling.

*/

import { renderHome } from './home.js';
import { renderSquad } from './squad.js';

function main () {
    let tab = document.createElement("div");
    tab.className = "tab";
    //let body = document.getElementsByTagName("BODY")[0];    //LEARNED: to get "body" tag, must use this method.
    let content = document.getElementById("content");
    content.appendChild(tab);

    let button1 = document.createElement("button");
    button1.class = "tablinks";    
    button1.innerHTML = "Home";
    tab.appendChild(button1);
    
    let button2 = document.createElement("button");
    button2.class = "tablinks";
    button2.innerHTML = "Squad";
    tab.appendChild(button2);

    renderHome(content);
    renderSquad(content);

    //button1.onclick = openPage(event, 'home');  //LEARNED: .onclick is better than setAttribute("onclick", function());
    //button2.onclick = openPage(event, 'squad');
    
    /*
    let button3 = document.createElement("button");
    button3.class = "tablinks";
    button3.setAttribute("onclick", openPage(event, 'contact'));
    button3.innerHTML = "Contact";
    tab.appendChild(button3);
    */

    //tabcontent load conditions upon page load:
    document.querySelectorAll(".tabcontent")[1].style.display = "none";

    //LEARNED: order of tabcontent element matters ("block" first then "none").
    button1.addEventListener("click", function(){
        document.querySelectorAll(".tabcontent")[0].style.display = "block";
        document.querySelectorAll(".tabcontent")[1].style.display = "none";
    })

    button2.addEventListener("click", function(){
       document.querySelectorAll(".tabcontent")[1].style.display = "block";
       document.querySelectorAll(".tabcontent")[0].style.display = "none";
    })
}


/*
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
  evt.currentTarget.className += " active";   //SO FAR: enabling/disabling this line shows different tabs.
}
*/

main();