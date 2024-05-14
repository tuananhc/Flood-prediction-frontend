<script>
  // import
  import LocationDropdown from "components/Dropdowns/LocationDropdown.svelte";
  import DateDropdown from "components/Dropdowns/DateDropdown.svelte";

  let url = `https://data.weather.gov.hk/weatherAPI/opendata/hourlyRainfall.php?lang=en`;

  // rainfall data
  export let shatin = '';
  export let kwontong = '';
  export let sham = '';
  export let sai = '';
  export let taipo = '';
  export let color = "light";

  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      displayRainfall(data);
    })
    .catch(console.err);

  async function displayRainfall(resp){
    console.log(resp);
    shatin = resp.hourlyRainfall[21].value + "mm";
    kwontong = resp.hourlyRainfall[4].value + "mm";
    sham = resp.hourlyRainfall[23].value + "mm";
    sai = resp.hourlyRainfall[16].value + "mm";
    taipo = resp.hourlyRainfall[6].value + "mm";
  }

</script>

<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
  <div class="p-6">
    <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
      Display Results For
    </h6>
    <h2 class="text-blueGray-700 text-xl font-semibold">
      Predicted Rainfall per District
    </h2> 
    <div class="block w-full overflow-x-auto">
      <div class="grid-2 w-full bg-transparent border-collapse">
        <div class="flex-flow:column p-3 "> 
          <LocationDropdown />
        </div>
        <div class="flex-flow:column p-3">
          <DateDropdown />
        </div> 
      </div> 
    </div> 
  </div>
</div>


