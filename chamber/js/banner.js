let datebanner = new Date();
let weekday = datebanner.getDay();
const banner = document.getElementById('banner');

if (weekday == "1" || weekday == "2") {

  banner.style.display = "block";

} else {
  banner.style.display = "none";
}

