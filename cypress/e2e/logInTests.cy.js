import viewPorts from "../fixtures/viewPorts.json"
import users from "../fixtures/users.json"
import {LogInPage} from "../support/pageObjects/logInPage";
import 'cypress-mochawesome-reporter/register';
    describe('LogIn testing', () => {
        const loginPage = new LogInPage();

        beforeEach(() => {
            cy.clearCookies();
            cy.viewport(viewPorts.width, viewPorts.height);
        });

        it('should log in', () => {
            loginPage.logInWithTheCredentials(users.email, users.password);

            cy.url().should('include', loginPage.capchaUrl);
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

