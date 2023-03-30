// class 01 learn: introduction to DOM-Doument Object Model
// follow the note book.

// class 02 learn: understand the window object in DOM
// follow the note book.

// class 03 learn: the document object in DOM
// follow the note book.

// // class 04 learn: basic selectors in DOM manipulation
// let title = document.getElementById("head")
// console.log(title)
// let title2 = document.getElementsByClassName("headding")
// console.log(title2)
// let tagName = document.getElementsByTagName("h1")
// console.log(tagName)
// let name = document.getElementsByName("string-print")
// console.log(name)

// // class 05 learn: query selectors in DOM manipulation
// let idName = document.querySelector("#head")
// console.log(idName)

// let tagName = document.querySelectorAll("li")
// console.log(tagName)

// let className = document.querySelector(".headding")
// console.log(className)

// let name = document.querySelector('[name^="string-print"]')
// console.log(name)

// // class 06 learn: what is the difference between two selectors
// let li1 = document.getElementsByClassName("headding")
// let li2 = document.querySelectorAll("li")
// console.log(li1.constructor.name)
// console.log(li2.constructor.name)

// // class 07 learn: how to traverse dom elements
// let list = document.getElementById("list-two")
// let result = list.parentElement
// console.log(result)

// let ul = document.getElementById("unOrder")
// console.log(ul.children)

// console.log(ul.nextSibling)
// console.log(list.previousSibling)
// console.log(ul.nextElementSibling)
// console.log(list.nextElementSibling)

// // class 08 learn: how to loop throw HTML collections
// let list = document.getElementsByTagName("li")
// let lists = [...list]
// lists.forEach((list, index) => {
//     let text = list.innerHTML
//     list.innerHTML = `(${index + 1}) ${text}`
// })

// class 09 learn: how to create DOM elements
// // single element create and insert in output
// let li = document.createElement("li")
// li.className = "lists-items"
// li.innerHTML = "FIVE"
// let list = document.getElementById("unOrder")
// list.appendChild(li)

// multiple element create:
// function createElement(tagName, className, innerHTML) {
//     let tag = document.createElement(tagName)
//     tag.className = className || " "
//     tag.innerHTML = innerHTML || " "
//     return tag
// }

// let newListCreated = createElement("li", "list", "new-item")
// console.log(newListCreated)

// let p1 = createElement("p", "lead", "This is a new paragraph.")
// console.log(p1)

// let div = createElement("div", "super", "I am Kajal.")
// div.appendChild(p1, div)
// console.log(div)

// let container = document.getElementById("unOrder")
// container.appendChild(div)

// // class 10 learn: insert adjacent element in js
// function newElement(tagName, className, innerHTML) {
//     let tag = document.createElement(tagName)
//     tag.className = className || " "
//     tag.innerHTML = innerHTML || " "

//     return tag
// }

// let div = newElement("div", "content", "position placement:")
// let li = newElement("li", " ", "beforebegin")
// let li2 = newElement("li", " ", "afterbegin")
// let li3 = newElement("li", " ", "beforeend")
// let li4 = newElement("li", " ", "afterend")

// let contentNameAdd = document.getElementById("head")
// contentNameAdd.appendChild(div)
// contentNameAdd.insertAdjacentElement("beforebegin", div)

// contentNameAdd.insertAdjacentElement("beforebegin", li)
// contentNameAdd.insertAdjacentElement("beforebegin", li2)
// contentNameAdd.insertAdjacentElement("beforebegin", li3)
// contentNameAdd.insertAdjacentElement("beforebegin", li4)

// console.log(contentNameAdd)

// // class 11 learn: update and remove any DOM element
// let elementUpdate = document.getElementById("unOrder")
// setTimeout(() => {
//     elementUpdate.firstElementChild.innerHTML = elementUpdate.firstElementChild.innerHTML + "(modified)"
// }, 3000)

// setTimeout(() => {
//     elementUpdate.lastElementChild.remove()
// }, 2000)

// let classNameUpdate = document.getElementById("main")
// classNameUpdate.className = "main-container"
// console.log(classNameUpdate)

// // class 12 learn: how to clone node icluding it's child element
// let listItem = document.getElementById("unOrder")
// let lastItem = listItem.lastElementChild.cloneNode(true)
// lastItem.innerHTML = "five"
// listItem.appendChild(lastItem)

// // class 13 learn: how to deal with attributes in DOM manipulation
// let setAttribute = document.getElementById("cloned")

// setAttribute.setAttribute("id", "attr")
// setAttribute.setAttribute("class", "attrOfClass")

// let item = document.getElementById("main")
// item.id = "mainId"
// item.className = "mainClass"

// console.log(item.attributes)
// console.log(item.id)
// console.log(item.className)

// // class 14 learn: how to work with styles in DOM
// let topHeader = document.getElementById("cloned")

// let styleObject = {
//     color: "gray",
//     backgroundColor: "black"
// }

// ;[...topHeader.children].forEach(() => Object.assign(style, styleObject))
// Object.assign(topHeader.style, styleObject)

// class 15 learn: introducing events in DOM manipulation
// // click event:
// let button = document.getElementById("button")
// button.onclick = function (e) {
//     alert("done!")
// }

// // pointer place determine:
// let pointer = document.getElementById("boxId")
// pointer.addEventListener("mousemove", function(e) {
//     document.getElementById("x-value").innerHTML = e.offsetX
//     document.getElementById("y-value").innerHTML = e.offsetY
    
//     if(e.offsetX === 100 && e.offsetY === 100) {
//         alert("You are right place now!")
//     }
// })

// // if click the button, will be add data in list:
// let list = document.getElementById("unOrder")

