import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

// this happens on the server
const getData = async () => {
    // we did not define any caching strategy, meaning that this will be cached on the client as static data
    // implying that it will never change
    const data = await fetch("https://www.reddit.com/.json", {
        // to opt out of the default:
        // cache: "no-store" // always fetch it, never cache it, don't store
    });

    return data.json();
};

// not the "async"!!!
// this is new and only works on server components
// it will not work if you change it to client component
// server side fetching, not exposed to the client at all, this is very cool...
export default async function Home() {
    const data = await getData();

    const postTitle = data.data.children[0].data.title;

    return (
        <main className={styles.main}>
            <h1>{postTitle}</h1>
            <Suspense fallback={<Loader />}>
                <Header />
            </Suspense>

            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                        src="/thirteen.svg"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Explore the Next.js 13 playground.
                    </p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                    </p>
                </a>
            </div>
            <div className={styles.grid}>
                <a
                    href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={inter.className}>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>
            </div>
        </main>
    );
}
