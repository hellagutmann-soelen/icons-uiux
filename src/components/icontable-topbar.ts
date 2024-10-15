import { LitElement, css, html, } from 'lit'
import { customElement, property, } from 'lit/decorators.js'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-topbar')
export class IcontableTopbar extends LitElement {

  @property( { type: Number } ) size = 128;
  @property( { type: Number } ) old = 0;
  @property( { type: Number } ) new = 0;

  render() {
    return html`
      <label for="size">Size (${ this.size }px)</label>
      <input
        type="range"
        id="size"
        name="size"
        step="8"
        min="24"
        max="128"
        value="${ this.size }"
        @input="${ ( event:Event) => {
        const size = Number( ( event.target as HTMLInputElement ).value );
        this.dispatchEvent( new CustomEvent( 'size', { detail: size } ) );
      }}">
      <label for="sort">Sort</label>
      <select id="sort" name="sort">
        <option value="old-name">Old Name</option>
        <option value="name">Name</option>
        <option value="new">New</option>
        <option value="form-changed">Form Changed</option>
        <option value="different-naming-convention">Different Naming Convention</option>
      </select>
      <label for="naming-convention">Naming Convention</label>
      <select id="naming-convention" name="naming-convention" @input="${ ( event: Event ) => {
        const namingConvention = ( event.target as HTMLInputElement ).value;
        this.dispatchEvent( new CustomEvent( 'naming-convention', { detail: namingConvention } ) );
      } }">
        <option value="component">Component (Vue, React)</option>
        <option value="dasherized">Dasherized (import)</option>
        <option value="humanized">Humanized</option>
      </select>
      Old: ${ this.old } New: ${ this.new }
    `
  }


  static styles = css`
    :host {
      display: block;
      background: white;
      padding: 8px
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-topbar': IcontableTopbar,
  }
}
