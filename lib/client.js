import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const  client = sanityClient({
    projectId: '1j2g825l',
    dataset: 'production',
    apiVersion:'2022-12-11',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);