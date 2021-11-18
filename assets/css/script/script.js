function initPage () {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentTemEl = document.getElementById("temperature");
    const currentHumidyEl = document.getElementById("humidity");
    const currentWindSpeedEl = document.getElementById("wind-speed");
    const currentUVIEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    let searchHistory = JSON.parse(localStorage.getItem("search"));

    const APIKey = "55fb198e37bf89f7a57de76a65bdf167";

    

}