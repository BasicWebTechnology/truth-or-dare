let welcomePage = document.querySelector('.popup_welcome'),
    welcomeImage = welcomePage.querySelector('.image_container'),
    welcomePageLoader = welcomePage.querySelector('.loader'),
    welcomePageLoaderSpan = welcomePageLoader.querySelector('span');
    

let randomDelay = ((Math.random() * 100) + 2000).toFixed();

window.addEventListener('load', () => {
    welcomeImage.classList.add('show');
    welcomePageLoader.classList.add('show');

    let width = '100%';
    setTimeout(() => {
        welcomePageLoaderSpan.style.width = width;

        setTimeout(() => {
            welcomePageLoader.classList.remove('show');
            welcomeImage.classList.remove('show');

            setTimeout(() => {
                location.href = 'welcome.html';
            }, randomDelay)
        }, 4000);
    }, randomDelay);
})

// let welcomePage = document.querySelector('.popup_welcome'),
//     welcomeImage = welcomePage.querySelector('.image_container'),
//     welcomePageLoader = welcomePage.querySelector('.loader'),
//     welcomePageLoaderSpan = welcomePage.querySelector('.loader span'),
//     width = '100%';

// window.addEventListener('load', () => {
//     welcomeImage.classList.add('show');

//     setTimeout(() => {
//         welcomePageLoader.classList.add('show');

//         if(welcomePageLoader.classList.contains('show')) {
//             welcomePageLoaderSpan.style.width = width;
//             setTimeout(() => {
//                 if(welcomePageLoaderSpan.style.width == width) {
//                     setTimeout(() => {
//                         welcomeImage.classList.remove('show');
//                         welcomePageLoader.classList.remove('show');
//                         setTimeout(() => {
//                             welcomePage.classList.add('active');
//                         }, randomDelay);
//                     }, randomDelay);
//                 };
//             }, randomDelay);
//         };
//     }, randomDelay);
// });