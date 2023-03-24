import {createRecord} from "@/js/components/toDoLIstComponents/allFunction/createRecord"


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
    if (scheduleData.find(elem => elem.time === +select.value).title == '') {//если в шедоудата текуший элемент.time равен опшон то тогда appendSchedule
        appendSchedule(+select.value, input.value)
    } else {
        const record = document.querySelector(`#record_${+select.value}`)
        record.lastChild.textContent = input.value
        localStorage.setItem(`record_${+select.value}`, String(input.value))
    }

    input.value = ""
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