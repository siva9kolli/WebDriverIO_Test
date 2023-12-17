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
npm install wdio-jasmine-framework --save-dev
npm install @wdio/appium-service --save-dev
npm install appium-chromedriver --chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver

Execution: 
npx wdio run ./wdio.conf.js

Report:
allure serve
