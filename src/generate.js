import uniq from 'lodash.uniq';
import isoCountries from 'i18n-iso-countries';

import countries from 'world-countries';
import historical from './data/historical.json';

import prepare from './prepare';

export default () => {
  const result = {};
  countries.forEach((country) => {
    const all = [prepare(country.name.common)];
    if (!all.includes(prepare(country.name.official))) all.push(prepare(country.name.official));
    // Get official names
    Object.keys(country.name.native).forEach((lang) => {
      const nativeCommon = prepare(country.name.native[lang].common);
      const nativeOfficial = prepare(country.name.native[lang].official);
      if (!all.includes(nativeCommon)) all.push(nativeCommon);
      if (!all.includes(nativeOfficial)) all.push(nativeOfficial);
    });
    // Get translations and alternatives
    Object.keys(country.translations).forEach((lang) => {
      const nativeCommon = prepare(country.translations[lang].common);
      const nativeOfficial = prepare(country.translations[lang].official);
      if (!all.includes(nativeCommon)) all.push(nativeCommon);
      if (!all.includes(nativeOfficial)) all.push(nativeOfficial);
    });
    result[country.cca2] = uniq(all);
  });

  // Add historical names
  historical.forEach((country) => {
    const all = [];
    Object.keys(country.translations).forEach((lang) => {
      country.translations[lang].forEach((altName) => {
        const altPrepared = prepare(altName);
        if (!all.includes(altPrepared)) all.push(altPrepared);
      });
    });
    if (all.length) result[country.cca2].push(...uniq(all));
  });

  // Exclude already added names from iso-country
  const languages = isoCountries.langs();
  // itarate through every language to find country name
  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];
    const countryNames = isoCountries.getNames(language);
    const countryCodes = Object.keys(countryNames);
    for (let h = 0; h < countryCodes.length; h++) {
      const countryCode = countryCodes[h];
      const countryName = prepare(countryNames[countryCode]);
      if (result[countryCode].includes(countryName)) {
        const found = result[countryCode].indexOf(countryName);
        result[countryCode].splice(found, 1);
      }
    }
  }
  return result;
};
