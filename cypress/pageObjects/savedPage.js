import { BasePage } from "./basePage";

export class SavedPage extends BasePage {
    static get url() {
        return "/#/address/saved";
    }

    static get addAddressButton() {
        return cy.get('button[aria-label="Add a new address"]');
    }

    static get addressCards() {
        return cy.get('mat-card');
    }

}