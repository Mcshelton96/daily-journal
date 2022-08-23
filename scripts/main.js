import {getEntries} from './entries.js'



const displayEntries = () => {
    const entries = getEntries()
    let html = ''
    for(let i = 0; i< entries.length; i++) {
        html += 
        `<div class ='allentries'>
          <div class ='entry'>
            <p id='concept'>${entries[i].concept}</p>
            <p id='date'>${entries[i].date}</p>
            <p id='entry'>${entries[i].entry}</p>  
          </div>
        </div>`
    }
document.getElementById('entries').innerHTML = html
}

displayEntries()





