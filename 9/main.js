//Egyedi azonosító
var az = "user_63117816"

//Űrlap küldése

function processForm(btn) {

    //Gomb
    var btn = $(btn);

    //Űrlap Kiválasztás
    var form = btn.parents("form");

    //Mentjük a beviteli mezők értékeit
    var data = {};
    form.find("input").each(function (index, input) {
        data[input.name] = input.value;
    });

    //Objektumot elküldjük a szerverre
    var szerverObj = {
        "user": az,
        "data": data
    };

    //Post indítása

    $.post("http://37.139.16.100:3000", JSON.stringify(szerverObj), function (response) {
        console.log(response);
    });

    console.log(szerverObj);

    return false;
}

//Adatok visszakérdezése szerverről
function getData() {

    $.getJSON("http://37.139.16.100:3000/" + az, function (response) {
        console.log(response);

        //Űrlap Kiválasztás
        var form = $(".reg-form");

        form.find("input").each(function (index, input) {
            var name = input.value;
            if (response[name]) {
                input.value = response[name];
            }
        });
    });
}