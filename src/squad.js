export function renderSquad(content) {
    //let divP = document.getElementById("content");
    let divB = document.createElement("div");
    divB.className = "tabcontent";
    divB.id = "squad";
    content.appendChild(divB);

    let header = document.createElement("h1");
    header.textContent = "Liverpool Squad";
    let header2 = document.createElement("h2");
    header2.textContent = "YNWA. You Never Walk Alone.";

    divB.appendChild(header);
    divB.appendChild(header2);

    let pName1 = document.createElement("div");
    divB.appendChild(pName1);
    pName1.id = "pName1";
    let pName1T = document.createElement("h2");
    pName1T.innerHTML = "Jordan Henderson";
    pName1.appendChild(pName1T);
    let pName1Pic = document.createElement("img");
    pName1Pic.src = "henderson.jpg";
    pName1.appendChild(pName1Pic);

    let pName2 = document.createElement("div");
    divB.appendChild(pName2);
    pName2.id = "pName2";
    let pName2T = document.createElement("h2");
    pName2T.innerHTML = "Virgil van Dijk";
    pName1.appendChild(pName2T);
    let pName2Pic = document.createElement("img");
    pName2Pic.src = "vvd.jpg";
    pName2.appendChild(pName2Pic);
}