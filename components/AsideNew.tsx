import BlogList from "./BlogList";
import as from "@/components/asidenew.module.css";

export default function AsideNew() {
    return (
        <div className={as.aside_new}>
            <BlogList />
        </div>
    );
}
