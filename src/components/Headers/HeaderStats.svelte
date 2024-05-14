<script>
  // core components
  //import { onMount } from "svelte";
  import CardStats from "components/Cards/CardStats.svelte";
  export let checkRain = '';
  export let rain = '';
  
  export let calcTemp = '';
  export let negTemp = '';
  export let plusTemp = '';
  export let currentTemp = '';

  export let windStat = '';
  export let currentWind = '';
  export let wind = '';
  
  let lat = '22.302711';
  let lon = '114.177216';
  let part = '';
  // openweather personal api key
  let key = 'fc12643371c002cb1d19321711185f1b';
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${key}&units=metric`;

  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      showWeather(data);
    })
    .catch(console.err);

  async function showWeather(resp){
    console.log(resp);
    // rain
    checkRain = resp.daily[0].rain;
    if (!checkRain){
      rain = "No rainfall ";
    } else {
      rain = resp.daily[0].rain + " mm of rainfall ";
    }
    // wind stats
    currentWind = resp.current.wind_speed + " m/sec";
    windStat = resp.current.wind_speed
    if (windStat <= 1) 
      {wind = "Calm";}
    else if (windStat <= 2) 
      {wind = "Light";}
    else if (windStat <= 3) 
      {wind = "Moderate";}
    else if (windStat <= 4) 
      {wind = "Strong";}
    else if (windStat < 5.5) 
      {wind = "Gale";}
    else if (windStat >= 9) 
      {wind = "Strong";}

    // temperature
    currentTemp = resp.current.temp + "°C";
    calcTemp = (Math.trunc(resp.current.temp)) - (Math.trunc(resp.daily[1].temp.max));
    plusTemp = calcTemp + "°C";
    negTemp =(Math.trunc(resp.daily[1].temp.max)) - (Math.trunc(resp.current.temp)) + "°C";

  }
</script>

<!-- Header -->
<div class="relative bg-violet-950 pt-16 pb-32 ">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <div class="pl-3 pb-3">
        <h2 class="text-white text-xl font-semibold">
          Kowloon City
        </h2>
        <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
          Weather Forecast
        </h6>
      </div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <br>
          <CardStats
            statSubtitle="RAINFALL ALERT"
            statTitle="None"
            statArrow="up"
            statPercent={rain}
            statPercentColor="text-orange-500"
            statDescripiron="recorded yesterday"
            statIconName="fas fa-cloud-showers-heavy"
            statIconColor="bg-orange-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <br>
          <CardStats
            statSubtitle="FLOODING DANGER"
            statTitle="Low"
            statArrow="down"
            statPercent="Flooding occurence unlikely"
            statPercentColor="text-emerald-500"
            statDescripiron=""
            statIconName="fas fa-water"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <br>
          <CardStats
            statSubtitle="WIND STRENGTH"
            statTitle={wind}
            statArrow="up"
            statPercent={currentWind}
            statPercentColor="text-sky-500"
            statDescripiron="displaying wind strength"
            statIconName="fas fa-wind"
            statIconColor="bg-sky-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <br>
          {#if calcTemp > 0}
          <CardStats
            statSubtitle="CURRENT TEMP"
            statTitle={currentTemp}
            statArrow="up"
            statPercent={negTemp}
            statPercentColor="text-blue-800"
            statDescripiron="since yesterday"
            statIconName="fas fa-cloud-sun-rain"
            statIconColor="bg-blue-800"
          />
          {:else} 
          <CardStats
          statSubtitle="CURRENT TEMP"
          statTitle={currentTemp}
          statArrow="up"
          statPercent={plusTemp}
          statPercentColor="text-blue-800"
          statDescripiron="since yesterday"
          statIconName="fas fa-cloud-sun-rain"
          statIconColor="bg-blue-800"
          />
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
