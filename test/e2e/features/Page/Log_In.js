'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var log_InRepo = require('../Repository/Log_InRepo.js');

var Log_In = function () {

    Log_In.prototype.EnterUserEmailAddress = function () {
        log_InRepo.Select_Element_UserEmailAddress.click();
        log_InRepo.Select_Element_UserEmailAddress.sendKeys(log_InRepo.UserEmailAddress);
    };

    Log_In.prototype.EnterUserPassword = function () {
        log_InRepo.Select_Element_UserPassword.click();
        log_InRepo.Select_Element_UserPassword.sendKeys(log_InRepo.UserPassword);
    };

    Log_In.prototype.ClickLogInButton = function () {
        log_InRepo.Select_Element_LoginButton.click();
        browser.waitForAngular();
    };

    Log_In.prototype.OpenEleotWebsite  = function () {
        browser.sleep(3000);
        browser.get(log_InRepo.SearchLinkPage);
        log_InRepo.IdentifyDeviceCapabilities();
        //browser.driver.navigate().refresh();
        browser.sleep(3000);
        this.VerifySignInPage();
    };

    Log_In.prototype.VerifySignInPage = function () {
        expect(log_InRepo.Get_Text_LogInToEleot()).to.eventually.equal(log_InRepo.TextHeaderLogInToEleot);
    };
};
module.exports = new Log_In();

//browser.ignoreSynchronization = true;