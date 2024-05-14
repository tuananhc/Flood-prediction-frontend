<script>
  // core components
  import TableDropdown from "components/Dropdowns/TableDropdown.svelte";

  const bootstrap = "../assets/img/login_bg.jpeg";
  const angular = "../assets/img/login_bg.jpeg";
  const sketch = "../assets/img/login_bg.jpeg";
  const react = "../assets/img/login_bg.jpeg";
  const vue = "../assets/img/login_bg.jpeg";

  // hong kong api
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

<div
  class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Rainfall Every 15 Minutes
        </h3>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!--Districts table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          >
            District
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Amount
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Warning
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Wind Strength
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Station Location
          </th>
          
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
          
            <img
              src="{bootstrap}"
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-white'}"
            >
              Sha Tin
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            {shatin}
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2"></i>
            <span>None</span>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">31mph</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                    style="width: 60%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace p-4"
          >
          Po Leung Kuk Wu Chung College, Sha Tin District, New Territories
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src="{angular}"
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
            >
              Kwon Tong
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            {kwontong}
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2"></i>
            None
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">10mph</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                >
                  <div
                    style="width: 10%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace p-4"
          >
            <div class="flex">
              Mu Kuang English School, 55, Kung Lok Road, Hong Lee Court, Ngau Tau Kok, Kwun Tong District
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src="{sketch}"
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
            >
            Sham Shui Po
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            {sham}
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2"></i>
            <span>None</span>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">40mph</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                    style="width: 73%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace p-4"
          >
            <div class="flex">
              Tak Nga Secondary School, Fa Po Street, Fa Po Villa, Shek Kip Mei, Sham Shui Po District
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src="{react}"
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
            >
              Sai Kung
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            {sai}
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-teal-500 mr-2"></i> 
            None
          </td>
          <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <div class="flex items-center">
            <span class="mr-2">25mph</span>
            <div class="relative w-full">
              <div
                class="overflow-hidden h-2 text-xs flex rounded bg-teal-200"
              >
                <div
                  style="width: 30%"
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                ></div>
              </div>
            </div>
          </div>
        </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace p-4"
          >
            <div class="flex">
              Tseung Kwan O Government Secondary School, Tseung Kwan O Village, Sai Kung District
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
              src="{vue}"
              class="h-12 w-12 bg-white rounded-full border"
              alt="..."
            />
            <span
              class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
            >
            Tai Po
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            {taipo}
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2"></i>
            None
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">15mph</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                >
                  <div
                    style="width: 25%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace p-4"
          >
            <div class="flex">
              Hong Kong Red Swastika Society Tai Po Secondary School, 6, Chung Nga Road, Nam Hang, Tit Mei Tsai, Nam Hang Village, Tai Po District
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
