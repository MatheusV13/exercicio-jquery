$(document).ready(function () {
    $('#form-tarefa').on('submit', function (event) {
        event.preventDefault();

        var novaTarefa = $('#tarefa').val();

        if (novaTarefa.trim() !== '') {
            $('#lista-tarefas').append('<li>' + novaTarefa + '</li>');

            $('#tarefa').val('');
        } else {
            alert('Por favor, insira uma tarefa válida.');
        }
    });

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});