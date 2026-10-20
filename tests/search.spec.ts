import { test, expect } from '../src/fixtures/pagefixtures';
import { HomePage } from '../src/pages/HomePage';
import { SearchResultsPage } from '../src/pages/SearchResultPage';
import { CsvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async ({ loginPage }) => {
     console.log('Username from env:', process.env.USERNAME);
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});

// test('verify search results count', async({homePage,searchResultsPage})=>{
//     await homePage.doSearch('macbook');
//     expect(await searchResultsPage.getProdcutSearchResultsCount()).toBe(3);

// });

// test('verify user is able to land on the product page', async({homePage,searchResultsPage,page})=>{
//     await homePage.doSearch('macbook');
//     await searchResultsPage.selectProduct('MacBook Pro');
//     expect(await page.title()).toBe('MacBook Pro');

// });

//Data Provider
const productData = CsvHelper.readCsv('src/data/product.csv');
for (const row of productData) {
    test(` verify search results count - ${row.searchkey} - ${row.productname}`, async ({ homePage, searchResultsPage }) => {
        await homePage.doSearch(row.searchkey);
        expect(await searchResultsPage.getProductSearchResultsCount()).toBe(Number(row.resultcount));
    });

};

for (const row of productData) {
    test(`verify user is able to land on the product page - ${row.searchkey} - ${row.productname}`, async ({ homePage, searchResultsPage, page }) => {
        await homePage.doSearch(row.searchkey);
        await searchResultsPage.selectProduct(row.productname);
        expect(await page.title()).toBe(row.productname);
    });
};

