export interface ProjectTypes {
    _id: string
    projectName: string
    projectDescription: string
    projectLink: string
    projectLabel: string
    projectImage: ImageType
}

export interface ImageType {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}
