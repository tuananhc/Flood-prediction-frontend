<script>
  import { onMount } from "svelte";
  import Rainbow from "rainbowvis.js";
  import weatherStations from "./weatherStations.json";
  import weatherStationAll from "./location.json";
  import Dropdown from "./Dropdown.svelte";
  import Geolocation from "svelte-geolocation";

  let coords = [];

  console.log(weatherStations);
  console.log("test")
  console.log(weatherStationAll);

  const stationsMapped = [6100, 6029, 6036, 6098, 6144, 6136, 6003, 6106, 6135, 6026, 6092, 
                        6132, 6117, 6087, 6143, 6134, 6080, 6126,  6107, 6124, 6016, 1005, 6013, 
                        6050, 1016, 1017, 6015, 6022, 3002, 6014, 6067, 6081, 6140, 6141, 6091, 6030, 6046,
                        6076, 6083, 1013, 6072, 6005, 6137, 6090, 3000, 6145, 6111, 6995, 1006, 6108, 1010, 1009,
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

  // check user permission
  var trackingLocationPermission = false;
  navigator.permissions.query({name:'geolocation'}).then(function(result) {
    if (result.state === "granted") {
      trackingLocationPermission = true;
    }
  });

  const DISTRICTS = [
    'WONG TAI SIN', 'KOWLOON CITY', 'KWUN TONG', 
    'SAI KUNG', 'NORTH', 'CENTRAL & WESTERN', 
    'WAN CHAI', 'EASTERN', 'TUEN MUN', 
    'YUEN LONG', 'SOUTHERN', 'ISLANDS', 
    'SHAM SHUI PO', 'YAU TSIM MONG', 'KWAI TSING', 
    'TSUEN WAN', 'TAI PO', 'SHA TIN'
  ];

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

    if (trackingLocationPermission) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(coords[1], coords[0]),
        map: map,
        animation: google.maps.Animation.DROP,
        title: "Hello World!",
      });
    }

    for (var i = 0; i < weatherStations.length; i ++) {
      const iconImage = document.createElement("img");
      iconImage.src = "/assets/mapIcons/signal-tower (2).png";
      iconImage.height = 30;
      iconImage.width = 30;


      var station = weatherStationAll.weatherStations[stationsMapped[i]];
      console.log(station)
      const newMarker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: new google.maps.LatLng(station["latitude"], station["longitude"]),
        content: iconImage,
        title: station.display_name
      })
      // https://developers.google.com/maps/documentation/javascript/advanced-markers/accessible-markers#javascript
      //newMarker.addListener("click", ({domEvent, latLng}) => {
      //  const { target} = domEvent;
      //  // Add rainfall cloning here
      //  const infoWindowContent = "<div><h3>" + station.display_name + "</h3></div>";
      //  const infoWindow = new google.maps.InfoWindow()
      //  
      //  infowindow.close();
      //  infoWindow.setContent(infoWindowContent);
      //  infoWindow.open(marker.map, marker);
      //})
    }

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
    for (var i = 0; i < districtSelection.length; i ++) {
      if (districtSelection[i].selected) {
        map.data.forEach(function (feature) {
          if (feature.getProperty('ENAME') === districtSelection[i].name) {
            map.data.overrideStyle(feature, { fillOpacity: 0.5 })
          }
        });
      } 
    };
  };

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

<div class="block w-full overflow-x-auto">
  <div class="grid-2 w-full bg-transparent border-collapse">
    <div class="flex-flow:column p-3"> 
      <Dropdown 
        districts={districtSelection} 
        onChange={handleDistrictSelection}
        onSelectAll={selectAll}
        onDeselectAll={deselectAll}
      />
    </div>
  </div>
  <div
    id="map-canvas"
    style="width: 100%; height: 600px"
  ></div>
</div>