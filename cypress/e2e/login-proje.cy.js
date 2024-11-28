describe("Login başarı testi", () => {
  it("Başarılı Form", () => {
    cy.visit("http://localhost:5180");

    cy.get('input[type="email"]').type("erdem.guntay@wit.com.tr");
    cy.get('input[type="password"]').type("9fxIH0GXesEwH_I");
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/success", { timeout: 10000 });
    cy.contains("Başarıyla Giriş Yapıldı!");
  });
});
