import React from 'react'
import JSX from '../components/JSX'
import Props from '../components/Props'
import PropsDrilling from '@/components/PropsDrilling'

function Home() {
  return (
    <>
    <div className='mt-10 mx-10'>
        <h2 className='text-3xl mb-4 '>React</h2>
        <JSX/>
        <Props/>
        <PropsDrilling/>
        </div>
    </>
  )
}

export default Home