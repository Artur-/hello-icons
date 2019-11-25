import { vaadinV, vaadinH } from "./icons/vaadin-icons";

import "@vaadin/vaadin-button";
import { LitElement, html, customElement } from "lit-element";
import "github-corner";

@customElement("my-view")
export class MyView extends LitElement {
  render() {
    return html`
      <github-corner>
        <a href="https://github.com/Artur-/hello-icons"></a>
        <vaadin-button
          ><span style="fill: blue; color: blue;"
            >${vaadinV} Hello</span
          ></vaadin-button
        >
        <vaadin-button
          ><span style="fill: red; color: red;"
            >${vaadinH} Hello</span
          ></vaadin-button
        >
      </github-corner>
    `;
  }
}
