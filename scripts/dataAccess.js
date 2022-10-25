const api = "http://localhost:8088"

const applicationState = {
    entries: [],
}

export const fetchEntries = async () => {
    const entries = await fetch(`${api}/journalEntries`)
    const entriesJS = await entries.json()
    applicationState.entries = entriesJS
}

export const getEntries = () => {
    // .map is an array method - entry is one object in the journalEntries array
    const copyOfEntries = applicationState.entries.map(entry => ({...entry}))
    return copyOfEntries
  }

  //Returns new ID for new entry
// const getNewEntryID = () => {
//     let highestOrderId = 0
//     if(entries.length > 0){
//       highestOrderId = entries.sort((a, b) => b.id - a.id)[0].id
//     }
//     return highestOrderId + 1
//   }

  export const addNewEntry = async (newEntry) => {
    // will be saved to json server
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    }
    const response = await fetch(`${api}/journalEntries`, fetchOptions)
    const responsejson = await response.json(response)

    document.dispatchEvent(new CustomEvent("stateChanged"))
  }