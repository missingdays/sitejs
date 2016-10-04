
function accessSearchEngine(query, callback){
    
    $.ajax({
        crossDomain: true,
        url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + query + "&mkt=en-us",
        beforeSend: function(xhr){
            xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "a3839c75966349f9ba8590e50dd5a06c");
        },
        success: function(data){

            var results = [];

            for(var i = 0; i < data.webPages.value.length; i++){
                var result = {};
                var search = data.webPages.value[i];

                result.link = search.displayUrl;
                result.header = search.name;
                result.text = search.snippet;

                results.push(result);
            }

            callback(results);
        }, 
        error: function(err){
            console.log("ERRORR!!");
            console.log(err);
        }
    });
}

function accessTwitter(query, callback){
    $.ajax({
        crossDomain: true,
        dataType: "jsonp",
        url: "https://api.twitter.com/1.1/search/tweets.json?q=" + query,
        success: function(data){
            callback(data);
        }
    });
}

function focusInput(){
    document.getElementById('searchInput').focus();
}

focusInput();
