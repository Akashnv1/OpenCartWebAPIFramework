import { test, expect } from '@playwright/test';
import {JSONPath} from 'jsonpath-plus';

let BASE_URL='https://fakestoreapi.com/products';
let headers={
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

test('GET -- get all products', async({request})=>{
   let response= await request.get(BASE_URL, {headers});
   let data=   await response.json();
   console.log(data);
console.log("=============");

// Get all ids

let ids=JSONPath({path: '$[*].id', json: data});

console.log(ids);

// get all the rates
let rates=JSONPath({path: '$[*].rating.rate', json: data});

console.log(rates);

// get all the titles where category=jewelery
let titles=JSONPath({path: '$[?(@.category=="jewelery")].title', json: data});

console.log(titles);

});