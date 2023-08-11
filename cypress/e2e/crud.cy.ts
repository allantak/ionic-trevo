describe('Card Component', () => {
  it('deve ser capaz de cadastrar e listar as chamada', () => {
    cy.visit('http://localhost:8100/home');

    cy.get('app-home ion-button:contains("Adicionar chamada")').should('exist');

    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

    cy.get('app-home ion-button:contains("Adicionar chamada")').click();

    cy.get('ion-input[placeholder="Titulo"]').type('Teste de Título');
    cy.get('ion-input[placeholder="Prioridade"]').click();
    cy.contains('Urgente').click();
    cy.get('ion-input[placeholder="Latitude"]').type('123.456');
    cy.get('ion-input[placeholder="Longitude"]').type('789.012');

    cy.contains('Enviar').click();

    cy.url().should('include', '/home');

    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

  });



  it('deve ser capaz de fazer alteração', () => {
    cy.visit('http://localhost:8100/home');


    cy.get('app-card').last().within(() => {
      cy.get('#button-update').click();
    });



    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

    cy.get('ion-input[placeholder="Titulo"]').type('Teste de Título - atualizando');
    cy.get('ion-input[placeholder="Prioridade"]').click();
    cy.contains('Urgente').click();
    cy.get('ion-input[placeholder="Latitude"]').type('123.456');
    cy.get('ion-input[placeholder="Longitude"]').type('789.012');

    cy.get('ion-button[type="submit"]').click();

  })

  it('deve ser capaz de deletar', () => {
    cy.visit('http://localhost:8100/home');


    cy.get('app-card').last().within(() => {
      cy.get('#button-delete').click();
    });


    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

  })

});
