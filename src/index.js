import countries from 'i18n-iso-countries';
import slugify from 'slugify';

import regex from './regex';
import translations from './data/countries.json';

const slugOpts = {
  replacement: '-',
  lower: true,
};

/**
 *  Prepare input value
 *   - trim
 *   - slugify
 *   - remove non-alphabetic character from start and end
 */
export const prepare = (search = '') => {
  const input = search.toString().trim();
  const slug = slugify(input, slugOpts).replace(regex, ''); // remove non-alphabetic character from start and end
  const output = slug || input.toLowerCase().replace(regex, ''); // slug could be empty if non latin chars only
  return output;
};

export const search = (input = '', type = 'official') => {
  const languages = countries.langs();
  // itarate through every language to find country name
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
 *  Lookop for country code
 */
export default (input = '') => {
  if (typeof input !== 'string' && typeof input !== 'number') return undefined;
  let isAlpha2 = countries.toAlpha2(input);
  if (isAlpha2) return isAlpha2;
  const countryNameSearch = prepare(input, true);
  if (!countryNameSearch) return undefined;
  // check if input is already a ISO code
  isAlpha2 = countries.toAlpha2(countryNameSearch);
  if (isAlpha2) return isAlpha2;
  const result = search(countryNameSearch, 'official');
  if (result) return result;
  return search(countryNameSearch, 'translations');
};
