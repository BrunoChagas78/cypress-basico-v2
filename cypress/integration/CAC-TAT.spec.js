/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title()
            .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'olá, olá, olá'
        cy.get('#firstName')
            .type('Bruno')
        cy.get('#lastName')
            .type('Chagas')
        cy.get('#email')
            .type('brunoccchagas@hotmail.com')
        cy.get('#open-text-area')
            .type(longText, {delay : 0})
        cy.get('button[type="submit"]')
            .click()
        cy.get('.success')
            .should('be.visible')
        cy.get('.success')
            .should('not.be.visible')
    })

    it('segundo bloco it', function() {
        cy.get('.error')
            .should('not.be.visible')
    })
    
    it('campo telefone', function() {
        cy.get('#phone')
            .type('loasdadwasw')
                .should('have.value', '')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'olá, olá, olá'
        cy.get('#firstName')
            .type('Bruno')
        cy.get('#lastName')
            .type('Chagas')
        cy.get('#email')
            .type('brunoccchagas@hotmail.com')
        cy.get('#phone-checkbox')
            .click()
        cy.get('#phone')
            .type(' ')
        cy.get('#open-text-area')
            .type(longText, {delay : 0})
        cy.get('button[type="submit"]')
            .click()
        cy.get('.error')
            .should('be.visible')
    })

    it('preenche e limpa campos', function() {
        cy.get('#firstName')
            .type('Bruno')
                .should('have.value', 'Bruno')
                    .clear()
    })

    it('utilizar o contains', function() {
        const longText = 'Olá'
        cy.get('#firstName')
            .type('Bruno')
        cy.get('#lastName')
            .type('Chagas')
        cy.get('#email')
            .type('brunoccchagas@hotmail.com')
        cy.get('#phone-checkbox')
            .click()
        cy.get('#phone')
            .type('12345')
        cy.get('#open-text-area')
            .type(longText, {delay : 0})
        cy.contains('button', 'Enviar')
            .click()
    })

    it('Selecionar opção dentro de um campo de seleção', function() {
        cy.get('#product')
            .select('Cursos')
                .should('have.value', 'cursos')
        
        cy.get('#product')
            .select('mentoria')
                .should('have.value', 'mentoria')

        cy.get('#product')
            .select(1)
                .should('have.value', 'blog')
    })

    it('Marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
                .should('have.value', 'feedback')

    //checar tudo ao mesmo tempo
        cy.get('input[type="radio"]')
            .should('have.length', 3)
                .each(function($radio){
                    cy.wrap($radio).check()
                        cy.wrap($radio).should('be.checked')
        })
    })
    
    it('Marca e desmarca Desmarcar cada tipo de contato', function() {
        cy.get('#email-checkbox')
            .check()
                .should('be.checked')
    })

    it('Desmarcar cada tipo do atendimento', function() {
        cy.get('input[type="checkbox"]')
            .check()
                .last()
                    .uncheck()
                        .should('not.be.checked')
            
    })

    it('Upload de arquivo arrastando para o campo', function() {
        cy.get('input[type="file"]')
            .should('not.have.value')
                .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop'})
                    .should(function($input) {
                        expect($input[0].files[0].name).to.equal('example.json')
                    })
    })
    

    it('Upload de arquivo', function() {
        cy.fixture('example.json').as('sampleFile')
            cy.get('input[type="file"]')
                .selectFile('@sampleFile')
                    .should(function($input){
                        expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('verifica que a política de privacidade está abrindo sem precisar abrir a página', function(){
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')
    })

    it('verifica que a política de privacidade está abrindo sem precisar abrir a página', function(){
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
                .click()
        
        cy.contains('Talking About Testing').should('be.visible')
    })
}) 