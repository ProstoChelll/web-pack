const weekTemplate = document.createElement("section")
weekTemplate.classList.add("days_of_the_week")
weekTemplate.classList.add("indents")
weekTemplate.innerHTML = `
        <div class = "week">
        <div class = "week__mon block">
            mon<input type="radio" name="day">
        </div>
        <div class = "week__tue block">
            tue<input type="radio" name="day">
        </div>
        <div class = "week__wed block">
            wed<input type="radio" name="day">
        </div>
        <div class = "week__thu block">
            thu<input type="radio" name="day">
        </div>
        <div class = "week__fri block">
            fri<input type="radio" name="day">
        </div>
        <div class = "week__sat block">
            sat<input type="radio" name="day">
        </div>
        <div class = "week__sun block">
            sun<input type="radio" name="day">
        </div>
        </div>`

export {weekTemplate} 
