
function onSearchInputClicked(){
    var searchInput = document.getElementById("searchInput");
    var searchText = searchInput.value;

    var searchResult = document.getElementsByClassName("main")[0];

    accessSearchEngine(searchText, function(data){
        for(var i = 0; i < data.posts.length; i++){

            var post = data.posts[i]

            var postElement = document.createElement("div");

            postElement.innerHTML = post.author + ":" + post.title;

            searchResult.appendChild(postElement);
        }
    });
}
