import { BasePage } from "./basePage";

export class SummaryPage extends BasePage {
    static get url() {
        return "/#/order-summary";
    }

    static get placeOrderButton() {
        return cy.get('#checkoutButton');
    }
}