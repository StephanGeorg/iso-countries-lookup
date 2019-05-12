import { expect } from 'chai';

import countryCodeLookup from '../src/index';

describe('Succesful returning a country code  ...', () => {
  it('Search country by name', (done) => {
    const code = countryCodeLookup(', Румыния - ');
    expect(code).to.be.a('string');
    expect(code).to.be.equal('RO');
    done();
  }).timeout(0);

  it('Search country by name', (done) => {
    const code = countryCodeLookup(', DenmarK - - - - - ');
    expect(code).to.be.a('string');
    expect(code).to.be.equal('DK');
    done();
  }).timeout(0);

  it('Search country by ISO-3166-1 ALPHA-3', (done) => {
    const code = countryCodeLookup(' , DEU');
    expect(code).to.be.a('string');
    expect(code).to.be.equal('DE');
    done();
  }).timeout(0);

  it('Search country by ISO-3166-1 ALPHA-2', (done) => {
    const code = countryCodeLookup(' , uk');
    expect(code).to.be.a('string');
    expect(code).to.be.equal('UK');
    done();
  }).timeout(0);

  it('Search country by ISO-3166-1 numeric', (done) => {
    const code = countryCodeLookup(174);
    expect(code).to.be.a('string');
    expect(code).to.be.equal('KM');
    done();
  }).timeout(0);

  it('Search country by ISO-3166-1 numeric', (done) => {
    const code = countryCodeLookup('004');
    expect(code).to.be.a('string');
    expect(code).to.be.equal('AF');
    done();
  }).timeout(0);
});

describe('Failed returning a country code  ...', () => {
  it('Search country by [Object object]', (done) => {
    const code = countryCodeLookup({});
    expect(code).to.be.equal(undefined);
    done();
  }).timeout(0);

  it('Search country by boolean', (done) => {
    const code = countryCodeLookup(true);
    expect(code).to.be.equal(undefined);
    done();
  }).timeout(0);
});
