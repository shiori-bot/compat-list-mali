function startLoading() {
    myVar = setTimeout(showPage, 750);
}
function showPage() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("mainList").style.display = "block";
    document.body.style.backgroundColor = "#2C2D31";
    document.getElementById("menudiv").style.display = "block";
}
var coll = document.getElementsByClassName("menu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
