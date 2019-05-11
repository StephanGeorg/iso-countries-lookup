import countryCodeLookup from '../src/index';

const { expect } = require('chai');

describe('Initializing ...', () => {
  it('Search country by name', (done) => {
    const code = countryCodeLookup(', Румыния - ');
    console.log({ code });
    expect('it');
    done();
  }).timeout(0);

  it('Search country by name', (done) => {
    const code = countryCodeLookup(', DenmarK - - - - - ');
    console.log({ code });
    expect('it');
    done();
  }).timeout(0);

  it('Search country by iso-alpha3', (done) => {
    const code = countryCodeLookup(' , DEU');
    console.log({ code });
    expect('it');
    done();
  }).timeout(0);

  it('Search country by iso-alpha2', (done) => {
    const code = countryCodeLookup(' , uk');
    console.log({ code });
    expect('it');
    done();
  }).timeout(0);
});
