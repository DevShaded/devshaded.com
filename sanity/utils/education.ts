import { client } from "../lib/client";
import { EducationType } from "@/types/Sanity/Education/EducationType";

export function getEducation(): Promise<EducationType[]> {
    return client.fetch(`*[_type == "education"] | order(startDate desc) { schoolName, grade, startDate, endDate, image }`);
}
