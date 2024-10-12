import { Dataset } from "./icontable-app";


interface NewIcon {
  indexIconToFind: string,
  fakeIconName: string,
}

const spliceNewIcons = ( icons: Dataset[], newIcons: NewIcon[]  ) => {

  newIcons.forEach( newIcon => {
    const index = icons.findIndex( icon => icon.oldIconName === newIcon.indexIconToFind );
    if( index > -1 ) {
      // @ts-ignore
      icons = icons.toSpliced( index, 0, {
        oldIcon: null,
        oldIconName: newIcon.fakeIconName,
      } );
    }
  } )
  return icons;
}

export default spliceNewIcons;
