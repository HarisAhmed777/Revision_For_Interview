import { objectsyntax } from '@/content/javascript/javascript';
import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Object = () => {


  return (
    <>
    <h2 className="text-3xl font-bold ">Objects</h2>
    <p className="m-3 ">
        In JavaScript ,Object is an collection of Key-Value Pairs 
    </p>
    <p className='m-3'>Objects are one of the most important and veristile datastructure in javascript ,used to model real world entities and group related data together</p>
    <div className='m-3'>
        <h2 className='font-bold text-2xl'>Syntax to Create An object</h2>
        <SyntaxHighlighter className="syntax my-2" style={dracula}>
            {objectsyntax}
        </SyntaxHighlighter>
    </div>
    </>
  )
}

export default Object