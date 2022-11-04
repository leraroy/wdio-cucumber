import { Given, Then, When } from "@wdio/cucumber-framework";
import { randomData } from "../../helper/random.data";
import MainPage from "../../pages/main.page";

Given('A user opens Magento website on the main page', ()=>{
    MainPage.open();
});

When('Click on {string} icon', async(icon)=>{
    await MainPage.clickPromoIcon(icon);
});

When('Enter email and click subscribe',async()=>{
    await MainPage.subscribe(randomData.email);
});

Then('Page contains title {string}', async(title)=>{
    expect(await MainPage.getTextTitle).toEqual(title);
});

Then('The message should be given to user {string}', async(message)=>{
    expect(await MainPage.getTextAlert()).toContain(message);
});


