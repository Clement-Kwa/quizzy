function usernameSave() {
    var input = document.getElementById("userInput").value;
    document.getElementById("username").innerHTML = "Hello there, " + input + "!";
}

function unlockPlane() {
    $('#lockLevelPlane').replaceWith('<div id="planeBtn" class="card mt-3 mb-3 ms-3 me-3   border-0" style="width: 30rem; height: rem; transform: rotate(0);"> <a href="#" class=" planeBG boxShadow roundedBorder stretched-link text-decoration-none text-white" data-bs-toggle="modal" data-bs-target="#quizSection2"> <div class="statusIcon mb-4"> <i class="text-white fas fa-play-circle fa-3x"></i> </div> <div class="card-body "> <h2 class="card-title">Plane</h2> <p class="card-text">Level 2</p> <div class="text-end pe-1"> <img height="210vh" src="images/plane/Airplane.svg"> </div> </div> </a> </div>')
    tippy('#planeBtn', {
        placement: 'bottom',
        content: 'Quiz about parts in a Plane!', allowHTML: true,
    });
}


$(document).ready(function () {



    anime({
        targets: ' .letters ',
        translateY: [-500, 0],
        opacity: [0, 1],

        delay: anime.stagger(200, { start: 1200 })
    });

    anime({
        targets: ' .bulb ',
        translateY: [500, 0],
        opacity: [0, 1],
        delay: 3000
    });

    anime({
        targets: '.bulb',
        translateY: '-1vh',
        duration: 800,
        loop: true,
        direction: 'alternate',
        easing: 'linear',
    });



    anime({
        targets: '#rearWheel, #frontWheel',
        rotate: 360,
        easing: 'linear',
        loop: true,
        direction: 'reverse',
        duration: 5000
    });

    anime({
        targets: '#frame, #plane',
        translateY: '-1vh',
        duration: 800,
        loop: true,
        direction: 'alternate',
        easing: 'linear',
    });

    anime({
        targets: '#cloud1, #cloud3',
        translateY: '0.5vh',
        duration: 800,
        loop: true,
        direction: 'alternate',
        easing: 'linear',
    });

    anime({
        targets: '#cloud2',
        translateY: '0.8vh',
        duration: 800,
        loop: true,
        direction: 'alternate',
        easing: 'linear',
    });

    anime({
        targets: '.expand',
        scale: [1, 1.2],
        duration: 1000
    });



    tippy('#whatIsQ', {
        placement: 'bottom',

        content: '<div class="text-center">&#x1F4A1; Quizzy is an online quiz app that aims to test children’s knowledge on parts and anatomies of vehicles.</div>',
        allowHTML: true,

    });

    tippy('#bikeBtn', {
        placement: 'bottom',

        content: 'Quiz about parts in a Bicycle!',
        allowHTML: true,

    });

    tippy('#lockLevelPlane', {
        placement: 'bottom',

        content: 'Complete level 1 to Unlock!', allowHTML: true,

    });



    tippy('#lockLevelRocket', {
        placement: 'bottom',

        content: 'Complete level 2 to Unlock!', allowHTML: true,


    });


});
