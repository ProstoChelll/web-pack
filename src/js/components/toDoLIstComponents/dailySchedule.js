import {createTimeList} from "@/js/components/toDoLIstComponents/addScheduleFunction"


const scheduleData = [
    { time: '6am', title: 'label' },
    { time: '7am', title: 'label' },
    { time: '8am', title: 'label' },
    { time: '9am', title: 'label' },
    { time: '10am', title: 'label' },
    { time: '11am', title: 'label' },
    { time: '12am', title: 'label' },
    { time: '1pm', title: 'label' },
    { time: '2pm', title: 'label' },
]
const timeList = createTimeList(scheduleData)
const schedule = document.createElement("div")
schedule.classList.add("info__left")
schedule.append(timeList)

export {schedule}