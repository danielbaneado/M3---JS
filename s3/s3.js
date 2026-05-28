const form= document.getElementById("note-form")
let message= document.querySelector("h2")
const userInput= document.getElementById("note-input")
const addBtn= document.getElementById("add-btn")
const noteList= document.getElementById("note-list")

function getNotes(){
    return JSON.parse(localStorage.getItem("notes")) || []
}

function saveNote(notes){
    localStorage.setItem("notes", JSON.stringify(notes))
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const note= userInput.value.trim()
    if (note !== ""){
        const savedNotes= getNotes()
        savedNotes.push(note)
        saveNote(savedNotes)
        showNotes()
        message.textContent= `Note sucessfully added.`
        message.classList.remove("error-deleted")
        message.classList.add("added")
        console.log("Nota agregada, laik")
        form.reset()
    }
    else{
        message.textContent= "Invalid input!"
        message.classList.remove("added")
        message.classList.add("error-deleted")
    }
})
function showNotes(){
    let allNotes= getNotes()
    noteList.innerHTML= ""
    allNotes.forEach((note, idx) => {
        const newNote= document.createElement("li")
        noteList.appendChild(newNote)
        newNote.innerHTML+= `<div class="note-container"> 
        <p>${note}</p><button class="del-btn" type="button">Delete</button>
        </div>`
        const delBtn= newNote.querySelector(".del-btn")
        delBtn.addEventListener("click", () => {
            console.log("Elemento eliminado de la lista")
            allNotes.splice(idx, 1)
            noteList.removeChild(newNote)
            saveNote(allNotes)
        })
    })
}
showNotes()