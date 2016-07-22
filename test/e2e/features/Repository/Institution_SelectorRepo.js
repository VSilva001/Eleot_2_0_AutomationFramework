/**
 * Created by victorsilva on 7/18/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var Institution_SelectorRepo = function () {

    Institution_SelectorRepo.prototype.Accomack_County_Public_Schools = 'Accomack County Public Schools';
    Institution_SelectorRepo.prototype.Michigan_Department_of_Education_MDE = 'Michigan Department of Education (MDE)';
    Institution_SelectorRepo.prototype.Arcadia_High_School = 'Arcadia High School';

    Institution_SelectorRepo.prototype.Search_Element_SearchBySchoolBox = element(by.model('searchParam'));
    Institution_SelectorRepo.prototype.SelectAll_Element_DownArrow = element.all(by.css('div.toggle'));
    Institution_SelectorRepo.prototype.SelectAll_Element_DownArrowSchooList = element.all(by.css('li[ng-repeat="item in item.children"]'));
    Institution_SelectorRepo.prototype.SelectAll_Element_InstitutionSelector = element.all(by.binding('item.name'));

    Institution_SelectorRepo.prototype.Search_Element_ErrorMessage_YoudonothaveaccesstothisInstitution = element(by.binding('error_msg'));
    Institution_SelectorRepo.prototype.ErrorMessage_YoudonothaveaccesstothisInstitution = 'You do not have access to this Institution';
};
module.exports = new Institution_SelectorRepo();
