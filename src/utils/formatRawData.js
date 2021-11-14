
const search = (country, searchTerm) => {
  const check = (text) => text.toString().trim().toLowerCase().includes(searchTerm.toLowerCase());
  if (check(country.name.common)) return true;
  if (check(country.name.official)) return true;
  if (check(country.capital)) return true;
  if (check(country.area)) return true;
  if (check(country.altSpellings)) return true;
  if (check(country.callingCodes)) return true;
  if (check(country.cca2)) return true;
  if (check(country.cca3)) return true;
  if (check(country.ccn3)) return true;
  if (check(country.cioc)) return true;
  const checkTranslations = Object.keys(country.translations).some((translation) => {
    const obj = country.translations[translation];
    return (obj.official.includes(searchTerm) || obj.common.includes(searchTerm));
  });
  if (checkTranslations) return true;
  return false;
};

const filter = (country, filterOption) => {
  if (filterOption === 'All') return true;
  if (filterOption === 'Countries Only' && country.independent) return true;
  if (filterOption === 'Territories Only' && !country.independent) return true;
  return false;
};

const formatRawData = (inputData, searchTerm, filterBy) => {

  const json2array = (json) => {
    const result = [];
    Object.keys(json).forEach((key) => result.push(json[key]));
    return result;
  };

  let results = [];
  for (const country of inputData) {
    // Format Language data, for GraphQL
    country.languages = Object.values(country.languages);
    let currencies = [];
    // Format Currency data, for GraphQL
    Object.values(country.currencies).forEach((currencyObj) => {
      currencies.push(`${currencyObj.name} (${currencyObj.symbol})`);
    });
    country.currencies = currencies;
    // Convert Calling codes and Top-level-domains to Arrays
    country.callingCodes = json2array(country.callingCodes);
    country.tld = json2array(country.tld);
    // Finally, push completed object to array
    if (
      (!searchTerm || search(country, searchTerm.trim()))
      && (!filterBy || filter(country, filterBy))
    ) {
      results.push(country);
    }
  }
  return results;
}

module.exports = formatRawData;