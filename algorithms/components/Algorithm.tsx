'use client'
import React from 'react'
import { Button } from './ui/button'

const Algorithm = () => {
  return (
    <div className='w-5/6 h-60 bg-red-500'>
      <div className='w-full h-full'></div>
      <Button variant={'secondary'} className='right-0' onClick={() => {console.log('Output')}}>Output</Button>
    </div>
  )
}

export default Algorithm