import { client } from "../lib/client";
import { ProjectTypes } from "@/types/Sanity/Projects/ProjectTypes";

export function getProjects(): Promise<ProjectTypes[]> {
    return client.fetch(`*[_type == "projects"] { _id, projectName, projectDescription, projectLink, projectLabel, projectImage }`);
}
