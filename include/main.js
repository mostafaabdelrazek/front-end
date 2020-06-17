$(function(){
    $(".sidebar-header").click(function(e){
        e.stopPropagation();
        $('.side-menu').css('right','0');
    });
    $('.side-menu').click(function(e){
        e.stopPropagation();
    });
    $('body,html,.side-menu').click(function(e){
        $('.side-menu').css('right', '-250px');
    });

    $(window).resize(function() {
        $('.about').css({
            'width':$(window).width(),
            'min-height':$(window).height(),
        });
    }).resize();

    //$('.social-media , .center ').slideDown(1500 , function(){});

});