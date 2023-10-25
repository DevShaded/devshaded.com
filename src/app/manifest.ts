import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'DevShaded',
        short_name: 'DevShaded',
        description: 'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
        start_url: '/',
        display: 'standalone',
        background_color: '#111827',
        theme_color: '#4f46e5',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
