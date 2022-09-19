let date1 = new Date();
let year1 = date1.getFullYear();

document.getElementById('year1').innerHTML = year1;

let oLastModif1 = new Date(document.lastModified).toLocaleString();
document.getElementById('lastmod1').innerHTML = oLastModif1;