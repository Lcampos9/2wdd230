function buildwc () {

    let temp = parseInt(document.getElementById('weather-temp').innerHTML);
    let windspeed = parseInt(document.getElementById('weather-windspeedresult').innerHTML);
    let windchill = document.getElementById('weather-windchillresult');
   
    if ( temp <= 50 && windspeed > 3) { 

        let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);
        wc = Math.floor(wc);

        windchill.innerHTML = wc + "°F";
    }
    else{

        windchill.innerHTML = "N/A"; 
    }

    return windchill;
}

buildwc();