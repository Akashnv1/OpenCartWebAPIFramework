import{test,expect} from '@playwright/test';

test('Network monitoring test', async({page})=>
{
page.on('request',async req=>
{
    console.log('outgoing request :' + req.method() + ' ' +req.url());
}
)
page.on('response',async res=>
{
    console.log('incoming response :' + res.status() + ' ' +res.url());
}
)
await page.goto('https://health.policybazaar.com/');
}
)

