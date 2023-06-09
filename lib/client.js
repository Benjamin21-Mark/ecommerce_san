import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'aae7wum4',
    dataset: 'production',
    apiVersion: '2023-04-04',
    useCdn: true,
    token: process.env.
    NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);