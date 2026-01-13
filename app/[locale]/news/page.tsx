import News2 from '@/components/news2'
import News from '@/components/newss'
import Novosti2 from '@/components/novosti2'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <Novosti2/>
      <News/>
      <News2/>
    </div>
  )
}

export default page
