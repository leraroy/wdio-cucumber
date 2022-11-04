import Page from "./page";

const emailField='[name="email"]';
const subscribe='[title="Subscribe"]';

class MainPage extends Page{

    open() {
        return super.open('/');
    }
    
    async clickPromoIcon(name){
        await $(`//span[contains(@class, "icon")and contains(text(), "${name}")]`).click();
    }

    async subscribe(email){
        await $(emailField).setValue(email);
        await browser.pause(2000);
        await $(subscribe).click();
    }
}
export default new MainPage();