const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs')
const request = require('request')





app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getstats", (req, res) => {
  const options = {
    url: "https://www.strava.com/api/v3/athletes/28827198/stats",
    headers: {
      
      "Cache-Control": "no-cache",
      "Authorization": "Bearer 775b540cb26be9752e721f151706b18633cd3943",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
    
    
  });

})


app.listen(process.env.PORT || "5000", () => {
  console.log("Server up on 5000");
});

