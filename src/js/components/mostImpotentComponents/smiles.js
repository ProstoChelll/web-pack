const smile = document.createElement("div")
smile.innerHTML = `
        <div class = "info__right__smile">
            <img class = "smile__img" src=${require("images/Happy.svg")}>
            <img class = "smile__img" src=${require("images/Content.svg")}>
            <img class = "smile__img" src=${require("images/Fine.svg")}>
            <img class = "smile__img" src=${require("images/Sad.svg")}>
            <img class = "smile__img" src=${require("images/ReallySad.svg")}>
        </div>`

export {smile}