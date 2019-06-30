window.addEventListener('load', () => {
    let lat;
    let long;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            lat = position.coords.latitude;
            long = position.coords.longitude;
        });
    }
    else{
        h1.textContent = "Location not found";
    }
});