const waitAndClick = require('./waitAndClick')

module.exports = (async (page, user) => {
    try {
        await waitAndClick(page, 'button[id=tab-3-item-1]');
        await page.type('input[placeholder="Your username or email"]', user.email, { delay: 50 });
        await page.type('input[placeholder="Your password"]', user.password, { delay: 50 });
        await page.click('button[type=submit]');
    } catch (err) {
        console.log("error in login");
        console.log(err);
    }
})