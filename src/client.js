import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'zi79te44',
    dataset: 'production',
    apiVersion: '2022-05-28',
    useCdn: true,
    token: 'skDfDysxfZ8mW9JlcPULmb5M7aiZLSK0sfooejPdWOpnz9Fca7ChIXnxsprNNrUaOsEf5LXVfE0kZPZwa1quwSx88VtxakKdScD0IG8T0g0PLFXYa4EDe83NcOvhs9JGKM3acI3nP6vZ8EdmOA4jw2ES0myJ5K1qGBIMIbsfUUetTRy4iICL'
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
 