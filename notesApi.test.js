const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel.js')
const NotesView = require('./notesView.js')

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Notes class', () => {
  it('calls fetch and loads notes from server', async () => {
    const api = new NotesApi();
    const model = new NotesModel();
    const view = new NotesView(model);
    
    fetch.mockResponseOnce(JSON.stringify({
      server: 'http://localhost:3000/notes'
    }));

    api.loadNotes((notes) => {
      model.setNotes(notes);
      expect(view.displayNotes).toBe(["This note is coming from the server"]);
    });
  });
});
