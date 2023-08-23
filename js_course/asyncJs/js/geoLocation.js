'use strict';
// navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     err=>console.error(err)
// )


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    console.log('data::::::',data);
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getPosition = function(){
    return new Promise(function(resolve,reject){
        // navigator.geolocation.getCurrentPosition(
        //     position=>resolve(position),
        //     err=>reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

// getPosition().then(pos=>console.log(pos));

const whereAmI = function (lat, lng) {
    getPosition().then(pos=>{
        const {latitude:lat,longitude:lng} = pos.coords;
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    }).then(res => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
  
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`);
        return res.json();
      })
      .then(data => renderCountry(data[1]))
      .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);