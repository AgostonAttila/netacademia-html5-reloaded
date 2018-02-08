//Keresések

//$("h1").next(); következő

//$("h1").parent(); szülő

//$("h1").before();

//$("h1").prev(); előző

//$("li").first(); első

//$("li").eq(1); 1. indexű

//$("nav ul li").eq(0); 

//$("nav ul li").eq(2).parents("container");


//$(".container").first().find("li").find("a");

//$(".container").first().find("li").eq(0).find("a");


//Tartalomvált.

//$(".container").first().find("li").eq(0).find("a").html("Főoldal");

//$(".container").first().find("li").eq(0).find("a").html("Főoldal").css('color', 'red');


//Tulajdonság

//$("h1").attr("data-id","h11");

//lekérés
//$("h1").attr("data-brackets-id");

//$("h1").data("id")  $("h1").data().id

//$("h1").data()

//Létrehozom
//$("h1").after('<div>Tesztdiv</div>')


//APPEND PREPEND
//H1 belül hozom létre
//$("h1").append('<div>Tesztdiv</div>')

//TÖRLÉS
//$(".container").first().find("li").eq(0).find("a").remove()



//Láncolás