import{test,expect} from '@playwright/test';

test('basic auth test', async({request})=>{
    let username='admin';
    let password='admin';

    let credenatials=Buffer.from(`${username}:${password}`).toString('base64');
    let response=await request.get('https://the-internet.herokuapp.com/basic_auth', {
        headers:{
            Authorization:`Basic ${credenatials}`
        }
    })

    expect(response.status()).toBe(200);
    let responseBody=response.text();
    console.log(responseBody);

})