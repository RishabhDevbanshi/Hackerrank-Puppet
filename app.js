const puppeteer = require('puppeteer');
const readCode = require('./modules/readCode.js')
const login = require('./modules/login');
const runCode = require('./modules/runCode');


const user = {
    name: "Beluga Chan",
    email: "jedobo4736@stvbz.com",
    password: "jedobo"
};

const link = "https://www.hackerrank.com/challenges/simple-array-sum/problem";

const path = __dirname + '/code.txt'
const code = readCode(path);

const startPupper = (async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--start-maximized'],
            defaultViewport: null
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
});