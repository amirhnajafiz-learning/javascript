function API() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "d9ebf01ef3mshb3ed3ad38d37daep179ba1jsn50dda0c0097d"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        let string = "";
        response.tracks.hits.forEach(hits => {
            string += "<div class='row'>" + JSON.stringify(hits, null, 4) + "</div>";
        });
        document.getElementById('app').innerHTML = string;
    });
}