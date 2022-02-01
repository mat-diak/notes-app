/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

describe('NotesView', () => {
  it('', () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote('Buy Milk');
    notesModel.addNote('Buy Butter');

    document.body.innerHTML = fs.readFileSync('./index.html');

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

});