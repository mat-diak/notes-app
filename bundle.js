(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model) {
          this.model = model;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          let notes = this.model.getNotes();
          notes.forEach((note) => {
            let element = document.createElement("div");
            element.className = "note";
            element.append(note);
            this.mainContainerEl.append(element);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  console.log("Notes app is running.");
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notesModel = new NotesModel();
  notesModel.addNote("Milk");
  notesModel.addNote("Butter");
  var notesView = new NotesView(notesModel);
  notesView.displayNotes();
})();
