nickName.onclick = (showAboutMe);

function showAboutMe(e) {

    e.preventDefault()
    let select = document.getSelection();
    select.removeAllRanges();
    hideAbout.classList.toggle('leaveMe');
}

hideAbout.onclick = (ev) => {

    fix.forEach(label => {
        label.classList.toggle('fix');

        if (label.className.includes('fix')) {
            unorderedList[0].classList.add('showMe');
            container.classList.add('less-bright');
        } else {
            unorderedList[0].classList.remove('showMe');
            container.classList.remove('less-bright');
        }
    })
}

document.onscroll = function (ev) {
    hideAbout.classList.remove('leaveMe');
    unorderedList[0].classList.remove('showMe');
    container.classList.remove('less-bright');

    fix.forEach(label => {
        label.classList.remove('fix');
    })
}