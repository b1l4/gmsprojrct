function makebold() {
    var text = document.getElementById("para");
    text.style.fontWeight = "bold"
}
function makeunderline(){
    var text = document.getElementById("para");
    text.style.textDecoration="underline"
}
function makeitalic(){
    var text = document.getElementById("para");
  text.style.fontStyle="italic"
}
function fontsize(){
    var select=document.getElementById("size");
    var value = select.options[select.selectedIndex].value;
    var text = document.getElementById("para");
    text.style.fontSize=value
}
function policesize() {
    var e=document.getElementById("police");
    var value =e.options[e.selectedIndex].value;
    var text=document.getElementById("para");
    text.style.fontFamily=value
}
