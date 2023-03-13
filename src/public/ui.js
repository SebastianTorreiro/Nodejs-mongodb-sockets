import {saveNotes, deleteNote} from './socket.js'

const notesList = document.querySelector('#notes');

const noteUI = note =>{
  const div = document.createElement('div')
  div.innerHTML += `
  <div>
    <h1>${note.title}</h1>
    <p>${note.title}</p>
    <button class="delete" data-id="${note._id}">Delete</button>
    <button>Edit</button>
  </div>
  `
  const btnDelete = div.querySelector('.delete')
  btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id))

  return div
}


export const renderNotes = notes =>{
  notesList.innerHTML = '';
  notes.forEach(note => { notesList.append(noteUI(note))});
 

}

export const onHandleSubmit = (e) =>{
  e.preventDefault();
  saveNotes(noteForm["title"].value, noteForm["description"].value);

}

export const appendNote = (note) =>{
  notesList.append(noteUI(note))
}