import Banner from '@/components/Banner'
import BlogContent from '@/components/BlogContent'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex w-full h-full flex-col'>
        <Banner />
        <BlogContent />
    </div>
  )
}

export default Blog