import { arrayexample, arraymethods, arraysyntax } from "@/content/javascript/javascript";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const ArrayMethod = () => {
  return (
    <>
      <h2 className="text-3xl font-bold ">Array Method</h2>
      <p className="m-3 ">
        Array is a DataStructure in javascript ,which allows us to store
        multiple values in a single variable
      </p>
      <p className="m-3 ">
        Arrays can hold values of any datatype{" "}
        <span className="font-bold">
          Example :(numbers ,strings,objects and even arrays)
        </span>
      </p>
      <div className="m-3">
        <h2 className="text-2xl font-bold">Syntax</h2>
        <SyntaxHighlighter className="syntax my-3" style={dracula}>
          {arraysyntax}
        </SyntaxHighlighter>
      </div>
      <div className="m-3">
        <h2 className="text-2xl font-bold">Example</h2>
        <SyntaxHighlighter className="syntax my-2" style={dracula}>
          {arrayexample}
        </SyntaxHighlighter>
      </div>
      <div className="m-3">
        <h2 className="text-2xl font-bold">Methods Of Array</h2>
        <ul>
          <li>push()</li>
          <li>pop()</li>
          <li>shift()</li>
          <li>unshift()</li>
          <li>map()</li>
          <li>filter()</li>
          <li>sort()</li>
          <li>indexof()</li>
          <li>include()</li>
          <li>concat</li>
          <li>join()</li>
          <li>toString()</li>





        </ul>
        <SyntaxHighlighter className="syntax my-2" style={dracula}>
          {arrayexample}
        </SyntaxHighlighter>
        
      </div>

      <div className="m-3">
        <h2 className="text-2xl font-bold">Array Methods Example</h2>
        <SyntaxHighlighter className=" syntax my-2" style={dracula}>
          {arraymethods}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default ArrayMethod;
