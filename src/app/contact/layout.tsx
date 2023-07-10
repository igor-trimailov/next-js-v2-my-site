export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div>Contact Layout</div>
            <div>{children}</div>
        </div>
    );
}
