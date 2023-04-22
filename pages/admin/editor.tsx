import React from 'react'
import Head from 'next/head'
import { Admin, Editor } from 'react-bricks'

const AdminEditor: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>EditorX- Ekansh web</title>
      </Head>
      <Editor />
    </Admin>
  )
}

export default AdminEditor
