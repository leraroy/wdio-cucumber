const {config}=require ('../wdio.conf');

const chromeHeadlessConf={
    ...config,
    services:['chromedriver'],
    capabilities:[{
        maxInstances: 5,
        browserName: 'chrome',
        'cjson:metadata':{
                browser: {
                    name: 'chrome',
                    version: '107'
                },
                device: 'PC',
                platform: {
                    name: 'Windows',
                    version: '10'
                },
            },
            'goog:chromeOptions': {
                args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
            },   
    }]
}
exports.config = chromeHeadlessConf;