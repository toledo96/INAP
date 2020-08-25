$(document).ready(function(){
    $("body").hide().fadeIn(5000);

    $('.popup').click(function(){
        var src = $(this).attr('src');
        $('.modal') .modal('show');
        $('#popup-img').attr('src',src);
    });

});



function Enviar(){
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    var nombre = document.getElementById("nombre").value;

    if(correo!="" && mensaje!="" && nombre!="" ){
        Email.send({
            Host : "smtp.gmail.com",
            secureToken:'2fb3e88b-a61b-442b-bab2-f187d59035fe',
            Username : "ingeneriaaplicada.inap@gmail.com",
            Password : "Almo6874",
            To:"ingeneriaaplicada.inap@gmail.com",
            From: correo,
            Subject:"Persona interesada,con el nombre de:" +nombre,
            Body: mensaje,
    
        }).then(
            message => alert(message)
            // location.href="index.html"
        );
    }else{
        alert("Faltan campos por llenar");
    }
}