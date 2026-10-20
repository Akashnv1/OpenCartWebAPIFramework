import{Page} from "@playwright/test"
// protected beacuse I only want to Access this with in class and package
export class BasePage{ 
    protected readonly page:Page; 

    constructor(page:Page)
    {
       this.page=page;
    }
}
    
                        