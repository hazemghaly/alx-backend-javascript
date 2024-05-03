const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
      it('equal +ve ', () => {
        expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
      });
  
      it('equal -ve', () => {
        expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
      });
  
      it('negative and positive numbers', () => {
        expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
      });
  
      it('+ve and -ve ', () => {
        expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
      });
  
      it('0 and 0', () => {
        expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
      });
    });
  
    describe('type == "SUBTRACT"', () => {
      it('equal +ve numbers', () => {
        expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
      });
  
      it('equal +ve ', () => {
        expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
      });
  
      it('equal -ve ', () => {
        expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
      });
  
      it('-ve and +ve numbers', () => {
        expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
      });
  
      it('0 and 0', () => {
        expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
      });
    });
  
    describe('type == "DIVIDE"', () => {
      it('+ve numbers', () => {
        expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
      });
  
      it('numbers with different signs', () => {
        expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
      });
  
      it('negative numbers', () => {
        expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
      });
  
      it('equal positive numbers', () => {
        expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
      });
  
      it('equal negative numbers', () => {
        expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
      });

      it('0 and positive number', () => {
        expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
      });
  
      it('positive number and 0', () => {
        expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
      });
  
      it('positive number and number rounded down to 0', () => {
        expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
      });
  
      it('positive number and number rounded up to 0', () => {
        expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
      });
  
      it('negative number and 0', () => {
        expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
      });
  
      it('negative number and number rounded down to zero', () => {
        expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
      });
  
      it('negative number and number rounded up to zero', () => {
        expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
      });
  
      it('0 and 0', () => {
        expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
      });
    });
  });
