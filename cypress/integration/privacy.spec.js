it('testando de forma idependente a página de privacidade', function(){
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
})