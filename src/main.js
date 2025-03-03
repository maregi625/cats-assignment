document.addEventListener("DOMContentLoaded", function () {
document.getElementById("factbtn").addEventListener('click', getCatFacts);
document.getElementById("photobtn").addEventListener('click', getCatImages);
const outputValue = document.getElementById('outputValue');
document.getElementById('fact-count')
document.getElementById('photo-count')

   });

    const factcount= document.getElementById('fact-count');
    const imagecount= document.getElementById('photo-count');
    const outputValue = document.getElementById('outputValue');

    const errormessage =document.getElementById('error-message');
    function showError(message){
      errormessage.innerHTML = message || 'You are offline. Please check your internet connection and try again.';
      errormessage.style.display = 'block';
      setTimeout(() => {
        errormessage.style.display = 'none';
      },
      5000
      );  

    }

    async function getCatFacts() {
      outputValue.innerHTML = '';
      let userValue = (factcount.value) || 1;
      let limit= Math.min(userValue, 50);

      if (!navigator.onLine) {
        showError();
        return;
      }
      try {
        const response = await fetch(`https://meowfacts.herokuapp.com/?count=${limit}`);
      const data = await response.json();
      console.log(data);
      let list = `<ol>`;
      data.data.forEach(fact => {
        list += `<li>${fact}</li>`;
      });
      list += `</ol>`;
      outputValue.style.display = 'flex';
      outputValue.innerHTML = list;

      } catch (error) {
        console.error('Error fetching cat facts:', error);

      } 



    }

    async function getCatImages() { 
      outputValue.innerHTML = '';
      let userValue = (imagecount.value) || 1;
      let limit= Math.min(userValue, 10);
      if (!navigator.onLine) {
        showError();
        return;
      }
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
        const data = await response.json();
        console.log(data);
      let images = `<div class="cat-images">`;
      data.forEach(img => {
        images += `<img class="cat-image" src="${img.url}" alt="Cat">`;
      });
      images += `</div>`;
      outputValue.style.display = 'flex';
      outputValue.innerHTML = images;
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    }


























// document.addEventListener("DOMContentLoaded", function () {
//   populateSelectOptions("fact-count", 50);
//   populateSelectOptions("image-count", 10);
// });

// function populateSelectOptions(id, max) {
//   const select = document.getElementById(id);
//   for (let i = 1; i <= max; i++) {
//       const option = document.createElement("option");
//       option.value = i;
//       option.textContent = i;
//       select.appendChild(option);
//   }
// }

// async function getCatFacts() {
//   const count = document.getElementById('fact-count').value;
//   try {
//       const response = await fetch(https://meowfacts.herokuapp.com/?count=${count});
//       const data = await response.json();
//       document.getElementById('cat-facts').innerHTML = data.data.map(fact => <li>${fact}</li>).join('');
//   } catch (error) {
//       console.error('Error fetching cat facts:', error);
//   }
// }

// async function getCatImages() {
//   const count = document.getElementById('image-count').value;
//   try {
//       const response = await fetch(https://api.thecatapi.com/v1/images/search?limit=${count});
//       const data = await response.json();
//       document.getElementById('cat-images').innerHTML = data.map(img => <img class="cat-image" src="${img.url}" alt="Cat">).join('');
//   } catch (error) {
//       console.error('Error fetching cat images:', error);
//     }


