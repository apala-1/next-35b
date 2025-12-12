export default function({ children }: { children: React.ReactNode }) {
    return (
        <section>
            User Header
            {children}
            User Footer
        </section>
    );
}