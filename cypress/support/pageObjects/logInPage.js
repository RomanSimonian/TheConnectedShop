export class LogInPage{
    constructor() {
        this.loginPageUrl = "https://theconnectedshop.com/account/login?return_url=%2Faccount";
        this.capchaUrl = "https://theconnectedshop.com/challenge";
        this.emailInputField = "input[name = \"customer[email]\"]";
        this.passwordInputField = "input[name = \"customer[password]\"]";
        this.logInButton = "button[class = \"Form__Submit Button Button--primary Button--full\"]";
    }

    logInWithTheCredentials(email, password){
        cy.visit(this.loginPageUrl);
        cy.document().should('have.property', 'readyState', 'complete');
        cy.get(this.emailInputField)
            .type(email);
        cy.get(this.passwordInputField)
            .type(password);
        cy.get(this.logInButton)
            .first()
            .click();
    }
}
