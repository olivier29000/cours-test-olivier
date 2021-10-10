

  fetch('https://baconipsum.com/api/?type=meat-and-filler').then(function(response) {
    return response.json();
  }).then(function(data) {
    document.getElementById('titre').innerHTML = data[0].substring(0,20);
    document.getElementById('description').innerHTML = data[1];
    document.getElementById('details').innerHTML = data[2].substring(0,data[0].length / 2);
    document.getElementById('prix').innerHTML = (Math.floor(Math.random() * 100) + 10) * 1000;
    document.getElementById('nbChambres').innerHTML = (Math.floor(Math.random() * 10) + 1);
    document.getElementById('nbSalleDeBain').innerHTML = (Math.floor(Math.random() * 4) + 1);
    document.getElementById('nbEtages').innerHTML = (Math.floor(Math.random() * 5));
  }).catch(function() {
    console.log("Booo");
  });


  fetch('https://random-data-api.com/api/address/random_address').then(function(response) {
      console.log(response)
    return response.json();
  }).then(function(data) {
    document.getElementById('ville').innerHTML = data.city;
    document.getElementById('pays').innerHTML = data.country;
    document.getElementById('adresse').innerHTML = data.street_name;
  }).catch(function(err) {
    console.log(err);
  });

  
  
  fetch('https://source.unsplash.com/random/?house').then(function(response) {
    return response;
  }).then(function(data) {
    document.getElementById('imageMaison').src = data.url;
  }).catch(function() {
  });

  fetch('https://source.unsplash.com/random/?bedroom').then(function(response) {
    return response;
  }).then(function(data) {
    document.getElementById('imageChambre').src = data.url;
  }).catch(function() {
  });

  fetch('https://source.unsplash.com/random/?garden,house,plant').then(function(response) {
    return response;
  }).then(function(data) {
    document.getElementById('imageJardin').src = data.url;
  }).catch(function() {
  });

  fetch('https://source.unsplash.com/random/?house,living-room').then(function(response) {
    return response;
  }).then(function(data) {
    document.getElementById('imageSalon').src = data.url;
  }).catch(function() {
  });
