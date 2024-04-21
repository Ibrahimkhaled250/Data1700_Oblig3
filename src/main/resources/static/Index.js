
$(function (){

    tilbakeAlle()});

function kjop(){
    let KundeX = {
        velgFilm: $("#velg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#telefon").val(),
        epost: $("#email").val()
    }
    $.post("/lagre", KundeX, function lagreKunde(){ //lagre(sende) til server
        tilbakeAlle();
    });




    $("#velg").val("velg film her"),
        $("#antall").val(""),
        $("#fornavn").val(""),
        $("#etternavn").val(""),
        $("#telefon").val(""),
        $("#email").val("")

}

function tilbakeAlle() { // hente fra server til klient
    $.get("/sende", function (data) {
        formaterData(data);
    });
}

function formaterData(Kundene){
    let ut = "<table class='table table-striped table-bordered'>" +
        "<tr><th>ID</th><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>TelefonNr</th><th>Epost</th><th></th><th></th></tr>";
    for (let i of Kundene){
        ut += "<tr><td>"+i.id+"</td><td>"+i.velgFilm+"</td><td>"+i.antall+"</td><td>"+i.fornavn+"</td><td>"+i.etternavn+"</td><td>"+i.tlf+"</td><td>"+i.epost+"</td>" +
            "<td> <a class='btn btn-primary' href='Endre.html?id="+i.id+"'>Endre</a></td>"+
            "<td> <button class='btn btn-danger' onclick='slett1("+i.id+")'>Slett</button></td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#resultat").html(ut);

}

function slett1(id) {
    const url = "/sletteEndring?id="+id;
    $.get( url, function() {
        window.location.href = '/'; // : det er samme index.html
    });
};


function slett(){
    $.get("/slett", function (){
        tilbakeAlle();
    });
}

