let truth = document.getElementById('truth'),
    dare = document.getElementById('dare'),
    body_bg = document.querySelector('body'),
    buttons = document.querySelector('.buttons'),
    questions = document.querySelector('.questions'),
    continue_game = questions.querySelector('.continue'),
    questions_details = questions.querySelector('.questions_details');

truth.addEventListener('click', () => {
    body_bg.classList.add('truth');
    if(body_bg.classList.contains('truth')) {
        body_bg.classList.remove('dare')
        buttons.classList.add('active');
        questions.classList.add('active');
    }
});
dare.addEventListener('click', () => {
    body_bg.classList.add('dare')
    if(body_bg.classList.contains('dare')) {
        body_bg.classList.remove('truth')
        buttons.classList.add('active');
        questions.classList.add('active');
    }
});

continue_game.addEventListener('click', () => {
    questions.classList.remove('active');
    buttons.classList.remove('active')
});

function truthGenerator() {
    var truth = [
        "if you could be any celebrity, who would you be and why?",
        "if you had a time machine, would you choose to travel 100 years into the future or 100 years into the past?",
        "do you like dancing or singing",
        "have you ever kissed someone before?",
        "what was the best day of your life?",
        "do you have a crush?",
        "have you ever thought about changing your name? if yes, to what?",
        "what have you done that your mostly proud of?",
        "which social network do you prefer and why?",
        "when was the last time you did something nice for someone?",
        "have you ever picked your nose in public?",
        "have you ever lied in truth or dare questions before?",
        "if you win $1,000.000, what would you do with it?",
        "if you could make some of your dreams come true, which would it be?",
        "what is the weirdest thing you've ever eaten?",
        "have you ever slept naked before?",
        "when was the last time you got praised by someone?",
        "what is the thing that nobody knows about you?",
        "what is the weirdest thing about you? are you proud of it?",
        "samsung or iphone?"
    ];
   
    var randomNumber1 = parseInt(Math.random() * truth.length);
    var name = truth[randomNumber1];
   
    if (document.getElementById("result")) {
     document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }
   
    var element = document.createElement("div");
    element.setAttribute("id", "result");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
   }

function dareGenerator() {
    var dare = [
        "create a dance within 15 seconds",
        "close your eyes for 1 turn",
        "walk across the room like a duck",
        "credit the creator of this game, you can message him on whatsApp: +234-912-099-6480",
        "look to the person next to you and make a funny face",
        "put your finger on your neighbor's chin for 1 turn",
        "text your crush and tell him/her how you feel",
        "do the previous dare",
        "leap like a frog for 30 seconds",
        "sing your favorite song from start to finish",
        "act like a dog for 30 seconds",
        "do 10 push-ups",
        "put your finger in your nose",
        "kiss the next player's cheek",
        "kiss the hand of anybody on your right",
        "eat something without using your hands",
        "being blindfolded, touch somebody and try to recognize him/her",
        "exchange top/shirts with the person on your right",
        "dance with the next player on a song chosen by others",
        "you are out of the game for 2 turns"
    ];
       
    var randomNumber2 = parseInt(Math.random() * dare.length);
    var name = dare[randomNumber2];
   
    if (document.getElementById("result")) {
     document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }

    var element = document.createElement("div");
    element.setAttribute("id", "result");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
}