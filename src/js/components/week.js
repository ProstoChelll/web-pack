const weekTemplate = document.createElement("section")
weekTemplate.classList.add("days_of_the_week")
weekTemplate.classList.add("indents")
weekTemplate.innerHTML = `
        <div class = "week">
        <div class = "week__mon block">
            <p>mon</p><input type="radio" name="day">
        </div>
        <div class = "week__tue block">
            <p>tue</p><input type="radio" name="day">
        </div>
        <div class = "week__wed block">
            <p>wed</p><input type="radio" name="day">
        </div>
        <div class = "week__thu block">
            <p>thu</p><input type="radio" name="day">
        </div>
        <div class = "week__fri block">
            <p>fri</p><input type="radio" name="day">
        </div>
        <div class = "week__sat block">
            <p>sat</p><input type="radio" name="day">
        </div>
        <div class = "week__sun block">
            <p>sun</p><input type="radio" name="day">
        </div>
        </div>`

export {weekTemplate} 
