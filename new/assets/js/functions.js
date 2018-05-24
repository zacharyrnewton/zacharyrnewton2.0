(function () {
  fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWfGm9LosEAeQVMZsp2HgAw&key=AIzaSyAddkm8aBfH_N3w0teFG3sPokIhLO-T6oo')
  .then((resp) => resp.json())
  .then(function(data) {
    var stats = data.items[0].statistics;
    var subscriberCount = stats.subscriberCount;
    document.getElementById('YouTube').innerHTML = subscriberCount + " Subscribers";
  })
  .catch(function() {
    document.getElementById('YouTube').innerHTML = "Subscribe";
  });
})();

(function themeSet() {
  var time = new Date().getHours();
  var root = document.querySelector(':root');
  if (time >= 18 || time <= 6) {
    root.style.setProperty("--white","#000000");
    root.style.setProperty("--black","#FFFFFF");
    root.style.setProperty("--whiteTwo","#1A1A1F");
    root.style.setProperty("--whiteThree","#FFFFFF");
    root.style.setProperty("--lightOne","#0F0F12");
    root.style.setProperty("--lightTwo","#19191F");
    root.style.setProperty("--darkOne","#F5F5F7");
    root.style.setProperty("--darkTwo","#E8E8ED");
    root.style.setProperty("--secondaryLight","#8A8A99");
    root.style.setProperty("--secondaryDark","#1A1A1F");
    root.style.setProperty("--youtubeRed","#FF0000");
    root.style.setProperty("--patreonOrange","#F96854");
  }
  else {
    root.style.setProperty("--white","#FFFFFF");
    root.style.setProperty("--black","#000000");
    root.style.setProperty("--whiteTwo","#FFFFFF");
    root.style.setProperty("--whiteThree","#FFFFFF");
    root.style.setProperty("--lightOne","#F5F5F7");
    root.style.setProperty("--lightTwo","#E8E8ED");
    root.style.setProperty("--darkOne","#0F0F12");
    root.style.setProperty("--darkTwo","#19191F");
    root.style.setProperty("--secondaryLight","#8A8A99");
    root.style.setProperty("--secondaryDark","#1A1A1F");
    root.style.setProperty("--youtubeRed","#FF0000");
    root.style.setProperty("--patreonOrange","#F96854");
  }
  setInterval(themeSet, 5000)
})();
