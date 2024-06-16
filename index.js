const nickName = document.getElementById('my-name');
const aboutMe = document.getElementsByTagName('li');

const leftBackImage = document.querySelector('.leftSide-container img');
const shortMe = document.getElementById('divCodez-details');

const myImage = document.querySelector('#image-container img');

const fullName = document.querySelector('#qualification-container h1');
const progQuality = document.querySelector('#qualification-container h2');
const downloadCV = document.querySelector('#qualification-container a');

const visitMySaver = document.querySelectorAll('#visit-container #border-container a');

function downloadCvHover() {
    const hoverSenser = document.querySelector('#qualification-container a #hover-me');

    downloadCV.addEventListener('mouseover', function (ev) {

        hoverSenser.classList.add('download');
        hoverSenser.style.left = `${ev.offsetX - 20}px`
        hoverSenser.style.top = `${ev.offsetY + 20}px`
        console.log("jojo")
    })

    downloadCV.addEventListener('mouseleave', function (ev) {
        hoverSenser.classList.remove('download');
        hoverSenser.style.left = `${ev.offsetX - 100}px`
        hoverSenser.style.top = `${ev.offsetY + 100}px`
    })
}

saveMyData()
async function saveMyData() {
    try {
        const fetchSaveMe = await fetch('save_me.json');
        const data = await fetchSaveMe.json();

        const headerDetails = data[0].headerDetails;
        const leftDetails = data[1].insideDetails.leftSideDetails;
        const rightDetails = data[1].insideDetails.rightSideDetails;
        const visitDetails = data[1].insideDetails.socialVisit;
        console.log(visitDetails)

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

        myImage.src = leftDetails.myImage;

        // rightMe();

        // downloadCvHover();

    } catch (error) {

    }
}

function knowAboutMe() {

}

function leftMe() {
    leftBackImage.src = leftDetails.backImage;
    shortMe.innerHTML = leftDetails.shortDetails;
}
function centerImg() {

}

function rightMe() {

    fullName.innerHTML = rightDetails.qualificationDetails[0]
    progQuality.innerHTML = rightDetails.qualificationDetails[1];
    downloadCV.innerHTML = rightDetails.downloadMe.mother;

    const span = document.createElement('span');
    span.innerHTML = rightDetails.downloadMe.child;
    span.setAttribute('id', "hover-me")
    downloadCV.appendChild(span);

    const urlDescTitles = visitDetails.visitUrl.visitTitle;

    Array.from(visitMySaver).forEach((link, index) => {
        link.setAttribute('title', urlDescTitles[index])
    })
}

