
function accessSearchEngine(query, callback){
    $.ajax({
        crossDomain: true,
        dataType: "json",
        processData: false,
        url: "https://webhose.io/search?token=8a3cf22b-36e3-48ef-85ef-6edac8bf5132&format=json&q=" + query,
        success: function(data){
            callback(data);
        }
    });
}
