var button =document.querySelector("button")
var res1= document.getElementById("res1")
var res2= document.getElementById("res2")
let latitude;
let longitude;

button.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        res1.innerText=`${latitude}`
        res2.innerText=`${longitude}`
      })
})