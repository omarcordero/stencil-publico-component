import { h } from "@stencil/core";
export class ButtonComponent {
  render() {
    return h("button", null, "Bot\u00F3n de prueba");
  }
  static get is() { return "button-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button-component.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button-component.css"]
    };
  }
}
//# sourceMappingURL=button-component.js.map
