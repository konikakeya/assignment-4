### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Ans:   getElementById() is used when selecting one element by ID (fastest, simple). getElementsByClassName() is used when you specifically need a live collection. querySelector() is used when you want flexibility and only need the first match. querySelectorAll()is used when you want full CSS power and multiple elements

### 2. How do you create and insert a new element into the DOM?


Ans:The first step is using the document.createElement() method. After creating it, I can add content, classes, attributes, or styles to customize it. Then, I insert it into the page using methods like appendChild, append, or prepend, depending on where I want it to appear.
### 3. What is Event Bubbling? And how does it work?


Ans:Event bubbling is a behavior in JavaScript where an event starts from the element that was triggered and then propagates upward through its parent elements.
### 4. What is Event Delegation in JavaScript? Why is it useful?


Ans: Event delegation is a technique where instead of attaching event listeners to multiple child elements, I attach a single event listener to their parent element and use the event object to determine which child triggered the event. This works because of event bubbling. It is useful because it improves performance, reduces the number of event listeners in the code, and also works for dynamically added elements. In real-world applications, especially when elements are generated dynamically, event delegation helps keep the code clean and efficient.
### 5. What is the difference between preventDefault() and stopPropagation() methods?


Ans:preventDefault() is used to stop the browser’s default behavior for an event. stopPropagation(), on the other hand, stops the event from moving up the DOM tree during the bubbling phase. So while preventDefault() stops the browser’s built-in action, stopPropagation() controls how the event travels through parent elements. Both are useful but serve different purposes.