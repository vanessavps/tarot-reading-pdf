let counter = 1;

$(document).ready(function () {
    $(".datepicker").datepicker({
        dateFormat: "yy/mm/dd",
        changeYear: true,
        changeMonth: true
    });

    addQuestion();

    $('#add-question').on('click', addQuestion);

    $('.question-group').on('click', '.btn-delete', deleteQuestion);

    $('#reading-form').on('submit', function (e) {
        e.preventDefault();

        if (formIsValid()) {
            const reading = createQuestionsObject();
            generatePdf(reading);
        }
    });
});

function cleanFormValidation() {
    $('input.is-invalid').removeClass('is-invalid');
}

function formIsValid() {
    cleanFormValidation();
    //Validate date format
    const date = $('#date');
    const dateIsValid = moment(date.val(), 'YYYY/MM/DD', true).isValid();

    if (!dateIsValid) {
        date.addClass('is-invalid');
    }

    $('#reading-form').find('input[required]').each(function () {
        if (!$(this).val()) {
            $(this).addClass('is-invalid');
        }
    });

    return $('input.is-invalid').length === 0;
}

function createQuestionsObject() {
    let reading = {};
    reading.name = $('#name').val();
    reading.date = $('#date').val();

    let questions = [];
    $('.question').each(function () {
        if ($(this).attr('id')) {
            const question = {};
            question.question = $(this).find('#question').val();

            let cardsText = $(this).find('#cards').val();
            question.cards = cardsText.split(',').map(item => item.trim());
            question.comment = $(this).find('#comment').val();
            questions.push(question);
        }
    });

    reading.questions = questions;
    return reading;
}

function generatePdf(reading) {
    post('api/reading', reading).done((data) => {
        let win = window.open('reading-pdf.html', '_blank');
        win.focus();
    });
}

function addQuestion() {
    const questionTemplate = $('.question-group-template .question').clone();
    questionTemplate.prop('id', `question-${counter}`);
    questionTemplate.find('.btn-delete').prop('id', `delete-${counter}`);
    $('.question-group').append(questionTemplate);
    counter++;
}

function deleteQuestion() {
    if ($('.question').length > 2) {
        const deleteButtonId = $(this).attr('id');
        const questionId = deleteButtonId.split('-')[1];
        $(`#question-${questionId}`).remove();
    }
}

