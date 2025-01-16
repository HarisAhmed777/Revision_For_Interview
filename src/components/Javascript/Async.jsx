import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Async = () => {
  return (
    <>
    <h2 className="text-3xl font-bold ">In which thread JavaScript is Running</h2>
    <p className="m-3 ">
        JavaScript is a single-threaded application,meaning it can only execute one task at a time.However it can handle asynchoronous operation such as fetching data from the server without blocking the execution of other tasks. 
    </p>
    <p className='m-3'>Objects are one of the most important and veristile datastructure in javascript ,used to model real world entities and group related data together</p>

    <div >
        <h2 className='font-bold text-2xl'>Async in JavaScript</h2>
        <p>Async in JavaScript refers to non blocking operations,allows code to run without waiting ofr long running tasks <span className='font-bold'> These tasks are handled via callbacks,promises or async/await</span></p>
    </div>
    <div class="overflow-x-auto">
  <table class="min-w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th class="px-6 py-3 border border-gray-300 bg-gray-100 text-left font-semibold">Feature</th>
        <th class="px-6 py-3 border border-gray-300 bg-gray-100 text-left font-semibold">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-6 py-4 border border-gray-300">Synchronous</td>
        <td class="px-6 py-4 border border-gray-300">
          Code is executed line by line. One task must complete before the next starts.
        </td>
      </tr>
      <tr>
        <td class="px-6 py-4 border border-gray-300">Asynchronous</td>
        <td class="px-6 py-4 border border-gray-300">
          Allows tasks to be executed concurrently, enabling other code to run while waiting for the asynchronous task to complete.
        </td>
      </tr>
    </tbody>
  </table>
</div>


    </>
  )
}

export default Async