import AsideNew from "@/components/AsideNew";

export default async function Home() {
    const request = await fetch("http://localhost:3000/api/blog");
    const res = await request.json();

    return (
        <>
            <main>
                <h1>{res.message}</h1>
                <AsideNew />
            </main>
        </>
    );
}
