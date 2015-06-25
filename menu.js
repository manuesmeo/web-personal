$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        //Aparecer menu directamente $('nav').toggle();

        $('nav').animate({
          left: '0'
        })

        $('nav').animate({
          left: -100%
        })
    })
}
