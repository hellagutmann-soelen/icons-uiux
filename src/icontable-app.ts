import { LitElement, css, html, } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './components/icontable-card';
import './components/icontable-topbar';
import './components/icontable-icon';
import './components/icontable-sanitycheck';
import './components/icontable-guideline';
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
  @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('icontable-app')
export class IcontableApp extends LitElement {

  @state() _size = 128;
  @state() _data = dataWithMarked;

  @state() _namingConvention: NamingConvention = 'humanized';

  private _storeMarked = () => {

    const marked = this._data.filter( dataset => dataset.marked ).reduce( ( acc, data ) => {
      return { ...acc, [data.id]: data.marked };
    }, {} );
    localStorage.setItem( 'icontable__marked', JSON.stringify( marked ) );
  }

  render() {
    return html`
    <h1>Icons UIUX</h1>
    <details>
      <summary>Guidelines</summary>
      <icontable-guideline>
        <h3>Consistent Wording</h3>
        <img src="guidelines/do-consistent-wording.svg" slot="do" alt="Do" />
        <div slot="do-description">
          When using the same symbolic in icons: <strong>Reuse</strong> the same word.
        </div>
        <img src="guidelines/dont-word-inconsistent.svg" slot="dont" alt="Do" />
        <div slot="dont-description">
          Do not use different words for the same symbolic.
        </div>
      </icontable-guideline>
      <icontable-guideline>
        <h3>Line Caps</h3>
        <img src="guidelines/do-square-line-caps.svg" slot="do" alt="Do" />
        <div slot="do-description">
          Use square caps for lines before the stroke into a path, avoid mixtures of caps
        </div>
        <img src="guidelines/dont-use-round-line-caps.svg" slot="dont" alt="Do" />
        <div slot="dont-description">
          No round caps
        </div>
      </icontable-guideline>
      <icontable-guideline>
        <h3>Variation Naming</h3>
        <img src="guidelines/do-consistent-wording-variation-naming.svg" slot="do" alt="Do" />
        <div slot="do-description">
          The default icon is alwayys filled and <strong>does not need a variation naming convention.</strong>
          For lined out Icons: Add <strong>Outline</strong> to the <strong>end</strong> of their name.
        </div>
        <img src="guidelines/dont-do-inconsistent-variation-naming.svg" slot="dont" alt="Dont" />
        <div slot="dont-description">
          Do not use <strong>Full</strong> or <strong>Filled</strong> if you want to name the default icon. Be consistent when naming outlined variations.
        </div>
      </icontable-guideline>
      <icontable-guideline>
        <h3>Subicons</h3>
        <img src="guidelines/good-subicon-conventions.svg" slot="do" alt="Do" />
        <div slot="do-description">
          <ul>
            <li>If visually possible: Place it on the top right</li>
            <li>An icon can only contain <strong>one subicon</strong></li>
            <li>Subicons should be smaller than the main icon e.g. around 9px</li>
            <li>If subicon contains a circle: Make sure it is the only circle and add <strong>circle</strong> at the end of the name</li>
          </ul>
        </div>
        <img src="guidelines/bad-subicon-conventions.svg" slot="dont" alt="Dont" />
        <div slot="dont-description">
          <ul>
            <li>Subicon should not be the same height as the main icon.</li>
            <li>Do not use more than one subicon.</li>
          </ul>
        </div>
      </icontable-guideline>
      <icontable-guideline>
        <h3>Slash state</h3>
        <img src="guidelines/do-slash-convention.svg" slot="do" alt="Do" />
        <div slot="do-description">
          <ul>
            <li>Use <strong>Slash</strong> if an icon suggest this is the disabled or off state</li>
          </ul>
        </div>
        <img src="guidelines/dont-use-off-and-disabled.svg" slot="dont" alt="Dont" />
        <div slot="dont-description">
          <ul>
            <li>Don't use disabled, off, closed etc. Instead use the neutral equivalent <strong>Slash</strong></li>
            <li>
              Avoid naming something disabled, off, closed, slash etc. If the icon does not suggest it is a disabled state.<br>
              For example the power icon can be used for on and off state.
            </li>
          </ul>
        </div>
      </icontable-guideline>
      <icontable-guideline>
        <h3>Naming icons</h3>
        <img src="guidelines/do-name-it-as-you-see-it.svg" slot="do" alt="Do" />
        <div slot="do-description">
          <ul>
            <li>Name things as you see them. E.g. if you see an eye, name it as an eye.</li>
            <li>This practise is common since icons could be also used for different usages</li>
            <li>If icon contains a subicon: Name it first by the primary icon than by its Subicon, e.g. Battery Bolt</li>
          </ul>
        </div>
        <img src="guidelines/dont-name-as-usage.svg" slot="dont" alt="Dont" />
        <div slot="dont-description">
          <ul>
            <li>Don't name them as they will be used in the end (e.g. settings instead of gear because this will be later on used as an icon for the settings page).</li>
          </ul>
        </div>
      </icontable-guideline>
      <h3>Additional tipps</h3>
      <ul>
        <li>Do Sanity Checks as in try to compare naming conventions with other icon libraries. You can do this easily since sanity check links are provided for each icon.</li>
        <li>Lines inside an icon should be transformed into paths and if possible have a with of <strong>2px</strong></li>
        <li>Arrow language should be as much as consistent as possible</li>
      </ul>
    </details>
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
        .namingConvention="${ this._namingConvention }"
        .size=${ this._size }
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
          @mark="${ () => {
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
          }}"
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
          </div>
        </icontable-card>
        ` } ) }
    </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      color: black;
    }
    #sticky {
      position: sticky;
      top: 0;
      z-index: 1;
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
      grid-template-columns: repeat(auto-fill, 400px);
      gap: 16px;
    }
    svg {
      display: block;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        color: white;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'icontable-app': IcontableApp,
  }
}
