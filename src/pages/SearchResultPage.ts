import { Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class SearchResultsPage extends BasePage{
     private readonly searchResults: Locator;
   
   
    // const.. of the class : init the locators
    // only one const.. can be created its a rule of TS
    constructor(page:Page)
    {
        super(page);
          this.searchResults=page.locator('div.product-layout');
           
            
    };

    // public page actions (methods)/ behavior

    async getProductSearchResultsCount():Promise<number>
    {
        return await this.searchResults.count();
    }

     async selectProduct(productName:string):Promise<void>
    {
        return await this.page.getByRole('link',{name:productName,exact:true}).first().click();
    }

   

    
}