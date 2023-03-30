class DataForWaterArr{

    constructor(DivElement, arr,img){// 1)див элемент куда все это будет положено 2)массив куда все запушится 3)картинка
        this.DivElement = DivElement
        this.arr = arr
        this.img = img
    }

    createDataForWaterArr(){
        for(let i = 0; i <= 6; i++){
            const variable = {
            id: `aDrop_${i}`,
            claz: `aDrop`,
            img: this.img}
        
            this.arr.push(variable)
        }
    }
    WaterArrFilling(){
        for(let i = 0; i <= 6; i++){
            let image = document.createElement("img")
            image.id = this.arr[i].id
            image.classList.add(this.arr[i].claz)
            image.src = this.arr[i].img
            this.DivElement.append(image)
        }
    }
}
export{DataForWaterArr}