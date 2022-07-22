import React from 'react'

import TopBlogs from '../Layouts/Blogs/TopBlogs/TopBlogs'
import CategoryBlogSection from '../Layouts/Blogs/CategoryBlogSection/CategoryBlogSection'
import InformationSection from '../Layouts/Home/InformationSection'

const Blogs = () => {
  return (
    <>
    <TopBlogs />
    <div className='mt-5'>
    <CategoryBlogSection />
    <CategoryBlogSection />
    <CategoryBlogSection />
    </div>
    <InformationSection />
    </>
  )
}

export default Blogs
