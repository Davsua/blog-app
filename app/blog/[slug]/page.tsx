export default function Page({ params }: { params: { slug: string } }) {
    return <h1>My Page in {params.slug}</h1>;
}
