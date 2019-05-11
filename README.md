# iso-countries-lookup

Find country codes by country names in multiple languages.

Returns the ISO-Alpha2 code for a given country name. Supports multiple languages.  

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
