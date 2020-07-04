import './App.css'

import React, { useEffect, useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import Images from './tools/images'
import Home from './pages/page'
import NoSsrExamplePage from './pages/page-docs'
import RichText from './tools/richtext'

const App = () => {
	const editor = useMemo(() => withReact(createEditor()), [])
	// Add the initial value when setting up our state.
	const [value, setValue] = useState([
		{
			type: 'paragraph',
			children: [{ text: 'A line of text in a paragraph.' }],
		}
	]as any)
	return (
		<Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"
		/>
		<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
		/>
			{/* <Editable /> */}
			<Images />
			<RichText />
			{/* <Home /> */}
{/* <NoSsrExamplePage /> */}
		</Slate>
	)
}
export default App

