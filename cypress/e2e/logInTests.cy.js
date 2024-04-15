import viewPorts from "../fixtures/viewPorts.json"
import {LogInPage} from "../support/pageObjects/logInPage";
viewPorts.forEach((view) => {
    describe('LogIn testing', () => {
        const loginPage = new LogInPage();

        beforeEach( async () => {
            await cy.clearCookies();
            cy.viewport(view.width, view.height);
        });

        it('should log in', () => {
            cy.fixture('users').then((user) =>{
                loginPage.logInWithTheCredentials(user.email, user.password);
                cy.get(loginPage.emailInputField)
                    .should('have.value');

                cy.url().should('include', loginPage.loginPageUrl);
            })
        });

        it('Login with incorrect credentials', () => {
            cy.visit(loginPage.loginPageUrl);
            cy.get(loginPage.logInButton)
                .first()
                .click();
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Заповніть це поле.');
                cy.wrap(str).as('alert');
            });
        });
    });
})

