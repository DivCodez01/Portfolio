const myText = [
    "Hello 👋",
    "I've knowledge in",
    "HTML, CSS and JS",
    "with frameworks like",
    "TAILWINDCSS and ReactJS",
    "💪 💪 💪"];

const autotyping = (txt, incrm, func) => {
    if (incrm < txt.length + 1) {
        progQuality.innerHTML = txt.substring(0, incrm++);
        let typeElmTm = 10 + Math.random() * 100;
        setTimeout(() => {
            autotyping(txt, incrm, func);
        }, typeElmTm);
    } else if (incrm == txt.length + 1) {
        setTimeout(() => {
            autoDeleting(txt, incrm, func);
        }, 1000);
    }
}

const autoDeleting = (txt, incrm, func) => {
    if (incrm >= 0) {
        progQuality.innerHTML = txt.substring(0, incrm--);
        let typeElmTm = 10 + Math.random() * 10;
        setTimeout(() => {
            autoDeleting(txt, incrm, func);
        }, typeElmTm);
    } else if (typeof func == "function") {
        setTimeout(func, 1000);
    }
}

const startTyping = (incrm) => {
    if (typeof myText[incrm] == "undefined") {
        setTimeout(() => {
            startTyping(0)
        }, 2000);
    } else if (incrm <= myText[incrm].length + 1) {
        autotyping(myText[incrm], 0, function () {
            startTyping(incrm + 1);
        })
    }
}

setTimeout(() => {
    startTyping(0)
}, 100);
