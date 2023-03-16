import { header } from "@/js/components/header"
import { weekTemplate } from "@/js/components/week"
import { mainPage } from "@/js/layOut/mainPage"
import '@/styles/index.scss'

const app = document.querySelector('#root')
app.append(header, weekTemplate, mainPage)


//посмотреть про this, class, constructor зач нужен ооп в Js и тп  дз переписать на класс любую функцию и решить задачики 2