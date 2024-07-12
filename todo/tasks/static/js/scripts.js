$( document ).ready(function() {

    var deleteBtn = $('.delete-btn');
    
    $(deleteBtn).on('click', function(e) {

        e.preventDefault();

        console.log('Botão de deletar clicado');
        
        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar esta tarefa?');

        if(result) {
            window.location.href = delLink;
        }

    });

});