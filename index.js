const nickName = document.getElementById('my-name');
const symbol = document.querySelector('em');
const aboutMe = document.getElementsByTagName('li');

saveMyData()
async function saveMyData() {
    try {
        const fetchSaveMe = await fetch('save_me.json');
        const data = await fetchSaveMe.json();
    } catch (error) {

    }
}