let data = new Date()
const mounth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const header = document.createElement("section")
header.classList.add("header")
header.classList.add("indents")
header.innerHTML = `
<div class = "date">
<p>Date:<span> ${mounth[data.getMonth()]} ${data.getDate()}</span></p>
</div>`

export {header}