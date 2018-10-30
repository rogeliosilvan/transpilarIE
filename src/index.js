// import $ from 'jquery'

//console.log(colors);
// $("#myDiv").text("Hola que tal estas tu");

class main{

    constructor(){
        console.log("Hola");
    }
}

let Newmain = new main();

mostrarMas();

function mostrarMas()
{
  var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]
  console.log(cities.filter(city => city.length >= 10));

}