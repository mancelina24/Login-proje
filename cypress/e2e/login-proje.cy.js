describe("Login test", () => {
  it("Başarılı Form", () => {
    cy.visit("http://localhost:5180");

    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("Password123");

    cy.get('[data-cy="submit-check"]').click();
    cy.get('[data-cy="submit-button"]').click();
  });
});
