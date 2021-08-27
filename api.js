fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => loadData(data));

const loadData = (country) => {
  const countries = document.getElementById("countries");
  country.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("styles");
    div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.population}</p>
    <button onclick="more('${country.name}')">Details</button>
    `;
    countries.appendChild(div);
  });
};

const more = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => moreAdd(data));
};
const moreAdd = (country) => {
  //   console.log(country[0]);
  const more = document.getElementById("more");
  more.innerHTML = `
  <h3>${country[0].name}</h3>
  <img src="${country[0].flag}"/>
  `;
};
