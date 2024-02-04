export class HomePage {
   
    SkipBtn(){
        return cy.get('.introjs-skipbutton');
    }
    Claimstab(){
        return cy.get('#StartClaim');
    }
    NewClaimsBtn(){
        return cy.get('button[class="new-claims-or-request-btn ng-star-inserted"]');
    }
    Homeclaim (){
        return cy.get('div[class="category-item ng-star-inserted"]').eq(1);
    }
   cookieVal(){
        return cy.getCookie('MUID');
    }


}
export default HomePage;