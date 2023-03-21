class createCaseInList{
    
    constructor(time,title){
        this.time = Number(time)
        this.title = title
    }
    addInList(){
        let obj = {time: 1 ,title:""}
        obj.time = this.time
        obj.title = this.title
        return obj
    }
}

export {createCaseInList}