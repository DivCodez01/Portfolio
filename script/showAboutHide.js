nickName.onclick = (showAboutMe);

function showAboutMe(e) {

    e.preventDefault()
    let select = document.getSelection();
    select.removeAllRanges();
    hideAbout.classList.toggle('leaveMe');
}

hideAbout.onclick = (ev) => {

    rotate.forEach(label => {
        label.classList.toggle('rotate');

        if (label.className.includes('rotate')) {
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

    rotate.forEach(label => {
        label.classList.remove('rotate');
    })
}

screenRotate()
function screenRotate() {

    setInterval(() => {
        const scrRotate = screen.orientation.angle;
        if (scrRotate) {

        }
    }, 400);
}