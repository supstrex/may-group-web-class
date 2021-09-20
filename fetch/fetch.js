fetch( "https://corona-api.com/countries/am").then(function(response){
    return response.json();
}).then(function(response){
    const am = document.querySelector("#Armenia")
    am.innerHTML = response.data.today.confirmed;
});

fetch( "https://corona-api.com/countries/ru").then(function(response){
    return response.json();
}).then(function(response){
    const am = document.querySelector("#Russia")
    am.innerHTML = response.data.today.confirmed;
});

fetch( "https://corona-api.com/countries/us").then(function(response){
    return response.json();
}).then(function(response){
    const am = document.querySelector("#USA")
    am.innerHTML = response.data.today.confirmed;
});