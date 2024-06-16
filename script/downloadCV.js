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