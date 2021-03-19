import countries from 'i18n-iso-countries';

import prepare from './prepare';

import translations from './data/countries.json';

export const search = (input = '', type = 'official') => {
  const languages = countries.langs();
  // Iterate through every language to find country name
  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];
    const countryNames = countries.getNames(language);
    const countryCodes = Object.keys(countryNames);
    for (let h = 0; h < countryCodes.length; h++) {
      const countryCode = countryCodes[h];
      if (type === 'official') {
        const countryName = prepare(countryNames[countryCode]);
        if (input === countryName) return countryCode;
      } else {
        const countryNameTranslations = translations[countryCode];
        for (let j = 0; j < countryNameTranslations.length; j++) {
          if (countryNameTranslations[j] === input) return countryCode;
        }
      }
    }
  }
  return undefined;
};

/**
 * Check if input is country code
 * @param {string} input
 * @param {object} options
 * @returns {string|undefined}
 */
const checkCodes = (input = '', options = {}) => {
  if ((typeof input === 'number' || Number.isFinite(Number(input)))) {
    if (Number(input) > 999) return undefined;
    if (options.numeric !== false) {
      const isNumeric = countries.numericToAlpha2(input);
      if (isNumeric) return isNumeric;
      return undefined;
    }
  }
  const alpha3 = countries.alpha2ToAlpha3(input.toString().toUpperCase());
  if (alpha3) return countries.toAlpha2(alpha3);
  const alpha2 = countries.alpha3ToAlpha2(input.toUpperCase());
  if (alpha2) return alpha2;

  return undefined;
};

/**
 * Lookup country
 * @param {string} input
 * @param {object} options
 * @returns {string|undefined}
 */
const lookup = (input = '', options = {}) => {
  if (typeof input !== 'string' && typeof input !== 'number') return undefined;

  // Check if its already an iso code
  let isCode = checkCodes(input, options);
  if (isCode) return isCode;

  const countryNameSearch = prepare(input, true);
  if (!countryNameSearch) return undefined;

  // Check if iso code
  isCode = checkCodes(countryNameSearch, options);
  if (isCode) return isCode;

  // Check if wrong country code
  if (countryNameSearch.length < 4) return undefined;

  // Search code by name
  const result = search(countryNameSearch, 'official');
  if (result) return result;
  return search(countryNameSearch, 'translations');
};

export default lookup;
module.exports = lookup;
