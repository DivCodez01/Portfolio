const nickName = document.getElementById('my-name');
const aboutMe = document.getElementsByTagName('li');

const leftBackImage = document.querySelector('.leftSide-container img');
console.log(leftBackImage)
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
        const leftDetails = data[1].insideDetails.leftSideDetails;
        const rightDetails = data[1].insideDetails.rightSideDetails;
        const visitdetails = data[1].insideDetails.socialVisit;
        console.log(headerDetails)

        nickName.innerHTML = headerDetails.nickName;

        Array.from(aboutMe).forEach((li, index, array) => {

            li.setAttribute("style", "--clr: #00cc99;");

            if (index == 0) {
                li.innerHTML = headerDetails.unorderedList.list[index];
            } else if (index == 1) {
                li.innerHTML = headerDetails.unorderedList.list[index];
            } else if (index == 2) {
                li.innerHTML = headerDetails.unorderedList.list[index];
            } else if (index == 3) {
                li.innerHTML = headerDetails.unorderedList.list[index];
            } else if (index == 4) {
                li.innerHTML = headerDetails.unorderedList.list[index];
            }
        });

        leftBackImage.src = leftDetails.backImage;
    } catch (error) {

    }
}