import styles from "./page.module.css";

export default async function Home() {
    const request = await fetch("http://localhost:3000/api/blog");
    const res = await request.json();

    return (
        <main className={styles.main}>
            <h1>{res.message}</h1>
        </main>
    );
}
