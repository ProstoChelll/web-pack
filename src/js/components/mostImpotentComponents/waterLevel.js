import * as weather from "@/images/waterLevelImg.js"
import {DataForWaterArr} from "@/js/components/mostImpotentComponents/mostImpotentFunction/createAndFillingDataForArr"

const waterLevel = document.createElement("div")
waterLevel.classList.add("info__right__water")
waterLevel.innerHTML = `<p>Water</p>`

const waterArr = []
const numberActiveImage = localStorage.getItem("waterArr")
const waterData = new DataForWaterArr(waterLevel,waterArr,weather.water)

waterData.createDataForWaterArr()

for (let i = 0; i <= numberActiveImage;i++){
    waterArr[i].claz = "water__img__active"
}

waterData.WaterArrFilling()

waterLevel.addEventListener("click", (e)=>{
    const target = e.target
    
    if(target.classList.contains("aDrop")){// 1)если у нажатого элемента есть класс aDrop то создается константа keyForСycle в который записывается цифра(цифра - номер положения нажатого элемента в массиве)
        const keyForСycle = target.id.slice(6)
        waterArr.splice(0)// 3)очистка массива
        waterLevel.innerHTML = `<p>Water</p>`

        waterData.createDataForWaterArr()

        for (let i = 0; i <= keyForСycle;i++){
            waterArr[i].claz = "water__img__active"// 2)после заменяется класс до той самой цифры, а после вся информация заново перезаписывается в уже очищенный массив
        }

        waterData.WaterArrFilling()

        localStorage.setItem("waterArr", keyForСycle)
    } else if(target.classList.contains("water__img__active")){// 1)если у нажатого элемента есть класс water__img__active то создаются 2 константы
        const elemIdNumber = target.id.slice(6)//констана elemIdNumber - цифра(цифра - номер положения нажатого элемента в массиве)
        const key = 7 - (Number(elemIdNumber) + 1)// константа key - кол-во капель(картинок) которые остались после нажатого элемента

        while(waterLevel.hasChildNodes()){
            waterLevel.removeChild(waterLevel.firstChild)
        }// 3)очистка DOM
        waterLevel.innerHTML = `<p>Water</p>`
        waterArr.splice(Number(elemIdNumber) + 1)// 2)обрезка массива начиная с elemIdNumber + 1, а после просто добовляются капли (столько сколько не хватает)

        for(let i = 0; i <= key; i++){
            const variable = {
            id: `aDrop_${i+Number(elemIdNumber)+1}`,
            claz: `aDrop`,
            img: weather.water}
        
            waterArr.push(variable)
        }

        waterData.WaterArrFilling()

        localStorage.setItem("waterArr", elemIdNumber)
    }
})
export {waterLevel}