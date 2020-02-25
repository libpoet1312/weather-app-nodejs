$(document).ready(() => {
    //set a listener on the textbox
    $('#input').on("change", (evt) => {
        let text = $('#input').val();
        // the {text: text} sends a parameter named text with the
        $.get('/weather', { text : text })
            .done((data) => {
                console.log(data);
                console.log('skata');
                $('#results').append('<li>' + data['results'] + '</li>');
                $('#input').val('');   // reset the textbox
            })
            .fail((xhr) => {
                alert('Problem contacting server');
                console.log(xhr);
            });
    });
});