import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // this is where navbars and shared components go to
    // children can have their own loayouts, so you can get nested layouts
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div>Root Layout</div>
                <div>{children}</div>
            </body>
        </html>
    );
}
