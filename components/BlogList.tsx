import { mockup } from "../dev/dev_array";
import AsideNewCard from "./AsideNewCard";

export default function BlogList() {
    return (
        <ul>
            {mockup.map((blog) => {
                return <AsideNewCard key={blog.title} blog={blog} />;
            })}
        </ul>
    );
}
