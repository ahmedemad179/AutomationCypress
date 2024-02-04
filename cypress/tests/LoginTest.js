import  {LoginPage} from '../pages/LoginPage'
const login = new LoginPage();
export class LoginTest {
   loginToPortal() {
    login.SigninBtn().click();
    cy.get('@testData').its('users').each((user) => {
      login.username().should('be.visible').type(user.email);
      login.password().type(user.password);
   })
    login.loginButton().click();
   }



}
export default LoginTest;