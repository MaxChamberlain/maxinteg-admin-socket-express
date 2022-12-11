const { getDB } = require('./db/db');

module.exports = (io) => {
    const db = getDB();

    io.on('connection', socket => {

		socket.on('disconnect', () => console.log('disconnected')); 

        socket.on('tasks', async (data) => {
            const newData = await db.collection('tasks').where('project_id', '==', data).get()
            const newDocument = newData.docs[0]?.data()?.tasks
            io.emit('tasks', newDocument)
        })

        socket.on('setTasks', async data => {
            console.log(data.tasks)
            const ref = db.collection('tasks')
            const doc = await ref.where('project_id', '==', data.id).get()
            const document = doc.docs[0]
            if (document) {
                await ref.doc(document.id).update({
                    tasks: data.tasks
                })
            } else {
                await ref.add({
                    project_id: data.id,
                    tasks: data.tasks
                })
            }
            
            const newData = await db.collection('tasks').where('project_id', '==', data.id).get()
            const newDocument = newData.docs[0]?.data()?.tasks
            io.emit('tasks', newDocument)
        })
		
	})
    
}