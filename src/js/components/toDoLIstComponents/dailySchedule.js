import {createTimeList} from "@/js/components/toDoLIstComponents/addScheduleFunction"


const scheduleData = [
    { time: '6am', title: 'label'},
    { time: '7am', title: 'label' },
    { time: '8am', title: 'label' },
    { time: '9am', title: 'label' },
    { time: '10am', title: 'label' },
    { time: '11am', title: 'label' },
    { time: '12am', title: 'label' },
    { time: '1pm', title: 'label' },
    { time: '2pm', title: 'label' },
]



const createTimeList2 = new createTimeList(scheduleData[0].time,scheduleData[0].title)

const schedule = document.createElement("div")
schedule.classList.add("info__left__daily")
schedule.append(createTimeList2.divAndInnerHtml(createTimeList2.time,createTimeList2.title))

export {schedule}