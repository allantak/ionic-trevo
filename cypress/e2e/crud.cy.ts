describe('Card Component', () => {
  it('deve ser capaz de cadastrar uma chamada', () => {
    cy.visit('http://localhost:8100/home'); // Modifique a rota de acordo com a sua aplicação

    // Renderize o componente <app-card> na página home
    cy.get('app-home ion-content app-card').invoke('attr', 'callData');

    // Verifique se o componente <app-card> está sendo exibido
    cy.get('app-home ion-content app-card').should('be.visible');

    // Verifique se o botão de adicionar chamada está presente
    cy.get('app-home ion-button:contains("Adicionar chamada")').should('exist');

    // Verifique se a lista de chamadas está sendo renderizada corretamente
    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

    // Clique no botão de adicionar chamada
    cy.get('app-home ion-button:contains("Adicionar chamada")').click();

      // Preencha os campos do formulário
      cy.get('ion-input[placeholder="Titulo"]').type('Teste de Título');
      cy.get('ion-input[placeholder="Prioridade"]').type('Alta');
      cy.get('ion-input[placeholder="Latitude"]').type('123.456');
      cy.get('ion-input[placeholder="Longitude"]').type('789.012');

      // Clique no botão "Enviar"
      cy.get('ion-button[type="submit"]').click();


  });

  it('capaz de fazer alteração', ()=> {
    // Verifique se a lista de chamadas agora contém duas chamadas
    cy.visit('http://localhost:8100/home'); // Modifique a rota de acordo com a sua aplicação

    // Clique no botão de exclusão da primeira chamada
    cy.get('#button-update').last().click();

    // Verifique se a lista de chamadas agora contém apenas uma chamada
    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

       // Preencha os campos do formulário
       cy.get('ion-input[placeholder="Titulo"]').type('Teste de Título - atualizando');
       cy.get('ion-input[placeholder="Prioridade"]').type('Alta  - atualizando');
       cy.get('ion-input[placeholder="Latitude"]').type('123.456');
       cy.get('ion-input[placeholder="Longitude"]').type('789.012');

       // Clique no botão "Enviar"
       cy.get('ion-button[type="submit"]').click();

  })

  it('capaz de deletar', ()=> {
    // Verifique se a lista de chamadas agora contém duas chamadas
    cy.visit('http://localhost:8100/home'); // Modifique a rota de acordo com a sua aplicação

    // Clique no botão de exclusão da primeira chamada
    cy.get('#button-delete').last().click();

    // Verifique se a lista de chamadas agora contém apenas uma chamada
    cy.get('app-home ion-content app-card').should('have.length.gt', 1);

})





});
