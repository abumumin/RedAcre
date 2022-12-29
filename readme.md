# Tools, Framework and Liberaries Used

>Framework: **Cypress** 

>Any IDE that support JAVASCRIPT can be used, VS code is light weight and easy to use. Thus it is recommeneded.

> Framework Version: **9.7.0** 

> Supporting Language: **Javascript**

> Supporting Libraries: 
* Node.js (12 or Higher) 
* Cypress Fill Command [https://www.npmjs.com/package/cypress-fill-command#installation]
* cypress-cucumber-preprocessor [https://www.npmjs.com/package/cypress-cucumber-preprocessor#installation]
****
# Local Setup

After cloning this repo to the local machine, open a terminal inside the project then execute to install from the <package.json file>.

Running tests locally

* Use npx cypress open or node_modules/.bin/cypress open to open the test runner and execute a visual regression locally. 
* Use npx cypress run or node_modules/.bin/cypress run to run the test in headless mode *Use npx cypress run -b <browser_type> --headless to run in headless mode with a specific browser
* Use npx cypress run --spec to run a specific test
****

# Supported Browsers

The following are the supported browsers as of this version; 9.7.0

* Chrome
* Edge 
* Electron (default) 
* Firefox
****

# Getting Started

Clone the code from thr repository address with 'git clone https://github.com/abumumin/RedAcre.git'
Navigate into the repository after successfully cloning it and and launch the IDE.
Run 'npm i' or 'npm install' to install all the dependencies. you can equally run 'npm ci' if you want to run a clean install from the package-lock.json instead. The easier option is 'npm install'.
Open terminal and run the code with 'npm run headless-chrome' to run the script.
****

# Script Focus: What Does The Script Do?

The following activities were carried out on the Script

* Launch web url 
* Input departure and arrival locations
* Insert date
* Find Flight
* Find flexible date
* Find the first availabe flight