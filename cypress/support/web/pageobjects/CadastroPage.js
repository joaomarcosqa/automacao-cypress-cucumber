/// <reference types="Cypress" />

import CadastroElements from "../elements/CadastroElements";
const cadastroElements = new CadastroElements

class CadastroPage {
    
    acessarTelaDeCadastro() {
        cy.get(cadastroElements).click()
    }

    inserirDadosValidos() {
        cy.get(cadastroElements)
            .type('nome').should('have.value', 'testwebmobileapi@gmail.com')
    }

    InserirDadosInvalidos(){
        cy.get(cadastroElements)
            .type('nome').should('have.value', 'testwebmobileapi@gmail.com')
    }
}

export default CadastroPage;