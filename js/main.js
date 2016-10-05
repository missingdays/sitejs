
function initSearchResult(){
    document.getElementById("webSearchResult").innerHTML = "";
}

function addSearchResult(result){
    var searchElement = document.getElementById("webSearchResult");

    var resultElement = document.createElement("div");
    resultElement.className = "webSearchResult";

    var headerSpan = document.createElement("div");

    var link = document.createElement("a");
    link.href = result.link;
    link.innerHTML = result.header;

    headerSpan.appendChild(link);

    headerSpan.className = "header";

    var textSpan = document.createElement("div");
    textSpan.innerHTML = result.text;

    textSpan.className = "text";

    resultElement.appendChild(headerSpan);
    resultElement.appendChild(textSpan);

    searchElement.appendChild(resultElement);
}

function onSearchInputClicked() {
    var searchInput = document.getElementById("searchInput");
    var searchText = searchInput.value;

    if (searchText === '') {
        focusInput();
        return;
    }

    accessSearchEngine(searchText, function(data) {

        initSearchResult();

        for (var i = 0; i < data.length; i++) {
            addSearchResult(data[i]);
       }
    });
}

function ifEnterPressed(event) {
    if (event.keyCode == 13) {
        onSearchInputClicked();
    }
}
