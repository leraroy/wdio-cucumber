import Page from './page';

const emailField='#email';
const passwordField='[name="login[password]"]';
const loginBtn='#send2[class*="primary"]';
const createAccountBtn='a[class*="create"]';

class LoginPage extends Page {

    open(){
      return super.open('/customer/account/login/');
    }
    
    async login(email, password){
        await $(emailField).setValue(email);
        await $(passwordField).setValue(password);
        await $(loginBtn).click();
    }

    async clickCreateAccount(){
        await $(createAccountBtn).click()
    }
}

export default new LoginPage();
