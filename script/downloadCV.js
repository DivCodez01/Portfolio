function downloadCvHover() {
    const hoverSenser = document.querySelector('#qualification-container a #hover-me');

    downloadCV.addEventListener('mouseover', hoverDownload);
    downloadCV.addEventListener('mouseleave', leaveDownload);
    downloadCV.addEventListener('click', leaveRightSideReject);

    function hoverDownload(ev) {
        hoverSenser.classList.add('download');
        hoverSenser.style.left = `${ev.offsetX}px`
        hoverSenser.style.top = `${ev.offsetY + 20}px`
    }

    function leaveDownload(ev) {
        hoverSenser.classList.remove('download');
        hoverSenser.style.left = `${ev.offsetX - 100}px`
        hoverSenser.style.top = `${ev.offsetY + 100}px`
    }
    function leaveRightSideReject(e) {
        e.preventDefault();
    }
}