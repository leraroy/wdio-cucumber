import { Given, Then, When } from "@wdio/cucumber-framework";
import { getData} from "../../helper/random.data";
import CreateAccountPage from "../../pages/create.account.page";

Given('A user opens Magento website on the create account page',  ()=>{
    CreateAccountPage.open();
});

When('Enter {string} is {string}', async(input, data)=>{
    await CreateAccountPage.createAccount(input,data);
});

When('Click Create Account button', async()=>{
    await CreateAccountPage.clickCreateAccountBtn();
});

When('Enter {string} equals {string}', async(input, data)=>{
    data=await getData(data);
    await CreateAccountPage.createAccount(input,data);
});

Then('The message should be given to user as {string}', async(message)=>{
    console.log('Messsage: '+await CreateAccountPage.getTextMessage);
    expect(await CreateAccountPage.getTextMessage).toContain(message);
});

Then('The message should be given to user', async()=>{
    expect(await CreateAccountPage.getTextAlert()).toContain('Thank you for registering');
});

