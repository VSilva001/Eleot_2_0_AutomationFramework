/**
 * Created by victorsilva on 7/18/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var Log_InRepo = function () {
    Log_InRepo.prototype.SearchLinkPage = 'http://qaeproveeleot.advanc-ed.org:8081/app.html#/log-in';
    Log_InRepo.prototype.UserEmailAddress = 'manisharamak@hotmail.com';
    Log_InRepo.prototype.UserPassword = 'password1';

    Log_InRepo.prototype.Select_Element_UserEmailAddress = element(by.css('#user_email'));
    Log_InRepo.prototype.Select_Element_UserPassword = element(by.css('input[name="user_password"]'));
    Log_InRepo.prototype.Select_Element_LoginButton = element(by.css('input[value="Login"]'));
    Log_InRepo.prototype.TextHeaderLogInToEleot = 'Login to eleot™';

    Log_InRepo.prototype.Get_Text_LogInToEleot = function () {
        return element(by.css('.text-center.no_border')).getText();
    };

    Log_InRepo.prototype.IdentifyDeviceCapabilities = function () {
        var CurrentDevide = '';
        var CurrentPlatform = '';
        var CurrentBrowserName = '';
        var Bool_RealMobile = '';

        browser.getCapabilities().then(function (cap) {
            CurrentDevide = cap.get('device');
            CurrentPlatform = cap.get('platform');
            CurrentBrowserName = cap.get('browserName');
            Bool_RealMobile = cap.get('realMobile');
            //console.log ('Device:' + CurrentDevide + 'and Platform:'+ CurrentPlatform + 'and BrowserName:' +CurrentBrowserName +'and RealMobile:'+Bool_RealMobile );
        });

        if (CurrentPlatform !== 'ANDROID' && CurrentPlatform !== 'MAC' && Bool_RealMobile !== 'true') {
           // console.log ('1 Device: ' + typeof (CurrentDevide) + ' and Platform: '+ typeof(CurrentPlatform) + ' and BrowserName: ' + typeof (CurrentBrowserName) +' and RealMobile: '+typeof (Bool_RealMobile ));
            browser.manage().window().maximize();
        }

        browser.waitForAngular();
    };
};
module.exports = new Log_InRepo();

//browser.actions().sendKeys(protractor.Key.ENTER).perform();