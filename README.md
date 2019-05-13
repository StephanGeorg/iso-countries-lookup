# iso-countries-lookup [![npm version](https://badge.fury.io/js/iso-countries-lookup.svg)](https://badge.fury.io/js/iso-countries-lookup)

Find country codes (ISO 3166-1 alpha-2) by country names in multiple languages.

Returns the ISO 3166-1 alpha-2 country code for a given country name. Supports [multiple languages](https://www.npmjs.com/package/i18n-iso-countries#supported-languages-iso-639-1) based on [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries)
and also alternative names based on [world countries data](https://github.com/mledoze/countries).  

## Installation

```
npm i iso-countries-lookup
```

## Usage

```javascript
import countryCodeLookup from 'iso-countries-lookup';

// Finding ISO Code from official names (fastest)
countryCodeLookup('Germany'); // 'DE'
countryCodeLookup('United States of America'); // 'US'
countryCodeLookup('اليونان'); // 'GR'
countryCodeLookup('罗马尼亚'); // 'RO'

// Findinding ISO codes from alternative names
countryCodeLookup('Bundesrepublik Deutschland'); // 'DE'
countryCodeLookup('United states'); // US
countryCodeLookup('Iran'); // 'IR'

// Finding ISO codes from dirty strings
countryCodeLookup(', Румыния - '); // Return RO
countryCodeLookup(' , DEU') // DE
countryCodeLookup('uk') // UK

```

## Returns

The [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of a country or `undefined`.
