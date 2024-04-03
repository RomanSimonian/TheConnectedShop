import {LogInPage} from "../support/pageObjects/logInPage";

describe('LogIn testing', () => {
    const loginPage = new LogInPage();
    it('should log in', () => {
        cy.fixture('users').then((user) =>{
            loginPage.logInWithTheCredentials(user.email, user.password);
            cy.get(loginPage.emailInputField)
                .should('have.value');

            cy.url().should('include', loginPage.loginPageUrl);
        })

    });

});
