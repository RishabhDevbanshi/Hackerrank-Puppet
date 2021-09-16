module.exports = (async (page, selector) => {
    try {
        await page.waitForSelector(selector);
        await page.click(selector);
    } catch (err) {
        console.log("Error in wait and click");
        console.log(err)
    }
});