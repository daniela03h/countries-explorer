//listCountries: lista de paisea a pintar
//node: Elemento HTML donde se va pintar la lista

export function renderCountryCard(listCountries, node) {
  const $countries = listCountries
    .map(function (country) {
      return countryCardTemplate(country);
    })
    .join("\n");

  node.innerHTML = $countries;
}

function countryCardTemplate(country) {
  return `
  <a href="/country.html?countryName=${country.name.common.toLowerCase()}">
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
}

export function rederBordes(borders) {
  return borders.map(border => `<a class="borders">${border}</a>`).join('\n')
 
}
