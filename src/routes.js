const {
    addNotesHandler,
    getAllNotesHandler,
    getNotesById,
    updateNoteHandler,
    deleteNoteHandler
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNotesHandler,

    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesById,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateNoteHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteHandler,
    }
]

module.exports = routes