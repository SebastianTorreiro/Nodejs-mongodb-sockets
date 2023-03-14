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


export const onSelected = callback =>{
  socket.on("server:selectednote", callback)
}

export const updateNote = (id, title, description) =>{
    socket.emit('client:updatenote',{
      id,
      title,
      description,
    });
  };
  
  export const getNoteById = id =>{
    console.log("ashe")
    socket.emit('client:getnote', id)
  }