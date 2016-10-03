
var defaultStorageName = 'diaryNotes';
var defaultStorage = new Storage();


/**
 * Utility class for adding and removing notes to and from localstorage
 * Note that notes are not guaranteed to be saved from one session to another
 *
 * Example
 * -------
 * var storage = new Storage(); // default name
 * var customStorage = new Storage('girls');
 */
function Storage(name){
    this.name = name || defaultStorageName;

    if(!localStorage.getItem(this.name)){
        localStorage.setItem(this.name, JSON.stringify({
            values: []
        }));
    }
}

function Note(text) {
    this.text = text;
    this.timestamp = getTimestamp();
}

function createNote() {
    var inputText = document.getElementById("noteInput");
    var note = new Note(inputText.value);
    defaultStorage.addNote(note);
    inputText.value = "";

    localStorage.setItem(note.text, "wtf");

    showAllNotes();
}

function showAllNotes() {

    var notes = defaultStorage.getAllNotes();

    var notesElement = document.getElementsByClassName("notes")[0];
    notesElement.innerHTML = "";

    for(var i = 0; i < notes.values.length; i++){
        var note = notes.values[i];
        var noteElement = document.createElement('div');
        noteElement.className = "note";

        var textElement = document.createElement('span');
        textElement.className = "noteText";
        textElement.innerHTML = note.text;

        var dateElement = document.createElement('span');
        dateElement.className = "noteDate";
        dateElement.innerHTML = formatTimestamp(note.timestamp);

        noteElement.appendChild(textElement);
        noteElement.appendChild(dateElement);

        notesElement.appendChild(noteElement);

    }

}

/**
 * Add new note to storage
 *
 * Example
 * -------
 * var note = new Note('Today I pooped a butterfly');
 * storage.addNote(note);
 */
Storage.prototype.addNote = function(note){
    var notes = this.getAllNotes();

    notes.values.push(note);

    localStorage.setItem(this.name, JSON.stringify(notes));
}

/**
 * Get all notes from storage
 * Main array is stored at `values` property
 *
 * Example
 * -------
 *
 * var notes = storage.getAllNotes();
 *
 * for(var i = 0; i < notes.values; i++){
 *     console.log(notes.values[i].text);
 * }
 */
Storage.prototype.getAllNotes = function(){
    var notes = JSON.parse(localStorage.getItem(this.name));

    notes.values.sort(function compare(v1, v2){
        return v1.timestamp < v2.timestamp;
    });

    return notes;
}


/**
 * Returns current timestamp
 */
function getTimestamp(){
    var d = new Date();
    return d.getTime();
}

/**
 * Formats timestamp in human readable format
 *
 * Example
 * -------
 *
 * var t = getTimestamp();
 * formatTimestamp(t);
 */
function formatTimestamp(ms){
    var d = new Date(ms);

    var seconds = align(d.getSeconds());
    var minutes = align(d.getMinutes());
    var hours = align(d.getHours());

    var days = align(d.getDate());
    var month = align(d.getMonth());
    var year = d.getFullYear();

    var s = year + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;

    return s;
}

/**
 * Aligns time so it has leading zero if needed
 */
function align(v){
    if(v < 10){
        return '0' + v;
    }

    return v;
}


showAllNotes();
