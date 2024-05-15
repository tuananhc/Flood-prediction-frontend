<script>
  import { onMount } from "svelte";
  import Rainbow from "rainbowvis.js";
  import weatherStations from "./weatherStations.json";
  import Dropdown from "./Dropdown.svelte";

  console.log(weatherStations);

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

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Hello World!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Notus Svelte</h2>' +
      "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    for (var i = 0; i < weatherStations.length; i ++) {
      const iconImage = document.createElement("img");

      iconImage.src = "/assets/mapIcons/signal-tower (2).png";
      iconImage.height = 50;
      iconImage.width = 50;

      var address = weatherStations[i]["xml_data"]["reversegeocode"]["result"];

      const newMarker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: new google.maps.LatLng(address["lat"], address["lon"]),
        content: iconImage,
      });
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