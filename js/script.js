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
        'img/Gröpper_pic.jpg',
        'img/Gröpper_text.jpg',
        'img/guimaraes_pic.jpg',
        'img/guimaraes_text.jpg',
        'img/Jesus_pic.jpg',
        'img/Jesus_text.jpg',
        'img/Martins_pic.jpg',
    ];

    var Images2 = [
        'img/Martins_text.jpg',
        'img/Mesquita_pic.jpg',
        'img/Mesquita_text.jpg',
        'img/Monteiro_Judgement_pic.jpg',
        'img/Monteiro_Judgement_text.jpg',
        'img/Monteiro_TheJudge_pic.jpg',
        'img/Monteiro_TheJudge_text.jpg',
        'img/Monteiro_TheSun_pic.jpg',
        'img/Monteiro_TheSun_text.jpg', 
        'img/Souza_pic.jpg',
        'img/Souza_text.jpg',
        'img/Torresan_pic.jpg',
        'img/Torresan_text.jpg',
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = '<img src="' + pic + '" height="50%" width="auto" />';

        return imgString;
    }

    $("#picture").append(getRandomImage(Images));
    $("#picture2").append(getRandomImage(Images2));

})();


