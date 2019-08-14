const Page = require('../page')

const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class wdioPage extends Page {
  constructor (world) {
    super(world)
  }

  get contactUs () {return "//h1[contains(text(),'CONTACT US')]"}
  get contactUsHeader () {return "[name='contactme']"}
  get firstNameField () {return "[placeholder='Last Name']"}
  get lastNameField () {return "//input[@placeholder='Last Name']"}
  get emailField () {return "//input[@placeholder='Email Address']"}
  get commentField () {return "//textarea[@placeholder='Comments']"}
  get submitButton () {return "//div[@id='form_buttons']//input[2]"}
  get successfulInputHeader () {return "//h1[contains(text(),'Thank You for your Message!')]"}

  async openWdioPage () {
      await super.open('playground', '')
    }


   async clickOnTheHeader() {
        await this.webdriver.waitForVisible(this.contactUs, WAIT_TIME_MEDIUM)
        await this.webdriver.click(this.contactUs, WAIT_TIME_LONG)
   }

   /*async confirmContactusPage(){
        await this.webdriver.waitForVisible(this.contactUsHeader, WAIT_TIME_LONG)
   }*/

   async inputFirstName(firstName) {
        //await this.webdriver.waitForVisible(this.firstNameField, WAIT_TIME_MEDIUM)
        await this.webdriver.setValue(this.firstNameField, firstName)
   }

   async inputLastName(lastName) {
        await this.webdriver.waitForVisible(this.lastNameField, WAIT_TIME_MEDIUM)
        await this.webdriver.setValue(this.lastNameField, lastName)
   }

   async inputEmail(email){
        await this.webdriver.waitForVisible(this.emailField, WAIT_TIME_MEDIUM)
        await this.webdriver.setValue(this.emailField, email)
   }

   async inputComment(comment){
        await this.webdriver.waitForVisible(this.commentField, WAIT_TIME_MEDIUM)
        await this.webdriver.setValue(this.commentField, comment)
   }

   async clickSubmit(){
        await this.webdriver.click(this.submitButton)
   }


   inputAllInfo(firstName, lastName, email, comment){
            if(firstName){
          		return this.firstName.setValue(firstName);
          	}
          	if(lastName){
          		return this.lastName.setValue(lastName);
          	}
          	if(emailAddress){
          		return this.emailAddress.setValue(emailAddress);
          	}
          	if(comments){
          		return this.comments.setValue(comments);
          	}
          	this.submitButton.click();
          }

   async confirmSuccessfulInput(){
        await this.webdriver.waitForVisible(successfulInputHeader, WAIT_TIME_MEDIUM)
   }

   }
   module.exports = wdioPage