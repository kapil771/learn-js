let bandInfo;

// Put your code here
let band = {
 name: 'Music Industry',
 country: 'India',
 formed:'1990',
 genre: 'Pop singing',
 albums: [
          {
            name:'Dil chahta hai',
            released:2000
          },
          {
            name:'Om shanti om',
            released:2008
          }
         ]
};

bandInfo = `${band['name']} is group of musical band from ${band['country']} active since ${band['formed']}. this group is famous for ${band.genre}. Some famous albums are following:`;

for(album of band.albums){
   bandInfo+=` ${album.name} released in ${album.released},`
}

// Don't edit the code below here
const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    