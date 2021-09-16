module.exports = (async (page, selector, text) => {
    try {
        await page.waitForSelector(selector);
        await page.type(selector, text, { delay: 10 });
    } catch (err) {
        console.log("Error in wait and type");
        console.log(err);
    }
});