import {saveNotes} from './socket.js'

export const onHandleSubmit = (e) =>{
  e.preventDefault();
  saveNotes(noteForm["title"].value, noteForm["description"].value);

}