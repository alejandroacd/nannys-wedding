export const SectionWrapper = ({children}: {children: React.ReactNode}) => {
    return <section className="min-h-screen md:w-1/2 md:mx-auto w-full p-4 flex flex-col gap-6">
        {children}
    </section>
}