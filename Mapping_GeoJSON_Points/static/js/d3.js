//Accessing the airport GeoJSon URL
let airportData = "https://github.com/yaritza-c/Mapping_Earthquakes/blob/main/majorAirports.json";

// Grabbing our GeoJSone data
d3.json(airportData).then(function(data) {
    console.log(data);
//Creating a GeoJSon layer with the retrieved data.
  L.geoJson(data).addTto(map);
});