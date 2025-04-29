async function plotTrajectory() {
    console.log("Starting plotTrajectory...");
    const timeElapsedInput = document.getElementById('timeElapsedInput').value;
    const timeElapsed = timeElapsedInput ? parseFloat(timeElapsedInput) : 100;

    const data = await fetchTrajectory(timeElapsed);
    if (!data) {
        console.log("No data received. Aborting trajectory plot.");
        return;
    }

    console.log("Data for trajectory:", data);

    const x = data.map(point => point.x.toFixed(2));
    const y = data.map(point => point.y.toFixed(2));

    const ctx = document.getElementById('trajectoryChart').getContext('2d');

    if (window.currentChart) {
        window.currentChart.destroy();
    }

    window.currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x,
            datasets: [{
                label: 'Vehicle Trajectory',
                data: y,
                borderColor: '#31c931',
                backgroundColor: 'rgba(216, 180, 254, 0.2)',
                borderWidth: 2,
                pointRadius: 2,
                pointBackgroundColor: '#31c931'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#31c931'
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'X Position (m)',
                        color: '#31c931'
                    },
                    ticks: {
                        color: '#31c931'
                    },
                    grid: {
                        color: '#2c2c3e'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Y Position (m)',
                        color: '#31c931'
                    },
                    ticks: {
                        color: '#31c931'
                    },
                    grid: {
                        color: '#2c2c3e'
                    }
                }
            }
        }
    });

    console.log("Trajectory plotted successfully.");
}
