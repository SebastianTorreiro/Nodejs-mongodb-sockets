const socket = io();

export const loadNotes = (callback) => {
  socket.on("server:loadNotes", callback);
};


export const saveNotes = (title, description) =>{
    socket.emit('client:newnote',{
        title,
        description
    })
};

export const onNewNote = (callback) =>{
  socket.on('server:newnote', callback)

}

export const deleteNote = id =>{
  socket.emit('client:deletenote', id)
}