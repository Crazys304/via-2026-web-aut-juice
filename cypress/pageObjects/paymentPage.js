import { BasePage } from "./basePage";

export class PaymentPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get paymentOption() {
        return cy.get("#mat-radio-49-input");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to review']");
    }

}