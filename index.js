console.log('Notes app is running.')

const NotesModel = require('./notesModel.js')
const NotesView = require('./notesView.js')
const NotesApi = require('./notesApi.js')

// let notes = new NotesModel;
// notes.addNote('Buy milk')
// console.log(notes.getNotes());

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model);

api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  model.setNotes(notes);
  view.displayNotes();
});