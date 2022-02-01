/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

describe('NotesView', () => {
  describe('displayNotes', () => {
    it('displays notes on the page', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const notesModel = new NotesModel();
      notesModel.addNote('Buy Milk');
      notesModel.addNote('Buy Butter');
      const notesView = new NotesView(notesModel);
      notesView.displayNotes();
  
      expect(document.querySelectorAll('div.note').length).toBe(2);
    });

    it('updates the list- not adds on', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const notesModel = new NotesModel();
      notesModel.addNote('Buy Milk');
      notesModel.addNote('Buy Butter');
      const notesView = new NotesView(notesModel);
      
      // when called twice
      notesView.displayNotes();
      notesView.displayNotes();
      
      // there should be the same number of elements
      expect(document.querySelectorAll('div.note').length).toBe(2);
    })

    it('clears the note-input after clicking save', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
    
      const notesModel = new NotesModel();
      const inputField = document.querySelector('#note-input')
      const buttonSave = document.querySelector('#save-note-button');
      const notesView = new NotesView(notesModel);
      inputField.value = "Buy Milk";
      buttonSave.click();

      expect(inputField.value).toEqual('')
    })
  })

  it('adds a note on the page', () => {
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