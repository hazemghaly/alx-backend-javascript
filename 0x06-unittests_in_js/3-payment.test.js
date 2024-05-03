const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it(' uses the calcNum method of Utils', () => {
    const h = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(h.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(h.calculateNumber.callCount).to.be.equal(1);
    h.calculateNumber.restore();
  });
});
