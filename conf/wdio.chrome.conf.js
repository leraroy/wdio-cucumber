const {config}=require('../wdio.conf');

const chromeConf = {
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
    }]
}
exports.config=chromeConf;