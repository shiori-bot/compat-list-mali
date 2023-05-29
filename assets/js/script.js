function startLoading() {
    myVar = setTimeout(showPage, 375);
}
function showPage() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("mainList").style.display = "block";
    document.body.style.backgroundColor = "#2C2D31";
}
