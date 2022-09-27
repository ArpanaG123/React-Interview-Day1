import React from 'react'
import './Style.css'

const Day1 = () => {
  return (
    <div className='main'>
        <h3>Question1:What is Virtual DOM?</h3>
        <p className='que1'>
            <ul>
                <li>React uses a virtual DOM which is copy of real DOM.so for every object that exists in a real DOM there is an object for that in react which has a react virtual DOM.</li>
                <li>Virtual DOM is same as real DOM but real DOM has not power to directly change the document.so when anything newly added to the application,the virtual DOM is created first then it represents as tree.So whenever there is any change in the state of element,a new virtual DOM is created.
                    This new virtual DOM is compared with the previous virtual DOM and make a note of changes.
                </li>
                <li>After the changes,only updated elements will be rendered on the application.</li>
                <li>As react maintain two virtual DOM each time,one contain the updated version of virtual DOM and another is just a pre-updated version of the virtual DOM.</li>
                <li>So,whenever there is any changes in the elements,it will be only happened in the updated virtual DOM.After the changes,this will finalize that what exactly has changed in DOM and then they rendered.</li>
                <li>So,The process pf comapring the pre-updated and updated virtual DOM is known as <span style={{color:"red",fontWeight:"bold"}}>DIFFING ALGORITHM</span>.</li>
                <li>Once,the react finds out what exactly has been changed and then,it will updated those objects only on the real DOM.So,The process of transforming changes into the real DOM is known as <span style={{color:"red",fontWeight:"bold"}}>Reconciliation</span>.</li>
            </ul>
        </p>
        <br></br>
        <h3>Question2:What is SPA?</h3>
        <p className='que1'>
            <ul>
                <li>Any web application,in which When you click on any button or navigating the application from one page to another page and in that,if the application does not reloads the browser page,then that application is known as <span style={{color:"red",fontWeight:"bold"}}>Single-Page-Application</span>.</li>
                <li>Any web application,in which when you click on any button or navigating the application from one page to another page,if your page means browser page is reloading then that application is known as <span style={{color:"red",fontWeight:"bold"}}>Multi-Page-Application</span>.</li>
            </ul>
        </p>
        <br></br>
        <h3>Question3:What is difference between class and functional component?</h3>
        <h5 className='que1'>Class Component</h5>
        <ul className='items'>
            <li>A class component requires you to extends from React.Component and creates a render function which retirn a react element.</li>
            <li>It must have the render() method returning the JSX which is syntactically similar to HTML.</li>
            <li>It also known as "Stateful component" as they implemet logic and state.</li>
            <li>React lifecycle method can be used inside the class component.</li>
            <li>Constructor are used in class component as it need to stored the data and initializes the state.</li>
        </ul>
        <h5 className='que1'>Functional Component</h5>
        <ul className='items'>
            <li>A functional component is just a plain javascript function that accepts props as an arguments & returns a react elements.</li>
            <li>There is no render method used in functional component.</li>
            <li>It is also known as stateless component as they simply accepts data abd display them in some form.</li>
            <li>React lifecycle methods cannot be used in the functional component.</li>
            <li>Constructors are not used in the functional compoenent.</li>
        </ul>
        <br></br>
        <h3>Question4:What does mean by state and its use in react?</h3>
        <p className='que1'>State:A state is data conatiner in which we can store the data or information about the compoenent.</p>
        <p className='que1'>Uses of States are as below:</p>
        <ul className='items'>
            <li>A state can be modified based on user action.</li>
            <li>Every time the state of an object changes,the react will re-rendered the component to the browser.</li>
            <li>The state of an object can store multiple properties.</li>
        </ul>
        <br></br>
        <h3>Question5:What is JSX and why do we use it instead of js?</h3>
        <p className='que1'>JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.</p>
        <p className='que1'>We used JSX instead of JS because it make easier for user to make the react application as it is similar to HTML and also it make easier to read and update HTML code,thus functionality is easier to handlw with JSX.</p>
        <br></br>
        <h3>Question6:What is package.json?</h3>
        <p className='que1'>
            <ul>
                <li>A package.JSON is JSON file that exists at the root of node project.</li>
                <li>It holds metadata relevant to the project and it is used for managing the projects version dependencies,scripts,version and whole a lot more for projects.</li>
                <li>Properties of package.JSON are:
                    <ol>
                        <li>Dependencies</li>
                        <li>Scripts</li>
                        <li>Versions</li>
                        <li>Name</li>
                        <li>Descriptions</li>
                    </ol>
                </li>
            </ul>
        </p>
    </div>
  )
}

export default Day1
