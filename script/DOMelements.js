const nickName = document.getElementById('my-name');
const unorderedList = document.getElementsByTagName('ul')
const aboutMe = document.getElementsByTagName('li');

const leftBackImage = document.querySelector('.leftSide-container img');
const shortMe = document.getElementById('divCodez-details');

const myImage = document.querySelector('#image-container img');

const fullName = document.querySelector('#qualification-container h1');
const progQuality = document.querySelector('#qualification-container h2');
const downloadCV = document.querySelector('#qualification-container a');

const visitMySaver = document.querySelectorAll('#visit-container #border-container a');

nickName.addEventListener("click", showAboutMe);

function showAboutMe(e) {
    console.log(e.type);
    console.log(unorderedList[0])
    unorderedList[0].classList.add('showMe')
}

function hideAboutMe(e) {
    console.log(e.type);
}