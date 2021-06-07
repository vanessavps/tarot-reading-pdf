let counter = 1;

$(document).ready(function () {
    addQuestion();

    $('#add-question').on('click', addQuestion);

    $('.question-group').on('click', '.btn-delete', deleteQuestion);
});

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

