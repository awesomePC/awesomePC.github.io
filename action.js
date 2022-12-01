
$(document).ready(function() {
    
    setTimeout(
    function() 
    {
        $(".title").css({
            display: 'block',
        });
        setTimeout(
            function() 
            {
                $(".title").css({
                    top: 0,
                    opacity:1
                });
                
            }, 500);
       
    }, 100);
// ///////////////////////
    setTimeout(
        function() 
        {
            $(".top-table").css({
                display: 'block',
            });
            setTimeout(
                function() 
                {
                    $(".top-table").css({
                        height: '33vh',
                        top:'0vh'

                    });
                    $("#img").css({
                        height: '33vh',
                        top:'0vh'
                    });
                    
                }, 500);
           
        }, 2000);
//////////////////
    setTimeout(
        function() 
        {
            $(".button").css({
                display: 'block',
            });
            setTimeout(
                function() 
                {
                    $(".button").css({
                        opacity:1
                    });
                    
                }, 500);
           
        }, 5000);
///////////////////
    setTimeout(
        function() 
        {
            $(".text").css({
                display: 'block',
            });
            setTimeout(
                function() 
                {
                    $(".text").css({
                        top: 0
                    });
                    
                }, 500);
           
        }, 8000);

///////////////////
    setTimeout(
        function() 
        {
            $(".bottom").css({
                display: 'flex',
            });
            $("#last").css({
                display: 'none',
            });
            setTimeout(
                function() 
                {
                    $(".bottom").css({
                        top: 0
                    });
                    
                    
                }, 500);
                
           
        }, 10000);
///////////////////
    setTimeout(
        function() 
        {
          
            $("#last").css({
                display: 'block',
            });
            setTimeout(
                function() 
                {
                    $("#last").css(
                        'margin-top', '1vw'
                    );
                    
                }, 500);
        
           
        }, 12000);
///////////////////
    setTimeout(
        function() 
        {
        
                $(".bottom").css({
                    top: 0
                });
                $(".title").css({
                    transition: 'none'
                });
                $(".text").css({
                    transition: 'none'
                });
                $(".bottom").css({
                    transition: 'none'
                });
                $(".button").css({
                    transition: 'none'
                });
                $(".top-table").css({
                    transition: 'none'
                });
                $("#img").css({
                    transition: 'none'
                });
                $("#last").css({
                    transition: 'none'
                });
                         
           
        }, 15000);

});