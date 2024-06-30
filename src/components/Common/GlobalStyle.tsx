import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

export const defaultStyle = css`
  @font-face {
    font-family: 'MangoDdobak-B';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/MangoDdobak-B.woff2')
      format('woff2');
    font-weight: 300;
    font-style: thin;
  }
  @font-face {
    font-family: 'MangoDdobak-B';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/MangoDdobak-B.woff2')
      format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'MangoDdobak-B';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/MangoDdobak-B.woff2')
      format('woff2');
    font-weight: 700;
    font-style: bold;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'MangoDdobak-B', sans-serif;
  }

  #___gatsby {
    background-color: #ffffff;
    height: 100vh;
  }

  footer {
    color: #262626;
  }

  .dark {
    #___gatsby {
      background: #202020;
    }
    -webkit-font-smoothing: antialiased;
    background: #202020;
    color: #ffffff;
    body {
      background: #202020;
    }
    main {
      background: #202020;
    }
    footer {
      background: #202020;
      color: #ffffff;
    }
    .bg {
      background: #202020;
      color: #ffffff;
    }
    .postHead {
      color: #ffffff;
    }
    p {
      color: #d5d3d1;
    }
    .postTitle {
      color: #ffffff;
    }
    /* .postItemContent {
      background-color: #292524;
      border-radius: 10px;
    } */
    .subtitle {
      color: #ffffff;
    }
    .wrapper {
      background-color: #202020;
    }
    .info-wrapper {
      color: #ffffff;
      background-color: #202020;
    }
    .md {
      color: #ffffff;
    }
    .menu {
      color: #ffffff;
    }
    .navigation {
      color: #ffffff78;
      border-bottom: 1px dotted #ffffff78;
    }
    .badge {
      fill: #ffffff;
    }
    .about {
      color: #ffffff;
    }
    .categoryItem {
      color: #ffffff;
    }
    .icon {
      fill: #ffffff;
    }
    .postItem {
      &:hover {
        background-color: #454545;
      }
    }
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
