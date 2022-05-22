import { BlogItems } from "../components/BlogItems/BlogItems";
import Head from 'next/head'

export default function BlogListingPage() {
    return (
        <main className="main-container">
            <Head>
                <title>A collection of blog articles</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <BlogItems />
        </main>
    )
}
