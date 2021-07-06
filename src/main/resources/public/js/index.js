let counter = 1;

$(document).ready(function () {
    addQuestion();
    initToolTip();

    $('#add-question').on('click', addQuestion);

    $('.question-group').on('click', '.btn-delete', deleteQuestion);

    $('#reading-form').on('submit', function (e) {
        e.preventDefault();

        //TODO validation
        //validate()

        const reading = createQuestionsObject();
        generatePdf(reading);
    });
});

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
        let win = window.open("reading-pdf.html", "_blank");
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

function initToolTip() {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

}

