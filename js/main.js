function onSearchInputClicked() {
    var searchInput = document.getElementById("searchInput");
    var searchText = searchInput.value;

    if (searchText === '') {
        focusInput();
        return;
    }

    var searchResult = document.getElementsByClassName("main")[0];

    accessSearchEngine(searchText, function (data) {

        console.log(data);

        searchResult.innerHTML = "";

        for (var i = 0; i < data.length; i++) {

            var post = data[i]

            var postElement = document.createElement("div");

            postElement.innerHTML = post.header + " " + post.text;

            searchResult.appendChild(postElement);
        }
    });
}

function ifEnterPressed(event) {
    if (event.keyCode == 13) {
        onSearchInputClicked();
    }
}
