/// <reference types="cypress" />

describe("funcionalidade Pré Cadastro", () => {
    const { faker } = require('@faker-js/faker');

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve Completar o Pré cadastro com SUCESSO', () => {

        let nomeFaker = faker.name.firstName ()
        let sobreNomeFaker = faker.name.lastName ()
        let emailFaker = faker.internet.email ()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobreNomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })

})