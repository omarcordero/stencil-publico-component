import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const buttonComponentCss = "";

const ButtonComponent$1 = /*@__PURE__*/ proxyCustomElement(class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h("button", null, "Bot\u00F3n de prueba");
  }
  static get style() { return buttonComponentCss; }
}, [1, "button-component"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-component"];
  components.forEach(tagName => { switch (tagName) {
    case "button-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonComponent$1);
      }
      break;
  } });
}

const ButtonComponent = ButtonComponent$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonComponent, defineCustomElement };

//# sourceMappingURL=button-component.js.map