---
path: '/swift-fundamental'
date: '2021-04-15'
title: 'Swift fundamental'
tags: ['iOS', 'Swift', 'Xcode', 'IDE']
excerpt: ''
---

This is a beginner's guide that walks you through some of Swift's language cores

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

### Closure

```swift
struct Book {
  var title: String
  var authorLastName: String
  var authorFirstName: String
  var readingAge: Int
  var pageCount: Int
}


let book1 = Book(title: "Where the Wild Things Are", authorLastName: "Sendak", authorFirstName: "Maurice", readingAge: 4, pageCount: 48)
let book2 = Book(title: "The Little Prince", authorLastName: "de Sanit-Exupery", authorFirstName: "Antoine", readingAge: 10, pageCount: 96)
var book3 = Book(title: "Oh, the Places You'll Go", authorLastName: "Seuss", authorFirstName: "Dr.", readingAge: 10, pageCount: 56)
var book4 = Book(title: "Goodnight Moon", authorLastName: "Wise Brown", authorFirstName: "Margaret", readingAge: 1, pageCount: 30)
var book5 = Book(title: "The Hobbit", authorLastName: "Tolkien", authorFirstName: "J.R.R", readingAge: 12, pageCount: 300)

let allBooks = [book1, book2, book3, book4, book5]

// Covert a verbose closure to a one liner
// The `in` keyword is needed in order to separate the type and function definition
var sortedBooks = allBooks.sorted(by: { (firstBook: Book, secondBook: Book) -> Bool in
  if firstBook.readingAge < secondBook.readingAge {
    return true
  } else {
    return false
  }
})

// Some concept here:
// `$n` represents the parameters
// Since this function only returns one thing, we can omit the `return` keyword
// trailing closure is used, so we don't have to put our closure in `sorted(by: {...})` and instead `sorted {...}`
var sortedBooks = allBooks.sorted { $0.readingAge < $1.readingAge }

print(sortedBooks) // outputs the sorted array

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

### Class

> In swift, there's no need to use `new` keyword for creating a new class like
> in JS

```swift
class Appliance {
  // Properties
  var manufacturer: String
  var model: String
  var voltage: Int
  var capacity: Int?


  // Initializer, no need for `func` keyword, this func is called when a new class is initilized
  init() {
    self.manufacturer = "Default manufacturer"
    self.model = "Default model"
    self.voltage = 120
  }

  // Deinitializer - only allowed in a class
  deinit {
    // Perform cleanup code here...
    // Release a file resource
    // Release a netword resource
  }

  // Methods
  func getDetails() -> String {
    var message = "This is the \(self.model) from \(self.manufacturer)."
    if self.voltage >= 220 {
      message += " This model is for European usage."
    }

    return message
  }

  // Final keyword prevent this method from override by SubClass
  final func doNothing() {
    print("This does nothing :(")
  }
}

var kettle = Appliance()

print(kettle.manufacturer) // "Default manufacturer"

// Create a Sub class

class Toaster: Appliance {

  // New properties
  var slices: Int

  // Override Super class init
  override init() {
    self.slices = 2

    // Call Super class' method
    super.init()
  }

  // New method
  func toast() {
    print("Irradiating now...")
  }
}

var toaster = Toaster()

toaster.toast() // Irradiating now...

```

### Extension

```swift
// Use extension to easily adding new functionalities to existing structs
extension String {
  func removeSpaces() -> String {
    let filtered = self.filter { $0 != " "}
    return String(filtered)
  }
}


let album = "Decks and drums and rock and roll"
let scriptio = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
let phrase = "Nothing stops love"

print(album.removeSpaces()) // Decksanddrumsandrockandroll
print(scriptio.removeSpaces()) // Nequeporroquisquamestquidoloremipsumquiadolorsitamet
print(phrase.removeSpaces()) // Nothingstopslove

```

Main differences between `classes` and `structs`

1. Classes are by reference type, struct are by value type
2. structs have member wide init method
3. Only classes have inheritance, not `struct` or `enum`
