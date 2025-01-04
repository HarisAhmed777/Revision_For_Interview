import React from 'react'
import hooks from '../assets/hooks.webp'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import hooksdiffernce from '../assets/hooksdiffernce.png';
function Hooks() {
  const usestate = `
    const [initialState,setInitialState] = useState(0);
  `
  const usestateExample = `
  import { useState } from "react";
  import ReactDOM from "react-dom/client";
  
  function FavoriteColor() {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </>
    )
  }
    
  `
  const useeffect = `
  useEffect(() => {
    // Side effect logic goes here
    return () => {
         // Cleanup logic (optional)
  };
}, [dependencies]);  

  `
  const useeffectexample = `
  // useEffect is defined here

  import { useState, useEffect } from "react";
  
  function HookCounterOne() {
      const [count, setCount] = useState(0);
  
      useEffect(() => {
           console.log("You clicked "count" times");
      }, [count]);
  
      return (
          <div>
              <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                  Click {count} times{" "}
              </button>
          </div>
      );
  }
  export default HookCounterOne;  
  `
  const useref = `
  const refContainer = useRef(initialValue);
  `
  const userefexmaple = `
  function PreviousValue() {
    const [count, setCount] = React.useState(0);
    const prevCountRef = useRef();

    React.useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
  `
  const usecontext = `
    // before useing useContext we need to create a context ,then wrap it with contect provider 
    then use useContext

    const value = useContext(MyContext);
  `
  const createconetct = `
  import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

  `
  const wrappingcontext = `
  import React from "react";
import { UserProvider } from "./UserProvider";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;

  `
  const usecontextexample = `
  import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const updateName = () => setUser({ ...user, name: "Jane Smith" });

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
};

export default UserProfile;

  `

  const usememosyntax = `
    //same as useEffect synatx
    useMemo(()=>{},[]);
  `

  const usememoexmaple = `
    import React, { useMemo, useState } from 'react'

const App = () => {
  const [initalvalue,setInitalvalue] = useState(0);
  const [dark,setDark] = useState(false);
  const themestyle = {
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  // previously wwe done 
  // const doublenumber = slowfunc(initalvalue);
  
  // by using useMemo()
  const doublenumber = useMemo(()=>{
    return slowfunc(initalvalue);
  },[initalvalue])


  //while changing the number because of the loop running in slow func,the output will be delayed for some seconds.
  //but if we click the toggle button ,then also the state is taking some seconds delay,because ,each time the state changes ,the component rerenders ,so the delay is happening

  //To avoid that ,there is a simple concpet called useMemo();
  //usememo will memorize the value ,if only that particualr values changes it will allow to call the slowfunction,if the valu doent change ,the usememo will take it value from memory itself
  //Lot of time is saved;


  return (
    <>
      <input
        type="number"
        value={initalvalue}
        onChange={(e) => setInitalvalue(e.target.value)}
      />
      <button onClick={()=>setDark((curr)=>!curr)}>ToggleTheme</button>
    <div style={themestyle}>{doublenumber}</div>
    </>
  );
}

export default App

function slowfunc(num){
  for(let i=0;i<1000000000;i++){}
  return num*2;
}
  `
  return (
    <>
    <h2 className='text-5xl  mb-3'>Hooks</h2>
    <img src={hooks} alt="" className='pe-10 mb-3' />
    <p className='mt-3 text-lg'>Despite of 17 hooks .Only 7 is important firts</p>
    <ul className='list-decimal font-bold flex gap-7 flex-wrap mx-3'>
        <li>useState</li>
        <li>useEffect</li>
        <li>useCallback</li>
        <li>useContext</li>
        <li>useMemo</li>
        <li>useRef</li>
        <li>useOptimistic</li>
    </ul>
    <h2 className='mt-3 font-bold text-2xl mx-3'>1:useState()</h2>
    <p className='font-bold text-xl mx-4'>Definition:
        <span className='block text-bold text-lg'>useState in React Js allows you to add state to  functional component</span>
    </p>
    <ul className='my-4 text-lg list-decimal mx-6'>
      <li> useState returns an array with two values: the current state and a function to update it. </li>
      <li>The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</li>
    </ul>
    <h2 className='text-3xl mx-4 my-4 font-bold' >Syntax </h2>
    <SyntaxHighlighter style={dracula} language='javascript'>
      {usestate}
    </SyntaxHighlighter>
    <h2 className='text-3xl px-4 my-4 font-bold'>Example Code:</h2>
      <SyntaxHighlighter style={dracula} language='javascript' className='m-4'>
        {usestateExample}
      </SyntaxHighlighter>
  
      <h2 className='mt-3 font-bold text-2xl mx-3'>2:useRef()</h2>
    <p className='font-bold text-xl mx-4'>Definition:
        <span className='block text-bold text-lg'>useRef is a hook in React that allows you to create a mutable reference to an element, similar to the ref attribute in class components.</span>
    </p>
    <ul className='my-4 text-lg list-decimal mx-6'>
      <li>  It is commonly used to access or modify DOM elements or to store a value that persists across renders. </li>
      <li>It can be used to access a DOM element directly.</li>
    
    </ul>
    <h2 className='text-3xl mx-4 my-4 font-bold' >Syntax </h2>
    <SyntaxHighlighter style={dracula} language='javascript'>
      {useref}
    </SyntaxHighlighter>
    <h2 className='text-3xl px-4 my-4 font-bold'>Example Code:</h2>
      <SyntaxHighlighter style={dracula} language='javascript' className='m-4'>
        {userefexmaple}
      </SyntaxHighlighter>
      <img src={hooksdiffernce} alt="" />
      <h2 className='mt-3 font-bold text-2xl mx-3'>2:useContext()</h2>
    <p className='font-bold text-xl mx-4'>Definition:
        <span className='block text-bold text-lg'>useContext is a React hook that allows functional components to consume context directly, making it easier to access shared data or state without needing to pass props down manually through multiple component levels (prop drilling).components.</span>
    </p>
    <p className='mt-4 mb-2 mx-6 font-bold text-lg'>Why it is Used:</p>
    <ul className='my-4 text-lg list-decimal mx-6'>
      <li> Avoids Prop Drilling: Simplifies the process of sharing data across deeply nested components.</li>
      <li>Centralized State Management: Enables components to access and update shared state easily.</li>
      <li>Improves Readability and Maintenance: Makes code cleaner by eliminating the need for intermediate props.</li>
    
    </ul>
    <h2 className='text-3xl mx-4 my-4 font-bold' >Syntax </h2>
    <SyntaxHighlighter style={dracula} language='javascript'>
      {usecontext}
    </SyntaxHighlighter>
    <h2 className='text-3xl px-4 my-4 font-bold'>Example Code:</h2>
    <h2 className='text-2xl px-4 my-4 '>1:Creating a Context</h2>
      <SyntaxHighlighter style={dracula} language='javascript' className='m-4'>
        {createconetct}
      </SyntaxHighlighter>
      <h2 className='text-2xl px-4 my-4 '>2:Wrapping a Context</h2>
      <SyntaxHighlighter style={dracula} language='javascript' className='m-4'>
        {wrappingcontext}
      </SyntaxHighlighter>
      <h2 className='text-2xl px-4 my-4 '>3:Now we will use useContext</h2>
      <SyntaxHighlighter style={dracula} language='javascript' className='m-4'>
        {usecontextexample}
      </SyntaxHighlighter>
            <h2 className='mt-3 font-bold text-2xl mx-3'>2:useMemo()</h2>
    <p className='font-bold text-xl mx-4'>Definition:
        <span className='block text-bold text-lg'>The React useMemo Hook returns a memoized value.components.</span>
    </p>
    <ul className='my-4 text-lg list-decimal mx-6'>
      <li>  Think of memoization as caching a value so that it does not need to be recalculated.</li>
      <li>The useMemo Hook only runs when one of its dependencies update.</li>
      <li>This can improve performance</li>
      <li>The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function</li>
    </ul>
    <h2 className='text-3xl mx-4 my-4 font-bold' >Syntax </h2>
    <SyntaxHighlighter style={dracula} language='javascript'>
      {usememosyntax}
    </SyntaxHighlighter>
    <h2 className='text-3xl px-4 my-4 font-bold'>Example Code:</h2>
      <SyntaxHighlighter style={dracula} language='javascript' className='m-4 w-8/12'>
        {usememoexmaple}
      </SyntaxHighlighter>

    </>
  )
}

export default Hooks