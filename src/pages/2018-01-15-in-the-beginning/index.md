---
path: "/in-the-beginning"
date: "2018-01-15"
title: "用 Gatsby 來建立一個部落格"
tags: ['前端', 'Gatsby', 'React', 'HowTo']
excerpt: ""
---

在 2017 年底我參加了 iT 邦幫忙辦的鐵人賽，挑戰連續三十天不中斷的發文，而我寫的主題是**Chrome 開發者工具**，在經歷痛苦的三十天後 XD，我跟隊友一起完成了這個比賽。比賽完之後因為~~手有點癢~~發現寫文章其實沒有我想像中這麼難，並且我一直以來不寫的藉口之一：沒有時間，好像也不是這麼大的一個問題；再加上 egghead 最近剛好有一個課程在教怎麼用 Gatsby 來建立一個部落格，所以我就立馬架了一個部落格(你現在正在看的這篇文章就是喔 XD)，所以我就想說新的一年來寫點文章吧。

而我這篇文章主要記錄的內容會是在用 Gatsby 架完這個部落格之後的調整，前面的怎麼安裝 Gatsby 還有一些基礎的頁面設置及發佈，你可以看 egghead 的課程。喔？你沒有訂閱 egghead，沒關係，作者的原始碼放在 GitHub 上，所以我們可以：

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
npm install
```

開始開發

```sh
 gatsby develop
```