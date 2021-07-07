$(document).ready(function () {
    $.getJSON('api/reading', function (data) {
        let template = Handlebars.compile($('.reading-template').html());
        $('.container').html(template(data));
    });

    Handlebars.registerHelper('list', function (items) {
        return items.toString().replaceAll(',', ', ');
    });
});