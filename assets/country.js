import { fetchCountry } from "./api.js";
import { rederBordes } from "./render-funtions.js";

const $name = document.querySelector("h2");
const $countryFlag = document.querySelector(".country-flag");
const $nativeName = document.querySelector(".native-name");
const $region = document.querySelector(".region");
const $population = document.querySelector(".population");
const $subRegion = document.querySelector(".sub-region");
const $capital = document.querySelector(".capital");
const $topLevelDomain = document.querySelector(".top-level-domain");
const $currencies = document.querySelector(".currencies");
const $languages = document.querySelector(".languages");
const $bordersList = document.querySelector(".border-list");

window.addEventListener("load", async function () {
  const params = new URLSearchParams(window.location.search);
  const [country] = await fetchCountry(params.get("countryName"));

  $name.innerHTML = country.name.common;
  $countryFlag.src = country.flags.png;
  $nativeName.innerHTML =
    country.name.nativeName[Object.keys(country.name.nativeName)[0]]?.common;
  $region.innerHTML = country.region;
  $population.innerHTML = country.population;
  $subRegion.innerHTML = country.subregion;
  $capital.innerHTML = country.capital;
  $topLevelDomain.innerHTML = country.tld;
  $currencies.innerHTML = country.currencies[Object.keys(country.currencies)[0]]?.name;
  $languages.innerHTML = getLanguages(country.languages);
  $bordersList.innerHTML = rederBordes(country.borders);
});

function getLanguages(lenguages) {
  return Object.keys(lenguages).map(key => lenguages[key]).join(', ')
}
