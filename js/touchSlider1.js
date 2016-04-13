var t4;
$(function() {
    // var as=document.getElementById('pagenavi').getElementsByTagName('a');
    t4=new TouchSlider('slider4',{speed:1000, direction:0, interval:1000, fullsize:true});
    t4.on('before',function(m,n){
        console.log(m+','+n);
        // as[m].className='';
        // as[n].className='active';
    });
    $('#currentPage').on('touchend',function (e) {
        $(this).hide();
        // $('#slider4').show();
        window.setTimeout(function (argument) {
            flag=true;
            // body...
        },500);
        
        // body...
    })
    // $('.touchSlider').on('click','.touchslider-item',function() {
    //     alert();
    //     // body...
    // });
    // $('.touchSlider').on('touchend',function(argument) {
    //     event.preventDefault();
    //     alert();
    //     // body...
    // });
    
    // $(".touchslider").data("touchslider").start(); // start the slider
});
var flag=true;
function getImg (argument) {
    if(flag){
        $('#currentPage').text(argument).show();
        // $('#slider4').hide();
        flag=false;
    }
    // body...
}
