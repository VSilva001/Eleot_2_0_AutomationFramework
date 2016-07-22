exports.config = {

    //all test cases
    //specs: [
    //'e2e/features/*.feature'
    // ],

    //one that I am working on
    specs: [
        'e2e/features/View_School_Obsevations.feature',
        'e2e/features/View_District_Observations.feature',
        'e2e/features/View_ERROR_"You_Do_Not_Have_Access_To_This_Institution"_District.feature'//,
        //'e2e/features/View_DropdownList_All_Schools_Within_Fulton_School_District.feature',
        //'e2e/features/View_DropdownList_One_School_Alma_Public_Schools_District.feature'
    ],

    //BrowserStack
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    //Connection: 'keep-alive',

    //Settings for the local machine (Run "webdriver-manager start" from any directory  + calls inside capabilities)
    //Selenium
    //seleniumAddress: 'http://localhost:4444/wd/hub',

  //Appium
  //seleniumAddress: 'http://localhost:4733/wd/hub',

   // //multiple browsers at a time testing
   multiCapabilities: [

       {
           ////////////////////////////////////////////// Windows 7 FireFox 46.0  ///////////////////
           //Label
           'build': 'version 1: '+ new Date().toString(),
           'project' : 'ELEOT 2.0',
           'name': 'Test Suit',

           //User
           'browserstack.user': 'bsuser1499',
           'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
           'browserstack.local' : 'true',

           //Browser Type
           'browserName' : 'Firefox',
           'browser_version' : '46.0',
           'os' : 'Windows',
           'os_version' : '7',
           'resolution' : '1024x768',

           //Screenshot
           'browserstack.debug': 'true',

           //Video recording
           'browserstack.video': 'true'
   }
       ,
       {
           ////////////////////////////////////////////// Windows 10 IE 11.0 ///////////////////
           //Label
           'build': 'version 1: '+ new Date().toString(),
           'project' : 'ELEOT 2.0',
           'name': 'Test Suit',

           //User
           'browserstack.user': 'bsuser1499',
           'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
           'browserstack.local' : 'true',

           //Browser Type
           'browserName' : 'IE',
           'browser_version' : '11.0',
           'os' : 'Windows',
           'os_version' : '10',
           'resolution' : '1024x768',

           //Screenshot
           'browserstack.debug': 'true',

           //Video recording
           'browserstack.video': 'true'
       }

       ,

       {
           ////////////////////////////////////////////// Samsung Galaxy Note 4.4 ///////////////////
           //Label
           'build': 'version 1: '+ new Date().toString(),
           'project' : 'ELEOT 2.0',
           'name': 'Test Suit',

           //User
           'browserstack.user': 'bsuser1499',
           'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
           'browserstack.local' : 'true',

           //Browser Type
           //  'browserName' : 'android',
           //  'platform': 'Android',
           //  'device': 'Google Nexus 5' //,

           'browserName': 'android',
            'platform': 'ANDROID',
            //"device": "Samsung Galaxy S5",
           'device': 'Samsung Galaxy Note 4',
           //Real device in cloud (Samsung Galaxy Note 4, Samsung Galaxy Tab 4, Motorola Moto X 2nd Gen ,Google Nexus 6, Google Nexus 9)
           'realMobile' : 'true',

           //"Allow "Safary" to access your location while you use the app"
           'autoDismissAlerts' : 'true',
           'locationServicesAuthorized' : 'false',
           // 'acceptSslCert': 'true',

           //Screenshot
           'browserstack.debug': 'true',



           //Video recording  (ON real device CAN NOT record)
           //'browserstack.video': 'true',

           //Orientation
           'deviceOrientation': 'portrait'  //landscape
       }

   //     ,
   //
   // {
   // ////////////////////////////////////////////// iPhone 6S version 9.1 ///////////////////
   // //Label
   //     'build': 'version 1: '+ new Date().toString(),
   //     'project' : 'ELEOT 2.0',
   //     'name': 'Test Suit',
   //
   //     //User
   //     'browserstack.user': 'bsuser1499',
   //     'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
   //     'browserstack.local' : 'true',
   //
   //     //Browser Type
   //     'browserName' : 'iPhone',
   //     'platform': 'MAC',
   //    // 'device': 'iPhone 6',
   //     'device':'iPhone 6S',
   //     //beta real device (iPhone 6S, iPhone 6S Plus ,iPad Mini 3)
   //     'realMobile' : 'true',
   //
   //     //Screenshot
   //     'browserstack.debug': 'true',
   //
   //     'browserstack.safari.enablePopups': 'false',
   //     'acceptSslCert': 'true',
   //     'browserstack.safari.allowAllCookies': 'true',
   //
   //     //"Allow "Safary" to access your location while you use the app"
   //     'locationServicesAuthorized': 'false',
   //     'autoDismissAlerts' : 'true',
   //
   //
   //     //Video recording  (ON real device CAN NOT record)
   //     //'browserstack.video': 'true',
   //
   //     //Orientation
   //     'deviceOrientation': 'portrait'  //landscape
   // }


   ],

    capabilities: {
        //'browserName': 'firefox'
        'browserName': 'chrome'
    },

   // directConnect: true,

    //baseUrl: 'http://ht.digisci.co/app/search',

    framework: 'cucumber',

    cucumberOpts: {
        // require: '/Users/victorsilva/WebstormProjects/GoFan/test/e2e/features/UserStoriesSteps_Cucumber/*_steps.js',        // <string[]> (file/dir) require files before executing features
        backtrace: true,   // <boolean> show full backtrace for errors
        // compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: 'pretty', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,     // <boolean> hide step definition snippets for pending steps
        source: false,       // <boolean> hide source URIs
        // profile: [],        // <string[]> (name) specify the profile to use
        strict: true,      // <boolean> fail if there are any undefined or pending steps
        // tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000,      // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
    }
   // ,




    // onPrepare: function() {
    //     browser.ignoreSynchronization = false;
    // }
};

