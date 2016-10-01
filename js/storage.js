
var defaultStorageName = 'diaryNotes';

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

    localStorage[this.name] = JSON.stringify({
        values: []
    });
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

    localStorage[this.name] = JSON.stringify(notes);
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
    return JSON.parse(localStorage[this.name]);
}
