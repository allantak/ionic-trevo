describe('template spec', () => {

  it('deve abrir o menu e redirecionar para o cadastro', () => {
    cy.visit('http://localhost:8100/home');

    cy.get('ion-menu-button').click();

    cy.get('ion-menu').should('be.visible');
    cy.get('ion-item').contains('Cadastro').click();
    cy.url().should('include', '/registry');
  });
  it('deve navegar para a pagina home', () => {
    cy.visit('http://localhost:8100/registry');
    cy.get('ion-menu-button').click();
    cy.get('ion-menu').should('be.visible');
    cy.get('ion-item').contains('Home').click();
    cy.url().should('include', '/home');
  });

  it('deve fazer logout', () => {
    cy.visit('http://localhost:8100/home');
    cy.get('ion-menu-button').click();
    cy.get('ion-menu').should('be.visible');
    cy.get('ion-item').contains('Logout').click();
    cy.url().should('include', '/');
  });
})
