const form= document.getElementById("note-form")
let message= document.querySelector("h2")
const userInput= document.getElementById("note-input")
const addBtn= document.getElementById("add-btn")
const noteList= document.getElementById("note-list")
addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (userInput.value.trim() !== ""){
        const newNote= document.createElement("li")
        newNote.innerHTML+= `<div class="note-container"> 
        <p>${userInput.value}</p><button class="del-btn" type="button">Delete</button>
        </div>`
        noteList.appendChild(newNote)
        message.textContent= `Note sucessfully added.`
        message.classList.remove("error-deleted")
        message.classList.add("added")
        userInput.value= ""
        console.log("Usuario agregado, laik")
        form.reset()
    }
    else{
        message.textContent= "Invalid input!"
        message.classList.remove("added")
        message.classList.add("error-deleted")
    }
    const delBtn= document.querySelector(".del-btn")
    delBtn.addEventListener("click", () => {
        console.log("sirvo")
    })
})
