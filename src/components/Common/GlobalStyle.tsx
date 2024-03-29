import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

export const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  #___gatsby {
    background-color: #fafaf9;
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
    color: #fafaf9;
    body {
      background: #202020;
    }
    main {
      background: #202020;
    }
    footer {
      background: #202020;
      color: #fafaf9;
    }
    .bg {
      background: #202020;
      color: #fafaf9;
    }
    .postHead {
      color: #fafaf9;
    }
    p {
      color: #d5d3d1;
    }
    .postTitle {
      color: #fafaf9;
    }
    /* .postItemContent {
      background-color: #292524;
      border-radius: 10px;
    } */
    .subtitle {
      color: #fafaf9;
    }
    .wrapper {
      background-color: #202020;
    }
    .info-wrapper {
      color: #fafaf9;
      background-color: #202020;
    }
    .md {
      color: #fafaf9;
    }
    .menu {
      color: #fafaf9;
    }
    .navigation {
      color: #fafaf978;
      border-bottom: 1px dotted #fafaf978;
    }
    .badge {
      fill: #fafaf9;
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
