import { LitElement, css, html, } from 'lit'
import { customElement, property, } from 'lit/decorators.js'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-sanitycheck')
export class IcontableSanitycheck extends LitElement {

  @property( { type: String } ) name = '';


  render() {
    // const values = this.name.split( '-' );
    const values = this.name.split( '-' ).map( ( _, index ) => {
      return this.name.split( '-' ).splice( 0, index + 1 ).join( ' ' );
    } );
    return html`
    ${ values.map( ( value ) => html`<a href="https://fontawesome.com/search?q=${ value }" target="_blank"><img src="font-awesome.svg" alt="Font Awesome" title="${ `Search "${ value }" on Font Awesome`}" /></a>` ) }
    ${ values.map( ( value ) => html`<a href="https://pictogrammers.com/library/mdi?q=${ value }" target="_blank"><img alt="Pictogrammers" title="${ `Search "${ value }" on Pictogrammers`}" src="pictogrammers.svg" /></a>` ) }
    `
  }


  static styles = css`
    :host {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    img {
      width: 24px;
      height: 24px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-sanitycheck': IcontableSanitycheck,
  }
}
