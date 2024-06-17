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