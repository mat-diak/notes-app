/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

describe('NotesView', () => {
  it('displays notes on the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const notesModel = new NotesModel();
    notesModel.addNote('Buy Milk');
    notesModel.addNote('Buy Butter');
    const notesView = new NotesView(notesModel);
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  it('displays notes on the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const notesModel = new NotesModel();
    const inputField = document.querySelector('#note-input')
    const buttonSave = document.querySelector('#save-note-button');
    const notesView = new NotesView(notesModel);
    inputField.value = "Buy Milk";
    buttonSave.click();
    let note = document.querySelector('div.note').textContent;

    expect(note).toBe('Buy Milk');
  });

});