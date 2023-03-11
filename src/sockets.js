import Note from './models/Note'


export default (io) =>{

    io.on('connection', (socket)=>{
        const emitNotes = async () =>{
            const notes = await Note.find()
            io.emit('loadNotes', notes)
        } 
        emitNotes()
        
    socket.on('newnote', data =>{
        console.log(data)
    })

    })


}