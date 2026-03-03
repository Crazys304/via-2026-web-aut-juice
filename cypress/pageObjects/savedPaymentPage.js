import { BasePage } from "./basePage";

export class SavedPaymentPage extends BasePage {
    static get url() {
        return "/#/saved-payment-methods";
    }

    static get addCardButton() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    static get nameInput() {
        return cy.get('#mat-input-2');
    }

    static get cardNumberInput() {
        return cy.get('#mat-input-3');
    }

    static get expiryMonthSelect() {
        return cy.get('#mat-input-4');
    }

    static get expiryYearSelect() {
        return cy.get('#mat-input-5');
    }

    static get submitButton() {
        return cy.get('#submitButton');
    }

    static get cardList() {
        return cy.get('div.container');
    }
}