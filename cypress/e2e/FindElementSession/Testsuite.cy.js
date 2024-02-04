import 'cypress-file-upload';
import { it } from "mocha"
import {LoginPage} from '../../pages/LoginPage'
import {LoginTest} from '../../tests/LoginTest'
import {HomePage} from '../../pages/HomePage'
import {NewClaimsTest} from '../../tests/NewClaimsTest'
import {HomeClaimsPage} from '../../pages/HomeClaimsPage'
const loginPageOpj = new LoginPage();
const LoginTestOpj = new LoginTest();
const homePageOpj = new HomePage();
const newClaimsTestOpj = new NewClaimsTest();
const homeClaimsOpj = new HomeClaimsPage();

describe('Supmit New Claims', () => {
before('Start to Create new claim', ()=>{
    cy.visit('/');
    cy.fixture('LoginTestdata').as('testData');
});
it('Login funcation', () => {
    Cypress.on('uncaught:exception', () => false);

LoginTestOpj.loginToPortal();
homePageOpj.SkipBtn().should('be.visible');
newClaimsTestOpj.SupmitNewClaim();
homeClaimsOpj.TrueIcon().should('be.visible');
homeClaimsOpj.backbtn().should('be.visible');
cy.go('forward');
homePageOpj.cookieVal().log();
cy.setCookie('Team', 'QC');


});
});
































//  cy.get('span[class="mat-button-wrapper"]').contains(' Start ').click();
//  cy.get('div[class="ant-picker-input"]').eq(1).click();
//  cy.get('ul[class="ant-picker-time-panel-column"]').eq(0).find('li').eq(2).click();
//  cy.get('ul[class="ant-picker-time-panel-column"]').eq(1).find('li').eq(2).click();
//  cy.get('ul[class="ant-picker-time-panel-column"]').eq(2).find('li').eq(2).click();
//  cy.get('button[class="ant-btn css-1me4733 ant-btn-primary ant-btn-sm"]').click();
//  cy.get('#rc_select_1').click();
//  cy.get('span[class="ant-select-item-option-state"]').dblclick({force:true});
// //  const filePath ='Photo.png';
//  cy.get('div[class="ant-picker-input"]').eq(0).click();
//  cy.get('a[class="ant-picker-today-btn"]').click({force:true});
// //  cy.get('input[placeholder="YYYY-MM-DD"]').type('2023-12-21');
// //  cy.get('input[placeholder="YYYY-MM-DD"]').click({force:true});
//  cy.get('input[type="file"]').eq(0).attachFile('photo.png');