// // increments id with each new entry
// const getNewEntryId = () => {
//   let highestOrderId = journalEntries.sort((a, b) => b.id - a.id)[0].id
//   return highestOrderId + 1
// }

// //adds a new order created in main.js
// export const addNewEntry = (entry) => {
//   const newId = getNewEntryId()
//   // Add logic to give the order the property id, which is equal to newId
//   entry.id = newId
//   // Add logic to add the order object to the orders array
//   journalEntries.push(entry)
//   // The below line creates and dispatches a new custom event titled "stateChanged".
//   // We will still need to add a listener for this event.
//   document.dispatchEvent(new CustomEvent("stateChanged"))

// }



//below moved to json

// export const getEntries = () => {
//   // .map is an array method - quote is one object in the quotes array
//   const copyOfEntries = journalEntries.map(entry => ({ ...entry }))
//   return copyOfEntries
// }

// const journalEntries = [
//      {
//         id: 1,
//         date: '7/5/2022',
//         concept: 'HTML Boilerplate',
//         entry: 'Sydney taught us to use the HTML boilerplate to start our inde.html files',
//         mood: 'Happy'
//     },
//      {
//         id: 2,
//         date: '7/6/2022', 
//         concept: 'VS code',
//         entry: 'Today we learned to navigate VS code and how to access it from the terminal',
//         mood: 'Happy'
//     },
//     {
//         id: 3,
//         date: '7/11/2022',
//         concept: 'The Terminal',
//         entry: 'Today Trevor taught us about the terminal and how to set up Git Bash',
//         mood: 'Sad'
//     },
//     {
//         id: 4,
//         date: '7/13/2022',
//         concept: 'CSS',
//         entry: 'Today Lynn taught us about CSS and how to set up a CSS folder in the terminal',
//         mood: 'Happy'
//     },
//     {
//         id: 5,
//         date: '7/14/2022',
//         concept: 'Flex Box',
//         entry: 'Today Sydney taught us how to use Flex Box and all the amazing things it can do',
//         mood: 'Meh'
//     },
//     {
//         id: 6,
//         date: '7/18/2022',
//         concept: 'Vocab',
//         entry: 'Today we learned about the importance of vocab within JS',
//         mood: 'Happy'
//     },
//     {
//         id: 7,
//         date: '7/20/2022',
//         concept: 'For Loops',
//         entry: 'Today Lynn taught us how to use for loops with objects.',
//         mood: 'Meh'
//     }
// ]