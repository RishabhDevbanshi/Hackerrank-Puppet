const puppeteer = require('puppeteer');
const readCode = require('./modules/readCode.js')
const login = require('./modules/login');
const runCode = require('./modules/runCode');
const prompt = require('prompt-sync')({sigint : true});

console.log('\nMake sure you already wrote your code in code.txt file \n\n');

const name = prompt('Enter your Hackerrank profile username = ');
const email = prompt('Enter your Hackerrank profile email = ');
const pass = prompt('Enter your Hackerrank profile password = ');

const url = prompt('Enter link of question to submit = ');

console.log("\n\n");

const user = {
    name : name,
    email : email,
    password : pass
};

const link = url;

const path = __dirname + '/code.txt'
const code = readCode(path);

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--start-maximized'],
            defaultViewport: null,
            // slowMo : 250
        });
        const page = await browser.newPage();
        await page.goto(link);
        await login(page, user);
        await runCode(page, code);
        await page.waitForTimeout(5000);
        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();