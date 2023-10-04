import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { ImageType } from "@/types/Sanity/Work/WorkExperinceType";
import Image from "next/image";

const builder = imageUrlBuilder(client);

export function ImageComponent({name, image, width, height}: { name: string, image: ImageType, width: number, height: number }) {
    const imageUrl = builder.image(image).url() || "";

    return (
        <Image
            src={imageUrl}
            alt={name}
            width={width}
            height={height}
            className="rounded-full"
        />
    )
}
