"use client";

import { useState } from "react";

// server components come from React 18, the notion above is pure React
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import fs from "fs";

// page components are server components?!
// to make this a client component need to add 'use client'  to top of the file
export default function Contact() {
    // const router = useRouter();
    // return (
    //     <div>
    //         <div>
    //             <h1>Contact</h1>
    //             <Link href={"/"}>home</Link>
    //             <Link href={`/blog/test`}>Specific blog post</Link>
    //         </div>
    //         <div>
    //             {/* can only do that in the client component */}
    //             {/* only client components have access to the 'window' for window.location kind of stuff */}
    //             <button onClick={() => router.push("/")}>go home</button>
    //         </div>
    //     </div>
    // );

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // do some sort of api call
        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        console.log("hey");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe!</button>
            </form>
        </div>
    );
}

// next 12 way to do something serverside
// export const getServerSideProps = () => {
//     // node stuff goes here
// };

// NOTE:
// - the recomendation is to only use Client Components ("use cllient") for the components that actually need it
// in this scenario we would take the button out and make it client component, leaving as much as possible to the server components
