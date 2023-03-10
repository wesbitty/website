import type { InferGetStaticPropsType } from 'next'
import { useLiveReload } from 'wesjet-nextjs-plugin/hooks'
import type { FC } from 'react'
import { allDocs, allPosts } from 'wesjet/jetpack'
import { DefaultLayout } from '../../components/Layouts/Default'
import { defineStaticProps } from '../../wesbitty/utils/next'
import { Heading } from '../../components/landing-page/Heading'
import { Paragraph } from '../../components/landing-page/Paragraph'
import { BlogPreview } from '../../components/blog/BlogPreview'

const content = {
  title: 'Latest Article',
  description: `Working with content for the web shouldn't be difficult. That's why we built Wesjet.`,
}

export const getStaticProps = defineStaticProps(async (context) => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { props: { posts } }
})

const BlogPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  useLiveReload()

  return (
    <DefaultLayout title="Blog – Wesjet" description={content.description} urlPath="/blog">
      <div className="mx-auto w-full max-w-screen-xl space-y-16 px-4 py-8 md:px-8 md:py-24 lg:space-y-24 lg:py-32">
        <div className="max-w-3xl space-y-8">
          <Heading level={1}>{content.title}</Heading>
          <Paragraph className="text-lg">{content.description}</Paragraph>
        </div>
        <div className="space-y-12 md:space-y-16">
          {posts.map((post, index) => (
            <BlogPreview key={index} post={post} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default BlogPage
