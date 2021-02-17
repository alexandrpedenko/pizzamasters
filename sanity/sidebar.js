import React from 'react'
import S, { listItem } from "@sanity/desk-tool/structure-builder"

const Sidebar = () => {
  return S.list().title(`Pizza Masters`).items([
    // create new sub item
    S.listItem().title('Home Page')
      .child(
        S.editor()
        .schemaType('storeSettings')
        .documentId('home')
      ),
      ...S.documentTypeListItems().filter( (item) =>item.getId() !== 'storeSettings' )
  ]);
}

export default Sidebar
