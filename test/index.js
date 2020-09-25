import { expect } from 'chai';

import countryCodeLookup from '../src/index';

// import generate from '../src/generate';

/* describe('Succesful generating alternative names  ...', () => {
  it('Gen Data', (done) => {
    const output = generate('Deutschland');
    console.log(JSON.stringify(output));
    // expect(code).to.be.equal('DE');
    done();
  });
}); */

describe('Succesful returning country codes  ...', () => {
  it('Search country by name ("Deutschland")', (done) => {
    const code = countryCodeLookup('Deutschland');
    expect(code).to.be.equal('DE');
    done();
  });
  it('Search country by name ("Bundesrepublik Deutschland")', (done) => {
    const code = countryCodeLookup('Bundesrepublik Deutschland');
    expect(code).to.be.equal('DE');
    done();
  });

  it('Search country by name ("Côte d\'Ivoire")', (done) => {
    const code = countryCodeLookup('Côte d\'Ivoire');
    expect(code).to.be.equal('CI');
    done();
  });

  it('Search country by name ("republic-of-cote-d\'ivoire")', (done) => {
    const code = countryCodeLookup("republic-of-cote-d'ivoire");
    expect(code).to.be.equal('CI');
    done();
  });

  it('Search country by name ("프랑스 령 폴리네시아의")', (done) => {
    const code = countryCodeLookup('프랑스 령 폴리네시아의');
    expect(code).to.be.equal('PF');
    done();
  });
  it('Search country by name ("Ελλάδα")', (done) => {
    const code = countryCodeLookup('Ελλάδα');
    expect(code).to.be.equal('GR');
    done();
  });
  it('Search country by name ("Ελληνική Δημοκρατία")', (done) => {
    const code = countryCodeLookup('Ελληνική Δημοκρατία');
    expect(code).to.be.equal('GR');
    done();
  });
  it('Search country by name ("United states of America")', (done) => {
    const code = countryCodeLookup('United states of America');
    expect(code).to.be.equal('US');
    done();
  });
});

describe('Succesful returning a country code from dirty input ...', () => {
  it('Search country by name (", Румыния - ")', (done) => {
    const code = countryCodeLookup(', Румыния - ');
    expect(code).to.be.equal('RO');
    done();
  });

  it('Search country by name (", 444 ألمانيا - ")', (done) => {
    const code = countryCodeLookup(', 444 ألمانيا - ');
    expect(code).to.be.equal('DE');
    done();
  });

  it('Search country by name (", DenmarK - - - - - ")', (done) => {
    const code = countryCodeLookup(', DenmarK - - - - - ');
    expect(code).to.be.equal('DK');
    done();
  });

  it('Search country by ISO-3166-1 ALPHA-3 (" , DEU")', (done) => {
    const code = countryCodeLookup(' , DEU');
    expect(code).to.be.equal('DE');
    done();
  });

  it('Search country by ISO-3166-1 ALPHA-2 (" , uk")', (done) => {
    const code = countryCodeLookup(' , uk');
    expect(code).to.be.equal('UK');
    done();
  });

  it('Search country by ISO-3166-1 numeric (174)', (done) => {
    const code = countryCodeLookup(174);
    expect(code).to.be.equal('KM');
    done();
  });

  it('Search country by ISO-3166-1 numeric ("004")', (done) => {
    const code = countryCodeLookup('004');
    expect(code).to.be.equal('AF');
    done();
  });
});

describe('Successful returning a country code by historical name ...', () => {
  it('Search country by "West Germany"', (done) => {
    const code = countryCodeLookup('West Germany');
    expect(code).to.be.equal('DE');
    done();
  });

  it('Search country by "Westdeutschland"', (done) => {
    const code = countryCodeLookup('WEstdeutschland');
    expect(code).to.be.equal('DE');
    done();
  });
});

describe('Failed returning a country code  ...', () => {
  it('Search country by "Fakecountry"', (done) => {
    const code = countryCodeLookup('Fakecountry');
    expect(code).to.be.equal(undefined);
    done();
  });

  it('Search country by " - -"', (done) => {
    const code = countryCodeLookup(' - -');
    expect(code).to.be.equal(undefined);
    done();
  });

  it('Search country by [Object object]', (done) => {
    const code = countryCodeLookup({});
    expect(code).to.be.equal(undefined);
    done();
  });

  it('Search country by boolean', (done) => {
    const code = countryCodeLookup(true);
    expect(code).to.be.equal(undefined);
    done();
  });

  it('Search country by null', (done) => {
    const code = countryCodeLookup(null);
    expect(code).to.be.equal(undefined);
    done();
  });

  it('Search country by undefined', (done) => {
    const code = countryCodeLookup(undefined);
    expect(code).to.be.equal(undefined);
    done();
  });

  it('Search country by ""', (done) => {
    const code = countryCodeLookup('');
    expect(code).to.be.equal(undefined);
    done();
  });
});
