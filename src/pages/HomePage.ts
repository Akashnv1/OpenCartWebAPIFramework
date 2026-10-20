import { Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { promises } from "node:dns";

export class HomePage extends BasePage{
     private readonly logoutLink: Locator;
    private readonly headers: Locator;
    private readonly search: Locator;
    private readonly searchIcon: Locator;
   
   
    // const.. of the class : init the locators
    // only one const.. can be created its a rule of TS
    constructor(page:Page)
    {
        super(page);
          this.logoutLink=page.getByRole('link',{name:'Logout'});
           this.headers=page.getByRole('heading',{level:2});
           this.search=page.getByRole('textbox',{name:'Search'});
           this.searchIcon=page.locator ('div#search button');
           
            
    };

    // public page actions (methods)/ behavior

    async getHomePageTitle():Promise<string>
    {
        return await this.page.title();
    }

     async isLogoutLinkExist():Promise<boolean>
    {
        return await this.logoutLink.isVisible();
    }

      async getHomePageHeaders():Promise<string[]>
    {
        return await this.headers.allInnerTexts();
    }

       async doSearch(searchkey:string):Promise<void>
    {
        console.log(`search key : ${searchkey}`);
        await this.search.fill(searchkey);
        await this.searchIcon.click();
    }

    
}