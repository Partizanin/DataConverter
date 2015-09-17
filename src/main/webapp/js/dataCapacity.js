/**
 * Created by Partizanin on 17.09.2015.
 */

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode != 46 && charCode != 44 && (charCode < 48 || charCode > 57)))
        return false;
    return true;
}

function changeValue(changedValue) {

    if (changedValue == "eks") {

        $('#1unit').val("Пентабайт");
        $('#2unit').val("Терабайт");
        $('#3unit').val("Гигабайт");
        $('#4unit').val("Мегабайт");
        $('#5unit').val("Килобайт");
        $('#6unit').val("Байт");

    } else if (changedValue == "pen") {

        $('#1unit').val("Ексабайт");
        $('#2unit').val("Терабайт");
        $('#3unit').val("Гигабайт");
        $('#4unit').val("Мегабайт");
        $('#5unit ').val("Килобайт");
        $('#6unit ').val("Байт");


    } else if (changedValue == "ter") {

        $('#1unit').val("Ексабайт");
        $('#2unit').val("Пентабайт");
        $('#3unit').val("Гигабайт");
        $('#4unit ').val("Мегабайт");
        $('#5unit ').val("Килобайт");
        $('#6unit ').val("Байт");

    } else if (changedValue == "meg") {

        $('#1unit').val("Ексабайт");
        $('#2unit').val("Пентабайт");
        $('#3unit').val("Терабайт");
        $('#4unit ').val("Гигабайт");
        $('#5unit ').val("Килобайт");
        $('#6unit ').val("Байт");

    } else if (changedValue == "gig") {

        $('#1unit').val("Ексабайт");
        $('#2unit').val("Пентабайт");
        $('#3unit').val("Терабайт");
        $('#4unit ').val("Мегабайт");
        $('#5unit ').val("Килобайт");
        $('#6unit ').val("Байт");

    } else if (changedValue == "kil") {

        $('#1unit').val("Ексабайт");
        $('#2unit').val("Пентабайт");
        $('#3unit').val("Терабайт");
        $('#4unit ').val("Гигабайт");
        $('#5unit ').val("Мегабайт");
        $('#6unit ').val("Байт");

    } else {
        /*byte*/
        $('#1unit').val("Ексабайт");
        $('#2unit').val("Пентабайт");
        $('#3unit').val("Терабайт");
        $('#4unit ').val("Гигабайт");
        $('#5unit ').val("Мегабайт");
        $('#6unit ').val("Килобайт");
    }

    count($('#inputValue').val());
}

function count(inputValue) {

    var unit = $('#selectUnit').val();

    var eksa = "";
    var penta = "";
    var tera = "";
    var giga = "";
    var mega = "";
    var kilo = "";
    var byte = "";

    if (unit == "eks") {


        eksa = inputValue;
        penta = eksa * 1024;
        tera = penta * 1024;
        giga = tera * 1024;
        mega = giga * 1024;
        kilo = giga * 1024;
        byte = kilo * 1024;

        $('#1unitValue').val(penta);
        $('#2unitValue').val(tera);
        $('#3unitValue').val(giga);
        $('#4unitValue').val(mega);
        $('#5unitValue').val(kilo);
        $('#6unitValue').val(byte);

    } else if (unit == "pen") {

        eksa = inputValue / 1024;
        penta = inputValue;
        tera = penta * 1024;
        giga = tera * 1024;
        mega = giga * 1024;
        kilo = mega * 1024;
        byte = kilo * 1024;

        $('#1unitValue').val(eksa);
        $('#2unitValue').val(tera);
        $('#3unitValue').val(giga);
        $('#4unitValue').val(mega);
        $('#5unitValue').val(kilo);
        $('#6unitValue').val(byte);

    } else if (unit == "ter") {

        tera = inputValue;
        penta = tera / 1024;
        eksa = penta / 1024;
        giga = tera * 1024;
        mega = giga * 1024;
        kilo = mega * 1024;
        byte = kilo * 1024;

        $('#1unitValue').val(eksa);
        $('#2unitValue').val(penta);
        $('#3unitValue').val(giga);
        $('#4unitValue').val(mega);
        $('#5unitValue').val(kilo);
        $('#6unitValue').val(byte);

    } else if (unit == "gig") {

        giga = inputValue;
        tera = giga / 1024;
        penta = tera / 1024;
        eksa = penta / 1024;
        mega = giga * 1024;
        kilo = mega * 1024;
        byte = kilo * 1024;

        $('#1unitValue').val(eksa);
        $('#2unitValue').val(penta);
        $('#3unitValue').val(tera);
        $('#4unitValue').val(mega);
        $('#5unitValue').val(kilo);
        $('#6unitValue').val(byte);

    } else if (unit == "meg") {

        mega = inputValue;
        giga = mega / 1024;
        tera = giga / 1024;
        penta = tera / 1024;
        eksa = penta / 1024;
        kilo = mega * 1024;
        byte = kilo * 1024;

        $('#1unitValue').val(eksa);
        $('#2unitValue').val(penta);
        $('#3unitValue').val(tera);
        $('#4unitValue').val(giga);
        $('#5unitValue').val(kilo);
        $('#6unitValue').val(byte);


    } else if (unit == "kil") {

        kilo = inputValue;
        mega = kilo / 1024;
        giga = mega / 1024;
        tera = giga / 1024;
        penta = tera / 1024;
        eksa = penta / 1024;
        byte = kilo * 1024;

        $('#1unitValue').val(eksa);
        $('#2unitValue').val(penta);
        $('#3unitValue').val(tera);
        $('#4unitValue').val(giga);
        $('#5unitValue').val(mega);
        $('#6unitValue').val(byte);


    } else {
        /*byte*/
        byte = inputValue;
        kilo = byte / 1024;
        mega = kilo / 1024;
        giga = mega / 1024;
        tera = giga / 1024;
        penta = tera / 1024;
        eksa = penta / 1024;


        $('#1unitValue').val(eksa);
        $('#2unitValue').val(penta);
        $('#3unitValue').val(tera);
        $('#4unitValue').val(giga);
        $('#5unitValue').val(mega);
        $('#6unitValue').val(kilo);


    }


}
