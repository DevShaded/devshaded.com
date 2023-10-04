import { client } from "../lib/client";
import { ArticleType } from "@/types/Sanity/Article/ArticleType";

export function getArticles(): Promise<ArticleType[]> {
    return client.fetch(`*[_type == "article"] { _id, link, title, description, cta }`);
}
