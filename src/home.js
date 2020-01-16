export function renderHome() {
    let divP = document.getElementById("content");
    let divA = document.createElement("div");
    divA.className = "tabcontent";
    divA.id = "home";
    divP.appendChild(divA);

    let header = document.createElement("h1");
    header.textContent = "Liverpool FC Site";
    let header2 = document.createElement("h2");
    header2.textContent = "Official Site of the Reds";

    let image = document.createElement("img");
    image.src = "liverpool-logo-vector.png";

    divA.appendChild(header);
    divA.appendChild(header2);
    divA.appendChild(image);
}