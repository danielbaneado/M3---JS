const form= document.getElementById("note-form")
let message= document.querySelector("h2")
const userInput= document.getElementById("note-input")
const addBtn= document.getElementById("add-btn")
const noteList= document.getElementById("note-list")
function getNotes(){
    return JSON.parse(localStorage.getItem("notes")) || [] //Return an empty list if there arent saved notes
}

function saveNote(notes){
    localStorage.setItem("notes", JSON.stringify(notes)) //Convert a js string to a json one to save it
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault() //Prevents page refresh and onscreen data loss 
    const note= userInput.value.trim() //Remove spaces to manage empty imputs
    if (note !== ""){
        const savedNotes= getNotes()
        savedNotes.push(note) //savedNotes as a empty list to add user notes with push method
        saveNote(savedNotes) 
        showNotes()
        message.textContent= `Note sucessfully added.`
        message.classList.remove("error-deleted")
        message.classList.remove("normal")
        message.classList.add("added")
        console.log("Nota agregada, laik")
        form.reset()
    }
    else{
        message.textContent= "Invalid input!"
        message.classList.remove("normal")
        message.classList.remove("added")
        message.classList.add("error-deleted")
    }
})
function showNotes(){
    let allNotes= getNotes()
    noteList.innerHTML= "" //Clears noteList to avoid duplicated values
    allNotes.forEach((note, idx) => { //Note to show all inputs saved in local storage array
        const newNote= document.createElement("li") 
        noteList.appendChild(newNote) //Creates a child for each note
        newNote.innerHTML+= `<div class="note-container">
        <p>${note}</p><button class="del-btn" type="button">Delete</button>
        </div>` //Assigns class del-btn to all buttons per li
        const delBtn= newNote.querySelector(".del-btn")
        delBtn.addEventListener("click", () => {
            message.textContent= "Note deleted from list"
            message.classList.add("normal")
            console.log("Note deleted from list")
            allNotes.splice(idx, 1) //Deletes selected note searching it by index
            noteList.removeChild(newNote)
            saveNote(allNotes)
        })
    })
}
showNotes()