// let button = document.getElementById("button")
// button.addEventListener("click", function(e) {
//     let item = list.lastElementChild.cloneNode(true)
//     item.innerHTML = "five"
//     list.appendChild(item)
// })

// // class 16 learn: event delegation in DOM
// let list = document.getElementById("unOrder")
// ;[...list.children].forEach(li => {
//     li.addEventListener("click", function(e) {
//         e.target.remove()
//     })
// })

// let lists = document.getElementById("unOrder")

// let btn = document.getElementById("button")
// btn.addEventListener("click", function(e) {
//     let item = lists.lastElementChild.cloneNode(true)
//     item.innerHTML = "new item"
//     lists.appendChild(item)
// })
// lists.addEventListener("click", function(e) {
//     if(this.contains(e.target)) {
//         e.target.remove()
//     }
// })

// // class 17 learn: input elements and event handling
// let nam = document.getElementById("name")
// nam.addEventListener("keypress", function(e) {
//     if(e.key === "Enter") {
//         document.getElementById("msg").innerHTML = `Your name is ${e.target.value}`
//         e.target.value = " "
//     }
// })

// // class 18 learn: check box and event handling
// let skills = document.getElementsByName('skills')
// let selected = document.getElementById('selected')
// let checkedSkill = []
// ;[...skills].forEach(skill => {
//     skill.addEventListener('change', function(e) {
//         if(e.target.checked) {
//             checkedSkill.push(e.target.value)
//             outputSkills(selected, checkedSkill)
//         } else {
//             let ind = checkedSkill.indexOf(e.target.value)
//             checkedSkill.splice(ind, 1)
//             outputSkills(selected, checkedSkill)
//         }
//     })
// })
// function outputSkills(parent, skills) {
//     let result = ''
//     skills.forEach((skill, index) => {
//         result += `(${index + 1} ${skill})`
//     })
//     parent.innerHTML = result
// }

// // class 19 learn: list item and input event handling
// let list = document.getElementById('unOrder')
// let btn = document.getElementById('button')
// btn.addEventListener('click', function (e) {
//     let newItem = list.lastElementChild.cloneNode(true)
//     newItem.innerHTML = 'Rename'
//     newItem.style.color = 'gray'
//     list.appendChild(newItem)
//     list.addEventListener('dblclick', function (event) {
//         if(this.contains(event.target)) {
//             let innerText = event.target.innerText
//             event.target.innerHTML = ''
//             let inputBox = CreateInputBox(innerText)
//             event.target.appendChild(inputBox)

//             inputBox.addEventListener('keypress', function(events) {
//                 if(events.key === 'Enter') {
//                     event.target.innerHTML = events.target.value
                    
//                 }
//             })
//         }
//     })
// })

// function CreateInputBox(value) {
//     let inp = document.createElement('input')
//     inp.type = 'text'
//     inp.className = 'form-control'
//     inp.value = value

//     return inp
// }

// class 20 learn: how to handle form data in dom:
/**
 * DOM event types
* mouse events ( MouseEvent ): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu.

* touch events ( TouchEvent ): touchstart, touchmove, touchend, touchcancel.

* keyboard events ( KeyboardEvent ): keydown, keypress, keyup.

* form events: focus, blur, change, submit.
 */
// let form = document.getElementById('form')
// form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     let data = {}
//     ;[... this.elements].forEach(el => {
//         if(el.type != 'submit') {
//             data[el.name] = el.value
//         }
//     })
//     console.log(data)
//     this.reset()
// })

// // class 21 learn: how to validate form data in dom
// let form = document.getElementById('second-form')
// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     let name = document.getElementById('fname')

//     name.addEventListener('keypress', function (e1) {
//         if (e1.key === 'Enter') {
//             alert('Try again & check your name!')
//         }
//     })

//     document.getElementById('output1').innerHTML = name.value

//     this.reset()
// })

// // class 22 learn: ajax how to send get request and display data
// let load = document.getElementById('load')
// let postList = document.getElementById('posts')

// const url = 'https://jsonplaceholder.typicode.com/posts'

// load.addEventListener('click', function() {
//     fetch(url)
//         .then(res => res.json())
//         .then(posts => {
//             posts.forEach((post, ind) => {
//                 let items = liItem(post, ind + 1)
//                 postList.appendChild(items)
//             })
//         })
// })

// function liItem(item, no) {
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     li.innerHTML = `${no} .${item.title}`

//     return li
// }

// // class 23 learn: ajax how to send post request and display data
// let postForm = document.getElementById('post-form')
// let posts = document.getElementById('posts')

// const url = 'https://jsonplaceholder.typicode.com/posts'

// postForm.addEventListener('submit', function(e) {
//     e.preventDefault()

//     let title = this.title.value
//     let body = this.body.value

//     if(title && body) {
//         let postObj = {
//             userId: 100,
//             title, 
//             body
//         }

//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'Application/JSON'
//             },
//             body: JSON.stringigy(postObj)
//         })

//         .then(res => res.json())
//         .then(post => {
//             let items = listItem(post)
//             posts.appendChild(items)
//             this.reset()
//         })
//         .catch(e => console.log(e.message))
//     } else {
//         console.log('Please Provide Every Details')
//     }
// })

// function listItem(item) {
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     li.innerHTML = `${item.id}. ${item.title} by userID - ${item.userId}`

//     return li
// }

// class 24 learn: conclusion of dom manipulation in js
/**
 * more something important dom manipulation following: 
 * these are also should know contiguously:
 * 
 * canvas
 * svg
 * drag and drop
 * transitions
 * location
 * audio, video
 * speech recognition
 * web socket
 * local storage, cookies and browser databases
 * 
 * DOM chapter is close here.
 */