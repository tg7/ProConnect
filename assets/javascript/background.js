$( document ).ready(function() {

(function() 
{
    var bgCounter = 0,
        backgrounds = [ "assets/images/bg1.jpg", "assets/images/bg.jpg", "assets/images/bg2.jpg"];

    function changeBackground()
    {
        bgCounter = (bgCounter+1) % backgrounds.length;
        $('body').css('background', '#000 url('+backgrounds[bgCounter]+') no-repeat');
        $('body').css('background-size', 'cover');
				$('body').css('background-repeat', 'no-repeat');
        
        setTimeout(changeBackground, 10000);

    }
    changeBackground();

})();


});

