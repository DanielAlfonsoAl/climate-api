
function consultarClima(){
  document.getElementById("clima").style="height : 300px"
  let ciudad = document.getElementById("contenido").value
  // Opciones de la petición (valores por defecto)
const options = {
  method: "GET"
};

// Petición HTTP
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
  .then(response => response.text())
  .then(data => {
     
   let info = JSON.parse(data);
   let temperatura = (parseInt(info.main.temp) - (273.15)) .toFixed(2);
   let icon= (info.weather[0].icon);
   document.getElementById("temperatura").innerHTML = (temperatura + " C°")
   document.getElementById("icon").setAttribute("src",`http://openweathermap.org/img/wn/${icon}@2x.png`)
  })
  .catch(error =>{
    alert("Upss.. ha ocurrido un error")
    console.log(error)
  });
} 
document.addEventListener("keydown",(e) =>{
  if(e.keyCode == 13){
    consultarClima();
  }
})



