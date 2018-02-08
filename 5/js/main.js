//DRAG&DROP

//Target elem fölé ér
function allowedDrop(event) {
    event.preventDefault();
    event.target.style.border = "dashed 5px #e0e0e0";
};

//Lehúzás
function dropLeaved(event) {
    event.preventDefault();
    event.target.style.border = "solid 1px #e0e0e0";

};

//Megfogás kezdete elmentem elemet
function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
};

//Elengedik az elemet
function drop(event) {
    event.preventDefault();

    //célpont
    var div = event.target;


    //elem hozzáadása
    var id = event.dataTransfer.getData("id");

    //honnan
    var sdiv = document.querySelector("#" + id).parentNode;

    div.appendChild(document.querySelector("#" + id));

    //Ár calculálása
    calcPrice(div);
    calcPrice(sdiv);
};

function calcPrice(div) {

    //Div elemei
    var order = div.querySelectorAll("[data-ar]");

    var price = 0;
    Array.prototype.forEach.call(order, function (item) {
        var ar = item.getAttribute("data-ar");
        price += parseInt(ar);
    });

    div.querySelector(".price-div").innerHTML = price + "Ft";

}





//CANVAS

function fillCanvas() {
    var canvas = document.querySelector("#myCanvas");

    //Előkészíti rajzolás számára
    var context = canvas.getContext("2d");

    //pirossal rajzolunk
    context.fillStyle = "#ff0000";

    context.fillRect(10, 10, 180, 80);


}

//fillCanvas();



//Kép betöltése
function fillImg() {
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");

    var img = document.querySelector("#myImg");

    //Vonal
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    //Kör
    context.beginPath();
    context.arc(200, 50, 40, 0, 2 * Math.PI);
    context.stroke();

    //Kép
    context.drawImage(img, 0, 0);

}

fillImg();