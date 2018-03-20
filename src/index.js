const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

const marker = buildMarker("activities", [-87.6354, 41.8885]); // or [-87.6354, 41.8885]
marker.addTo(map);

mapboxgl.accessToken = "pk.eyJ1IjoibWlzc3ByYW4iLCJhIjoiY2plenR3YzU4MGUycDJxcW9ndzBqdGxuMCJ9.f3gj8qrycuC8H9aZDc4K4g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



//new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885] ).addTo(map); // [-87.6354, 41.8885] for Chicago