# ReactTypingComponent

This is a React component that will simulate a typing effect. This component will loop over a string array to simulate pausing in between phrases like a real person typing would. 
Component needs a string array rather than a singular string to work properly. If you would like a live example of this, check out my portfolio to see it in action 
here-https://djolley12.github.io/react-dev-portfolio/

# Uses
## Styles
### Your styles go here 
#### Assign whatever styles you want here
#### Example
```javascript
  const TypingComponentStyles = {
    fontSize: "70%",
    top: "65%",
    position: "fixed",
    width: "70%",
    left: "15%"
  }
  ```
## String Array
#### Pass String Array To Component 
#### Example
```javascript
  const textArrayOne = [
    "Assign a text array here. ", "This will make your ", "typing effect pause in between phrases to ", "simulate real typing."
  ];
  
  const textArrayTwo = ["If you want a second phrase to type out after deleting the first one, ", "add a second array like so. "];
  ```
## Use the Component as listed below
```javascript
<TypingComponent
        classString="assign-as-many classes-as-you-want here"
        text1={textArrayOne}
        //add text2 if you want self deleting effect after typing the first phrase
        //text2={textArrayTwo}
        typingContentElementId="give-your-component-an-element-id-to-reference"
        styles={TypingComponentStyles}
/>
