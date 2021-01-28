

const formatRawData = (inputData) => {

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
    Object.values(country.currencies).forEach((currencyObj)=> {
      currencies.push(`${currencyObj.name} (${currencyObj.symbol})`);
    });
    country.currencies = currencies;
    // Convert Calling codes and Top-level-domains to Arrays
    country.callingCodes = json2array(country.callingCodes);
    country.tld = json2array(country.tld);
    // Finally, push completed object to array
    results.push(country);
  }
  return results;
}

module.exports = formatRawData;