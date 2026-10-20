import{test,expect} from'@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage: LoginPage;
let homePage : HomePage;

test.beforeEach(async ({page})=>{
     loginPage =new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('pwtestbatch@open.com','pw123');
    homePage=new HomePage(page);

});

test('home page title test', async({page})=>{

    const pageTitle=await homePage.getHomePageTitle();
    console.log('home page title is : ' , pageTitle);
    expect(pageTitle).toBe('My Account');


});

test('logout link exist test', async({page})=>{

   expect(await homePage.isLogoutLinkExist()).toBeTruthy();


});

test('home page header exist test', async({page})=>{

    let allHeaders=await homePage.getHomePageHeaders();
    console.log('home page headers:' + allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect(allHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ]);

});