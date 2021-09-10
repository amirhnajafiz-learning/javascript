function cancel() {
    document.getElementById('app').style.display = "none";
    document.getElementById('content').innerHTML = null;
    document.getElementById('cancel').style.display = "none";
}

function useAPI() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            document.getElementById('app').style.display = "block";
            document.getElementById('content').innerHTML = JSON.stringify(data, null, 4);
            document.getElementById('cancel').style.display = "inline-block";
            let img = document.getElementById('pic');
            img.src = data.results[0].picture.medium;
        },
        error: function (response) {
            alert('Error');
        }
    });
}