//
// exports.config = {
//
//     //rootElement: 'ng-app="eleot"',
//
//     // rootElement: 'html',
//
//     // specs: [
//     //   'e2e/features/*.feature'
//     // ],
//
//     specs: [
//
//         //'e2e/features/View_ERROR_"You_Do_Not_Have_Access_To_This_Institution"_District.feature'
//
//        // 'e2e/features/View_DropdownList_All_Schools_Within_Fulton_School_District.feature'//,
//         'e2e/features/View_School_Obsevations.feature'//,
//         //'e2e/features/View_District_Observations.feature',
//         //'e2e/features/View_DropdownList_One_School_Alma_Public_Schools_District.feature'
//     ],
//
//     //examinar solo un testcase trabajando
//     // specs: [
//     //   'e2e/**/GoFan_BuyEventTicket_steps.feature'
//     //   // 'e2e/features/GoFan_BuyEventTicket_steps.feature'
//     // ],
//
//     //BrowserStack
//     //seleniumAddress: 'http://hub.browserstack.com/wd/hub',
//
//     //Settings for the local machine (Run "webdriver-manager start" from any directory  + calls inside capabilities)
//     //Selenium
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//
//     //Appium
// //  seleniumAddress: 'http://localhost:4733/wd/hub',
//
// //     //multiple browsers at a time testing
// //     multiCapabilities: [
// //
// //         {
// //             ////////////////////////////////////////////// Windows 7 Chrome 51.0  ///////////////////
// //             //Label
// //             'build': 'version 1: ' + new Date().toString(),
// //             'project': 'GoFan',
// //             'name': 'Test Suit',
// //
// //             //User
// //             'browserstack.user': 'bsuser1499',
// //             'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
// //             //'browserstack.local' : 'true',
// //
// //             //Browser Type
// //             'browserName': 'Chrome',
// //             'browser_version': '51.0',
// //             'os': 'Windows',
// //             'os_version': '7',
// //             'resolution': '1920x1200' ,
// //
// //             //Screenshot
// //             'browserstack.debug': 'true',
// //
// //             //Video recording
// //             'browserstack.video': 'true'
// //
// //         }
// //         ,
// //        {
// //             ////////////////////////////////////////////// Windows 7 FireFox 37.0  ///////////////////
// //             //Label
// //             'build': 'version 1: '+ new Date().toString(),
// //             'project' : 'GoFan',
// //             'name': 'Test Suit',
// //
// //             //User
// //             'browserstack.user': 'bsuser1499',
// //             'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
// //             //'browserstack.local' : 'true',
// //
// //             //Browser Type
// //             'browser' : 'Firefox',
// //             'browser_version' : '46.0',
// //             'os' : 'Windows',
// //             'os_version' : '7',
// //             'resolution' : '1920x1200',
// //
// //             //Screenshot
// //             'browserstack.debug': 'true',
// //
// //             //Video recording
// //             'browserstack.video': 'true'
// //         }
// //
// // /*
// //         ,
// //         {
// //             ////////////////////////////////////////////// Windows 10 IE 11.0 ///////////////////
// //             //Label
// //             'build': 'version 1: '+ new Date().toString(),
// //             'project' : 'GoFan',
// //             'name': 'Test Suit',
// //
// //             //User
// //             'browserstack.user': 'bsuser1499',
// //             'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
// //             'browserstack.local' : 'true',
// //
// //             //Browser Type
// //             'browserName' : 'IE',
// //             'browser_version' : '11.0',
// //             'os' : 'Windows',
// //             'os_version' : '10',
// //             'resolution' : '1024x768' //,
// //
// //             //Screenshot
// //             //'browserstack.debug': 'true',
// //
// //             //Video recording
// //             //'browserstack.video': 'true'
// //         }
// //
// // */
// //
// //         // ,
// //         //
// //         // {
// //         //     ////////////////////////////////////////////// Samsung Galaxy Note 4.4 ///////////////////
// //         //     //Label
// //         //     'build': 'version 1: '+ new Date().toString(),
// //         //     'project' : 'GoFan',
// //         //     'name': 'Test Suit',
// //         //
// //         //     //User
// //         //     'browserstack.user': 'bsuser1499',
// //         //     'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
// //         //     'browserstack.local' : 'true',
// //         //
// //         //     //Browser Type
// //         //      'browserName' : 'android',
// //         //      'platform': 'Android',
// //         //      'device': 'Google Nexus 5' ,
// //         //
// //         //     // 'browserName': 'android',
// //         //     // 'platform': 'ANDROID',
// //         //     // "device": "Samsung Galaxy S5"//,
// //         //    // 'device': 'Samsung Galaxy Note 4'//,
// //         //     //Real device in cloud (Samsung Galaxy Note 4, Samsung Galaxy Tab 4, Motorola Moto X 2nd Gen ,Google Nexus 6, Google Nexus 9)
// //         //   //  'realMobile' : 'true',
// //         //
// //         //     //"Allow "Safary" to access your location while you use the app"
// //         //     'autoDismissAlerts' : 'true',
// //         //     'locationServicesAuthorized' : 'false',
// //         //     'acceptSslCert': 'true',
// //         //
// //         //     //Screenshot
// //         //    // 'browserstack.debug': 'true',
// //         //
// //         //
// //         //
// //         //     //Video recording  (ON real device CAN NOT record)
// //         //     //'browserstack.video': 'true',
// //         //
// //         //     //Orientation
// //         //    // 'deviceOrientation': 'portrait'  //landscape
// //         // }
// //         //
// //         //
// //         // ,
// //         //
// //         // {
// //         //     ////////////////////////////////////////////// iPhone 6S version 9.1 ///////////////////
// //         //     //Label
// //         //     'build': 'version 1: '+ new Date().toString(),
// //         //     'project' : 'GoFan',
// //         //     'name': 'Test Suit',
// //         //
// //         //     //User
// //         //     'browserstack.user': 'bsuser1499',
// //         //     'browserstack.key': 'RfH3J9pzwSRANRA1Z1ur',
// //         //     'browserstack.local' : 'true',
// //         //
// //         //     //Browser Type
// //         //     'browserName' : 'iPhone',
// //         //     'platform': 'MAC',
// //         //     'device': 'iPhone 6S Plus',
// //         //     //'device': 'iPhone 6',
// //         //     //'device':'iPhone 6S',
// //         //     //beta real device (iPhone 6S, iPhone 6S Plus ,iPad Mini 3)
// //         //    // 'realMobile' : 'true',
// //         //
// //         //     //Screenshot
// //         //      'browserstack.debug': 'true',
// //         //
// //         //     //'browserstack.safari.enablePopups': 'false',
// //         //     //'acceptSslCert': 'true',
// //         //     //'browserstack.safari.allowAllCookies': 'true',
// //         //
// //         //     //"Allow "Safary" to access your location while you use the app"
// //         //     'locationServicesAuthorized': 'false',
// //         //     'autoDismissAlerts' : 'true'//,
// //         //
// //         //
// //         //     //Video recording  (ON real device CAN NOT record)
// //         //     //'browserstack.video': 'true',
// //         //
// //         //     //Orientation
// //         //    // 'deviceOrientation': 'portrait'  //landscape
// //         // }
// //
// //
// //
// //   ],
//
//     capabilities: {
//         //'browserName': 'firefox'
//         'browserName': 'chrome'
//     },
//
//     //directConnect: true,
//
//     //baseUrl: 'http://ht.digisci.co/app/search',
//
//     framework: 'cucumber',
//
//     cucumberOpts: {
//         // require: '/Users/victorsilva/WebstormProjects/GoFan/test/e2e/features/UserStoriesSteps_Cucumber/*_steps.js',        // <string[]> (file/dir) require files before executing features
//         backtrace: true,   // <boolean> show full backtrace for errors
//         // compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
//         dryRun: false,      // <boolean> invoke formatters without executing steps
//         failFast: false,    // <boolean> abort the run on first failure
//         format: 'pretty', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
//         colors: true,       // <boolean> disable colors in formatter output
//         snippets: false,     // <boolean> hide step definition snippets for pending steps
//         source: false,       // <boolean> hide source URIs
//         // profile: [],        // <string[]> (name) specify the profile to use
//         strict: true,      // <boolean> fail if there are any undefined or pending steps
//         // tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
//         timeout: 20000,      // <number> timeout for step definitions
//         ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
//     }
//     ,
//
//     onPrepare: function() {
//         browser.ignoreSynchronization = false;
//     }//,
//
//
// };
