nickName.addEventListener("click", showAboutMe);

function showAboutMe(e) {

    e.preventDefault()
    let select = document.getSelection();
    select.removeAllRanges();
    hideAbout.classList.toggle('leaveMe')
}

function hideAboutMe(e) {
    console.log(e.type);
}

hideAbout.addEventListener('click', ev => {

    fix.forEach(label => {
        label.classList.toggle('fix');

        if (label.className.includes('fix')) {
            unorderedList[0].classList.add('showMe');
        } else {
            unorderedList[0].classList.remove('showMe');
        }
    })
})