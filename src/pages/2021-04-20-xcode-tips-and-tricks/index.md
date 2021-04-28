---
path: '/xcode-tips-and-tricks'
date: '2021-04-20'
title: 'Xcode tips and tricks'
tags: ['iOS', 'Swift', 'Xcode', 'IDE']
excerpt: 'The primary IDE for ISO/Swift development are Xcode'
---

> This post will be edited as I'm still in the process of learning iOS
> development and Xcode :)

The primary IDE for ISO/Swift development are Xcode

### Keyboard shortcuts

Note that if you ever forget these shortcuts, use `cmd` + `?` and type keywords
to search the keyboard shortcuts

#### Some basic keyboard shortcuts

`cmd` + `opt` + `P`: Resume preview

`cmd` + `R`: Build and run the IOS device simulator

`cmd` + `.`: Stop the simulator

`cmd` + `U`: Run unit tests

`cmd` + `B`: Build the app

`cmd` + `shift` + `L`: Open SwiftUI library

#### Editor panels

- `cmd` + `opt` + `0`: Toggle inspector
- `cmd` + `enter`: Only display editor
- `cmd` + `opt` + `enter`: Toggle canvas
- `cmd` + `0`: Toggle navigator
  - `cmd` + `1`: Open project navigator
  - `cmd` + `5`: Open issue navigator
- `cmd` + `shift` + `Y`: Toggle debug area
- `cmd` + `J`: Move focus between different editors

#### Projects and Files

- `cmd` + `N`: To create a new file
- `cmd` + `shift` + `N`: To create a new project
- `cmd` + `O` and select _xcodeproj_ file in the project to open a previous
  project
- `cmd` + `` ` `` : Cycle through the opened projects
- `cmd` + `shift` + `0`: Open Developer Documentation

#### Navigate between your project

`cmd` + `shift` + `O`: To open the open quickly palette

- You can search not only the file but also the methods or even properties as
  well
- Jump between previous and next search result by using `cmd` + `ctrl` + left
  arrow key or right arrow key
- You can hold the `opt` key with the file you just found to open it in
  assistant editor (split view)

`cmd` + `ctrl` + mouse click (or use `J` key): Jump to definition

- Same like open quickly, you can use `cmd` + `ctrl` + left arrow key or right
  arrow key to jump between files
- Use `cmd` + `opt` + `ctrl` + `J`: You can jump to the definition and open it
  in the assistant editor

`cmd` + `shift` + `[`: Navigate to the previous (on the left hand side) tab

`cmd` + `shift` + `]`: Navigate to the next tab

#### Fix code indentation

Select everything with `cmd` + `A` and then hit `ctrl` + `I`

#### Code editing

- `cmd` + `Z`: Undo
- `cmd` + `shift` + `Z`: Redo
- `cmd` + `C`: Copy
- `cmd` + `V`: Paste
- `cmd` + `X`: Cut
- `cmd` + `opt` + `E`: Select next occurrence
- `ctrl` + `shift` + mouse click: Selecting multiple lines
- `cmd` + `opt` + `[`: Move current line up one line
- `cmd` + `opt` + `]`: Move current line down one line
- Hold the `cmd` key and hover over the curly braces: Xcode will show you the
  matching curly braces. And double click will highlight the entire body of the
  selected curly braces
- Hold the `cmd` key and mouse click on the SwiftUI element (Or, use keyboard
  shortcut: `cmd` + `shift` + `A` ) will bring up the context menu. Here many
  useful actions can be used:
  - Extract: you can extract code to method or variable or even to `SubView`s.
  - Embed: just like extract, you can embed selected code with a wrapper, like
    `VStack`, `HStack` or a `List`
- `ctrl` + `opt` + mouse click on a SwiftUI element will bring up the inspector

#### Jump bar

- `ctrl` + 6: Open the Jump bar, you can use arrow key to cycle thru content
- You can type keyword to filter jump bar content while the Jump bar is active
- `MARK`, `TODO`, `FIXME` are keywords that you can add in your source code and
  these keywords will be listed and selectable in the Jump bar

#### Minimap

- `cmd` + `ctrl` + `shift` + `M`: Toggle minimap
- `MARK` can be seen on minimap

### Nice default:

- **Code folding**: code folding can be useful when you're editing a large
  source code file and you just want to temporary hide some source code. You can
  enable this by go to preferences -> Text Editing, and check **Code folding
  ribbon**

  Now, jump back to your code, you should able to toggle code sections by click
  on the icons next to the line numbers

  > You can also expand the folded section by double click on the `...`

- **Minimap**: Minimap is also something I miss coming from web development. You
  can enable this by going to Editor -> Minimap. Or use the shortcut we have
  seen in the previous section

- **Theme**: I don't like the default theme by Xcode, you can go to preferences
  -> Themes and pick one that you like. Another option is to use a custom theme
  by someone like this [one](https://draculatheme.com/xcode)

- **Keyboard shortcuts**: Some of the shortcuts in Xcode are really hard for me
  to re-learn (I've used VScode for years) and so I've done some small tweaks
  which make me really happy with Xcode :)
  - Add a delete line: `cmd` + `K`
  - Change open quickly to: `cmd` + `P` (I have no idea why Xcode use `cmd` +
    `p` for print...)
  - Change move a line up and down to: `opt` + up and down arrow keys
  - Change show (toggle) debug area: `cmd` + `T`
