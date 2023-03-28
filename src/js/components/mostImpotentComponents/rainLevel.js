import * as weather from "@/images/rainLevelImg.js"

const rainLevel = document.createElement("div")
rainLevel.classList.add("info__right__water")
rainLevel.innerHTML = `<p>Water</p>`


const waterInRainLevel = (id, claz, img) =>{
    let image = document.createElement("img")
    image.id = id
    image.classList.add(claz)
    image.src = img

    rainLevel.append(image)
}//функция которая принимает в себя айди класс и картинку и добавляет их в html

for(let i = 0; i <= 6; i++){
    const variable = {
    id: `aDrop`,
    claz: `aDrop__${i}`,
    img: weather.rain}

    waterInRainLevel(variable.id, variable.claz, variable.img)
}//цикл что бы картинок было 6(классы картинок в порядке возрастания)

document.addEventListener("click", (e)=>{
    const rainImg = e.target//e.target - элемент на который нажали
    if (rainImg.id = "aDrop"){//если айди текущего нажатого элемента равен aDrop то
        if (rainImg.classList == "aDrop__0" || rainImg.classList == "aDrop__0 aDrop__active"){
            aDropZero.classList.toggle("aDrop__active")
        }
        if (rainImg.classList == "aDrop__1" || rainImg.classList == "aDrop__1 aDrop__active"){
            aDropZero.classList.toggle("aDrop__active")
            aDropFirst.classList.toggle("aDrop__active")
        }
        if (rainImg.classList == "aDrop__2" || rainImg.classList == "aDrop__2 aDrop__active"){
            aDropZero.classList.toggle("aDrop__active")
            aDropFirst.classList.toggle("aDrop__active")
            aDropSecond.classList.toggle("aDrop__active")
        }
        if (rainImg.classList == "aDrop__3" || rainImg.classList == "aDrop__3 aDrop__active"){
            aDropZero.classList.toggle("aDrop__active")
            aDropFirst.classList.toggle("aDrop__active")
            aDropSecond.classList.toggle("aDrop__active")
            aDropTherd.classList.toggle("aDrop__active")
        }
        if (rainImg.classList == "aDrop__4" || rainImg.classList == "aDrop__4 aDrop__active"){
            aDropZero.classList.toggle("aDrop__active")
            aDropFirst.classList.toggle("aDrop__active")
            aDropSecond.classList.toggle("aDrop__active")
            aDropTherd.classList.toggle("aDrop__active")
            aDropFourd.classList.toggle("aDrop__active")
        }
        if (rainImg.classList == "aDrop__5" || rainImg.classList == "aDrop__5 aDrop__active"){
            aDropZero.classList.toggle("aDrop__active")
            aDropFirst.classList.toggle("aDrop__active")
            aDropSecond.classList.toggle("aDrop__active")
            aDropTherd.classList.toggle("aDrop__active")
            aDropFourd.classList.toggle("aDrop__active")
            aDropFive.classList.toggle("aDrop__active")
        }
        if (rainImg.classList == "aDrop__6" || rainImg.classList == "aDrop__6 aDrop__active"){//если класс текущего нажатого элемента равен 0 то
            aDropZero.classList.toggle("aDrop__active")
            aDropFirst.classList.toggle("aDrop__active")
            aDropSecond.classList.toggle("aDrop__active")
            aDropTherd.classList.toggle("aDrop__active")
            aDropFourd.classList.toggle("aDrop__active")
            aDropFive.classList.toggle("aDrop__active")
            aDropSix.classList.toggle("aDrop__active")
        }
    }
})

let aDropZero = rainLevel.querySelector(".aDrop__0")
let aDropFirst = rainLevel.querySelector(".aDrop__1")
let aDropSecond = rainLevel.querySelector(".aDrop__2")
let aDropTherd = rainLevel.querySelector(".aDrop__3")
let aDropFourd = rainLevel.querySelector(".aDrop__4")
let aDropFive = rainLevel.querySelector(".aDrop__5")
let aDropSix = rainLevel.querySelector(".aDrop__6")
// let img

// for (let i = 0; i <= 5; i++){
//     rain.push(rain[0])

//     img = getImage(rain[i])
//     img.classList.add("aDrop")
//     img.id = `aDrop__${i}`
//     rainLevel.append(img)

// }

// document.addEventListener("click", (e)=>{
//     const rainImg = e.target
//     if (rainImg.classList.contains("aDrop")){
//         const idNumber = rainImg.id
//         if (+idNumber.slice(7) == 6){
//             //
//         }
//         console.log(+idNumber.slice(7))
//     }


// })

export {rainLevel}