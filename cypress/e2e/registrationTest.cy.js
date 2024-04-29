import viewPorts from '../fixtures/viewPorts.json'
import users from '../fixtures/users.json'
import {RegistrationPage} from '../support/pageObjects/registrationPage'

describe('Registration tests', () => {
    const registrationPage = new RegistrationPage()

    beforeEach(() => {
        cy.clearCookies()
        cy.viewport(viewPorts.width, viewPorts.height)
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('should register', () => {
        registrationPage.createAccount(users[1])

        cy.url().should('include', registrationPage.carchaPageUrl);
    })

    it('Register with existing email credentials', () => {
        registrationPage.createAccount(users[0])
        cy.get(registrationPage.alert).should('include', "This email address is already associated with an account. If this account is yours, you can")
    })

    it('.....', () => {
        const randomName = generateRandomName();
        cy.visit('/create_user_page');
        cy.get('#nameInput').type(randomName);
        cy.get('#submitButton').click();
        cy.contains('.....').should('be.visible');
    });

    function generateRandomName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let randomName = '';
        for (let i = 0; i < 8; i++) {
            randomName += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomName;
    }

})
