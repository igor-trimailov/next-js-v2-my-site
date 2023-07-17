// export default async function BlogPost({ params }) {
//     const { slug } = params;

//     const post = await getPost(slug);
//     return <div>{post.title}</div>;
// }

// export async function generateStaticParams() {
//     const posts = await getPosts();

//     return posts.map((post) => ({ slug: post.slug }));
// }

const delay = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(1), time);
    });
};

const getData = async (slug) => {
    // const post = await getDataFromCMS(slug);
    // return post;
    console.log(slug);
    const post = await delay(3000);
    return { slug };
};

export default async function BlogPost({ params }) {
    const { slug } = params;
    const post = await getData(slug);

    throw new Error("oooops");

    return (
        <div>
            <h1>Post title</h1>
            <h2>{post.slug}</h2>
        </div>
    );
}

// so the page under blog needs to be able to specigy all routes the dynamic slug can take
// what this does is: uses this page as a template for SSR. Each route will go in here, make all the necessary
// api calls to the CMS and generate HTML pages
