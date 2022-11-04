# wdio-cucumber-html-report

This repo contains tests written with [WebdriverIO](https://webdriver.io/) and [Cucucmber](https://cucumber.io/) for "magento.softwaretestingboard.com" website.

To manage project customized config files are used so user is able to run project without making any change in the code

Configuration files are located here:

[Chrome](https://github.com/leraroy/wdio-cucumber-html-report/blob/master/conf/wdio.chrome.conf.js) <br>
[Chrome headless](https://github.com/leraroy/wdio-cucumber-html-report/blob/master/conf/wdio.chromeHeadless.conf.js) <br>

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 16.X )
- Install Visual Studio Code
- Clone and checkout the github project 
- Go to the terminal and execute "npm install" command

### Command to run test 
```
npm run test
```
### Command to run test in Chrome browser using wdio.chrome.conf file
 ```
 npm run test:chrome
 ```
 ### Command to run test in Chrome browser using wdio.chromeHeadless file
 ```
 npm run test:chrome:headless
 ```
