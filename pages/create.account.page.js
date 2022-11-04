import Page from "./page";

const createAccountBtn='.submit';
const messageError='div.mage-error';

class CreateAccountPage extends Page{

   open() {
      return super.open('/customer/account/create/');
   }

   async createAccount(input, data){
    await $(`fieldset [title="${input}"]`).setValue(data);
   }

   async clickCreateAccountBtn(){
    await $(createAccountBtn).click();
   }

   get getTextMessage(){
    return $(messageError).getText();
   }
}
export default new CreateAccountPage();