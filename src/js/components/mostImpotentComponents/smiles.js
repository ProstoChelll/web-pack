const smile = document.createElement("div")
smile.innerHTML = `
        <div class = "info__right__smile">
            <img class = "smile__img" src=${require("images/verynotfun.svg")}>
            <img class = "smile__img" src=${require("images/notfun.svg")}>
            <img class = "smile__img" src=${require("images/prost.svg")}>
            <img class = "smile__img" src=${require("images/fun.svg")}>
            <img class = "smile__img" src=${require("images/veryfun.svg")}>
        </div>`

export {smile}