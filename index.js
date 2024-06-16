const nickName = document.getElementById('my-name');
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

        const headerDetails = data[0].headerDetails;
        nickName.innerHTML = headerDetails.nickName;

        Array.from(aboutMe).forEach((li, index, array) => {

            li.setAttribute("style", '--clr: #00cc99;')

            if (index == 0) {
                li.innerHTML = '&nbsp;&nbsp;home';
            } else if (index == 1) {
                li.innerHTML = '&nbsp;&nbsp;about';
            } else if (index == 2) {
                li.innerHTML = '&nbsp;&nbsp;dashboard';
            } else if (index == 3) {
                li.innerHTML = '&nbsp;&nbsp;projects';
            } else if (index == 4) {
                li.innerHTML = '&nbsp;&nbsp;contact';
            }
        })
    } catch (error) {

    }
}