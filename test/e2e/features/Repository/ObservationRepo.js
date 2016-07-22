/**
 * Created by victorsilva on 7/19/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var ObservationRepo = function () {
    ObservationRepo.prototype.Search_Element_ObservationTitlePage = element(by.css('h3[ng-click="reload()"]'));
    ObservationRepo.prototype.TextHeaderObservation = 'Observations';
};
module.exports = new ObservationRepo();