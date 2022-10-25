import { fetchEntries } from "./dataAccess.js";
import { displayEntries } from "./journalDOM.js";

const mainContainer = document.getElementById('quoteBlocks')

const render = async () => {
  await fetchEntries()
  mainContainer.innerHTML = displayEntries()
}

render()

document.addEventListener("stateChanged", (e) => {
  render()
})








// import { getEntries, addNewEntry } from './dataAccess.js'

// export const displayEntries = () => {
//   let entriesHtml = ''
//   const entriesCopy = getEntries()
//   //loop to display entries
//   entriesCopy.forEach(entry => {
//     entriesHtml += `
//     <div class = "entry">
//       <p>${entry.date}</p>
//       <p>${entry.concept}</p>
//       <p>${entry.summary}</p>
//       <p>${entry.entry}</p>
//       <p>${entry.mood}</p>
//     </div>`
//   })
//   document.getElementById('entries').innerHTML = entriesHtml
// }



// //listener for the new entry button
// document.addEventListener("click", (e) => {
//   if(e.target.id == "recordNewEntry") {
//     //gets values from user input
//     const dateElement = document.getElementById("date").value
//     const conceptElement = document.getElementById("conceptsCovered").value
//     const summaryElement = document.getElementById("summary").value
//     const entryElement = document.getElementById("journalEntry").value
//     const moodElement = document.getElementById("moodForTheDay").value

//     let newEntry = 
//     {
//       date: dateElement,
//       concept: conceptElement,
//       summary: summaryElement,
//       entry: entryElement,
//       mood: moodElement,
//     }

//     addNewEntry(newEntry)

//   }
// })






// const displayEntries = () => {
//     const entries = getEntries()
//     let html = ''
//     for(let i = 0; i< entries.length; i++) {
//         html +=
//         `<div class ='allentries'>
//           <div class ='entry'>
//             <p id='concept'>${entries[i].concept}</p>
//             <p id='date'>${entries[i].date}</p>
//             <p id='entry'>${entries[i].entry}</p>
//             <p id='mood'>${entries[i].mood}
//           </div>
//         </div>`
//     }
// document.getElementById('entries').innerHTML = html
// }

// displayEntries()

// document.addEventListener('click', (e) => {
//   if (e.target.id === 'recordNewEntry') {
//     //logic to add new entry
//     const dateElement = document.querySelector("input[name=entryDate]:checked")?.value
//     //input should be query select
//     const conceptsElement = document.querySelector("input[name=conceptsCovered]:checked")?.value

//     const journalEntryElement = document.getElementById('journalEntry')?.value

//     const moodElement = document.getElementById('moodForTheDay')?.value

//     let newEntry = {
//       date: dateElement,
//       concepts: conceptsElement,
//       entry: journalEntryElement,
//       mood: moodElement
//     }
//     addNewEntry(newEntry)
//   }
// })




