function toggleMenu () {

    document.getElementById("primaryNav").classList.add("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;