import {renderCountryCard} from "./render-funtions.js"
import {fetchCountries} from "./api.js"


const $countriesList = document.querySelector(".countries-list");
const $searchInput = document.querySelector(".search");
const $selectRegions = document.querySelector(".select-regions");

let countries = [];

$searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const query = $searchInput.value.trim().toLowerCase();
    const regionValue = $selectRegions.value.toLowerCase();
    const filteredCountries = countries.filter(function (country) {
      return (
        country.name.common.toLowerCase().includes(query) &&
        country.region.toLowerCase().includes(regionValue)
      );
    });
    renderCountryCard(filteredCountries, $countriesList);
  }
});

$selectRegions.addEventListener("change", function () {
  const query = $selectRegions.value;
  const searchValue = $searchInput.value.trim().toLowerCase();
  const filteredCountries = countries.filter(function (country) {
    return (
      country.region.toLowerCase().includes(query.toLowerCase()) &&
      country.name.common.toLowerCase().includes(searchValue)
    );
  });
  renderCountryCard(filteredCountries, $countriesList);
});

async function main() {
  countries = await fetchCountries();
  renderCountryCard(countries, $countriesList);
}

main();



