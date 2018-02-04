export const fetchNotes = () => (
    $.ajax({
        url: '/api/notes',
        method: 'GET'
    })
);

// Vanilla JS version
// export const fetchNotes = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'api/notes');
//     xhr.onload = function (results) {
//         //handle response, error by calling appropriate Redux action
//     };
//     xhr.send();
// };

export const fetchNoteById = (id) => (
    $.ajax({
        url: `/api/notes/${id}`,
        method: 'GET',
        data: {
            id
        }
    })
);

export const postNote = (note) => (
    $.ajax({
        url: '/api/notes',
        method: 'POST',
        data: {
            note
        }
    })
);

export const patchNote = (note) => (
    $.ajax({
        url: `/api/notes/${note.id}`,
        method: 'PATCH',
        data: {
            note
        }
    })
);

export const deleteNote = (id) => (
    $.ajax({
        url: `/api/notes/${id}`,
        method: 'DELETE',
        data: {
            id
        }
    })
);