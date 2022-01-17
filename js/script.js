(function() {
    "use strict";
    
    var Images = [
        'img/Duclos_pic.jpg',
        'img/Duclos_text.jpg',
        'img/Ferreira_pic.jpg',
        'img/Ferreira_text.jpg',
        'img/Fontes_pic.jpg',
        'img/Fontes_text.jpg',
        'img/Freitas_pic.jpg',
    ];

    var Images2 = [
        'img/Duclos_pic.jpg',
        'img/Duclos_text.jpg',
        'img/Ferreira_pic.jpg',
        'img/Ferreira_text.jpg',
        'img/Fontes_pic.jpg',
        'img/Fontes_text.jpg',
        'img/Freitas_pic.jpg',
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = `<img src="${pic}" />`;

        return imgString;
    }

    $("#picture").append(getRandomImage(Images));
    $("#picture2").append(getRandomImage(Images2));

})();


