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

        leftBackImage.src = leftDetails.backImage;
        shortMe.innerHTML = leftDetails.shortDetails;

        myImage.src = leftDetails.myImage;

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

        downloadCvHover()

    } catch (error) {

    }
}

