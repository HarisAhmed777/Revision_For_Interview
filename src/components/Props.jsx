import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Props() {
  const codeString = `const myElement = <Car brand="Ford" />;`;
    const props = `
    //props we are gonna send 
    const data = [
        {
            name:"Haris",
            age:24
        },
        {
            name:"Preethi",
            age:24
        }
    ]`
    const compoentnA = `
        // here we are sending it 
        <ComponentA  {...data[0]} />
        (or)
        <ComponentA name = data[name] age = data[age]/>
    `
    const ComponentA = `
        import react from 'React';
        function ComponentA({name,age}){
            return(
                <>
                <h2>{name}</h2>
                <p>{age}</p>
                </>
            )
        }
    `
  return (
    <>
      <h2 className='text-2xl mt-4'>What is Props?</h2>
      <p className='text-xl mt-2'>Definition of Props:</p>
      <ul>
        <li>React props are like function arguments in JavaScript and attributes in HTML.</li>
        <li>To send the props into a component, we use the same syntax as attributes in HTML.</li>
      </ul>
      <p className='mt-4'>Basic Example:</p>
      <div className='mb-10'>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
      </div>
      <p className='text-lg mb-2'>Detailed Example</p>
      <SyntaxHighlighter style={dracula}>
        {props}
      </SyntaxHighlighter>
      <p className='text-lg mt-2'>Sending data as a prop to CompoentA</p>
      <SyntaxHighlighter language='javascript' style={dracula}>
        {compoentnA}
      </SyntaxHighlighter>
    </>
  );
}

export default Props;
