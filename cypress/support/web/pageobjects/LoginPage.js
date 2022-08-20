/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    acessarSite() {
        cy.visit(url)
    }

    efetuarLogin() {
        cy.get(loginElements.openLoginModal).click()
        cy.get(loginElements.emailOrCpfTextfield)
            .type('testwebmobileapi@gmail.com').should('have.value', 'testwebmobileapi@gmail.com')
        cy.get(loginElements.passwordTextfield)
            .type('test#666')
        cy.get(loginElements.loginButton).click()
    }

    validoLogin() {
        cy.contains('Usuario')
    }
}
export default LoginPage;