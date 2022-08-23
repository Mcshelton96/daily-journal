const journalEntries = [
     {
        id: 1,
        date: '7/5/2022',
        concept: 'HTML Boilerplate',
        entry: 'Sydney taught us to use the HTML boilerplate to start our inde.html files',
        mood: 'Happy'
    },
     {
        id: 2,
        date: '7/6/2022', 
        concept: 'VS code',
        entry: 'Today we learned to navigate VS code and how to access it from the terminal',
        mood: 'Happy'
    },
    {
        id: 3,
        date: '7/11/2022',
        concept: 'The Terminal',
        entry: 'Today Trevor taught us about the terminal and how to set up Git Bash',
        mood: 'Sad'
    },
    {
        id: 4,
        date: '7/13/2022',
        concept: 'CSS',
        entry: 'Today Lynn taught us about CSS and how to set up a CSS folder in the terminal',
        mood: 'Happy'
    },
    {
        id: 5,
        date: '7/14/2022',
        concept: 'Flex Box',
        entry: 'Today Sydney taught us how to use Flex Box and all the amazing things it can do',
        mood: 'Meh'
    },
    {
        id: 6,
        date: '7/18/2022',
        concept: 'Vocab',
        entry: 'Today we learned about the importance of vocab within JS',
        mood: 'Happy'
    },
    {
        id: 7,
        date: '7/20/2022',
        concept: 'For Loops',
        entry: 'Today Lynn taught us how to use for loops with objects.',
        mood: 'Meh'
    }
]



export const getEntries = () => {
    // .map is an array method - quote is one object in the quotes array
    const copyOfEntries = journalEntries.map(entry => ({...entry}))
    return copyOfEntries
  }