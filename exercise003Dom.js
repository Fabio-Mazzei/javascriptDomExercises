/* Exercise 3. Insert a string with the content "Hello"" in the HTML document and then create a paragraph element and insert "Bye" in the paragraph created. Do these steps from the Javascript code. */

const body = document.body
body.append("Hello")

const paragraph = document.createElement("p")
body.append(paragraph)
paragraph.innerText = "Bye"