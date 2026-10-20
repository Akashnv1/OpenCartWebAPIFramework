import{test,expect} from'@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({page})=>{
     loginPage =new LoginPage(page);
    await loginPage.goToLoginPage();

});

test('login page title test', async({page})=>{
    
    const pageTitle=await loginPage.getLoginPageTitle();
    console.log('login page title is' , pageTitle);
    expect(pageTitle).toBe('Account Login');

});

test('forgot pwd link exist  test', async({page})=>{

    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();

});

test('user is able to login to app test', async({page})=>{

expect(await loginPage.doLogin('pwtestbatch@open.com','pw123'));
});