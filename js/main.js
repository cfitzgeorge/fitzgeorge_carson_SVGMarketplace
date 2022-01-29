(()=> {
    let SVGIcons = document.querySelectorAll(".container img");


    function logElement() {
    console.log('mouse is on a logic gate');
    }

    SVGIcons.forEach(container => container.addEventListener("mouseover", logElement,));

})();