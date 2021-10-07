/* (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

       //countDown = new Date(birthday).getTime(),
       countDown = new Date(Date.UTC(2021, 8, 24, 22, 0, 0, 0)).getTime(),
       
       x = setInterval(function() {

        var date = new Date(); 
        var now =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
                                  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

        //let now = new Date().getTime(),
        distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance <= 0) {
            let buyBtn = document.getElementById("buy-nft");
            let buySection = document.getElementById("section-buy");
            let comingsoon = document.getElementById("coming-soon");

            comingsoon.classList.add('d-none');
            buyBtn.classList.remove('d-none');
            buySection.classList.remove('d-none');

            clearInterval(x);
        }
        //seconds
      }, 1000)


  /* particlesJS.load(@dom-id, @path-json, @callback (optional));
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
       
  }()); */
