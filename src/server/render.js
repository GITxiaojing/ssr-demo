import React from 'react';
import { renderToString } from 'react-dom/server';
import { serverRouter } from '../router'

export default (req) => {
  const content = renderToString(serverRouter(req))
  return (
    `
    <html>
      <head>
        <title>
          ssr demo
        </title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
    `
  )
}