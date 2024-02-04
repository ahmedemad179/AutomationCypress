export class LoginPage {
   

    SigninBtn(){
        return cy.get('#cy-sign-in');
    }
    username() {
        return cy.get('#username');;
     }

     password() {
        return cy.get('#password');
     }

     loginButton() {
        return cy.get('#kc-login');
     }

}
export default LoginPage;