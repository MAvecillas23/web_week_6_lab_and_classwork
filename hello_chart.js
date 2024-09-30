// working with charts

// set up chart assign canvas to js variables
let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')
// creating a charts
let chart = new Chart(context, {
    type: 'bar', // type of chart
    data: {
        labels: ['Coke', 'Pepsi', 'Sprite', 'Either', 'Neither'], // chart labels
        datasets: [{
            label: 'Number of votes',
            data: [18, 14, 7, 6, 10], // the data of the chart
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