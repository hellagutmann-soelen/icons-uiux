import { LitElement, css, html } from 'lit'
import { customElement, } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-card')
export class IcontableCard extends LitElement {

  render() {
    return html`
    <div id="card">
      <div id="card-lead">
        <div id="card-lead__old-icon">
          <slot name="old-icon"></slot>
        </div>
        <div id="card-lead__new-icon">
          <slot name="new-icon"></slot>
        </div>
      </div>
      <div id="card-content">
        <slot></slot>
      </div>
    </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      border: 1px solid #efefef;
      padding: 8px;
      --icontable-card__background-color-lead: #efefef;
    }
    #card-lead {
      display: flex;
      padding: 16px;
      min-height: 100px;
      align-items: center;
      justify-content: space-around;
      background-image: linear-gradient(45deg, var( --icontable-card__background-color-lead ) 25%, transparent 25%), linear-gradient(-45deg, var( --icontable-card__background-color-lead ) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var( --icontable-card__background-color-lead ) 75%), linear-gradient(-45deg, transparent 75%, var( --icontable-card__background-color-lead ) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
    #card-lead__old-icon {
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-card': IcontableCard,
  }
}
