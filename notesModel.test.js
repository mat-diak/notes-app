const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  it('returns an empty array', () => {
    const notesModel = new NotesModel();
    expect(notesModel.getNotes()).toEqual([])
  });
  
  it('adds a note', () => {
    const notesModel = new NotesModel();
    let milk = 'Buy milk'
    notesModel.addNote(milk);
    expect(notesModel.getNotes()).toEqual([milk])
  })
})