import { LitElement, TemplateResult, css, html, unsafeCSS } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import iconsOld from './assets/icons-old.svg?raw'
import mapNewIcons from './map-new-icons';
import './components/icontable-card';
import spliceNewIcons from './splice-new-icons';


const parser = new DOMParser();
const svg = parser
  .parseFromString(iconsOld, "image/svg+xml")
  .getElementsByTagNameNS("http://www.w3.org/2000/svg", "svg")
  .item( 0 ) as SVGElement;

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export interface Dataset {
  oldIcon: TemplateResult | null,
  oldIconName: string,
  icon?: TemplateResult | undefined,
  iconName?: string | undefined,
  iconNameDasherized?: string | undefined,
  new?: boolean | undefined,
  differentNamingConvention?: boolean | undefined,
  formChanged?: boolean | undefined,
  deleted?: boolean | undefined,
}
@customElement('icontable-app')
export class IcontableApp extends LitElement {

  render() {
    return html`
    <style>
      svg {
        width: ${ unsafeCSS( this._size )}px;
        height: ${ unsafeCSS( this._size )}px;
      }
    </style>
    <h1>Icon Datasheet</h1>
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
    <div id="sticky">
      <label for="size">Size (${ this._size }px)</label>
      <input type="range" id="size" name="size" step="8" min="24" max="128" value="${ this._size }" @input="${ ( event:Event) => {
        this._size = Number( ( event.target as HTMLInputElement ).value );
      }}">
      <label for="sort">Sort</label>
      <select id="sort" name="sort">
        <option value="old-name">Old Name</option>
        <option value="name">Name</option>
        <option value="new">New</option>
        <option value="form-changed">Form Changed</option>
        <option value="different-naming-convention">Different Naming Convention</option>
      </select>
    </div>
    <div id="grid">
      ${ this._icons.map( dataset => html`
        <icontable-card>
          <div class="old-icon" slot="old-icon">
            ${ dataset.oldIcon ? dataset.oldIcon : html`<span>-</span>`}
          </div>
          <div slot="new-icon">
            ${ dataset.icon ? html`<div class="new-icon">${ dataset.icon }</div>`: html`<span>-</span>`}
          </div>
          <div>
            <dl>
              <dt class="old-name">Old Name</dt>
              <dd class="old-name">
                ${ dataset.new ? '-' : dataset.oldIconName }
              </dd>
              <dt>Name</dt>
              <dd>
                ${ dataset.iconName ? html`<span>${ dataset.iconName }</span>`: html`<span>-</span>`}
              </dd>
              <dt>Dasherized</dt>
              <dd>
                ${ dataset.iconNameDasherized ? html`<span>${ dataset.iconNameDasherized }</span>`: html`<span>-</span>`}
              </dd>
              <dt>New</dt>
              <dd>
                ${ dataset.new ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Form Changed</dt>
              <dd>
                ${ dataset.formChanged ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Different Naming convention</dt>
              <dd>
                ${ dataset.differentNamingConvention ? html`<span>✅</span>`: html`<span>-</span>`}
              </dd>
              <dt>Deleted</dt>
              <dd>
                ${ dataset.deleted ? html`<span>❌</span>`: html`<span>-</span>`}
              </dd>
            </dl>
          </div>
        </icontable-card>
        ` ) }
    </div>
    `
  }

  @state() _icons: Dataset[] = [];
  @state() _size = 128;

  constructor() {
    super();

    [ ...svg.getElementsByTagName( 'path' ) ].forEach( path =>  path.removeAttribute( 'fill' ) );

    this._icons = [ ...svg.children ]
      .map( g => ({
        oldIcon: html`<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="${ g.id }">${ g }</svg>`,
        oldIconName: g.id,
      }))

    this._icons = spliceNewIcons( this._icons, [
      {
        indexIconToFind: 'Arrow Back',
        fakeIconName: 'Arrow Upward',
      }, {
        indexIconToFind: 'Arrow Forward',
        fakeIconName: 'Arrow Downward',
      }, {
        indexIconToFind: 'Account Circle',
        fakeIconName: 'Account Circle Not Outline',
      }, {
        indexIconToFind: 'Electric Vehicle',
        fakeIconName: 'Car Bolt Icon',
      }, {
        indexIconToFind: 'Change Circle',
        fakeIconName: 'Repeat Icon',
      }, {
        indexIconToFind: 'Change Circle',
        fakeIconName: 'Repeat Circle Icon',
      }, {
        indexIconToFind: 'Clock',
        fakeIconName: 'Clock Circle Icon',
      }, {
        indexIconToFind: 'Clock',
        fakeIconName: 'Clock Rotate Right Icon',
      }, {
        indexIconToFind: 'Clock',
        fakeIconName: 'Repeat Circle Icon',
      }, {
        indexIconToFind: 'Cloud',
        fakeIconName: 'Cloud Outline Icon',
      }, {
        indexIconToFind: 'Description',
        fakeIconName: 'File Icon',
      }, {
        indexIconToFind: 'Device Warning',
        fakeIconName: 'Smartphone Icon',
      }, {
        indexIconToFind: 'Device Warning',
        fakeIconName: 'Smartphone Slash Icon',
      }, {
        indexIconToFind: 'Edit Note',
        fakeIconName: 'Note Icon',
      }, {
        indexIconToFind: 'File Upload',
        fakeIconName: 'Arrow Left To Bracket Icon',
      }, {
        indexIconToFind: 'File Upload',
        fakeIconName: 'Arrow Right To Bracket Icon',
      }, {
        indexIconToFind: 'File Upload',
        fakeIconName: 'Arrow Down From Bracket Icon',
      }, {
        indexIconToFind: 'File Upload',
        fakeIconName: 'Arrow Left From Bracket Icon',
      }, {
        indexIconToFind: 'File Upload',
        fakeIconName: 'Arrow Up To Bracket Icon',
      }, {
        indexIconToFind: 'Apps',
        fakeIconName: 'Grid 3 Outline Icon',
      }, {
        indexIconToFind: 'Help Circle',
        fakeIconName: 'Question Icon',
      }, {
        indexIconToFind: 'Help Circle',
        fakeIconName: 'Question Circle Icon',
      }, {
        indexIconToFind: 'Home',
        fakeIconName: 'Home Outline Icon',
      }, {
        indexIconToFind: 'Sort',
        fakeIconName: 'Bars Sort Ascending Icon',
      }, {
        indexIconToFind: 'Sort',
        fakeIconName: 'Bars Sort Descending Icon',
      }, {
        indexIconToFind: 'Triangle',
        fakeIconName: 'Triangle Exclamation Icon',
      }, {
        indexIconToFind: 'Triangle',
        fakeIconName: 'Triangle Outline Icon',
      }, {
        indexIconToFind: 'Service_Reset',
        fakeIconName: 'Arrow Uturn Up Icon',
      }, {
        indexIconToFind: 'Service_Reset',
        fakeIconName: 'Arrow Uturn Right Icon',
      }, {
        indexIconToFind: 'Service_Reset',
        fakeIconName: 'Arrow Uturn Down Icon',
      }, {
        indexIconToFind: 'Mail',
        fakeIconName: 'Envelope Outline Icon',
      }, {
        indexIconToFind: 'Open in Full',
        fakeIconName: 'Arrow Bottom Right Top Left Icon',
      }, {
        indexIconToFind: 'Open in New',
        fakeIconName: 'Arrow Bottom Right From Square Icon',
      }, {
        indexIconToFind: 'Open in New',
        fakeIconName: 'Arrow Bottom Left From Square Icon',
      }, {
        indexIconToFind: 'Open in New',
        fakeIconName: 'Arrow Top Left From Square Icon',
      }, {
        indexIconToFind: 'Pointer',
        fakeIconName: 'Location Outline Icon',
      }, {
        indexIconToFind: 'Parameter',
        fakeIconName: 'Sliders Icon',
      }, {
        indexIconToFind: 'Refresh',
        fakeIconName: 'Rotate Left Icon',
      }, {
        indexIconToFind: 'Redo',
        fakeIconName: 'Undo Icon',
      }, {
        indexIconToFind: 'Reset Wrench',
        fakeIconName: 'Rotate Right Wrench Icon',
      }, {
        indexIconToFind: 'Share iOS',
        fakeIconName: 'Right From Square Icon',
      }, {
        indexIconToFind: 'Share iOS',
        fakeIconName: 'Down From Square Icon',
      }, {
        indexIconToFind: 'Share iOS',
        fakeIconName: 'Left From Square Icon',
      }, {
        indexIconToFind: 'Snapshot',
        fakeIconName: 'Scan Icon',
      }, {
        indexIconToFind: 'Snapshot',
        fakeIconName: 'Scan Magnifier Icon',
      }, {
        indexIconToFind: 'Snapshot',
        fakeIconName: 'Qrcode Icon',
      }, {
        indexIconToFind: 'Snapshot',
        fakeIconName: 'Scan Qrcode Icon',
      }, {
        indexIconToFind: 'Snapshot',
        fakeIconName: 'Barcode Icon',
      }, {
        indexIconToFind: 'Send',
        fakeIconName: 'Paper Plane Top Icon',
      }, {
        indexIconToFind: 'Snapshot',
        fakeIconName: 'Scan Barcode Icon',
      }, {
        indexIconToFind: 'Screenshot',
        fakeIconName: 'Screen Icon',
      }, {
        indexIconToFind: 'Screenshot',
        fakeIconName: 'Fullscreen Icon',
      }, {
        indexIconToFind: 'Screenshot',
        fakeIconName: 'Fullscreen Exit Icon',
      }, {
        indexIconToFind: 'Support',
        fakeIconName: 'Lifering Plus Icon',
      }, {
        indexIconToFind: 'Tool Corrected Filled',
        fakeIconName: 'Wrench Icon',
      }, {
        indexIconToFind: 'Thermostat',
        fakeIconName: 'Thermometer Lines Icon',
      }, {
        indexIconToFind: 'Update',
        fakeIconName: 'Clock Rotate Left Icon',
      }, {
        indexIconToFind: 'Signal Cellular',
        fakeIconName: 'Signal Slash Icon',
      }, {
        indexIconToFind: 'Signal Cellular',
        fakeIconName: 'Signal Weak Icon',
      }, {
        indexIconToFind: 'Signal Cellular',
        fakeIconName: 'Signal Fair Icon',
      }, {
        indexIconToFind: 'Signal Cellular',
        fakeIconName: 'Signal Good Icon',
      }, {
        indexIconToFind: 'Workshop',
        fakeIconName: 'Credit Card Dollar Icon',
      }, {
        indexIconToFind: 'Workshop',
        fakeIconName: 'Laptop Smartphone Icon',
      }, {
        indexIconToFind: 'Workshop',
        fakeIconName: 'Certificate Icon',
      }, {
        indexIconToFind: 'Workshop',
        fakeIconName: 'Certificate Outline Icon',
      }, {
        indexIconToFind: 'indicator M',
        fakeIconName: 'Circle Icon',
      }, {
        indexIconToFind: 'Workshop',
        fakeIconName: 'Language Icon',
      }, {
        indexIconToFind: 'Radio Button Selected',
        fakeIconName: 'Circle Radio Icon',
      }, {
        indexIconToFind: 'Add Circle',
        fakeIconName: 'Plus Circle Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Minus Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Minus Circle Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Minus Circle Outline Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Square Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Plus Square Icon',
      }, {
        indexIconToFind: 'Square',
        fakeIconName: 'Plus Square Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Plus Square Outline Icon',
      }, {
        indexIconToFind: 'Close',
        fakeIconName: 'Xmark Circle Icon',
      }, {
        indexIconToFind: 'Close',
        fakeIconName: 'Xmark Square Icon',
      }, {
        indexIconToFind: 'Close',
        fakeIconName: 'Xmark Square Outline Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Minus Square Outline Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Minus Square Outline Icon',
      }, {
        indexIconToFind: 'Add',
        fakeIconName: 'Minus Square Outline Icon',
      },
    ])

    this._icons = this._icons
      .map( mapNewIcons );
  }


  static styles = css`
    :host {
      display: block;
    }
    #sticky {
      position: sticky;
      top: 0;
      background: white;
      padding: 8px
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
