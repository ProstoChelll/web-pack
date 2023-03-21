class createTimeList{

    constructor(time,title){
        this.time = time
        this.title = title
    }

    divAndInnerHtml(){
        const record = document.createElement('div')
        record.classList.add('record')
        record.innerHTML = ` <h4>${this.time}:00</h4> <p>${this.title}</p>`
        return record
    }
}

export {createTimeList}