import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-4'>
        <div className='h-full bg-red-600 hidden md:block'>
            Genre
        </div>
        <div className='col-span-4 md:col-span-3'>
            Game List
        </div>
    </div>
  )
}

export default Home