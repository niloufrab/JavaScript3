// Exercise 3: Dog photo gallery

// Let's make a randomized dog photo gallery!

// Write a function that makes a HTTP Request to https://dog.ceo/api/breeds/image/random. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// Create an index.html file that will display your random image
// Add 2 <button> and 1 <ul> element, either in the HTML or through JavaScript
// Write two versions for the button functionality: one with XMLHttpRequest, and the other with axios
// When any one of the 2 buttons is clicked it should make a HTTP Request to https://dog.ceo/api/breeds/image/random
// After receiving the data, append to the <ul> a <li> that contains an <img> element with the dog image
// Incorporate error handling: log to the console the error message

var ul = document.createElement(ul);

const xhrButton = document.createElement('button');
const axiosButton = document.createElement('button');
xhrButton.innerText = 'xhr dog image';
axiosButton.innerText = 'axios dog image';

xhrButton.addEventListener('click', xhrGetDogPic);
axiosButton.addEventListener('click', axiosGetDOgPic);

document.body.appendChild(xhrButton);
document.body.appendChild(axiosButton);
document.body.appendChild(ul);

function xhrGetDogPic() {
  const xhr = new XMLHttpRequest();
  const url = 'https://dog.ceo/api/breeds/image/random';

  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const li = document.createElement('li');
      const img = document.createElement('img');

      ul.appendChild(li);
      li.appendChild(img);

      img.src = xhr.response.message;
    } else {
      console.log('error');
    }
  };

  xhr.open('GET', url);
  xhr.send();
}

function axiosGetDOgPic() {
  axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random',
  })
    .then((res) => {
      const li = document.createElement('li');
      const img = document.createElement('img');

      ul.appendChild(li);
      li.appendChild(img);

      img.src = res.data.message;
    })

    .catch((err) => {
      console.log(err);
    });
}
