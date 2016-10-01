
function accessSearchEngine(query, callback){
    $.ajax({
        crossDomain: true,
        dataType: "jsonp",
        url: "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1&no_html=1&skip_disambig=1",
        success: function(data){
            callback(data);
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
