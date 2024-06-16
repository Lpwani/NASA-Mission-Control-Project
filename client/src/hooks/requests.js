const API_URL = 'http://localhost:8000';

// Load planets and return as JSON.
async function httpGetPlanets() {
    const response = await fetch(`${API_URL}/planets`);
    return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
    // TODO: Once Api is ready
    // Load launches, sort by flight number, and return as JSON.
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
    // TODO: Once Api is ready
    // Submit given launch data to launch system.
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
    // TODO: Once Api is ready
    // Delete launch with given ID
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};