import {createTimeList} from "@/js/components/toDoLIstComponents/allFunction/addScheduleFunction"
import {createCaseInList} from "@/js/components/toDoLIstComponents/allFunction/addCaseFunction"

const scheduleData = []

const addNewCase = document.createElement("div")
addNewCase.classList.add("info__left__daily__addNewCase")

const select = document.createElement("select")
select.classList.add("info__left__daily__addNewCase__select")

const input = document.createElement("input")
input.classList.add("input")
input.type = 'text'
input.placeholder = 'Введите задание'
input.classList.add("info__left__daily__addNewCase__input")

const button = document.createElement("button")
button.textContent = 'Cоздать запись!'
button.classList.add("add__case")

function getOptions(time) {
    const option = document.createElement('option')
    option.classList.add("option")
    option.innerHTML = `<option>${time}.00</option>`
    select.append(option)
}

for (let i = 1; i <= 24; i ++){
    getOptions(i)
}

button.addEventListener("click", () => {
    const addCase = new createCaseInList(select.value,input.value)
    let asf = addCase.addInList()
    scheduleData.push(asf)
    
    let lastIndexOfArr = scheduleData[scheduleData.length - 1]
    const record = document.createElement('div')
    record.classList.add('record')
    record.innerHTML = ` <h4>${lastIndexOfArr.time}:00</h4> <p>${lastIndexOfArr.title}</p>`

    schedule.append(record)

    input.value = ""


    let allObjTime
    let allObjTitle

    for(let i = 0; i < scheduleData.length; i++){
        allObjTime = scheduleData[i].time
        allObjTitle = scheduleData[i].title
    }

    let allObj = {time: Number(allObjTime),title: allObjTitle}
    console.log(allObjTime,allObjTitle)
    localStorage.setItem("scheduleData", allObj)
    
})

if(scheduleData[0]){
    let allObj = localStorage.getItem("scheduleData")
    scheduleData.push(allObj)
    console.log(allObj)
}

addNewCase.append(select)
addNewCase.append(input)
addNewCase.append(button)


const schedule = document.createElement("div")
schedule.classList.add("info__left__daily")

schedule.append(addNewCase)

scheduleData.forEach(elem => {
    const record = new createTimeList(elem.time,elem.title)
    schedule.append(record.divAndInnerHtml())
})


export {schedule}