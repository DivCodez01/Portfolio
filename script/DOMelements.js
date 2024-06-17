const nickName = document.getElementById('my-name');
const unorderedList = document.getElementsByTagName('ul')
const aboutMe = document.getElementsByTagName('li');
const hideAbout = document.getElementById('hide-about');
const fix = document.querySelectorAll('label');

const leftBackImage = document.querySelector('.leftSide-container img');
const shortMe = document.getElementById('divCodez-details');

const myImage = document.querySelector('#image-container img');

const fullName = document.querySelector('#qualification-container h1');
const progQuality = document.querySelector('#qualification-container h2');
const downloadCV = document.querySelector('#qualification-container a');

const visitMySaver = document.querySelectorAll('#visit-container #border-container a');

nickName.addEventListener("click", showAboutMe);

function showAboutMe(e) {
    e.preventDefault()
    let select = document.getSelection();
    select.removeAllRanges();

    console.log(e.type);
    console.log(unorderedList[0])
    // unorderedList[0].classList.add('showMe');

    // if (unorderedList[0].className.includes('showMe')) {
    hideAbout.classList.toggle('leaveMe')

    // fix.forEach(label => {
    //     label.classList.add('fix');
    // })
    // }
}

function hideAboutMe(e) {
    console.log(e.type);
}

hideAbout.addEventListener('click', ev => {
    console.log(ev.type)

    fix.forEach(label => {
        label.classList.toggle('fix');

        if (label.className.includes('fix')) {
            unorderedList[0].classList.add('showMe');
        } else {
            unorderedList[0].classList.remove('showMe');
        }
    })
})