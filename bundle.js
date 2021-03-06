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
        setNotes(server_notes) {
          server_notes.forEach((note) => {
            this.notes.push(note);
          });
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
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#save-note-button");
          this.noteInputField = document.querySelector("#note-input");
          this.buttonEl.addEventListener("click", () => {
            this.model.addNote(this.noteInputField.value);
            this.noteInputField.value = "";
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll("div.note").forEach((e) => e.remove());
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

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((notes) => {
            callback(notes);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  console.log("Notes app is running.");
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
