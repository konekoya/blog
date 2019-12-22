---
path: "/in-the-beginning"
date: "2018-01-15"
title: "用 Gatsby 來建立一個部落格"
tags: ["前端", "Gatsby", "React", "HowTo"]
excerpt: ""
---

在 2017 年底我參加了 iT 邦幫忙辦的鐵人賽，挑戰連續三十天不中斷的發文，而我寫的主題是**Chrome 開發者工具**，在經歷痛苦的三十天後 XD，我跟隊友一起完成了這個比賽。比賽完之後因為~~手有點癢~~發現寫文章其實沒有我想像中這麼難，並且我一直以來不寫的藉口之一：沒有時間，好像也不是這麼大的一個問題；再加上 [egghead](http://egghead.io/) 最近剛好有一個課程: [Build a Blog with React and Markdown using Gatsby
](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby)在教怎麼用 Gatsby 來建立一個部落格，所以我就立馬架了一個部落格(你現在正在看的這篇文章就是喔 XD)，新的一年來寫點文章吧。

而我這篇文章主要記錄的內容會是在用 Gatsby 架完這個部落格之後的調整，前面的怎麼安裝 Gatsby 還有一些基礎的頁面設置及發佈，你可以看 egghead 的課程。喔？你沒有訂閱 egghead？~~趕快去訂閱啊啊啊~~ 沒關係，作者的原始碼放在 [GitHub](https://github.com/eggheadio-projects/gatsby-demo-blog-code) 上，所以我們可以：

先複製一份原始碼到你的電腦上

```sh
git clone https://github.com/eggheadio-projects/gatsby-demo-blog-code.git
```

切換到這個資料夾裡

```sh
cd gatsby-demo-blog-code
```

安裝相依套件

```sh
# 如果你是使用 npm，那請使用 npm install
yarn
```

開始開發

```sh
 gatsby develop
```

現在打開你的 `localhost:8000` 你應該就會看到你的部落格了。

## Linting

這幾年在開始一個新專案的時候，我都要先導入的工具之一就是 [ESLint](https://eslint.org/)，它可以在程式還沒有執行前就先在編輯器裡幫我們做一些靜態的檢查，它分成了兩大部份，一種是程式面的問題檢查，像是：你宣告了變數，但這個變數最後沒有用到，或是你在開發時使用了 debugger 關鍵字，但是沒有移除掉。 另一種檢查是程式排版樣式的檢查，像是 Array 或是 Object 號前後要不要加上一個額外的空白，String 值要用單引號還是雙引號這種不會影響程式運作，而是程式設計者的寫作偏好。
