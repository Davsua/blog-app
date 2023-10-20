import as from "@/components/asidenew-card.module.css";
type Blog = {
    author: string;
    title: string;
    date: string;
    content: string;
    image: string;
};

type Props = {
    blog: Blog;
};

const AsideNewCard = ({ blog }: Props) => {
    return (
        <li className={as.card}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
        </li>
    );
};

export default AsideNewCard;
