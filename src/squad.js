export function renderSquad() {
    let divP = document.getElementById("content");
    let divB = document.createElement("div");
    divB.className = "tabcontent";
    divB.id = "squad";
    divP.appendChild(divB);

    let header = document.createElement("h1");
    header.textContent = "Liverpool Squad";
    let header2 = document.createElement("h2");
    header2.textContent = "YNWA. You Never Walk Alone.";

    let image = document.createElement("img");
    image.src = "liverpool-logo-vector.png";

    divB.appendChild(header);
    divB.appendChild(header2);
    divB.appendChild(image);
}