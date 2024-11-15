const apiKey ="9592eb40bb36b7aff017e50aa78e1451"

const fetchWeatherData=async ()=>{
    const city=document.getElementById('city').value;
    const apiKey='9592eb40bb36b7aff017e50aa78e1451';
const weatherDataDiv=document.getElementById('weatherData')

try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    // checking
    if(!response.ok)throw new error('city not found. please enter a valid city');
    const data = await response.json();

    // display data
weatherDataDiv.innerHTML = `<P><strong>Location:${data.name}, ${data.sys.country}
</strong></p>
<p><strong>temperature:${data.main.temp}℃ degree</strong></p>
<p><strong>condition:${data.weather[0].description}</strong></p>`
} catch(error){
    weatherDataDiv.innerHTML = `<p style="color: red;">${error.message}</P>`
}

}

// calling the function
fetchWeatherData();