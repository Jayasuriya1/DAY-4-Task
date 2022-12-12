//Print the Names, Region, Subregion and Populations of all countries

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send(null);
request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);
  for (var country of countries) {
    const {
      name: { common },
      region,
      subregion,
      population,
    } = country;
    console.log(common, region, subregion, population);
  }
};