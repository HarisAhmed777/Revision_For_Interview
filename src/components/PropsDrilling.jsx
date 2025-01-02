import React from 'react'
import propdrilling from '../assets/propdrilling.png'
function PropsDrilling() {
  return (
    <div className='my-10 mx-10'>
        <h2 className='text-2xl '>What is PropsDrilling ??</h2>
        <p className='text-xl'>Definition:</p>
        <p className='text-lg'>In React, prop drilling is the process of passing data, or props, from a parent component to one or more child components</p>

        <ul className='list-disc  text-lg'>
            <li>For example, a parent component might pass a message prop to a child component, which then passes it to a grandchild component. </li>
            <li>Prop drilling is a common way to share data between components, but it can lead to code that's hard to maintain and understand. This is especially true as an application grows in complexity. Some problems that can arise from prop drilling include</li>
        </ul>
        <p>The main disadvantages of prop drilling are :</p>
        <ul className='list-decimal'>
            <li>Code duplication</li>
            <li>Tightly coupled code</li>
            <li>Unnecessary dependencies</li>
            <li>Complexity and boilerplate code</li>
        </ul>
        <div className='text-xl'>
        <p>Solution</p>
        <p className='list-disc'>To mitigate prop drilling, developers can use state management solutions like Redux, React Query, or the context API. These solutions allow for centralized management of state or data, which can lead to cleaner, more maintainable code. </p>
        </div>

        <div className='flex items-center justify-center'>
        <div className='h-[300px] w-[290px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] '>
        <img src={propdrilling} alt="" />
        </div>
        </div>
    </div>
  )
}

export default PropsDrilling