import{test , expect} from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/csvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';


test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();

});

test('login page title test', async({loginPage})=>{
    
    const pageTitle=await loginPage.getLoginPageTitle();
    console.log('login page title is' , pageTitle);
    expect(pageTitle).toBe('Account Login');

});

test('forgot pwd link exist  test', async({loginPage})=>{

    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();

});

test('user is able to login to app test', async({loginPage})=>{

expect(await loginPage.doLogin('pwtestbatch@open.com','pw123'));

});
// DD_1 :sequence mode--only 1 test is running with the test data one by one using testData from fixture
test('login to test using wrong credentials with data driven test', async({loginPage,testData})=>{
    for(let row of testData)
        await loginPage.doLogin(row.username,row.password);

expect(await loginPage.isInvalidLoginErrorDisplay()).toBeTruthy();

});

// DD_2 without fixtures, parallel mode ,read csv data directly and loop the test method row wise..
let testData=CsvHelper.readCsv('src/data/loginData.csv');
for(let row of testData){


test(`lnvalid login test with - ${row.username} - ${row.password}` , async({loginPage})=>{
        await loginPage.doLogin(row.username,row.password);

expect(await loginPage.isInvalidLoginErrorDisplay()).toBeTruthy();

});
}

let loginTestData=ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx','login');
for(let row of testData){

test(`lnvalid login test with excel data - ${row.username} - ${row.password}` , async({loginPage})=>{
        await loginPage.doLogin(row.username,row.password);

expect(await loginPage.isInvalidLoginErrorDisplay()).toBeTruthy();



});

}
