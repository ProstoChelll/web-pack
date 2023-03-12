import {schedule} from "@/js/components/toDoLIstComponents/dailySchedule"
import {notes} from "@/js/components/toDoLIstComponents/notes"

const todo = document.createElement("div")
todo.classList.add("info__left")
todo.append = `
            ${todo.append(schedule)}
            ${todo.append(notes)}`

export {todo}