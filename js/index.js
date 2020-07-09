$(document).ready(function(){
    $("body").hide().fadeIn(5000);

    $('.popup').click(function(){
        var src = $(this).attr('src');
        $('.modal') .modal('show');
        $('#popup-img').attr('src',src);
    });

});

function Enviar(){
    // alert("mensaje enviado");
    Email.send({
        Host : "smtp.gmail.com",
        secureToken:'2fb3e88b-a61b-442b-bab2-f187d59035fe',
        Username : "atm1996.ast@gmail.com",
        Password : "contagiate001",
        To:"atm1996.ast@gmail.com",
        From:"Noe@gmail.com",
        Subject:"Contacto pagina",
        Body: "Hola",

    }).then(
        message => alert(message)
    );
}