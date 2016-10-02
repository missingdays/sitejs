function onSearchInputClicked(){
    var searchInput = document.getElementById("searchInput");
    var searchText = searchInput.value;

    var searchResult = document.getElementsByClassName("main")[0];

    accessSearchEngine(searchText, function(data){

        console.log(data);

        searchResult.innerHTML = "";

        for(var i = 0; i < data.RelatedTopics.length; i++){

            var post = data.RelatedTopics[i]

            var postElement = document.createElement("div");

            postElement.innerHTML = post.Result;

            searchResult.appendChild(postElement);
        }
    });
}

function ifEnterPressed(event) {
    if (event.keyCode == 13) {
        onSearchInputClicked();
    }
}
