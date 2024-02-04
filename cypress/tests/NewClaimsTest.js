import 'cypress-file-upload'
import {HomePage} from '../pages/HomePage'
import {HomeClaimsPage} from '../pages/HomeClaimsPage'
const homePageOpj = new HomePage();
const homeClaimsPage = new HomeClaimsPage();
export class NewClaimsTest {
   SupmitNewClaim(){
    homePageOpj.SkipBtn().click();
    homePageOpj.Claimstab().click();
    homePageOpj.NewClaimsBtn().click();
    homePageOpj.Homeclaim().click({force:true,multiple:true});
    cy.url().should('contain','trumobile.dev/claims');
    cy.title().should('eql','New Claim');
    homeClaimsPage.startbtn().click();
    homeClaimsPage.selectproperty().click();
    homeClaimsPage.selectedproperty().click();
    homeClaimsPage.Descriptionofdamage().type('Description');
    homeClaimsPage.selectcalender().click();
    homeClaimsPage.selectedDate().click();
    homeClaimsPage.attachImage().attachFile('Photo.png');
    homeClaimsPage.Submitbtn().click();
    
    
   }

//         this.startbtn.click();
//         this.selectproperty.click();
//         this.selectedproperty.click();
//         this.Descriptionofdamage.type('Description');
//         this.selectcalender.click();
//         this.selectedDate.click();
//         this.attachImage.attachFile('img.jpg');
//         this.Submitbtn.click();
//         this.TrueIcon.should('be.visible');
//         this.backbtn.should('be.visible');
 }
 export default NewClaimsTest;