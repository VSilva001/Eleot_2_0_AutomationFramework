Run Scripts without **webstorm IDE**:
1. Open Terminal. 
2. Go into folder directory (location of project) in command line. (ELEOT_2_0) 
3. In command line run BrowserStack server by typing $ ./BrowserStackLocal RfH3J9pzwSRANRA1Z1ur -forcelocal
4. Open another Terminal.
5. Got to folder ELEOT_2_0/test
6. In command line run Testcases by typing $ protractor protractor-conf.js

Run Scripts with **webstorm IDE**:
1. Open Terminal. 
2. Go into folder directory (location of project) in command line. (ELEOT_2_0) 
3. In command line run BrowserStack server by typing $ ./BrowserStackLocal RfH3J9pzwSRANRA1Z1ur -forcelocal
4. Press "Green Arrow" toolbar or go to top menu and click "Run" --> run (submenu)

Installation:
1. Install Node.js
2. $ npm install -g protractor
3. $ webdriver-manager update
4. Install Yeoman by   $ npm install -g yo
5. $ npm install -g generator-protractor
6. Install WebStorm (IDE).
7. In your IDE bring “Terminal”.
8. in IDE terminal type $ yo protractor
   (this will get you the folder in your project “node_modules”
9. Click on "edit configurations" in you toolbar.
10.Click on the "+" plus sign.
11.Select "Node.js"
12.Add a Name: Nodejs
13.In your "edit configurations" add field for  (this will get you IDE setup to run your test cases.)
    * JavaScript:              /Users/victorsilva/WebstormProjects/Eliot_2_0/node_modules/protractor/lib/cli.js
    * Application parameter:   /Users/victorsilva/WebstormProjects/Eliot_2_0/conf.js

14.$ npm install browserstack
15. Download and copy in project root "BrowserStackLocal" https://www.browserstack.com/local-testing
    My environment is OS X (10.7 and above) (Recommended for your system)
16. Copy java driver bindings  http://www.seleniumhq.org/download/
18. install "Sourcetree" (push ,pull, fetch code from repository)  https://www.sourcetreeapp.com/  (follow instructions for the tool. you will asked to create an account)
19. click "New Repository" --> "Clone URL" 
19. add  Github repro address https://github.com/VSilva001/Eleot_2_0_AutomationFramework.git  -->path destination + name.
20. Now, Click on "Pull" to get all you code.
21. Open "webstorm" (IDE), and look where the repro project is located. You should be able to see all your project and settings, and follow "Run Scripts with **webstorm IDE**" steps.
  