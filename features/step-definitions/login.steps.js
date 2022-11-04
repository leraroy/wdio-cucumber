import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pages/login.page';


Given('A user opens Magento website on the login page',()=>{
    LoginPage.open(); 
});

When('Login with email: {string} and password: {string}',async(email, password)=>{
   await LoginPage.login(email,password); 
});

When('Login with {string} and {string}',async(email, password)=>{
   await LoginPage.login(email,password); 
});

When('Click on create button', async()=>{
   await LoginPage.clickCreateAccount();
})

Then('See a message saying {string}',async(message)=>{
   console.log("Text error: "+await LoginPage.getTextAlert());
   expect(await LoginPage.getTextAlert()).toContain(message);
});

Then('Page contain title {string}',async (message)=>{
     expect(await LoginPage.getTextTitle).toEqual(message);
});
