function vAntall(antall){
    const regExp = /^([1-9]{1,3}|200)$/;
    const ok = regExp.test(antall)

    if (!ok){
        $("#antall1").html("Må skrives et tall mellom 1-200");
        return false;
    }
    else {
        $("#antall1").html("");
        return true;
    }
}

function vFornavn(fornavn){
    const regExp = /^[a-zA-ZæøåÆØÅ. \-]{2,}$/;
    const ok = regExp.test(fornavn)

    if (!ok){
        $("#fornavn1").html("Må skrives gjeldig fornavn");
        return false;
    }
    else {
        $("#fornavn1").html("");
        return true;
    }
}
function vEtternavn(etternavn){
    const regExp = /^[a-zA-ZåæøÅÆØ. \-]{2,}$/;
    const ok = regExp.test(etternavn)

    if (!ok){
        $("#etternavn1").html("Må skrives gjeldig etternavn");
        return false;
    }
    else {
        $("#etternavn1").html("");
        return true;
    }
}

function vTlf(tlf){
    const regExp = /^[0-9]{8}$/;
    const ok = regExp.test(tlf)

    if (!ok){
        $("#telefon1").html("Må skrives gjeldig telefonnr");
        return false;
    }
    else {
        $("#telefon1").html("");
        return true;
    }
}

function vEpost(epost){
    const regExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const ok = regExp.test(epost)

    if (!ok){
        $("#email1").html("Må skrives gjeldig email");
        return false;
    }
    else {
        $("#email1").html("");
        return true;
    }
}

function valider(){
    const okAntall = vAntall($("#antall").val());
    const okFornavn = vFornavn($("#fornavn").val());
    const okEtternavn = vEtternavn($("#etternavn").val());
    const okTlf = vTlf($("#telefon").val());
    const okEpost = vEpost($("#email").val());


    if (okAntall && okFornavn && okEtternavn && okTlf && okEpost){
        kjop();

    }

}