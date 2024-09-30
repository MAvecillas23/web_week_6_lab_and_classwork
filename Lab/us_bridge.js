// coordinates for the center of the US
let us_center = [39.50, -98.35]
let zoomLevel = 3 // zoom level shows all of the US

let map = L.map('bridge').setView(us_center, zoomLevel)

// sets tile layer... allows for the actual to be displayed on the webpage
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create bridge icons
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [50, 100],
    iconAnchor: [22, 94],
    popupAnchor:  [-3, -76]
});
// create a different bridge icon for the longest bridge
let longestBridgeIcon = L.icon({
    iconUrl: 'longestbridge.png',
    iconSize: [50, 100],
    iconAnchor: [22, 94],
    popupAnchor:  [-3, -76]
});

// longest bridges data
let bridges = [
    {'name': 'Verrazano-Narrows', 'city': 'New York, NY', 'span': 1298.4, 'location': [40.6066, -74.0447]},
    {'name': 'Golden Gate', 'city': 'San Francisco & Marin, CA', 'span': 1280.2, 'location': [37.8199, -122.4783]},
    {'name': 'Mackinac', 'city': 'Mackinaw & St. Ignace, MI', 'span': 1158.0, 'location': [45.8174, -84.7278]},
    {'name': 'George Washington', 'city': 'New York, NY & New Jersey, NJ', 'span': 1067.0, 'location': [40.8517, -73.9527]},
    {'name': 'Tacoma Narrows', 'city': 'Tacoma & Kitsap, WA','span': 853.44, 'location': [47.2690, -122.5517]}]


// loop over all bridges data to create a maker, pop up, and display information
bridges.forEach(function(bridge){

    let markerText = `<b><u>${bridge.name}</u><br>Span:</b> ${bridge.span} meters<br><b>Location:</b> ${bridge.city}`
    // if bridge name is verrazano-narrows
    // display the longestBridgeIcon icon instead of the default bridgeIcon
    if (bridge.name === 'Verrazano-Narrows') {
        L.marker(bridge.location, {icon:longestBridgeIcon}).bindPopup(markerText).addTo(map)
    } else {
        L.marker(bridge.location, {icon: bridgeIcon}).bindPopup(markerText).addTo(map)
    }

})


// ***************************** Bar Chart JS ***************************** //

// set up chart and assign canvas to js variables
let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

// creating bar chart
let bridgeChart = new Chart(context, {
    type: 'bar', // type of chart
    data: {
        labels: [], // chart labels
        datasets: [{
            label: 'Length in meters',
            data: [], // the data of the chart
            backgroundColor: ['red', 'blue', 'lime', 'green', 'yellow'] // color of each bar
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

// get information from the bridges object and push the data for bar chart labels and data... bridge name and span length
bridges.forEach(function(bridge){
    bridgeChart.data.labels.push(bridge.name)
    bridgeChart.data.datasets[0].data.push(bridge.span)

})
// updates the bar chart after all information needed is obtained
bridgeChart.update()

