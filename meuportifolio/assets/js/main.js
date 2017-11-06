$(function () {
    
    // Carregar o objeto janela (window)
    var $window = $(window);
    
    // Efeito parallax no background
    $('section[data-type="background"]').each(function() {
        // bgobj = background object
        var $bgobj = $(this);
        
        $window.scroll(function() {
            // Scrollar o background de acordo com a velocidade definida pela variável
            // O yPos é negativo porque estamos scrollando pra cima!
            
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            // Colocar junto a posição final do background
            var coords = '50% ' + yPos + 'px';
            
            // Mover o background
            $bgobj.css({ backgroundPosition: coords});
        });
    });
});