describe("Status Code Tests", () => {

 it("should have status code 200", () => {
    cy.visit("the-internet.herokuapp.com/status_codes");
    cy.contains("200").click();
    cy.request("the-internet.herokuapp.com/status_codes/200")
     .then((response) => {
        expect(response.status).to.eq(200);
     });
 });

 it("should have status code 301", () => {
    cy.visit("the-internet.herokuapp.com/status_codes");
    cy.contains("301").click();
    cy.request("the-internet.herokuapp.com/status_codes/301")
     .then((response) => {
        expect(response.status).to.eq(301);
     });
 });

 it("should have status code 404", () => {
    cy.visit("the-internet.herokuapp.com/status_codes");
    cy.contains("404").click();
    cy.request({
    url: "the-internet.herokuapp.com/status_codes/404",
    failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eq(404);
     });
 });

 it("should have status code 500", () => {
    cy.visit("the-internet.herokuapp.com/status_codes");
    cy.contains("500").click();
    cy.request({
    url: "the-internet.herokuapp.com/status_codes/500",
    failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eq(500);
     });
 });
});
