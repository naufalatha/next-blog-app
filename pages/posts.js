import Head from 'next/head'
import Layout from '../components/Layout'
import Container from '../components/Container'
import CardPost from '../components/CardPost'
import { useState } from 'react'
import mockPosts from '../utils/posts.json'
import SectionHeader from '../components/SectionHeader'

export default function Posts() {
    const [posts, setPosts] = useState(mockPosts)
    return (
        <Layout>
            <Head>
                <title>Posts &mdash; Techlibrary</title>
            </Head>
            <Container>
                <SectionHeader>UI/UX Design</SectionHeader>
                {!posts.length ? (
                    <div className="text-center py-20">
                        <h2 className="text-4xl">No Result!</h2>
                        <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
                            We couldn`t find any posts with the keyword
                            `yahahayuk`. Please try another keyword!{' '}
                        </p>
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-wrap mt-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="md:w-4/12 w-full px-4 py-8"
                            >
                                <CardPost {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </Layout>
    )
}
