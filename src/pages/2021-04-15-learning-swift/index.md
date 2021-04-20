---
path: '/learning-swift'
date: '2021-04-15'
title: '學習 Swift'
tags: ['iOS', 'Swift', 'Learning']
excerpt: ''
---

## 為什麼要學習這個語言

因為工作的需要這陣子開始要學習 Swift 這個語言，在學習結束前我們公司常例會做一點
學習後的分享，所以我想剛好也利用這個機會把一些學習的心得跟學習的資源整理成幾篇文
章

## 整理中的學習資料

前陣子跟 [Cory House](https://github.com/coryhouse) 學習到一種用 Repo 來整理資源
的方式，所以我自己也整理了一個
[Swift links](https://github.com/konekoya/swift-links/blob/main/README.md)，這個
Repo 裡包含我所有學習中使用到的資源

> 如果你對 JavaScript 有興趣也可以看一下我已經整理一段時間的
> [JavaScript Links](https://github.com/konekoya/javascript-links)

有別於我平常寫的筆記，這些資源通常都只有"連結"，Cory 自己的方式是用 issue 來整理
，但我自己不是很喜歡，反而把連結都放在同一個 `README.md` 裡是我自己比較順手的方
式，並且等內容多了後可以再做一點索引放在 Markdown 檔案的上方就可以了 (Awesome 系
列的 Repo 也是用這種方式來整理)

言歸正傳，我想從
[Swift links](https://github.com/konekoya/swift-links/blob/main/README.md) 中推
薦幾個我覺得最棒的學習資源：

- [Your First iOS and SwiftUI App: An App From Scratch](https://www.raywenderlich.com/17493408-your-first-ios-and-swiftui-app-an-app-from-scratch/)

  raywenderlich.com 這個網站提供非常多學習的資源，有影片也有書，我自己個人是很喜
  歡用影片來學習。雖然不是所有東西都是免費的，但是光是免費的資源就很夠用了，上面
  的這個影片很棒的部份在於不只是提供了 Swift 這個語言本身的學習，也包含了最新的
  Swift UI 的介紹跟實作，而且在課程中你可以實際的打造一個可以運作的 iOS App 💯

- [Learn Swift by Codecademy](https://www.codecademy.com/learn/learn-swift)

  這也是我很喜歡的網站之一，它的互動式學習方式對於我這種不喜歡一直讀文件的人真的
  是福音 😆，雖然免費的內容不多，但是整個走一遍後，我自己覺得是對這個語言本身可
  以有一定層度的熟悉了

- [iOS 14 Getting Started](https://app.pluralsight.com/library/courses/ios-14-fundamentals/table-of-contents)

  這應該是這一陣子我所接觸的學習 iOS 資源中最棒的一個課程，特別是 SwiftUI 的內容
  ，深入淺出，裡面也會帶到一些 Xcode 的基本操作，最終會打造一個可以運作的簡單
  App 但是整個過程中會學到開發 iOS 的幾個重要觀念，超推薦

  > 這不是免費資源，不過其實如果你註冊一個免費的 Visual studio 的帳號，裡面有提
  > 供一個月的免費 PluralSight 訂閱

- [Swift Fundamentals](https://app.pluralsight.com/library/courses/swift3-fundamentals/table-of-contents)

  一樣是 PluralSight 的課程，在開始上面的 iOS 14 Getting Started 課程前，最好可
  以先把這個課程看完，這個課程的老師蠻有趣的，裡面會把 Swift 這個語言的幾個重要
  概念帶過一遍，也是個很棒的課程

## REPL (Read, evaluate, print, loop)

Swift also support REPL for fast debugging or just play with the language, open
a terminal and enter `swift` in the prompt. To quite, type `:q` or `:quite`

## Swift playground

This is probably by far the best way (at least for me) to test some Swift built
in API or just play with the language itself. It supports auto completion and
can be re-run automatically. Pretty cool!

> There's also an online [Swift playground](http://online.swiftplayground.run/)
> that you can quickly tes t your code with.
