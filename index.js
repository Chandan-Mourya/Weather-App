//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function getData(){
    let city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41ef8c4a1db85bf49c426b08320cb0bb`

    fetch(url)
    .then(function (res){
        return res.json();
    }).then(function(res){
        console.log(res)
        append(res)
    }).catch(function(err){
        console.log("err: ", err);
        
    })
}

function getDataLocation(lat ,lon){
    //let city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=41ef8c4a1db85bf49c426b08320cb0bb`
    

    fetch(url)
    .then(function (res){
        return res.json();
    }).then(function(res){
        console.log(res)
        append(res)
    }).catch(function(err){
        console.log("err: ", err);
        
    })
}


function append(data){
    

    let container = document.getElementById('container')
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;

   


    let city = document.createElement('p')  
    city.innerText = `City: ${data.name}`;

    let min = document.createElement('p')
    let a =data.main.temp_min
    min.innerText = `Min Temp: ${Math.floor(a - 273)}`;

    let max = document.createElement('p')
    let b= data.main.temp_max
    max.innerText = `Max Temp: ${Math.floor(b - 273)} `;

    let current = document.createElement('p')
    let kelvin= data.main.temp
   // current.innerText = `Main Temp: ${data.main.temp}`;
   current.innerText=`Main Temp: ${Math.floor(kelvin - 273)}`;

    let humidity = document.createElement('p')
    humidity.innerText = `Humidity: ${data.main.humidity}`;
    
    container.append(city,min,max,current,humidity)
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    
    
}



function getWeather(){

 navigator.geolocation.getCurrentPosition(success)

function success(position){
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    getDataLocation(crd.latitude ,crd.longitude)
}


}



