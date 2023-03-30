import {smile} from "@/js/components/mostImpotentComponents/smiles"
import {waterLevel} from "@/js/components/mostImpotentComponents/waterLevel"
import {smallImpotent} from "@/js/components/mostImpotentComponents/smallImpotent"
import {bigImpotent} from "@/js/components/mostImpotentComponents/bigImpotent"

const infRight = document.createElement("div")
infRight.classList.add("info__right")
infRight.append = `
        ${infRight.append(smile)}
        ${infRight.append(waterLevel)}
        ${infRight.append(smallImpotent)}
        ${infRight.append(bigImpotent)}`
        
export {infRight}