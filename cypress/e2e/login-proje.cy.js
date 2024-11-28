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

describe("Login Hatalı Veri Testi", function () {
  it("Hatalı email girişi, hata mesajı görünüyor ve buton disabled kalıyor", () => {
    cy.visit("http://localhost:5180");

    cy.get('input[type="email"]').type("fsdfsd@gmail.com");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.contains("Geçerli bir e-posta adresi girin.");
  });

  it("Email ve password yanlış, iki hata mesajı görünüyor ve buton disabled kalıyor", function () {
    cy.visit("http://localhost:5180");

    cy.get('input[type="email"]').type("fsdfsd@gmail.com");
    cy.get('input[type="password"]').type("123");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.contains("Geçerli bir e-posta adresi girin.");
    cy.contains(
      "Şifreniz en az 8 karakter uzunluğunda olmalı ve bir rakam içermelidir."
    );
  });

  it("Şartları kabul etmedim, buton disabled kalıyor", function () {
    cy.visit("http://localhost:5180");

    cy.get('input[type="email"]').type("erdem.guntay@wit.com.tr");
    cy.get('input[type="password"]').type("9fxIH0GXesEwH_I");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.contains("Şartları kabul etmelisiniz.");
  });
});
