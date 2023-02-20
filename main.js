$(document).ready(function(){


    $('.indicador .boton').click(function(){

        $(this).addClass('boton-active').siblings().removeClass('boton-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'todos'){
            $('.postres-box .postre').show(400);
        }else{
            $('.postres-box .postre').not('.' + filter).hide(200);
            $('.postres-box .postre').filter('.' + filter).show(400);
        }

    });

});