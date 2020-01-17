export function renderSquad(tab) {
    //let divP = document.getElementsByClassName("tab");
    let divB = document.createElement("div");
    divB.className = "tabcontent";
    divB.id = "squad";
    tab.appendChild(divB);

    let header = document.createElement("h1");
    header.textContent = "Liverpool Squad";
    let header2 = document.createElement("h2");
    header2.textContent = "YNWA. You Never Walk Alone.";


    divB.appendChild(header);
    divB.appendChild(header2);
}