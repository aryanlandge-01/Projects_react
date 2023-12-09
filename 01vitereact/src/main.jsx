import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
    'a',
    {href: "https://chat.openai.com", target: '_blank'},
    'Click me to visit chatgpt'
)


ReactDOM.createRoot(document.getElementById('root')).render(
     <App/>
)
