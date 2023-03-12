function createTimeList(recordData) {

    function createRecord(time, title) {
        const record = document.createElement('div')
        record.classList.add('record')
        record.innerHTML = ` <h4 >${time}</h4> <p>${title}</p>`
        return record
    }
    const timeList = document.createElement("div")
    timeList.classList.add("info__left__daily")
    timeList.innerHTML = `<h2>Daily Schedule</h2>`


    for (let i = 0; i < recordData.length; i++) {
        const { time, title } = recordData[i]
        timeList.append(createRecord(time, title))
    }

    return timeList
}
export {createTimeList}