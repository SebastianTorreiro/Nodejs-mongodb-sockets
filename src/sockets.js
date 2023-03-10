import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadNotes", notes);
    };
    emitNotes();

    socket.on("client:newnote", async (data) => {
    const newNote =new Note(data);
    const savedNote = await newNote.save()
    io.emit('server:newnote', savedNote)
    });

    socket.on('client:deletenote', async (id)=>{
    const deleteNote = await Note.findByIdAndDelete(id)
    emitNotes();

    })
  });
};
