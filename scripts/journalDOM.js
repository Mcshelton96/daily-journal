import { getEntries, addNewEntry } from "./dataAccess.js";

export const displayEntries = () => {
    const entriesCopy = getEntries()
    let entriesHtml = ''
    //loop to display entries
    entriesCopy.forEach(entry => {
      entriesHtml += `
      <div class = "entry">
        <p>${entry.date}</p>
        <p>${entry.concept}</p>
        <p>${entry.entry}</p>
        <p>${entry.mood}</p>
      </div>`
    })
    document.getElementById('entries').innerHTML = entriesHtml
  }

//   export const displayEntries = () => {
//     let entriesHtml = ''
//     const entriesCopy = getEntries()
//     //loop to display entries
//     entriesCopy.forEach(entry => {
//       entriesHtml += `
//       <div class = "entry">
//         <p>${entry.date}</p>
//         <p>${entry.concept}</p>
//         <p>${entry.summary}</p>
//         <p>${entry.entry}</p>
//         <p>${entry.mood}</p>
//       </div>`
//     })
//     document.getElementById('entries').innerHTML = entriesHtml
//   }

  document.addEventListener("click", (e) => {
    if(e.target.id == "recordNewEntry") {
      //gets values from user input
      const dateElement = document.getElementById("date").value
      const conceptElement = document.getElementById("conceptsCovered").value
      const summaryElement = document.getElementById("summary").value
      const entryElement = document.getElementById("journalEntry").value
      const moodElement = document.getElementById("moodForTheDay").value
  
      const newEntry = 
      {
        date: dateElement,
        concept: conceptElement,
        summary: summaryElement,
        entry: entryElement,
        mood: moodElement,
      }
  
      addNewEntry(newEntry)
  
    }
  })