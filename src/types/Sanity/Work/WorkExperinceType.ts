export interface WorkExperiencesType {
    startDate: string;
    endDate?: string | null;
    isCurrent: boolean;
    image: ImageType;
    _id: string;
    companyName: string;
    role: string;
}

export interface ImageType {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}
