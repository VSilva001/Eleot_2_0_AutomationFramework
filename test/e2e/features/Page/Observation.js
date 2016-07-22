/**
 * Created by victorsilva on 7/19/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var observationRepo = require('../Repository/ObservationRepo.js');

var Observation = function () {

    Observation.prototype.VerifyObservationPage = function () {
        browser.manage().timeouts().implicitlyWait(4000);
        expect(observationRepo.Search_Element_ObservationTitlePage.getText()).to.eventually.equal(observationRepo.TextHeaderObservation);
    };
};

module.exports = new Observation();

