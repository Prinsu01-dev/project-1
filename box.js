function bulbon() {
    document.getElementById("img1").src = "bulbon.png";
    document.getElementById("img2").style.display = "inline"
}

if (document.getElementById("img1").src === "http://127.0.0.1:5500/bulb%20off.jpg") {
    document.getElementById("img2").style.display = "none"
}