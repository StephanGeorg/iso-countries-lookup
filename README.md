# iso-countries-lookup

Find country codes by country names in multiple languages.

Returns the ISO-Alpha2 code for a given country name. Supports [multiple languages](https://www.npmjs.com/package/i18n-iso-countries#supported-languages-iso-639-1) based on [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries).  

## Installation

```
npm i iso-countries-lookup
```

## Usage

```javascript
import countryCodeLookup from 'iso-countries-lookup';

countryCodeLookup(', Румыния - '); // Return RO
countryCodeLookup(' , DEU') // DE
countryCodeLookup('uk') // UK

```
