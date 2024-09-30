
let metroAreaCenterCoordinates = [44.96, -93.2] // map coordinates
let zoomLevel = 9 // zoom level of world =1, 20=city blocks

// create map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// sets tile layer... allows for the actual to be displayed on the webpage
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
// working with college objects and creating markers with them
campuses.forEach(function(collegeCampus){
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    // draw a marker
    L.marker(collegeCampus.coordinates)
        .bindPopup(markerText)
        .addTo(map)
})

// // MCTC coordinates
// let mctcCoordinates = [44.9724, -93.2844]
// // creates a marker that is added to map
// // adding .bindPopup() allows for text to be displayed when a marker is clicked on
// // you can also add anchor tags to link websites as shown
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)
//
// // st paul college coordinates and marker
// let stPaulCoordinates = [44.9483, -93.1099]
// let stPaulMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)
//
// // normandale college
// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale College<br><a href="https://normandale.edu">Website</a>')
//     .addTo(map)

// adds circle around the TC metro area
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2
})
    .bindPopup('Twin Cities')
    .addTo(map)

