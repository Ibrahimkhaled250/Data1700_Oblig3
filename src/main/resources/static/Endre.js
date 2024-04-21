$(function (){
    //hente data før endring
    // hent kunden med kunde-id fra url og vis denne i skjemaet
    const id = window.location.search.substring(1);
    const url = "/henteEnding?"+id;
    $.get(url, function (kunde){
        $("#id").val(kunde.id); // må ha med id inn skjemaet, hidden i html
        $("#velg").val(kunde.velgFilm);
        $("#antall").val(kunde.antall);
        $("#fornavn").val(kunde.fornavn);
        $("#etternavn").val(kunde.etternavn);
        $("#telefon").val(kunde.tlf);
        $("#email").val(kunde.epost);

    });
});


function endre() {
    const kunde = {
        id : $("#id").val(), // hente endring og lagre til server
        velgFilm: $("#velg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#telefon").val(),
        epost: $("#email").val()
    }
    $.post("/lagreEndring",kunde,function(){
        window.location.href = '/index.html';
    });
}

