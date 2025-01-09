import {
  Variablesyntax,
  booleanconversion,
  concatenation,
  ifelse,
  numberconversion,
  stringconversion,
  switchexp,
  switchsyntax,
} from "@/content/javascript/javascript";
import React from "react";
import DatatypesInJs from "../../assets/DatatypesInJs.png";
import varvsletvsconst from "../../assets/varvsletvsconst.webp";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Var_Let_Const = () => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl mb-4">JavaScript Basics</h1>
        <h2 className="text-2xl">Variable</h2>
        <p className="mt-3">A variable is a container to store values</p>
        <p className="mt-3 mb-4">
          In JavaSctipr we have three types to store a value in the form of
          variable
        </p>
        <SyntaxHighlighter style={dracula}>{Variablesyntax}</SyntaxHighlighter>
      </div>
      <img src={varvsletvsconst} />
      <div className="m-3">
        <h2 className="text-3xl mb-4 ">Datatypes in Js</h2>
        <img src={DatatypesInJs} />
      </div>
      <div className="m-3 ">
        <h2 className="text-2xl">Type Conversion</h2>
        <p>There are two types of conversion</p>
        <ul className="list-disc">
          <li>Implicit converion</li>
          <li>Explicit Converion</li>
        </ul>
        <h2 className="font-bold text-2xl my-2">Explicit Conversion</h2>
        <p className="my-1">
          {" "}
          You deliberately convert one data type to another using JavaScript
          methods.
        </p>
        <h2 className="my-2 font-bold text-2xl">String Conversion</h2>
        <p className="">
          Convert other data types to strings using String() or .toString().
        </p>
      </div>
      <SyntaxHighlighter style={dracula}>{stringconversion}</SyntaxHighlighter>
      <div className="m-3">
        <h2 className="my-2 font-bold text-2xl">Number Conversion</h2>
        <p className="">
          Convert other data types to numbers using Number() or
          parseInt()/parseFloat().
        </p>
        <SyntaxHighlighter style={dracula}>
          {numberconversion}
        </SyntaxHighlighter>
      </div>
      <div className="m-3">
        <h2 className="my-2 font-bold text-2xl">Boolean Conversion</h2>
        <p className="">Convert other data types to boolean using Boolean().</p>
        <SyntaxHighlighter style={dracula}>
          {booleanconversion}
        </SyntaxHighlighter>
      </div>
      <div className="mt-3">
        <h2 className="my-2 font-bold text-2xl">Implicit Conversion</h2>
        <p>It is an automatiic conversion</p>
        <SyntaxHighlighter style={dracula}>{concatenation}</SyntaxHighlighter>
      </div>

      <div className="mt-3">
        <h2 className="my-2 font-bold text-2xl">Conditional Statement</h2>
        <p>
          Very often when you write code, you want to perform different actions
          for different decisions.
        </p>
        <p>You can use conditional statements in your code to do this.</p>
        <ul className="list-disc">
          <li>
            Use if to specify a block of code to be executed, if a specified
            condition is true
          </li>
          <li>
            Use else to specify a block of code to be executed, if the same
            condition is false
          </li>
          <li>
            Use else if to specify a new condition to test, if the first
            condition is false
          </li>
          <li>
            Use switch to specify many alternative blocks of code to be executed{" "}
          </li>
        </ul>
        <div className="m-3">
        <SyntaxHighlighter style={dracula}>{ifelse}
        </SyntaxHighlighter>
        </div>
        <div className="m-3">
        <SyntaxHighlighter style={dracula}>{switchsyntax}
        </SyntaxHighlighter>
        </div>
        <div className="m-3">
        <SyntaxHighlighter style={dracula}>{switchexp}
        </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Var_Let_Const;
