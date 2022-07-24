describe("Test The whole App", () => {

  it("On Website Load, Text and Button are shown", () => {    
    cy.visit("http://localhost:5173/");
    cy.contains("Welcome").should("exist");
    cy.contains("Login").should("exist");
  });

  it("Clicking on Login button should show Login Forum", () => {
    cy.contains("Login").click();
    cy.get("[data-testid='email-input']").should("exist");
    cy.contains("Go in").should("exist");
    cy.contains("Go back").should("exist");
  });

  it("clicking on Go back button should show welcome text", () => {
    cy.contains("Go back").click();
    cy.contains("Welcome").should("exist");
    cy.contains("Login").should("exist");
  });

  it("Clicking on Go In should display error if input is empty", () => {
    cy.contains("Login").click();
    cy.contains("Go in").click();
    cy.contains("Email is required").should("exist");
  });

  it("Clicking on Go In should not display error if input is not empty", () => {
    cy.get("[data-testid='email-input']").type("example@email.com");
    cy.contains("Go in").click();
    cy.contains("Email is required").should("not.exist");
  });
});
