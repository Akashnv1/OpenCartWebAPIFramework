import { test, expect } from '@playwright/test';
import { request } from 'node:http';

let AUTH_TOKEN={Authorization:'Bearer 348796e9c5335f7fa170c5efd424ae94e010462336ee820576681a24df53163b'};

test('get user test', async({request})=>{
    let response=await request.get('https://gorest.co.in/public/v2/users',{headers:AUTH_TOKEN

    });

    //console.log(response);

    let jsonBody=await response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());

});

test('create a user test', async({request})=>{

    // while creating the user , provide the Json body
    let userData={
        name:'akash',
        email:`automation_${Date.now()}@open.com`,
        gender:'male',
        status:'active'
    }
    // Object to JSON: Serialization
    let response=await request.post('https://gorest.co.in/public/v2/users',{headers:AUTH_TOKEN,data:userData

    });
    //console.log(response);
   let jsonBody= await response.json();
   console.log(jsonBody);
    console.log(response.status());//201
    console.log(response.statusText()); //Created


});

test('Update a user test', async ({ request }) => {

    //JS Object
    let userData = {
       name: 'akash kumar',
       email: 'automation_1791917658587@open.com',
       gender: 'male',
       status: 'active'
    };

    //JS Object to JSON: Serialization
    let response = await request.put('https://gorest.co.in/public/v2/users/8665954', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());//200
    console.log(response.statusText()); //OK
});


test('Delete a user test', async ({ request }) => {

    //JS Object to JSON: Serialization
    let response = await request.delete('https://gorest.co.in/public/v2/users/8665954', {
        headers: AUTH_TOKEN,
    });

    console.log(response.status());//204
    console.log(response.statusText()); //No Content
});

