// Exercise 2: Programmer humor

// Who knew programmers could be funny?

// Write a function that makes a HTTP Request to https://xkcd.now.sh/?comic=latest

// Inside the same file write two programs: one with XMLHttpRequest, and the other with axios
// Each function should make a HTTP Request to the given endpoint: https://xkcd.now.sh/?comic=latest
// Log the received data to the console
// Render the img property into an <img> tag in the DOM
// Incorporate error handling: log to the console the error message

var img = document.createElement('img');
document.body.appendChild(img);

function xhrLoadJoke() {
  const xhr = new XMLHttpRequest();
  const url = 'https://xkcd.now.sh/?comic=latest';
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.response);
      img.src = xhr.response.img;
    } else {
      console.log('error');
    }
  };

  xhr.open('GET', url);
  xhr.send();
}

function axiosLoadJoke() {
  axios({
    method: 'get',
    url: 'https://xkcd.now.sh/?comic=latest',
  })
    .then((res) => {
      console.log(res);

      img.src = res.data.img;
    })

    .catch((err) => {
      console.error(err);
    });
}

xhrLoadJoke();
axiosLoadJoke();
