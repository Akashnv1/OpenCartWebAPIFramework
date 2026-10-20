import { Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { promises } from "node:dns";

export class LoginPage extends BasePage{
    // private locators:
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPasswordLink: Locator;
    private readonly logo: Locator;
    private readonly loginErrorMessage:Locator;

    // const.. of the class : init the locators
    // only one const.. can be created its a rule of TS
    constructor(page:Page)
    {
        super(page);
          this.emailId=page.getByRole('textbox',{name:'E-mail Address'});
           this.password=page.getByRole('textbox',{name:'Password'});
            this.loginBtn=page.getByRole('button',{name:'Login'});
             this.forgottenPasswordLink=page.getByRole('link',{name:'Forgotten Password'}).first();
             this.logo=page.getByAltText('naveenopencart');
             this.loginErrorMessage=page.locator('.alert .alert-danger .alert-dismissible');
    };

    // public page actions (methods)/ behavior

    async goToLoginPage():Promise<void>
    {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

     async getLoginPageTitle():Promise<string>
    {
        return await this.page.title();
    }

      async isForgotPwdLinkExist():Promise<boolean>
    {
        return await this.forgottenPasswordLink.isVisible();
    }

       async doLogin(username:string,password:string):Promise<void>
    {
        console.log(`user creds : ${username} : ${password}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();


    }

    async isInvalidLoginErrorDisplay(): Promise<boolean>

    {
return await this.loginErrorMessage.isVisible();
    }
}
