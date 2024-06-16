const nickName = document.getElementById('my-name');
const symbol = document.querySelector('em');
const aboutMe = document.getElementsByTagName('li');

const leftBackImage = document.querySelector('.leftSide-container img');
const shortMe = document.getElementById('divCodez-details');

const myImage = document.querySelector('#image-container img');

saveMyData()
async function saveMyData() {
    try {
        const fetchSaveMe = await fetch('save_me.json');
        const data = await fetchSaveMe.json();
    } catch (error) {

    }
}