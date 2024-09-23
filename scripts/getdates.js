const year = document.getElementById("currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `${oLastModif}`;
