import { readFile, writeFile } from 'node:fs/promises';
import jsdom from 'jsdom';

readFile( './src/assets/icons-old.svg', 'utf8' ).then( data => {
  console.log( data );
  const dom = new jsdom.JSDOM( data );
  // const svg = parser
  //   .parseFromString(data , "image/svg+xml")
  //   .getElementsByTagNameNS("http://www.w3.org/2000/svg", "svg")
  // .item( 0 );
  const groups = dom.window.document.querySelectorAll( 'svg > g' );
  [...groups].forEach( group => {
    writeFile( `./src/assets/icons-old/${group.id}.svg`, `<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g transform="${ group.getAttribute( 'transform')}">${ group.innerHTML }</g>
</svg>` );
    // console.log( group.id );

  });
})

