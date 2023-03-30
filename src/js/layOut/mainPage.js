import {todo} from "@/js/components/toDoList"
import {infRight} from "@/js/components/mostImpotent"

const mainPage = document.createElement("section")
mainPage.classList.add("info")
mainPage.classList.add("indents")
mainPage.append = `
    ${mainPage.append(todo)}
    ${mainPage.append(infRight)}`

export {mainPage}

// добавить локал сторадж на смайлы(зделано), на подоби смайлов зделать рейнлевол(ошибка над пофиксить), пофиксить лист(там при пересоздании создается новый а не перезаписывается)