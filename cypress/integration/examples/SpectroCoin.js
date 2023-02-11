/// <reference types="cypress" />

it("should navigate to the SpectroCoin Rates web page", () => {
  cy.visit("https://spectrocoin.com/en/bitcoin-price-rates.html");
  cy.get('input[id*="react-select"]').first().wait(500).type("bnb{enter}");
  cy.get(":nth-child(3) > .MobileTable_percentageChange__l5lT_").contains("+"); //pass
});
