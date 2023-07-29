import BLOG from '@/blog.config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const currentSelected = router.asPath.split('?')[0] === '/' + post.slug
  return (
        <div key={post.id} className={`${className} py-1 cursor-pointer px-2 dark: ${currentSelected ? 'text-green-500' : ''}`}>
            <div className="flex flex-col w-full select-none">
                <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref>
                    {post.title}
                </Link>
            </div>
        </div>
  )
}

export default BlogPostCard
