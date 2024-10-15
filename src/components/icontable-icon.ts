import { LitElement, PropertyValues, css, html, unsafeCSS, } from 'lit'
import { customElement, property, state, } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { until } from 'lit/directives/until.js';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-icon')
export class IcontableIcon extends LitElement {

  @property( { type: String } ) name = '';
  @property( { type: Number } ) size = 128;
  @property( { type: Boolean } ) old = false;

  @state() _loaded = false;
  @state() _icon = new Promise<{default: string}>( () => '' );

  constructor() {
    super();
  }
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // console.log( entry.intersectionRatio );
        if( entry.intersectionRatio > 0 && !this._loaded && this.name) {
          this._icon = this.name ? import( `../assets/icons${ this.old ? '-old' : '' }/${ this.name }.svg?raw` ) : new Promise( () => '' );
          this._loaded = true;
        } else {
          // console.log( 'not in view')
        }
      });
      // console.count( 'hello');
    }, { root: null, rootMargin: '0px', threshold: 1.0, } );

      observer.observe( this );
  }

  render() {
    return html`
    <style>
      svg {
        width: ${ unsafeCSS( this.size )}px;
        height: ${ unsafeCSS( this.size )}px;
        fill: ${ this.old ? '#b2b2b2' : 'black' };
      }
    </style>
    ${ until ( this._icon.then( ( svg) => unsafeSVG( svg.default ) ), '' )}
    `
  }


  static styles = css`
    :host {
      display: block;
      /* background: pink; */
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-icon': IcontableIcon,
  }
}
