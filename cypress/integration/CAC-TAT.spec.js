/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'olá, olá, olá, olá k,olá,olá,olá ,olá, olá,olá, olá, olá, olá k,olá,olá,olá ,olá, olá,oláoláolá, olá, olá, olá k,olá,olá,olá ,olá, olá,oláolá'
        cy.get('#firstName').type('Bruno')
        cy.get('#lastName').type('Chagas')
        cy.get('#email').type('brunoccchagas@hotmail.com')
        cy.get('#open-text-area').type(longText, {delay : 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.get('.success').should('not.be.visible')
    })
    
  })