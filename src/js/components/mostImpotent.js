import {smile} from "@/js/components/mostImpotentComponents/smiles"
import {rainLevel} from "@/js/components/mostImpotentComponents/rainLevel"
import {smallImpotent} from "@/js/components/mostImpotentComponents/smallImpotent"
import {bigImpotent} from "@/js/components/mostImpotentComponents/bigImpotent"

const infRight = document.createElement("div")
infRight.classList.add("info__right")
infRight.append = `
        ${infRight.append(smile)}
        ${infRight.append(rainLevel)}
        ${infRight.append(smallImpotent)}
        ${infRight.append(bigImpotent)}`
        
export {infRight}