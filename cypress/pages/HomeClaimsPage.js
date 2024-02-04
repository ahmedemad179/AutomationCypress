export class HomeClaimsPage {
   
    startbtn (){
        return cy.get('span[class="mat-button-wrapper"]').contains('Start');
    }
    selectproperty (){
        return cy.get('input[class="ant-select-selection-search-input"]');
    }
    selectedproperty (){
        return cy.contains('206 890 OJKNIDAIIZ AW');
    }
    Descriptionofdamage (){
        return cy.get('input.tru-text-input[placeholder="Description of damage to Property"]');
    }
    selectcalender (){
        return cy.get('input[placeholder="YYYY-MM-DD"]');
    }
    selectedDate(){
        return cy.get('div[class="ant-picker-cell-inner"]').contains('3');
    }
    attachImage (){
        return cy.get('input[type="file"]').eq(0);
    }
    Submitbtn (){
        return cy.contains('Submit');
    }
    TrueIcon(){
        return cy.get('#check');
    }
    backbtn(){
        return cy.get('button[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
    }
    

}
export default HomeClaimsPage;


//     cy.get('span[class="mat-button-wrapper"]').contains(' Start ').click();
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