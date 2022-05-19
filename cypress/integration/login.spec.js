/// <reference types="cypress" />

describe('Funcionalidade Login', () => {
    //const { faker } = require('@faker-js/faker');

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve fazer login com Sucesso', () => {
        cy.get('#username').type('binho11@ebac.com')
        cy.get('#password').type('Ebac@ebac.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('bnho11@ebac.com')
        cy.get('#password').type('Ebac@ebac.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('binho11@ebac.com')
        cy.get('#password').type('Ebac@ebaccom')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail binho11@ebac.com está incorreta.')
    })
    

})