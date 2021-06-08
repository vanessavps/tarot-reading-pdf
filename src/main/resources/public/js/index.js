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

        //TODO post
        const reading = createQuestionsObject();
        console.log(reading);

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
            question.cards = [$(this).find('#cards').val()];
            question.comment = $(this).find('#comment').val();
            questions.push(question);
        }
    });

    reading.questions = questions;
    return reading;
}

function generatePdf(reading) {
    post('api/generate-pdf', reading).done((data) => {
        console.log(data);
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
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

}

