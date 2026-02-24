  1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll ?

  Answer => 
    These methods are used to select HTML elements from the DOM in JavaScript.
    a . getElementById()
       Selects an element using its ID.
       it always returns one element.

    b. getElementsByClassName()
        Selects elements using class name
        Returns multiple elements
        Return type = HTMLCollection likely array 

    c. querySelector()
       Selects element using CSS selector
       Returns only the first matching element    

    d. querySelectorAll()
        Selects elements using CSS selector
        Returns all matching elements
        Return type = NodeList   


   2. How do you create and insert a new element into the DOM?

 Answer =>
    To creat and insert a new element into the DOM following three steps:
    a . creat ele ment 
    b . add content 
    c . insert the DOM
    Example :
    const newDiv = document.createElement("div");

      newDiv.innerText = "Hello I am new element";

      const container = document.getElementById("container");

      container.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?
   event Bubbling is a process in JavaScript where an event starts from the target element and then moves  its parent, then grandparent, and so on until the document.

   how its work : when we click a button in div so this process is called Event Flow so this flow is 
   a . the capture phase : the event starts to top and trickles down to the target .
   b . the target phase : the event occurs exactly on the element you interacted.
   c . the bubbling phase :  the event "bubbles up." If you have a click listener on the button, it fires first. Then, if the parent <div> has a listener, it fires next. This continues up through the <body>, the <html>, and finally the document and window.

 4. What is Event Delegation in JavaScript? Why is it useful?
    event delegatyion is a technique where add a event listener to a parent element and it handles events for its child element using event bubbling .
        
        it is useful beacuse 
        a. better prefomeance 
        b . dynamically created element 
            example : 
            const newBtn = document.createElement("button");
            newBtn.innerText = "New Button";

             document.getElementById("container").appendChild(newBtn);

             new button work automitically 
             no need to add new event 

4. What is the difference between preventDefault() and stopPropagation() methods?
             preventDefault()                                       stopPropagation()
         1    Stop the browser's default action                        Stop the event from bubbling to parents.

         2   The event keeps moving up the DOM.                         The event stops moving up the DOM.

         3 stop ling from open a new page                                stop a child click from triggering a parent click 

         4  stop both the action and bubbling                            does not stop multi action 