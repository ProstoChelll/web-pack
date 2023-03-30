import * as  smilesImg from "@/images/mood.js"

const moodIcons = [smilesImg.happy, smilesImg.content, smilesImg.fine, smilesImg.sad, smilesImg.reallySad]

function getImage(src) {
   const img = document.createElement("img")
   img.classList.add("smile__img")
   img.src = src
   return img
}

const smile = document.createElement("div")
smile.classList.add("info__right__smile")

moodIcons.map((elem, i) => {
   const img = getImage(elem)
   img.id = `smileImg${i + 1}`
   smile.append(img)
})

const idActiveImage = localStorage.getItem("activeImage")
const lastClickedImage = smile.querySelector("#" + idActiveImage)
lastClickedImage.classList.add("smile__img__active")

smile.addEventListener("click", (e) => {
   const target = e.target
   const image = smile.querySelectorAll(".smile__img")

   image.forEach(elem => {
       elem.classList.remove("smile__img__active")
   })

   if (target.classList.contains("smile__img")) {
      target.classList.add("smile__img__active")
      localStorage.setItem("activeImage", target.id)
   }

})

export {smile}