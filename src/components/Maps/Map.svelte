<script>
  import { onMount } from "svelte";
  import Rainbow from "rainbowvis.js";
  import weatherStations from "./weatherStations.json";
  import weatherStationAll from "./location.json";
  import Dropdown from "./Dropdown.svelte";

  let circleOverlays = [];
  const stationsMapped = [6100, 6029, 6036, 6098, 6144, 6136, 6003, 6106, 6135, 6026, 6092, 
                        6132, 6117, 6087, 6143, 6134, 6080, 6126,  6107, 6124, 6016, 1005, 6013, 
                        6050, 1016, 1017, 6015, 6022, 3002,6014, 6067, 6081, 6140, 6141, 6091, 6030, 6046,
                        6076, 6083, 1013, 6072, 6005, 6137,6090, 3000, 6145, 6111, 6995, 1006, 6108, 1010, 1009,
                        6146, 6148, 6044, 9913, 6078, 6019, 6039, 6073, 6063, 6075, 6116, 6109, 6012, 6049,
                        6129, 6139, 6095]
  
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
    "#ff0000",
    // "green",
    // "orange"
    // "red"
  );

  const DISTRICTS = [
    'Eastern District', 'Tsuen Wan District', 'Tuen Mun District', 'Kowloon City District',
    'Yuen Long District', 'Sha Tin District', 'Kwai Tsing District', 'Tai Po District',
    'Sham Shui Po District', 'Islands District', 'Southern District', 'North District',
    'Kwun Tong District', 'Wong Tai Sin District', 'Central and Western District',
    'Sai Kung District', 'Wan Chai District', 'Yau Tsim Mong District'
  ]

  function loadJSONFile(filename, callback) {   
    var xmlobj = new XMLHttpRequest();
    xmlobj.overrideMimeType("application/json");
    xmlobj.open('GET', filename, true);
    xmlobj.onreadystatechange = function () {
      if (xmlobj.readyState == 4 && xmlobj.status == "200") {
        callback(xmlobj.responseText);
      }
    };

    xmlobj.send(null);  
  }

  // init google maps
  let map;
  onMount(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
      );
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
      }
    };
 
    map = new Map(document.getElementById("map-canvas"), mapOptions);


    const contentString =
      '<div class="info-window-content"><h2>Notus Svelte</h2>' +
      "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    loadJSONFile("/assets/HONG_KONG.geojson", function(response) {
      var district = JSON.parse(response);
      console.log(district)
      
      map.data.addGeoJson(district);
      map.data.setStyle(function (feature) {
        return {
          fillColor: "#00ffff", //"#" + myRainbow.colorAt(Math.floor(Math.random() * 100)),
          strokeWeight: 0.5,
          fillOpacity: 0
        }
      });
    });

  });

  var districtSelection = [];
  for (var i = 0; i < DISTRICTS.length; i ++) {
    districtSelection.push({
      name: DISTRICTS[i],
      selected: false
    })
  }

  
  function handleDistrictSelection() {
    map.data.revertStyle();
    let stations = []
    districtSelection.forEach((district) =>{
      if (district.selected){
        for (const station in weatherStationAll){
          if (weatherStationAll[station].address.municipality){
            if (weatherStationAll[station].address.city.includes(district.name)){
              stations.push({
                id: station,
                longitude: weatherStationAll[station].longitude,
                latitude: weatherStationAll[station].latitude
              })
            }
          } else {
            if (weatherStationAll[station].address.city_district.includes(district.name)){
              stations.push({
                id: station,
                longitude: weatherStationAll[station].longitude,
                latitude: weatherStationAll[station].latitude
              })
            }
          }
        }
      }
    })

    station_rainfall(stations)
  };

  function station_rainfall(stations){
    let station_id = []
    // Clear existing circle

    stations.forEach((station) =>{
      station_id.push(station.id)
    })

    // Iterate over the array and remove each circle overlay
    circleOverlays.forEach((circle) => {
      circle.setMap(null);
    });
    
    // Clear the array
    circleOverlays = [];

    // Add circle overlay
    stations.forEach((station) =>{
      const myLatlng = new google.maps.LatLng(station.latitude, station.longitude);
      let color = myRainbow.colorAt(20)
      const circle = new google.maps.Circle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        center: myLatlng,
        radius: 500,
      });
      circleOverlays.push(circle);
    })
  }

  function selectAll() {
    districtSelection = districtSelection.map(district => {
      return {
        name: district.name,
        selected: true
      }
    })
    map.data.revertStyle();
    map.data.forEach(function (feature) {
      map.data.overrideStyle(feature, { fillOpacity: 0.5 })
    });
  }

  function deselectAll() {
    districtSelection = districtSelection.map(district => {
      return {
        name: district.name,
        selected: false
      }
    })
    map.data.revertStyle();
  }

</script>

<div style="display: flex; flex: 1; flex-direction: column">
  <div style="display: flex; flex: 1; height: 50px; justify-content: flex-start;">
    <Dropdown 
      districts={districtSelection} 
      onChange={handleDistrictSelection}
      onSelectAll={selectAll}
      onDeselectAll={deselectAll}
    />
  </div>
  <div
    id="map-canvas"
    style="width: 100%; height: 1000px"
  ></div>
</div>