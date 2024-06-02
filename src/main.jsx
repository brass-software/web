import * as React from 'react'
import * as Server from 'react-dom/server'

// Step 1: Fetch /meta to gather type info.
// Step 2: Fetch the data.
// Step 3: Render the UI.

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
