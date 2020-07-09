const body = document.querySelector("body");
const main = document.querySelector('.main-content')

fetch("http://localhost:5000/getstats/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    main.innerHTML +=
      "<h4>" +
      (data.ytd_ride_totals.distance / 1609 + 303.15).toFixed() +
      " miles on your bike this year" +
      "</h4>";
    main.innerHTML += `<h4>${data.recent_ride_totals.count} recent rides in the last 4 weeks</h4>` ;
    main.innerHTML += `<h4>${(data.biggest_ride_distance / 1609).toFixed()} miles is your biggest ride so far.</h4>`
    
  })
  .catch(error => {
    console.log(error);
  });
