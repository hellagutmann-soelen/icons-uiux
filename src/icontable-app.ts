import { LitElement, css, html, } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './components/icontable-card';
import './components/icontable-topbar';
import './components/icontable-icon';
import data from './data';


export type NamingConvention = 'component' | 'dasherized' | 'humanized';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-app')
export class IcontableApp extends LitElement {

  render() {
    return html`
    <h1>Icon Datasheet</h1>
    <h2>Guideline</h2>
    <ul>
      <li>Consistent wording (e.g. Resuse <strong>Bolt</strong> whenever Bolt icon is used instead of Electric, Loading, etc.)</li>
      <li>No round caps, avoid mixtures of caps</li>
      <li>Comparing to naming convention other icon libraries (e.g. <a href="https://fontawesome.com/search" target="_blank">apply</a>)</li>
      <li>More consistent variations (instead of mixin icons with filled, outline, border, full etc. : Filled is default, outline is the variation)</li>
      <li>Lines inside an icon should be transformed into paths and if possible have a with of <strong>2px</strong></li>
      <li>An Icon can contain 1 subicon. Subicon should be a slighly smaller version from the original but width of lines should be still the same (2px)</li>
      <li>Preferable if view allows it position subicon on the top right corner</li>
      <li>Replace Disabled, Off, Offline etc. with Slash to keep why action cannot be used neutral</li>
      <li>Arrow language should be as much as consistent as possible</li>
    </ul>
    <h2>Todos</h2>
    <ul>
      <li>Adjust clock hand widths</li>
      <li>Adjust slash</li>
      <li>Add mark feature</li>
      <li>Add dynamic imports if in screen</li>
    </ul>
    <div id="sticky">
      <icontable-topbar
        @size=${ ( event:CustomEvent ) => this._size = event.detail }
        @naming-convention=${ ( event:CustomEvent ) => this._namingConvention = event.detail }
      ></icontable-topbar>
    </div>
    <div id="grid">
      ${ data.map( dataset => {
        const humanized = dataset.oldName.split( ' ' ).map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) ).join( ' ' );
        return html`
        <icontable-card>
          <div slot="old-icon">
            <icontable-icon
              .size=${ this._size }
              .name=${ dataset.oldName }
              .old=${ true }
              ></icontable-icon>
          </div>
          <div slot="new-icon">
            <icontable-icon
              .size=${ this._size }
              .name=${ dataset.name }></icontable-icon>
          </div>
          <div>
            <dl>
              <dt class="old-name">Old Name</dt>
              <dd class="old-name">${ dataset.oldName ? dataset.oldName : '-' }</dd>
              <dt>Name</dt>
              <dd>
                ${ dataset.name ? html`<span>${ humanized }</span>`: html`<span>-</span>`}
              </dd>
              <dt>New</dt>
              <dd>
                ${ !dataset.oldName ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Form Changed</dt>
              <dd>
                ${ dataset.change ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Different Naming convention</dt>
              <dd>
                ${ dataset.oldName === humanized ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Deleted</dt>
              <dd>
                ${ !dataset.name ? html`<span>❌</span>`: html`<span>-</span>`}
              </dd>
              <dt>Comment</dt>
              <dd>
                ${ dataset.comment ? html`<span>${ dataset.comment }</span>`: html`<span>-</span>`}
              </dd>
            </dl>
          </div>
        </icontable-card>
        ` } ) }
    </div>
    `
  }

  @state() _size = 128;

  @state() _namingConvention: NamingConvention = 'component';

  constructor() {
    super();

  }


  static styles = css`
    :host {
      display: block;
    }
    #sticky {
      position: sticky;
      top: 0;
    }
    .old-name {
      color: #8f8f8f;
    }
    dt {
      font-weight: 600;
    }
    dl {
      display: grid;
      gap: 8px;
      grid-template: 1fr / 1fr 1fr;
    }
    #grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 450px);
      gap: 16px;
      /* grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    }
    .old-icon svg {
      fill: grey;
    }
    svg {
      display: block;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-app': IcontableApp,
  }
}
