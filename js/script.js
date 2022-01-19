(function() {
    "use strict";
    
    var images = [
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
        'img/Martins_text.jpg',
        'img/Mesquita_pic.jpg',
        'img/Mesquita_text.jpg',
        'img/MonteiroJudgement_pic.jpg',
        'img/MonteiroJudgement_text.jpg',
        'img/MonteiroTheJudge_pic.jpg',
        'img/MonteiroTheJudge_text.jpg',
        'img/MonteiroTheSun_pic.jpg',
        'img/MonteiroTheSun_text.jpg', 
        'img/Souza_pic.jpg',
        'img/Souza_text.jpg',
        'img/Torresan_pic.jpg',
        'img/Torresan_text.jpg',
    ];



    function getRandomImages(images) {
        var num = Math.floor(Math.random() * (images.length / 2)),
            pic = images[num * 2+ 1],
            pic2 = images[num * 2],
            imgStringArray = ['<img src="' + pic + '" height="80%" width="auto" />', '<img src="' + pic2 + '" height="80%" width="auto" />'];

        return imgStringArray;
        print(imgStringArray) 
    }

    var randomImages = getRandomImages(images)

    $("#picture").append(randomImages[0]);
    $("#picture2").append(randomImages[1]);

})();
