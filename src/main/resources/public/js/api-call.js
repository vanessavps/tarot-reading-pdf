function post(url, data) {
    return $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json",
    });
}

