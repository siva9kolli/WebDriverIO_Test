Tools Used:
Language : JavaScript
Automation Tool : WebDriverIO
Test Framework : Jasmine
Reporting : Allure
Framework Design : Page Object Model

Environment Setup: 
Download & Install NodeJS
npm install @wdio/cli
npm install @wdio/allure-reporter --save-dev

Execution: 
npx wdio run ./wdio.conf.js

Report:
allure serve
