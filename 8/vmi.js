var bar = document.querySelector(".progress .progress-bar");

function loop() {
    for (i = 0; i < 100; i++) {
        changeProgress(i);
    }
}

//A folyamat állása
function changeProgress(progress) {

    if (!progress)
        progress = document.querySelector(".progress-value").value;

    progress = parseInt(progress, 10);
    if (!progress || isNaN(progress))
        return;

    bar.style.width = progress + "%";
}

function zero(progress) {
    bar.style.width = "0%";
}

//Késletetett megjelenítés
setTimeout(function () {
    $("#myModal").modal("show");
}, 5000);



$('#pop1').popover();
$('#pop2').popover();
$('#pop3').popover();
$('#pop4').popover();