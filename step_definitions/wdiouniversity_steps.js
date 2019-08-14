const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I click on the Contact us link', {timeout: 5000}, async function (){
    await this.wdioPage.openWdioPage()
    await this.wdioPage.clickOnTheHeader()
})

Then('I should be presented with the Contact us page', {timeout: 10000}, async function(){
    await this.wdioPage.confirmContactusPage()
})

When('I input the info for {string} and click on the Submit button', {timeout: 5000}, async function(userId){
    const user = TestData.getUser(userId)
    this.logger.debug(`user = ${JSON.stringify(user)}`)
    await this.wdioPage.inputFirstName(user.firstName)
    await this.wdioPage.inputLastName(user.lastName)
    await this.wdioPage.inputEmail(user.email)
    await this.wdioPage.inputComment(user.comment)
    await this.wdioPage.clickSubmit()
})

Then('I should should be presented with a message', {timeout: 5000}, async function(){
    await this.wdioPage.confirmSuccessfulInput()
})