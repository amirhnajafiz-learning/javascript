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
        let result = "";
        response.tracks.hits.forEach(track => {
            string += "<div class='row'>" + JSON.stringify(track, null, 4) + "</div>";
            let title = "<h3>" + track.title + "</h3>";
            let subtitle = "<small>" + track.subtitle + "</small>";
            //let img = "<img src='" + track.share.image + "' alt='song photo' />";
            let row = "<div class='row'>" + title + subtitle + "</div>";
            result += row;
        });
        document.getElementById('app').innerHTML = string;
        document.getElementById('res').innerHTML = result;
    });
}