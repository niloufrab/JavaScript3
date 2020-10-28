'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
// window.onload = () => {
//   // get all repositories then create options inside select HTML tag
//   axios({
//     method: 'GET',
//     url: 'placeholders.json',
//   })
//     .then((res) => {
//       // store the repositories.
//       const repositories = res.data;

//       repositories.forEach((element, counter) => {
//         const option = document.createElement('option');
//         option.value = counter;
//         option.textContent = 'element.name';
//         select.appendChild(option);
//       });
//     })
//     .catch((err) => console.error(err));
// };

// function getRepoList() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'placeholders.json');
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       const repo = JSON.parse(xhr.responseText);
//       console.log(JSON.parse(xhr.responseText));
//     }

//     repo.forEach((repo) => {
//       const option = document.createElement('option');
//       option.innerText = repo.name;
//       selectRepo.appendChild(option);
//     });
//   };

//   xhr.send();
// }

// getRepoList();

const placeholderRepo = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

// get all repositories then create options inside select HTML tag
//counter work as index of array here

const select = document.getElementById('select');
let option;
const getData = (repositories) => {
  repositories.forEach((repo, counter) => {
    option = document.createElement('option');
    option.value = counter;
    option.textContent = repo.name;
    select.appendChild(option);
  });
};

getData(placeholderRepo);

// show details in main container

const ShowData = (e) => {
  const repoName = document.querySelector('.repoName');
  const repoDescription = document.querySelector('.repoDescription');
  const forks = document.querySelector('.forks');
  const repoUpdated = document.querySelector('.repoUpdated');

  repoName.lastElementChild.textContent = placeholderRepo[e.target.value].name;
  repoDescription.lastElementChild.textContent =
    placeholderRepo[e.target.value].description;
  forks.lastElementChild.textContent = placeholderRepo[e.target.value].forks;
  repoUpdated.lastElementChild.textContent =
    placeholderRepo[e.target.value].updated;

  console.log(repoName);
};

select.addEventListener('change', ShowData);
