const apiUrl = "https://restcountries.com/v3.1/all";

const $countriesList = document.querySelector(".countries-list");

async function main() {
  const countries = await fetchCountries();
  const $countries = countries
    .map(function (country) {
      return renderCountryCard(country);
    })
    .join("\n");

  $countriesList.innerHTML = $countries;
}

main();

async function fetchCountries() {
  const response = await fetch(apiUrl);
  const body = await response.json();
  return body;
}

function renderCountryCard(country) {
  const countryCard = `
  <a href="/country.html?countryName=${country.name.common.toLowerCase}">
  <div class="card-country">
    <img src="${country.flags.png}" class="flag-image" />
    <div class="text-countries">
      <h4>${country.name.common}</h4>
      <div class="description-countries">
        <span><span>Population:</span> ${country.population}</span>
        <span><span>Region:</span> ${country.region}</span>
        <span><span>Capital:</span> ${country.capital?.join(", ")}</span>
      </div>
    </div>
  </div>
</a>
`;
  return countryCard;
}
