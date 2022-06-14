mapboxgl.accessToken = "pk.eyJ1IjoianNhcndhdGUiLCJhIjoiY2t4NnI5ZjJyMDRucjJwcnl5NDh1Zml5cSJ9.qmI6QbbKDZ98r06dRnkSzQ";
var gradmap = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jsarwate/cl3uhu68k001f14n9t35kdhva",
  zoom: 3,
  maxZoom: 9,
  minZoom: 3.5,
  center: [-99, 38],
  maxBounds: [
    [-180, 15],
    [-30, 72],
  ],
  projection: "albers",
});