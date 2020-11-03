function main() {
  // variables
  const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
  const container = document.createElement('div');
  const button = document.createElement('button');
  const select = document.createElement('select');
  const image = document.createElement('img');
  const body = document.body;

  body.appendChild(button);
  body.appendChild(select);
  body.appendChild(container);
  container.appendChild(image);

  button.innerText = 'Get Pokemon!';

  // fetch data and make list of pokemon names and options
  function fetchData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dataArray = data.results;

        dataArray.forEach((el) => {
          const option = document.createElement('option');
          option.innerText = el.name;
          select.appendChild(option);
        });
      })
      .catch((err) => {
        throw new Error('Something went wrong !!', err);
      });
  }

  //fetch image and add event listener
  function addPokemonToDOM() {
    fetch(`http://pokeapi.co/api/v2/pokemon/${select.value}`)
      .then((res) => res.json())
      .then((data) => {
        image.src = data.sprites.front_default;
      })
      .catch((err) => {
        throw new Error('Something went wrong !!', err);
      });
  }

  button.addEventListener('click', fetchData);
  select.addEventListener('change', addPokemonToDOM);
}

window.addEventListener('load', main);
