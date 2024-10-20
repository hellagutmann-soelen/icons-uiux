import { LitElement, css, html } from 'lit'
import { customElement, property, } from 'lit/decorators.js'
import { Marked } from '../data';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-card')
export class IcontableCard extends LitElement {

  @property( { type: String, reflect: true, } ) marked: Marked = '';

  render() {
    return html`
    <div id="card">
      <div id="mark"></div>
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
        <button
          id="mark-it"
          @click="${ () => {
          this.dispatchEvent( new CustomEvent( 'mark' ) );
        } }">Mark It</button>
      </div>
    </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      border: 1px solid #efefef;
      padding: 8px;
      --icontable-card__background-color: #efefef;
      --icontable-card__background-color-active: #fafafa;
    }
    :host([marked="changed"]) #mark {
      background: linear-gradient(to bottom left, var(--icontable-success) 50%,transparent 50%) 100% 0/50px 50px no-repeat;
    }
    :host([marked="deleted"]) #mark {
      background: linear-gradient(to bottom left, var(--icontable-error) 50%,transparent 50%) 100% 0/50px 50px no-repeat;
    }
    #mark-it {
      border: none;
      background: white;
      padding: 16px 8px;
      display: block;
      width: 100%;
      cursor: pointer;
      background-color: var( --icontable-card__background-color );
    }
    #mark-it:hover, #mark-it:focus, #mark-it:active {
      background: var( --icontable-card__background-color-active );
    }
    #mark {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      pointer-events: none;
    }
    #card-lead {
      display: flex;
      padding: 16px;
      min-height: 100px;
      align-items: center;
      justify-content: space-around;
      background-image: linear-gradient(45deg, var( --icontable-card__background-color ) 25%, transparent 25%), linear-gradient(-45deg, var( --icontable-card__background-color ) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var( --icontable-card__background-color ) 75%), linear-gradient(-45deg, transparent 75%, var( --icontable-card__background-color ) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        border-color: #5f5f5f;
        --icontable-card__background-color: #5f5f5f;
      --icontable-card__background-color-active: #5a5a5a;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-card': IcontableCard,
  }
}
