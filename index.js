const nickName = document.getElementById('my-name');
const symbol = document.querySelector('em');
const aboutMe = document.getElementsByTagName('li');

const leftBackImage = document.querySelector('.leftSide-container img');
const shortMe = document.getElementById('divCodez-details');

const myImage = document.querySelector('#image-container img');

const fullName = document.querySelector('#qualification-container h1');
const progQuality = document.querySelector('#qualification-container h2');
const downloadCV = document.querySelector('#qualification-container a');
const daveSenser = document.querySelector('#qualification-container a #hover-me');

const visitGitHub = document.querySelector('#visit-container #border-container');

saveMyData()
async function saveMyData() {
    try {
        const fetchSaveMe = await fetch('save_me.json');
        const data = await fetchSaveMe.json();
    } catch (error) {

    }
}