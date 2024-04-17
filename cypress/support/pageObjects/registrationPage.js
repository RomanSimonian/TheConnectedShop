export class RegistrationPage{
    constructor(){
        this.registrationPageUrl = 'https://theconnectedshop.com/account/register'
        this.carchaPageUrl = 'https://theconnectedshop.com/account';
        this.firstNameInputField = 'input[name = "customer[first_name]"]';
        this.lastNameInputField = 'input[name = "customer[last_name]"]';
        this.emailNameInputField = 'input[name = "customer[email]"]';
        this.passwordNameInputField = 'input[name = "customer[password]"]';
        this.createAccauntButton = 'button[class = "Form__Submit Button Button--primary Button--full"]';
        this.alert = 'li[class="Alert__ErrorItem"]';
    }

    createAccount(userModel){
        cy.visit(this.registrationPageUrl);
        cy.document().should('have.property', 'readyState', 'complete');
        cy.get(this.firstNameInputField)
           .type(userModel.name);
        cy.get(this.lastNameInputField)
           .type(userModel.lastName);
        cy.get(this.emailNameInputField)
           .type(userModel.email);
        cy.get(this.passwordNameInputField)
           .type(userModel.password);
        cy.get(this.createAccauntButton)
           .click();
    }
}
