const waitAndClick = require('./waitAndClick');

module.exports = (async (page) => {
    try {
        const res = await page.evaluate(() => {
            return codeStatus = document.querySelector('.status').innerText;
        })
        if (res === 'Congratulations!') {
            console.log(`${res} All test cases passed`);
            console.log("Submitting Code now ....");
            await waitAndClick(page, '.hr-monaco-submit');
            await page.waitForSelector('.compiler-message__value')
            const msg = await page.evaluate(() => {
                return document.querySelector('.compiler-message__value').innerText;
            });
            console.log(msg);
        }
        else {
            console.log(res);
            console.log("Try Again by modifying your code");
        }
    } catch (err) {
        console.log("Error in submit code");
        console.log(err);
    }
})
