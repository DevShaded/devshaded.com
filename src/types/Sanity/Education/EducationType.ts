export interface EducationType {
    _id: string
    schoolName: string
    grade: string
    startDate: string
    endDate: string
    image: ImageType
}

export interface ImageType {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}
