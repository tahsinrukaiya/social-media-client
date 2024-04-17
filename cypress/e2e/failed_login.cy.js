describe("Failed login function", () => {
  it("visits the page and failing to log in", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success",
    ).click();
    cy.get("#loginEmail").invoke("val", "wrongAMail@noroff.no");
    cy.get("#loginPassword").invoke("val", "wrongPassword");
    cy.get("#loginForm button").contains("Login").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains("Username or password is incorrect");
    });
  });
});
