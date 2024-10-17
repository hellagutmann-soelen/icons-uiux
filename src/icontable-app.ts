import { LitElement, css, html, } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './components/icontable-card';
import './components/icontable-topbar';
import './components/icontable-icon';
import './components/icontable-sanitycheck';
import data from './data';



const marked = JSON.parse( localStorage.getItem( 'icontable__marked' ) || '{}' );
const dataWithMarked = data.map( dataset => {
  return { ...dataset, marked: marked[dataset.id] || '' };
} );

const amountDataOld = data.filter( dataset => dataset.oldName ).length;
const amountDataNew = data.filter( dataset => dataset.name ).length;

const amountIconFolderOld = Object.keys( import.meta.glob('./assets/icons-old/*.svg' ) ).length;
const amountIconFolderNew = Object.keys( import.meta.glob('./assets/icons/*.svg' ) ).length;

const componentize = ( value: string ) => value.split( '-' ).map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) ).join( '' );
const humanize = ( value: string ) => value.split( '-' ).map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) ).join( ' ' );

export type NamingConvention = 'component' | 'dasherized' | 'humanized';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-app')
export class IcontableApp extends LitElement {

  @state() _size = 128;
  @state() _data = dataWithMarked;

  @state() _namingConvention: NamingConvention = 'component';

  private _storeMarked = () => {

    const marked = this._data.filter( dataset => dataset.marked ).reduce( ( acc, data ) => {
      return { ...acc, [data.id]: data.marked };
    }, {} );
    localStorage.setItem( 'icontable__marked', JSON.stringify( marked ) );
  }

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
    </ul>
    <div id="sticky">
      <icontable-topbar
        @size=${ ( event:CustomEvent ) => this._size = event.detail }
        @sort=${ ( event:CustomEvent ) => {
          this._data = [...this._data].sort( ( a, b ) => {
            if( event.detail === 'old-name' ) {
              return a.oldName.toUpperCase() < b.oldName.toUpperCase() ? -1 : 1;
            } else if( event.detail === 'name' ) {
              return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
            } else if( event.detail === 'new' ) {
              return a.oldName ? 1 : -1;
            } else if( event.detail === 'form-changed' ) {
              return a.change ? -1 : 1;
            } else if ( event.detail === 'different-naming-convention' ) {
              const deletedEntry = !a.name;
              const newEntry = !a.oldName;
              const humanized = humanize( a.name );
              return (!newEntry && !deletedEntry) && a.oldName !== humanized ? -1 : 1;
            } else {
              return 1;
            }
          });
        } }
        @naming-convention=${ ( event:CustomEvent ) => this._namingConvention = event.detail }
        .old=${ amountDataOld }
        .new=${ amountDataNew }
        .folderOld=${ amountIconFolderOld }
        .folderNew=${ amountIconFolderNew }
      ></icontable-topbar>
    </div>
    <div id="grid">
      ${ this._data.map( dataset => {
        const componentized = componentize( dataset.name );
        const humanized = humanize( dataset.name );
        const deletedEntry = !dataset.name;
        const newEntry = !dataset.oldName;
        return html`
        <icontable-card
          .marked="${ dataset.marked || '' }"
        >
          <icontable-icon
            slot="old-icon"
            .size=${ this._size }
            .name=${ dataset.oldName }
            .old=${ true }
          ></icontable-icon>
          <icontable-icon
            slot="new-icon"
            .size=${ this._size }
            .name=${ dataset.name }
          ></icontable-icon>
          <div>
            <dl>
              <dt class="old-name">Old Name</dt><dd class="old-name">${ dataset.oldName ? dataset.oldName : '-' }</dd>
              <dt>Name</dt>
              <dd>
                ${ dataset.name ? html`<span>${ this._namingConvention === 'humanized' ? humanized : this._namingConvention === 'component' ? componentized : dataset.name }</span>`: html`<span>-</span>`}
              </dd>
              <dt>New</dt>
              <dd>
                ${ newEntry ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Form Changed</dt>
              <dd>
                ${ dataset.change ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Different Naming convention</dt>
              <dd>
                ${ (!newEntry && !deletedEntry) && dataset.oldName !== humanized ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Deleted</dt>
              <dd>
                ${ deletedEntry ? html`<span>❌</span>`: html`<span>-</span>`}
              </dd>
              <dt>Comment</dt>
              <dd>
                ${ dataset.comment ? html`<span>${ dataset.comment }</span>`: html`<span>-</span>`}
              </dd>
              <dt>Sanity Check</dt>
              <dd>
                <icontable-sanitycheck .name="${ dataset.name }"></icontable-sanitycheck>
              </dd>
            </dl>
            <button @click="${ () => {
              if( !dataset.marked ) {
                dataset.marked = 'changed';
              } else if ( dataset.marked && dataset.marked === 'changed' ) {
               console.log('hello')
                dataset.marked = 'deleted';
              } else if ( dataset.marked && dataset.marked === 'deleted' ) {
              dataset.marked = '';
              }
              this.requestUpdate();
              this._storeMarked();
            }}">Mark it</button>
          </div>
        </icontable-card>
        ` } ) }
    </div>
    `
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
