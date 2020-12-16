// Server API for hooking into Gridsome on server-side and adding data to the GraphQL layer.
// Changes here require a server restart.
// Docs: https://gridsome.org/docs/server-api/

const fs = require('fs');
const yaml = require('js-yaml');

const countryDataYml = fs.readFileSync('./src/data/countries.yml', 'utf8');
const countryData = yaml.safeLoad(countryDataYml);

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'Countries'
    })
    for (const country of countryData) {
      country.languages = Object.values(country.languages);
      let currencies = [];
      Object.values(country.currencies).forEach((currencyObj)=> {
        currencies.push(`${currencyObj.name} (${currencyObj.symbol})`);
      });
      country.currencies = currencies;
      collection.addNode(country);
    }
  })
}
