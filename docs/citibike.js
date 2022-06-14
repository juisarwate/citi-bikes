mapboxgl.accessToken = "pk.eyJ1IjoianNhcndhdGUiLCJhIjoiY2t4NnI5ZjJyMDRucjJwcnl5NDh1Zml5cSJ9.qmI6QbbKDZ98r06dRnkSzQ";
var citimap = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jsarwate/cl3uhu68k001f14n9t35kdhva",
  zoom: 10,
  center: [-74, 40.725]
});

citimap.on('load', function () {
    citimap.addLayer({
        'id': 'citibikeData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/startgeo_2020.geojson'
        },
        'paint': {
            'circle-color': '#ff7f50',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': 5
        }
    });
});