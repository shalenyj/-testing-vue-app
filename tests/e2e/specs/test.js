describe("My First E2E Tests", () => {
  const name = "Ivan";
  it("should see stories", () => {
    cy.visit("/");
    cy.get("#name").type(name);
    cy.get("button:submit").click();
    cy.contains("#greeting", `Hi ${name}, we found this for you`);
    cy.get("#stories").should("be.visible");
  });
  it("should provide no results text", () => {
    cy.server();
    cy.route("https://jsonplaceholder.typicode.com/posts", { data: [] });

    cy.visit("/");
    cy.get("#name").type(name);
    cy.get("button:submit").click();
    cy.contains("#greeting", `Hi ${name}, we found this for you`);
    cy.get("#stories").should("not.visible");
    cy.get("#empty-list").should("be.visible");
  });
  it("should forbide empty name", () => {
    cy.visit("/");
    cy.get("button:submit").click();
    cy.get("input:invalid");
    cy.get("#greeting").should("not.exist");
    cy.get("#stories").should("not.exist");
  });
});
