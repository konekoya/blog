---
path: '/learn-swift'
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

## IDE (integrated development environment)

The primary IDE for ISO/Swift development are Xcode

#### Keyboard shortcuts

`cmd` + `opt` + `p`: Resume preview

`cmd` + `r`: Build and run the IOS device simulator

`cmd` + `u`: Run unit tests

`cmd` + `b`: Build the app

## REPL (Read, evaluate, print, loop)

Swift also support REPL for fast debugging or just play with the language, open
a terminal and enter `swift` in the prompt. To quite, type `:q` or `:quite`

## Swift playground

This is probably by far the best way (at least for me) to test some Swift built
in API or just play with the language itself. It supports auto completion and
can be re-run automatically. Pretty cool!

> There's also an online [Swift playground](http://online.swiftplayground.run/)
> that you can quickly tes t your code with.

## Variables

The first thing that really makes me puzzled is that swift uses `let` instead of
`const` to represent constants. For years, I've used `const` to declare
constants in JavaScript land and so whenever trying to declare a constant in the
swift, I have to think for a sec or two.

```swift
var str = "Learning isn't always fun"

str = "Learning is fun" // can be changed
```

> So `Let` is the new `const` in swift

#### String interpolation

Swift uses rather an interesting syntax for the string interpolation (Okay,
that's only a view from a Frontend dev 🧐 ), let's see an example:

```swift
let name = "John"

print("Hi, my name is \(name)") // Hi, my name is John
```

Variables inside that `\()` will be interpolated into string. This also apply to
other types like numbers

```swift
let name = "John"
let age = 20

print("Hi, my name is \(name) and I'm \(age) old :]") // Hi, my name is John and I'm 20 years old
```

You can also do expression inside it

```swift
let name = "John"
let isStudent = false

print("Hi, my name is \(name) and I'm \(isStudent ? "a student" : "not a student")") // Hi, my name is John and I'm not a student

```

### Dictionaries

```swift
// Defining a dictionary
var airlines = ["SWA": "Southwest Airlines", "BAW": "British Airways", "BHA": "Buddha Air", "CPA": "Cathay Pacific"]

// Add or update a value
airlines["DVA"] = "Discovery Airlines"

// Remove by setting a key to nil

airlines["BHA"] = nil

// Or by removeValue()
airlines.removeValue(forKey: "BAW")


// Looping thru the dictionary
for entry in airlines {
    print(entry.value)
}

// Or use a tuple for the key/value
for (key, value) in airlines {
    print("\(key): \(value)")
}
```

> Keep in mind, when looping thru a dictionary, it's unordered so the result
> will not be in the same sequence each time

### Tuple

```swift
// Tuple can be used to return multiple things with mixed types in a function
func getMovieDetail() -> (String, Int, String) {
    return ("Stranger Things", 2016, "The Duffer Brothers")
}

// We can "decompose" tuple values just like JS
var (title, releaseYear, director) = getMovieDetail()

print("\(title) is one of my favorite movies which is released in \(releaseYear) and directed by \(director)")

// Stranger Things is one of my favorite movies which is released in 2016 and directed by The Duffer Brothers

```

### Function

Note that in swift, functions and methods have the exact same syntax, the only
difference is where they're being declared, when functions are declare in a
`class` or `struct` we call it a **method**. Same rule apply to the variables
that are used in a `class` or `struct`, we call them **property**

#### Calling a function with Argument labels

When calling a function with Arguments in swift, you need to provide Argument
labels, for example:

```swift
func showMessage(name: String) {
  print("Hello, \(name)!")
}

// You cannot call the function without Argument labels
showMessage("Simon") // ❌  Missing argument label 'name:' in call

// Instead, you need to provide the Argument label
showMessage(name: "Simon") // Hello, Simon!
```

I know that Argument label is a bit silly, but that does make the function call
more explicit and readable. You can omit that label though:

```swift
// Add an underscore before the parameter name
func showMessage(_ name: String) {
  print("Hello, \(name)!")
}

// calling without argument label works now!
showMessage("Simon") // Hello, Simon!
```

It's also common to rename argument labels to make the function call more
readable. Some good examples from the built in API:

```swift
type(of: someThingHere)
```

Note that instead of `typeOf` like JavaScript or C like languages, the function
name is `type` then follow a parameter label of `of` and so calling it like the
above :)

And so with our previous `showMessage` function example, we can rename the
redundant `message` argument label instead of omitting it:

```swift
func show(message: String) {
  print("Hello, \(name)!")
}

// And call it like:
show(message: "Joshua")
```

### Enum

```swift
// Defining an Enum
enum MediaType {
    case book
    case movie
    case music
    case game
}

// Assign enum value to a new type
var item: MediaType = MediaType.book

// The enum name can be omitted
item = .movie
```

Remember that when using an `enum` with `switch`, it should be exhausted,
meaning all possible cases should be handled, and the `default` case can be
omitted

```swift
switch item {
case .book:
    print("Reading")
case .game:
    print("Gaming night!")
case .movie:
    print("Movie for tonight")
case .music:
    print("Hmm, some classic music would be nice!")
```

### Struct

In swift, `Struct` is a lot like `Class`, with the ability to add method or
property

```swift
struct Movie {
    // Properties
    var title: String
    var director: String
    var releaseYear: Int
    var genre: String

    // Method
    func summary() -> String {
        return "\(title) is a \(genre) film released in \(releaseYear) and directed by \(director)"
    }
}

// Struct can be initialized with it's init method
var first = Movie(title: "Arrival", director: "Denis Villeneuve", releaseYear: 2016, genre: "Science Fiction")
var second = Movie(title: "Sing Street", director: "John Carney", releaseYear: 2017, genre: "Comedy Musical")


// Accessing the property
print(first.title)


// Re-assigning the property
second.releaseYear = 2020

print(second.releaseYear)


// Calling a method
print(first.summary())

```

## SwiftUI

#### Views vs. modifiers

Views are backbone of all visuals in SwiftUI

Modifiers change how view are displayed (size, color, etc.)
