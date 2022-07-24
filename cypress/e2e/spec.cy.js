describe('Test The whole App', () => {
  cy.before

  it('On Website Load, Text and Button are shown', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Welcome').should('exist');
    cy.contains('Login').should('exist');
  })
})