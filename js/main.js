(()=> {
let SVGIcons = document.querySelectorAll(".container img")

SVGIcons => SVGIcons.addEventListener("click", invert())


function invert(){
    document.getElementById(".container img").style.filter="invert(100%)";
    }

})();