---
path: '/styled-components-tips-and-tricks'
date: '2019-12-23'
title: 'Tips for using styled-components'
tags: ['frontend', 'styled-components', 'React', 'css-in-js']
excerpt: ''
---

## 技巧 1： 你不需要把每個元件都用 styled component 包起來

剛開始在使用 styled components 的時候我常會去把每個需要套用樣式的元件都用 styled
components 包起來，像是：

```js
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
`

const H1 = styled.h1`
  font-weight: normal;
`

const H2 = styled.H2`
  font-size: 22px;
`

const Span = styled.span`
  color: #ff4400;
`

const Example = () => {
  return (
    <Header>
      <H1>
        My<Span className="highlight">Website</Span>
      </H1>
      <H2>This is an awesome site built by me :)</H2>
    </Header>
  )
}
```

這樣的程式碼寫久了之後就會發現一個問題：每次你需要給某個元件樣式時，你都需要重新
用 styled components 把那個 React 元件/HTML 元素重新命名，光是想名字就很麻煩，而
且有時候真的就只是加上一行 CSS 屬性而以。但其實 styled component 也提供了另一種
寫法，使用上比較像是 Sass/Scss 的用法：

```js
import styled from 'styled-components'

const Header = styled.header`
  display: flex;

  h1 {
    font-weight: normal;
  }

  h2 {
    font-size: 22px;
  }

  .highlight {
    color: #ff4400;
  }
`

const Example = () => {
  return (
    <Header>
      <h1>
        My<span className="highlight">Website</span>
      </h1>
      <h2>This is an awesome site built by me :)</h2>
    </Header>
  )
}
```

這樣看起來的就乾淨多了，如果一個元件的樣式比較多時，通常我還會把樣式抽出來放在另
一個檔案裡，像是這樣：

```
- components
  - componentA.js
  - componentsAStyles.js
```
