import { LitElement, css, html, } from 'lit'
import { customElement, property, } from 'lit/decorators.js'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-guideline')
export class IcontableGuideline extends LitElement {

  @property( { type: String } ) name = '';


  render() {
    return html`
    <slot></slot>
    <div id="guideline">
      <div id="do">
        <div class="image">
          <slot name="do"></slot>
        </div>
        <div class="label">Do</div>
        <div class="caption">
          <slot name="do-description"></slot>
        </div>
      </div>
      <div id="dont">
        <div class="image">
          <slot name="dont"></slot>
        </div>
        <div class="label">Don't</div>
        <div class="caption">
          <slot name="dont-description"></slot>
        </div>
      </div>
    </div>
    `
  }


  static styles = css`
    :host {
      display: block;
    }
    #guideline {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    .label {
      padding: 8px 16px;
      border: 2px solid black;
      border-top: none;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .image {
      border: 2px solid black;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      background: white;
      overflow: hidden;
    }
    .caption {
      padding: 16px;
    }
    ::slotted(img) {
      width: 100%;
    }
    #do, #dont {
      min-width: 400px;
      flex-basis: 0;
    }
    #do > .label {
      background: var( --icontable-success );
    }
    #dont > .label {
      background: var( --icontable-error );
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-guideline': IcontableGuideline,
  }
}
