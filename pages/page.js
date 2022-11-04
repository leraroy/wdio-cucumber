const messageError='[role="alert"]>div>div';
const title='h1>span';

export default class Page {

    open (path) {
        return browser.url(path);
    }

    async getTextAlert(){
        await browser.pause(4000);
        return await $(messageError).getText();
    }

    get getTextTitle(){
        return $(title).getText();
    }
}
