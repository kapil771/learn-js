'use strict';


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//////////////////

const renderError = function(msg){
  countriesContainer.insertAdjacentHTML('beforeend',msg);
}

const renderCountry = function(data, className){
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)} people</p>
         
          </div>
        </article>
       `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    // countriesContainer.style.opacity = 1;
}

// const getCountryData = function (country){
    
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();



//     request.addEventListener('load',function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log('data::::::',data);
//         renderCountry(data);

//         const neighbour = data.borders?.[0];
//         console.log('neighbour::',neighbour);
//         if(!neighbour) return;

//         //AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load',function(){
//             // console.log('neighbour:::::::',JSON.parse(this.responseText));
//             const data2 = JSON.parse(this.responseText)?.[0];
//             console.log('data2:::::::::',data2);
//             renderCountry(data2,'neighbour');
//         });
//     });
// }

// getCountryData('portugal');


const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log('request:::::::',request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response){            // this then become new promise itself
//         console.log('response::',response);
//         return response.json();
//     })
//     .then(function(data){
//         console.log('data::',data);
//         renderCountry(data[0]);
//     });
// }

const getJson = function(url, message){
  return fetch(url)
  .then(response => {
    // console.log(response);
    if(!response.ok){
      throw new Error(`${message} - (${response.status})`);
    }
    return response.json();
  })
}

const getCountryData = function(country){
    getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data=>{
      renderCountry(data[0]);
      
      const neighbour = data[0].borders?.[0];
      // console.log('neighbour::::',neighbour);


      if(!neighbour) throw new Error('No neigbour found!');
      // const neighbour = data[0].borders?.[0];
      // console.log('neighbour::::',neighbour);

      //Country 2
      return getJson(`https://restcountries.com/v3.1/name/${neighbour}`, 'Neighbour Country not found');
    })
    .then(data => renderCountry(data[0],'neighbour'))
    .catch(err => renderError(`${err}`))
    .finally(()=>{
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click',function(){
  getCountryData('portugal');
})
