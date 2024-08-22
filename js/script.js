document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('covidPieChart').getContext('2d');
    const toggleChartButton = document.getElementById('toggleChartButton');
    const covidPieChart = document.getElementById('covidPieChart');

    const data = {
        labels: ['Nueva York, EE.UU.', 'São Paulo, Brasil', 'Mumbai, India', 'Londres, Reino Unido', 'Lima, Perú'],
        datasets: [{
            label: 'Porcentaje de Personas Infectadas',
            data: [10, 25, 8, 17, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Porcentaje de Personas Infectadas por Ciudad'
                }
            }
        },
    };

    const myChart = new Chart(ctx, config);

    toggleChartButton.addEventListener('click', function() {
        if (covidPieChart.style.display === 'none') {
            covidPieChart.style.display = 'block';
        } else {
            covidPieChart.style.display = 'none';
        }
    });
});