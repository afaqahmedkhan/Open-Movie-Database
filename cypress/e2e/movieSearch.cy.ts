describe("Movie Search", () => {
  it("displays a movie for a given search query", () => {

    cy.visit('http://localhost:3000/')

    cy.get('input[placeholder="Search for movies..."]').type("batman");

    cy.get('button#search').click();

    cy.get("h3.text-lg").contains("Batman").should("be.visible");
  });
});
