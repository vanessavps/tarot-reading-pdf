$(document).ready(function () {
    // Invoke the corresponding URL to update the dynamic fields section using Ajax
    $('.reading-questions').on('click', 'button[data-dynamic-update-rows-url]', function () {
        //event event.preventDefault();
        let url = $(this).data('dynamic-update-rows-url');

        // adding the row index, needed when deleting a dynamic row
        let formData = $('form').serializeArray();
        let param = {};
        param["name"] = $(this).attr('name');
        param["value"] = $(this).val();
        formData.push(param);

        // updating the dynamic section
        console.log("URL : " + url);
        formData.forEach(data => {
            console.log("formData : " + data.name + data.value);
        });

        $('.question-body').load(url, formData);
    });
});
