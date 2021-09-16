const waitAndClick = require('./waitAndClick');
const waitAndType = require('./waitAndType');
const submitCode = require('./submitCode');

module.exports = (async (page, code) => {
    try {

        await page.waitForSelector('input[type=checkbox]');
        await page.evaluate(() => document.querySelector('input[type=checkbox]').click());
        await page.waitForTimeout(1000);
        await waitAndType(page, 'div[class=checkBoxWrapper] textarea', code, { delay: 10 });
        await page.keyboard.down('Control');
        await page.keyboard.press('A', { delay: 100 });
        await page.keyboard.press('X', { delay: 100 });
        await page.keyboard.up('Control');
        await waitAndClick(page, '.monaco-editor');
        await page.keyboard.down('Control');
        await page.keyboard.press('A', { delay: 100 });
        await page.keyboard.press('V', { delay: 100 });
        await page.keyboard.up('Control');
        await waitAndClick(page, '.hr-monaco__run-code');
        await page.waitForSelector('.status');
        await submitCode(page);
    } catch (err) {
        console.log("Error in run question");
        console.log(err);
    }
})