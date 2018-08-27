;jQuery(function($){

    $('.nav1').hover(function(){
        // $('.nav2').css('display','block')
        $('.nav2').fadeIn(500,'linear',function(){
            $('.nav2').css('display','block')
        });
    },function(){
        $('.nav2').fadeOut(100,'linear',function(){
            $('.nav2').css('display','none')

    });
    // $('.nav1').on('mouseout','li',function(){
    //     $('.nav2').css('display','none');
    //     // $('.nav2').slideUp(1000,'linear',function(){
    //     //     $('.nav2').css('display','none');
    //     // });
    });
});