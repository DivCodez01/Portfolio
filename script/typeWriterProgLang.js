const autotyping = (txt, incrm, func) => {
    if (incrm < txt.length + 1) {
        typeWriterElms.innerHTML = txt.substring(0, incrm++);
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
        typeWriterElms.innerHTML = txt.substring(0, incrm--);
        let typeElmTm = 10 + Math.random() * 10;
        setTimeout(() => {
            autoDeleting(txt, incrm, func);
        }, typeElmTm);
    } else if (typeof func == "function") {
        setTimeout(func, 1000);
    }
}