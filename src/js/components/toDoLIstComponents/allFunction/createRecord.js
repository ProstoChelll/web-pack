class createRecord{

    constructor(time,title){
        this.time = time
        this.title = title
    }

    getLayaut(){
        const record = document.createElement('div')
        record.classList.add('record')
        record.id = `record_${this.time}`
        record.innerHTML = ` <h4>${this.time}:00</h4> <button id = "delRecBtn_${this.time}" class = "delete__record">удалить запись</button> <p>${this.title}</p>`
        localStorage.setItem(`record_${this.time}`, String(this.title))

        return record
    }
}

export {createRecord}