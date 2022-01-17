(function() {
    "use strict";
    
    var Images = [
        'Duclos_pic.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Colour-Storm.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Electric-Water.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Lime-Drops.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Natural-Bubbles.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Nice-Try.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Peach-Hexagon.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Room-303.jpg'
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = '<img src="' + pic + '" height="50%" width="auto" />';

        return imgString;
    }

    $("#picture").append(getRandomImage(Images));

})();