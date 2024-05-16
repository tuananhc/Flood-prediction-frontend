<script>
  import { onMount } from "svelte";
  import Rainbow from "rainbowvis.js";
  import weatherStations from "./weatherStations.json";
  import weatherStationAll from "./location.json";
  import Dropdown from "./Dropdown.svelte";
  import DateDropdown from "components/Dropdowns/DateDropdown.svelte";
  import { text } from "svelte/internal";
  import axios from "axios";
  import moment from "moment";

  console.log(weatherStationAll);

  let circleOverlays = [];
  let imageOverlays = [];
  let date = moment().format("YYYY-MM-DD");
  const stationsMapped = [
    6100, 6029, 6036, 6098, 6144, 6136, 6003, 6106, 6135, 6026, 6092, 6132,
    6117, 6087, 6143, 6134, 6080, 6126, 6107, 6124, 6016, 1005, 6013, 6050,
    1016, 1017, 6015, 6022, 3002, 6014, 6067, 6081, 6140, 6141, 6091, 6030,
    6046, 6076, 6083, 1013, 6072, 6005, 6137, 6090, 3000, 6145, 6111, 6995,
    1006, 6108, 1010, 1009, 6146, 6148, 6044, 9913, 6078, 6019, 6039, 6073,
    6063, 6075, 6116, 6109, 6012, 6049, 6129, 6139, 6095,
  ];

  var myRainbow = new Rainbow();
  myRainbow.setSpectrum(
    "#00ffff",
    "#00bfff",
    // "#007fff",
    // "#003fff",
    // "#0000ff",
    // "#0000df",
    // "#0000bf",
    // "#00009f",
    // "#00007f",
    // "#3f005b",
    // "#7f003f",
    "#c1001f",
    "#ff0000"
    // "green",
    // "orange"
    // "red"
  );

  const DISTRICTS = [
    "Eastern District",
    "Tsuen Wan District",
    "Tuen Mun District",
    "Kowloon City District",
    "Yuen Long District",
    "Sha Tin District",
    "Kwai Tsing District",
    "Tai Po District",
    "Sham Shui Po District",
    "Islands District",
    "Southern District",
    "North District",
    "Kwun Tong District",
    "Wong Tai Sin District",
    "Central and Western District",
    "Sai Kung District",
    "Wan Chai District",
    "Yau Tsim Mong District",
  ];

  const DISTRICTS_ENAME = [
    "EASTERN",
    "TSUEN WAN",
    "TUEN MUN",
    "KOWLOON CITY",
    "YUEN LONG",
    "SHA TIN",
    "KWAI TSING",
    "TAI PO",
    "SHAM SHUI PO",
    "ISLANDS",
    "SOUTHERN",
    "NORTH",
    "KWUN TONG",
    "WONG TAI SIN",
    "CENTRAL & WESTERN",
    "SAI KUNG",
    "WAN CHAI",
    "YAU TSIM MONG",
  ];

  var districtSelection = [];

  function loadJSONFile(filename, callback) {
    var xmlobj = new XMLHttpRequest();
    xmlobj.overrideMimeType("application/json");
    xmlobj.open("GET", filename, true);
    xmlobj.onreadystatechange = function () {
      if (xmlobj.readyState == 4 && xmlobj.status == "200") {
        callback(xmlobj.responseText);
      }
    };

    xmlobj.send(null);
  }

  // init google maps
  let map;
  const infoWindow = new google.maps.InfoWindow({ maxWidth: 350 });

  onMount(async () => {
    var districts = DISTRICTS;
    let token = localStorage.getItem("token");
    if (token) {
      let userInfo = sessionStorage.getItem("userInfo");
      if (userInfo) {
        let user = JSON.parse(userInfo);
        districts = user.districts;
      }
    }

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } =
      await google.maps.importLibrary("marker");
    const myLatlng = new google.maps.LatLng(22.302711, 114.177216);
    const mapOptions = {
      zoom: 10.5,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapId: "DEMO_MAP_ID",
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
      ],
      restriction: {
        latLngBounds: {
          north: 22.5706,
          south: 22.12,
          west: 113.8222,
          east: 114.4522,
        },
        strictBounds: false,
      },
    };

    map = new Map(document.getElementById("map-canvas"), mapOptions);

    loadJSONFile("/assets/HONG_KONG.geojson", function (response) {
      var district = JSON.parse(response);
      console.log(district);

      map.data.addGeoJson(district);
      map.data.setStyle(function (feature) {
        
        return {
          fillColor: "#FFC100", //"#" + myRainbow.colorAt(Math.floor(Math.random() * 100)),
          strokeWeight: 0.5,
          fillOpacity: 0,
        };
      });
      handleDistrictSelection();
    });

    for (var i = 0; i < DISTRICTS.length; i++) {
      districtSelection.push({
        name: DISTRICTS[i],
        ename: DISTRICTS_ENAME[i],
        selected: false,
      });

      if (districts.includes(districtSelection[i].name)) {
        districtSelection[i].selected = true;
      }
      handleDistrictSelection();
    }

    map.data.addListener("click", function (event) {
      for (var i = 0; i < districtSelection.length; i++) {
        if (districtSelection[i].ename === event.feature.getProperty("ENAME")) {
          districtSelection[i].selected = !districtSelection[i].selected;
        }
      }
      handleDistrictSelection();
    });



    const legend = document.getElementById("legend");

    const icons = {
      district: {
        name: "Highlighted district",
        icon: "/assets/mapIcons/district.png",
      },
      weatherStation: {
        name: "Weather Station",
        icon: "/assets/mapIcons/blue-circle.png",
      },
    };

    for (const key in icons) {
      const type = icons[key];
      const name = type.name;
      const icon = type.icon;
      const div = document.createElement("div");
      const imageDiv = document.createElement("div");
      const textDiv = document.createElement("div");
      imageDiv.style.display = "flex";
      imageDiv.style.flex = 1;
      imageDiv.style.justifyContent = "center";
      textDiv.style.display = "flex";
      textDiv.style.flex = 1;
      imageDiv.style.justifyContent = "center";

      imageDiv.innerHTML =
        '<img src="' +
        icon +
        '" style="max-width: 50px; max-height: 30px; opacity: 0.8""> ';
      textDiv.innerHTML = name;
      div.style.display = "flex";
      div.appendChild(imageDiv);
      div.appendChild(textDiv);

      legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
  });

  function handleDistrictSelection() {
    map.data.revertStyle();
    let stations = [];
    districtSelection.forEach((district) => {
      if (district.selected) {
        console.log(district.name);
        map.data.forEach(function (feature) {
          if (feature.getProperty("ENAME") === district.ename) {
            map.data.overrideStyle(feature, { fillOpacity: 0.25 });
          }
        });
        for (const station in weatherStationAll) {
          if (weatherStationAll[station].address.municipality) {
            if (
              weatherStationAll[station].address.city.includes(district.name)
            ) {
              stations.push({
                id: station,
                title: weatherStationAll[station].address.amenity,
                longitude: weatherStationAll[station].longitude,
                latitude: weatherStationAll[station].latitude,
              });
            }
          } else {
            if (
              weatherStationAll[station].address.city_district.includes(
                district.name
              )
            ) {
              stations.push({
                id: station,
                title: weatherStationAll[station].address.amenity,
                longitude: weatherStationAll[station].longitude,
                latitude: weatherStationAll[station].latitude,
              });
            }
          }
        }
      }
    });

    station_rainfall(stations);
  }

  function station_rainfall(stations) {
    let station_id = [];
    // Clear existing circle

    stations.forEach((station) => {
      station_id.push(Number(station.id));
    });

    // Iterate over the array and remove each circle overlay
    circleOverlays.forEach((circle) => {
      circle.setMap(null);
    });

    // Clear the array
    circleOverlays = [];

    axios
      .post("http://127.0.0.1:5000/data/flood-info", {
        station_ids: station_id,
        date: date,
      })
      .then((response) => {
        let rainData = response.data;
        // Add circle overlay
        stations.forEach((station) => {
          const myLatlng = new google.maps.LatLng(
            station.latitude,
            station.longitude
          );
          let stationData = rainData.data.find(
            (item) => item.station_id == station.id
          );
          let value = stationData.data[date] ?? 0;

          let color = "#00FFFF";
          let textColor = "#00FFFF";
          let severity = "Unlikely to flood";

          if (value >= 80 && value < 150) {
            color = "#ffcc01";
            textColor = color;
            severity = "Minor Severity";
          } else if (value >= 150 && value < 250) {
            color = "#fe0101";
            textColor = color;
            severity = "Medium Severity";
          } else if (value >= 250) {
            color = "#000000";
            textColor = "#fe0101";
            severity = "High Severity";
          }

          if (value >= 80) {
            value = 15;
          } else if (value >= 150) {
            value = 18;
          } else if (value >= 250) {
            value = 22;
          } else {
            value = Math.round(1 + 14 * (1 - Math.exp(-value / 100)));
          }

          const circle = new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.5,
            map,
            center: myLatlng,
            radius: 100 * value,
            zIndex: 100,
            title: station.title,
          });

          circle.addListener("click", ({ domEvent, latLng }) => {
            const { target } = domEvent;

            var title = circle.title != "" ? circle.title : "Weather station";

            const infoWindowContent = `
          <div>
            <strong>${title}</strong><br>
            <div style="display: inline; color: ${textColor}; margin: 10">
               <strong>${severity}</strong>
            </div>
            <p><strong>Total Daily Rainfall: ${stationData.data[date].toFixed(2) ?? 0} mm</strong></p>
          </div>
        `;

            infoWindow.close();
            infoWindow.setContent(infoWindowContent);
            infoWindow.setPosition(myLatlng);
            infoWindow.open(map);
            infoWindow.focus();
          });

          circleOverlays.push(circle);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function selectAll() {
    districtSelection = districtSelection.map((district) => {
      return {
        ...district,
        selected: true,
      };
    });
    map.data.revertStyle();
    map.data.forEach(function (feature) {
      map.data.overrideStyle(feature, { fillOpacity: 0.5 });
    });

    handleDistrictSelection();
  }

  function deselectAll() {
    districtSelection = districtSelection.map((district) => {
      return {
        ...district,
        selected: false,
      };
    });
    map.data.revertStyle();
    station_rainfall([]);
  }
</script>

<div class="block w-full overflow-x-auto">
  <div class="flex w-full bg-transparent border-collapse">
    <div class="ml-3 flex">
      <Dropdown
        districts={districtSelection}
        onChange={handleDistrictSelection}
        onSelectAll={selectAll}
        onDeselectAll={deselectAll}
      />
    </div>
    <div class="" style="padding-inline: 24px">
      <!-- Adjusted padding here -->
      <label style="padding-inline: 12px">Rainfall Date: </label>
      <input
        class="rounded-md"
        type="date"
        bind:value={date}
        on:change={(e) => {
          date = moment(e.target.value).format("YYYY-MM-DD");
          handleDistrictSelection();
        }}
      />
    </div>
  </div>
  <div
    class="rounded-md"
    id="map-canvas"
    style="width: 100%; height: 600px; margin-top: 24px;"
  ></div>
  <div
    id="legend"
    style="font-family: Arial, sans-serif; background: #fff; padding: 10px; margin: 10px; border: 3px solid #000;"
  ></div>
</div>
