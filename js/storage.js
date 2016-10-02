
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
