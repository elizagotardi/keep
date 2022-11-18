// Primeiramente vamos selecionar os elementos e separar o código em três áreas: Elementos, Funções e Eventos que cada um dos elementos precisa selecionar 

// Elementos

// Adicionar as notas 
const notesContainer = document.querySelector("#notes-container");
// Campo de Texto 
const noteInput = document.querySelector("#note-content");
// Botão de + Adicionar notas 
const addNoteBtn = document.querySelector(".add-note");

// Funções 
function addNote() {
    // console.log("Testando");
    // const noteObject = {
    //     id: generateId(),
    //     content: noteInput.value,
    //     fixed: false,
    // };

    // const noteElement = createNote(noteObject.id, noteObject.content);

}

// Eventos

// Quero que o addNoteBtn esculte um Evento de click que será uma função chamada addNote
addNoteBtn.addEventListener("click", () => addNote());