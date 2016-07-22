"use strict";
var util = require ('util');

//to make expect to be define
var chai = require('chai');
var expect = chai.expect;

//to make equal be define
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var log_in = require('../Page/Log_In.js');
var institution_selector = require('../Page/Institution_Selector.js');
var observation = require('../Page/Observation.js');

var myStepDefinitionsWrapper = function () {

    this.Given(/^I am on ELEOT website$/, function (callback) {
        log_in.OpenEleotWebsite();
        callback();
    });

    this.Given(/^I enter my user name$/, function (callback) {
        log_in.EnterUserEmailAddress();
        callback();
    });

    this.Given(/^I enter my password$/, function (callback) {
        log_in.EnterUserPassword();
        callback();
    });

    this.Given(/^I log in$/, function (callback) {
        log_in.ClickLogInButton();
        callback();
    });

    this.Then(/^I should see Eleot Choose Institution$/, function (callback) {
        institution_selector.VerifySearchBySchoolBox();
        callback();
    });

    this.Then(/^I click on Down Arrow for "([^"]*)"$/, function (SchoolNameDistrict, callback) {
        institution_selector.ClickDownArrowToExpand(SchoolNameDistrict);
        callback();
    });

    this.Then(/^I click on "([^"]*)"$/, function (SchoolName, callback) {
        institution_selector.ClickSchoolSearched(SchoolName);
        callback();
    });

    this.Then(/^I should see school Observation$/, function (callback) {
        observation.VerifyObservationPage();
        callback();
    });

    this.Then(/^I click on District "([^"]*)"$/, function (DistrictName, callback) {
        institution_selector.ClickDistrict(DistrictName);
        callback();
    });

    this.Then(/^I should see ERROR: You do not have access to this Institution$/, function (callback) {
        institution_selector.VerifyErrorMessage_YouDoNotHaveAccessToThisInstitution();
        callback();
    });

    // this.Then(/^I click on Down Arrow for Fulton Schools\-District$/, function (callback) {
    //     var DownArrow = element.all(by.css('div.toggle'));
    //     DownArrow.get(1).click();
    //     browser.sleep(2000);
    //     callback();
    // });
    //
    // this.Then(/^I should see on dropdown list Fulton Alternative Education \- school$/, function (callback) {
    //     expect(element(by.css('label[for="modal_338263"]')).getText()).to.eventually.equal('Fulton Alternative Education - school');
    //     callback();
    // });
    //
    // this.Then(/^I click on Fulton Schools\-District$/, function (callback) {
    //     element(by.css('label[for="modal_321100"]')).click();
    //     callback();
    // });
    //
    // this.Then(/^I click on Alma Public Schools\-District$/, function (callback) {
    //     element(by.css('label[ng-click="selectItem(item)"]')).click();
    //     //element(by.css('label[for="modal_321596"]')).click();
    //     browser.waitForAngular();
    //     callback();
    // });
};
module.exports = myStepDefinitionsWrapper;