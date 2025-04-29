async function fetchTrajectory(timeElapsed = 100) {
    console.log("Fetching trajectory with timeElapsed:", timeElapsed);
    document.getElementById('loadingScreen').style.display = 'flex';

    try {
        const response = await fetch(`http://127.0.0.1:5000/simulate?time_elapsed=${timeElapsed}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error("Error fetching trajectory:", error);
        alert("An error occurred while fetching the simulation data. Please try again.");
    } finally {
        document.getElementById('loadingScreen').style.display = 'none';
    }
}
