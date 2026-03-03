import { BasePage } from "./basePage";

export class DeliveryPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
    }

    static get deliveryOption() {
        return cy.get("#mat-radio-48-input");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }

}