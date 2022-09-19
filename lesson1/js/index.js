let date = new Date();
let year = date.getFullYear();

document.getElementById('year').innerHTML = year;

let oLastModif = new Date(document.lastModified).toLocaleString();
document.getElementById('lastmod').innerHTML = oLastModif;