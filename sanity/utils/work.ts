import { client } from "../lib/client";
import { WorkExperiencesType } from "@/types/Sanity/Work/WorkExperinceType";

export function getWorkExperiences(): Promise<WorkExperiencesType[]> {
    return client.fetch(`*[_type == "workExperience"] { _id, companyName, role, startDate, endDate, isCurrent, image } | order(startDate desc)`);
}
