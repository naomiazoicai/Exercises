function adjustNavbarAndLinks() {
    var navbar = document.getElementById('navbar');
    var links = document.querySelectorAll('#navbar a');
    var screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        navbar.style.width = '200px';
        links.forEach(link => {
            link.style.width = '60px';
        });
    } else {
        navbar.style.width = '300px';
        links.forEach(link => {
            link.style.width = '120px';
        });
    }
}

window.onload = adjustNavbarAndLinks;

window.onresize = adjustNavbarAndLinks;
