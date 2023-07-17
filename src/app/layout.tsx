import "../styles/global.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // this is where navbars and shared components go to
    // children can have their own loayouts, so you can get nested layouts

    // is there a way to override parent layout?
    // yes

    // template? (don't use it)
    // template refreshes always when the route changes: useful for animations
    // layout is static, does not refresh
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}
