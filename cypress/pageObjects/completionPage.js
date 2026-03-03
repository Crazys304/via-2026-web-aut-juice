import { BasePage } from "./basePage";

export class CompletePage extends BasePage {
    static get url() {
        return "/#/order-completion";
    }

    static get confirmationMessage() {
        return cy.get(".confirmation");
    }
}