import { BasePage } from "./basePage";

export class AddressPage extends BasePage {
    static get url() {
    return "/#/address/select";
  }

  static get addAddressButton() {
    return cy.get("#mat-radio-41-input");
  }

  static get continueButton() {
    return cy.get("[aria-label='Proceed to payment selection']");
  }
}