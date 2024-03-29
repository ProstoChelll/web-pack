import {createRecord} from "@/js/components/toDoLIstComponents/toDoListFunction/createRecord"


const addNewCase = document.createElement("div")
addNewCase.classList.add("info__left__daily__addNewCase")

const select = document.createElement("select")
select.classList.add("info__left__daily__addNewCase__select")

const input = document.createElement("input")
input.classList.add("input")
input.type = 'text'
input.placeholder = 'Введите задание'
input.classList.add("info__left__daily__addNewCase__input")

const buttonAddRecord = document.createElement("button")
buttonAddRecord.textContent = 'Cоздать запись!'
buttonAddRecord.classList.add("add__case")


function getOptions(time) {
    const option = document.createElement('option')
    option.classList.add("option")
    option.innerHTML = `<option>${time}.00</option>`
    select.append(option)
}
const scheduleData = []


buttonAddRecord.addEventListener("click", () => {
const selectValue = +select.value
const inputValue = input.value

const elem = scheduleData.find(elem => elem.time === +selectValue)
if (input.value !== ""){
    if (elem.title == ""){
        appendSchedule(+selectValue, inputValue)
    } else {
        const record = document.querySelector(`#record_`+ selectValue)
        record.querySelector("p").textContent = inputValue
        scheduleData = scheduleData.map(elem =>{
            if (elem.time == selectValue){
                elem.title = inputValue
            }
            return elem
        })
        localStorage.setItem(`record_${selectValue}`, String(inputValue))
    }
}
    inputValue = ""
})

document.addEventListener("click", (e)=>{
    const button = e.target
    if (button.classList.contains("delete__record")){
        const record = button.closest(".record")
        record.remove()
        localStorage.removeItem(`${record.id}`)
    }
})

addNewCase.append(select)
addNewCase.append(input)
addNewCase.append(buttonAddRecord)


const schedule = document.createElement("div")
schedule.classList.add("info__left__daily")
schedule.append(addNewCase)


function appendSchedule(time, title) {
    const record = new createRecord(time, title)
    schedule.append(record.getLayaut())//создает новую запить(преобразует в штмл) и записывает в локал сторадж
    scheduleData.forEach(record => {
        if(record.time == time){
            record.title = title
        }
    })
}

function getLocalStorage(id) {
    const item = localStorage.getItem(id)
    if (item) return item
    else return ''
}


for (let i = 6; i <= 22; i++) {
    getOptions(i)
    scheduleData.push({
        time: i,
        title: getLocalStorage(`record_${i}`)
    })
}
scheduleData.map(elem => {
    if (elem.title) {
        appendSchedule(elem.time, elem.title)
    }
})

export {schedule}