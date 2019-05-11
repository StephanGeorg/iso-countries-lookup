import countries from 'i18n-iso-countries';
import slugify from 'slugify';

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
const prepare = (search = '') => {
  const input = search.toString().trim();
  const slug = slugify(input, slugOpts);
  const output = slug || input.toLowerCase();
  return output.replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '');
};

/**
 *  Lookop for country code
 */
export default (search = '') => {
  const langs = countries.langs();
  const countryNameSearch = prepare(search);
  const isAlpha2 = countries.toAlpha2(countryNameSearch);
  if (isAlpha2) return isAlpha2;
  for (let i = 0; i < langs.length; i++) {
    const language = langs[i];
    const countryNames = countries.getNames(language);
    const countryCodes = Object.keys(countryNames);
    for (let h = 0; h < countryCodes.length; h++) {
      const countryCode = countryCodes[h];
      const countryName = prepare(countryNames[countryCode]);
      if (countryNameSearch === countryName) return countryCode;
    }
  }
  return undefined;
};
