

const groupCountries = (countries, groupBy) => {
  if (!groupBy) return countries;
  const regions = {};
  countries.forEach(country => {
    if (!regions[country[groupBy]]) regions[country[groupBy]] = [];
    regions[country[groupBy]].push(country);
  });
  return regions;
};


module.exports = groupCountries;