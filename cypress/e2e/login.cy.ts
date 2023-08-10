describe('Login Page', () => {
  it('should successfully log in with valid credentials', () => {
    cy.visit('http://localhost:8100/');

    cy.get('ion-input[placeholder="Email"]').type('admin@gmail.com');
    cy.get('ion-input[placeholder="Senha"]').type('12345');

    cy.get('ion-button').contains('Entrar').click();

  });
});

