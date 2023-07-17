// export async function generateStaticParams() {
//     const posts = await getPosts();

import { getAllPosts } from "@/lib/cms";
import Link from "next/link";

//     return posts.map((post) => ({ slug: post.slug }));
// }

// export default function getStaticParams() {
//     return [
//         // these routes will be pre-rendered
//         // does not mean that any other route won't work, just these will be pre-rendered
//         { slug: "learn-to-code" },
//         { slug: "angular-vs-react" },
//         { slug: "react" },
//     ];
// }

// this would be the "all blogs page" that renders some sort of page with all the blogs, so would
// have it's own getData function etc

export default async function Blog() {
    const posts = await getAllPosts();

    return (
        <div>
            {posts.map((post, idx) => (
                <Link href={`/blog/${post.slug}`} key={`blog-post-${idx}`}>
                    <div>
                        <h1>{post.title}</h1>
                    </div>
                </Link>
            ))}
        </div>
    );
}
