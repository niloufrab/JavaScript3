"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
function main() {
  //variables
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  const body = document.body;
  const footer = document.createElement('header');
  const divRoot = document.createElement('div');
  const header = document.createElement('header');
  const select = document.createElement('select');
  const mainContainer = document.createElement('main');
  const repoSection = document.createElement('section');
  const contributorsSection = document.createElement('section');
  const ul = document.createElement('ul');

  body.appendChild(divRoot);
  divRoot.appendChild(header);
  body.appendChild(select);
  divRoot.appendChild(mainContainer);
  mainContainer.appendChild(repoSection);
  mainContainer.appendChild(contributorsSection);
  contributorsSection.appendChild(ul);
  body.appendChild(footer);

  header.innerHTML = `<p>HYF Repositories</p>`;
  footer.innerHTML = `<p>HYF Repositories</p>`;
  contributorsSection.innerHTML = `<p>Contributors</p>`;

  //function to load repo options in header
  function getRepo() {
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        data.forEach((repo) => {
          const option = document.createElement('option');
          option.value = repo.name;
          option.textContent = repo.name;
          select.appendChild(option);
        });
      })
      .catch((err) => console.error(err));
  }

  //function get repository information
  function getRepoInfo() {
    fetch(`https://api.github.com/repos/HackYourFuture/${select.value}`)
      .then((res) => res.json())
      .then((data) => {
        const divInfo = document.createElement('div');
        repoSection.appendChild(divInfo);
        divInfo.innerHTML = `<table>
        <tr>
          <td>Repository:</td>
          <td>${data.name}</td>
        </tr>

        <tr>
        <td>Description:</td>
        <td>${data.description}</td>
      </tr>

      <tr>
          <td>Forks:</td>
          <td>${data.forks_count}</td>
        </tr>

        <tr>
        <td>Updated:</td>
        <td>${data.updated_at}</td>
      </tr>
      </table>`;
      })
      .catch((err) => {
        const errorContainer = document.createElement('div');
        body.appendChild(errorContainer);
        errorContainer.innerText = ` Network request failed `;
      });
  }

  // function to get contributors
  function getContributors() {
    fetch(
      `https://api.github.com/repos/HackYourFuture/${select.value}/contributors`,
    )
      .then((res) => res.json())
      .then((data) => {
        ul.innerHTML = '';
        data.forEach((contributor) => {
          const li = document.createElement('li');
          const div = document.createElement('div');
          const image = document.createElement('img');
          const a = document.createElement('a');
          const span = document.createElement('span');

          div.appendChild(image);
          div.appendChild(a);
          div.appendChild(span);
          li.appendChild(div);
          ul.appendChild(li);
          contributorsSection.appendChild(ul);

          image.src = contributor.avatar_url;
          a.innerText = contributor.login;
          a.href = contributor.html_url;
          span.innerText = contributor.contributions;
        });
      })
      .catch((err) => console.log(err));
  }

  getRepo();

  select.addEventListener('change', getRepoInfo);
  select.addEventListener('change', getContributors);
}

window.addEventListener('load', main);
