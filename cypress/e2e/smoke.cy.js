describe('Homepage smoke test', () => {
  it('loads the homepage with nav and main heading visible', () => {
    cy.visit('/');
    cy.get('.menu .logo a').should('be.visible').and('contain.text', 'Caroline Léger');
    cy.get('h1').should('be.visible').and('contain.text', "L'Écho des rêves");
  });
});
