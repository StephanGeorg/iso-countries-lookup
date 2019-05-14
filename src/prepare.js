import slugify from 'slugify';

import regex from './regex';

const slugOpts = {
  replacement: '-',
  lower: true,
  remove: /[*+~.()'"!:@]/g,
};

/**
 *  Prepare input value
 *   - trim
 *   - slugify
 *   - remove non-alphabetic character from start and end
 */
export default (search = '') => {
  const input = search.toString().trim();
  const slug = slugify(input, slugOpts).replace(regex, ''); // remove non-alphabetic character from start and end
  const output = slug || input.toLowerCase().replace(regex, ''); // slug could be empty if non latin chars only
  return output;
};
