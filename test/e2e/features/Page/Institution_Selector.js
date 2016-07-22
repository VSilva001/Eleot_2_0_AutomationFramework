/**
 * Created by victorsilva on 7/18/16.
 */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var institution_selectorRepo = require('../Repository/Institution_SelectorRepo.js');

var Institution_Selector = function () {

    Institution_Selector.prototype.VerifySearchBySchoolBox = function () {
        browser.sleep(3000);
        expect(institution_selectorRepo.Search_Element_SearchBySchoolBox.isPresent()).to.eventually.equal(true);
    };

    Institution_Selector.prototype.ClickDownArrow = function () {
        institution_selectorRepo.SelectAll_Element_DownArrow.get(0).click();
        browser.sleep(3000);
    };

    Institution_Selector.prototype.ClickDownArrowToExpand = function (SchoolNameDistrict) {

        switch (SchoolNameDistrict)
        {
            case institution_selectorRepo.Accomack_County_Public_Schools:
                this.ClickDownArrow();
                break;
        }
    };

    Institution_Selector.prototype.ClickSchoolSearched = function (SchoolName) {
        browser.sleep(1000);

        switch (SchoolName) {
            case institution_selectorRepo.Arcadia_High_School:
                institution_selectorRepo.SelectAll_Element_DownArrowSchooList.get(0).click();
                break;
        }

        browser.waitForAngular();
    };

    Institution_Selector.prototype.ClickDistrict = function (SchoolNameDistrict) {

        switch (SchoolNameDistrict)
        {
            case institution_selectorRepo.Accomack_County_Public_Schools:
                institution_selectorRepo.SelectAll_Element_InstitutionSelector.get(0).click();
                break;
            case institution_selectorRepo.Michigan_Department_of_Education_MDE:
                institution_selectorRepo.SelectAll_Element_InstitutionSelector.get(1).click();
                break;
        }
    };

    Institution_Selector.prototype.VerifyErrorMessage_YouDoNotHaveAccessToThisInstitution = function () {
        browser.sleep(5000);
        expect(institution_selectorRepo.Search_Element_ErrorMessage_YoudonothaveaccesstothisInstitution.getText()).to.eventually.equal(institution_selectorRepo.ErrorMessage_YoudonothaveaccesstothisInstitution);
    };
};
module.exports = new Institution_Selector();