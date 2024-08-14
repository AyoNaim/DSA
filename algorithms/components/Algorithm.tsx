'use client'
import React from 'react'
import { Button } from './ui/button'
import maxproduct, { maxProductFast } from '@/utils/algorithms'

const Algorithm = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <div className='w-5/6 h-60 bg-red-500'>
      <div className='w-full h-full'></div>
      <Button variant={'secondary'} className='right-0' onClick={() => {maxproduct(list)}}>Output</Button>
      <Button variant={'secondary'} className='right-0' onClick={() => {maxProductFast(list)}}>Output</Button>
    </div>
  )
}

export default Algorithm