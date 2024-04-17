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
})
