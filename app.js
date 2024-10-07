
var userInput = prompt("Hello👋!  Enter Your Current Weather ⛅ : :\n\nCloudy\nRainy\nHot\nCold\nFall");


if (userInput === "Cloudy") {
  document.write(` 
     <div class="con" style="background-image: url(./assets/images/background.avif);">
     <h2 style="color: white;">Weather Information Service</h2>
    <br> 
    <div class="card">
 <img src="./assets/images/cloudy.jpg" alt="">>
        <div class="container">
          <h3>It's  CLOUDY Today! ☁️</h3>
          <p>Go for a walk, or bike ride; the cooler temperatures can make for a pleasant outing☁️🌧.</p>
        </div>
      </div>
      </div>`)
}

else if (userInput === "Hot") {
  document.write(` 
     <div class="con" style="background-image: url(./assets/images/background.avif);">
    <h2 style="color: white;">Weather Information sService</h2>
    <br> 
    <div class="card">
  <img src="./assets/images/hot.jpg" alt="">
        <div class="container">
          <h3>It's HOT Today! 🥵</h3>
          <p>Avoid midday sun and Wear sunscreen. Stay hydrated and cool indoors.🌞🏖️</p>
        </div>
      </div>
      </div>`)
}


else if (userInput === "Cold") {
  document.write(` 
     <div class="con" style="background-image: url(./assets/images/background.avif);">
      <h2 style="color: black;">Weather Information sService</h2>
    <br>
    <div class="card">
  <img src="./assets/images/cold.jpg" alt="">
        <div class="container">
          <h3>It's COLD Today! 🥶</h3>
          <p>Protect your skin, moisturize. Stay active to keep warm and layer up!❄️☃️</p>
        </div>
      </div>
      </div>`)
}

else if (userInput === "Rainy") {
  document.write(` 
  <div class="con" style="background-image: url(./assets/images/background.avif);">
<h2 >Weather Information Service</h2>
    <br>
    <div class="card">
  <img src="./assets/images/rainy.jpg" alt="">
        <div class="container">
          <h3 style= "color: white;">It's RAINY Today! 🌧️</h3>
          <p style= "color: white;">Embrace the coziness of rainy days; it’s a great time for reflection and relaxation.⛈️☔</p>
        </div>
      </div>
      </div>
      `)
}

else if (userInput === "Fall") {
  document.write(` 
     <div class="con" style="background-image: url(./assets/images/background.avif);">
    <h2 style="color: black;">Weather Information Service</h2>
    <br> 
    <div class="card">
    <img src="./assets/images/fall.jpg" alt="">
        <div class="container">
          <h3 style="color: black;">It's FALL Today! 🍂</h3>
          <p style="color: black;">Perfect time for boots and scarves. Layer up for cozy comfort🍁🧣</p>
        </div>
      </div>
      </div>`)
} else {
  document.write(` 
    <div class="con" style="background-image: url(./assets/images/background.avif);">
   <h2 style="color: white;">Weather Information Service</h2>
   <br> 
   <div class="card">
 <img src="https://i.pinimg.com/originals/a3/e9/ff/a3e9ffb293d369deb48f22a38f35250b.gif" alt="" >
       <div class="container">
         <h3 style="color: white;"> Oh! 🥺</h3>
         <p style="color: white;">Wrong Input🥺! Please provide correct Input😊.</p>
       </div>
     </div>
     </div>`)
}