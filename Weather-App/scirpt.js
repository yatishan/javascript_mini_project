$(document).ready(function(){
    function  weatherfunction(){
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://open-weather13.p.rapidapi.com/city/yangon/EN',
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8ddf981eb9msh56ac855962de0d1p126277jsnd6492d089413',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };
        
        $.ajax(settings).done(function (response) {
            const temp=response.main.temp;
            const windSpeed=response.wind.speed;
            const humidity=response.main.humidity;
            $('.tmp').text(`${temp}°C`);
            $('.hum').text(`${humidity}%`);
            $('.wind-speed').text(`${windSpeed} m/s`);
        });
       }
       weatherfunction();
})
