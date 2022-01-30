(()=> {
    let SVGIcons = document.querySelectorAll(".container img");

    let SVGIcons = 1;
    $("container img").mouseenter(function(){
    
        SVGIcons = SVGIcons+1;
        if(SVGIcons%2==0)
        {
            $(this).addClass("myopacity");
        }
        else
        {
            $(this).removeClass("myopacity");
        }
    
        $(this).addClass("change").delay(5000).queue(function(){
            $(this).removeClass("change").dequeue();
        });
        
    });
    
 
})();
