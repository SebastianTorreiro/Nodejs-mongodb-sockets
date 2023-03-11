const socket = io();

export const loadNotes = () => {
  socket.on("loadNotes", (date) => {
    console.log(date);
  });
};


export const saveNotes = (title, description) =>{
    socket.emit('newnote',{
        title,
        description
    })
}