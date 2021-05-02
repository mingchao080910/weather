//fetch api
const lat = '30.250000',
    long = '120.166664',
    api = '7f553439a3e1ec57e3128657ce7eb45a',
    unit = 'imperial',
    // url = ˋapi.openweathermap.org/data/2.5/weather?lat= ${lat} & lon= ${long} &appid = 7f553439a3e1ec57e3128657ce7eb45aˋ;

// console.log(url);

function updateUI(data) {
    console.log(data);
}

fetch(url)
.then(function(response){
    return response.json();
}

.then(function(data){
    return updateUI(data);
}

.catch(function(error){
    console.log(error);
})