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

describe("Login Email Hata Test", function () {
  it("Email yanlış girildiğinde hata mesajı ve buton disabled kalmalı", function () {
    cy.visit("http://localhost:5180");

    cy.get('input[name="email"]').type("df@mail");
    cy.get('input[name="password"]').type("9fxIH0GXesEwH_I");
    cy.get('input[name="terms"]').check();

    cy.get('input[name="email"]')
      .parent()
      .find(".invalid-feedback")
      .should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });
});

describe("Login Test", function () {
  it("Email ve password yanlış girildiğinde iki hata mesajı görmeliyim", function () {
    cy.visit("http://localhost:5180");

    cy.get('input[name="email"]').type("invalidemail");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get('input[name="terms"]').check();
  });
});
describe("Login Test", function () {
  it("Kuralları kabul etmeden giriş yapmam mümkün olmamalı", function () {
    cy.visit("http://localhost:5180");

    cy.get('input[name="email"]').type("erdem.guntay@wit.com.tr");
    cy.get('input[name="password"]').type("9fxIH0GXesEwH_I");
    cy.get('input[name="terms"]').uncheck();
  });
});
