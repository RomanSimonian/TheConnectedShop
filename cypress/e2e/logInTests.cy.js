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

    // it('Login with incorrect credentials', () => {
    //     cy.visit(loginPage.loginPageUrl);
    //     cy.get(loginPage.logInButton)
    //         .first()
    //         .click();
    //     cy.on('window:alert', (str) => {
    //       expect(str).to.equal('Заповнцть це поле.');
    //       cy.wrap(str).as('alert');
    //     });
    // });

    // it('Login with incorrect credentials', () => {
    //     const expectedAlert = {
    //       'en-US': 'Invalid username or password',
    //       'ru-RU': 'Неправильный логин или пароль',
    //     };

    //     cy.on('window:alert', (str) => {
    //       expect(str).to.equal(expectedAlert[Cypress.config('language')]);
    //       cy.wrap(str).as('alert');
    //     });
    // });
});