function buildwc () {

    const temp = document.getElementById('weather-temp').innerHTML;
    const windspeed = document.getElementById('weather-windspeedresult').innerHTML; 
    const windchill = document.getElementById('weather-windchillresult');
   
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