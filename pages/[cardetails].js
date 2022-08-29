import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CarDetails from '../Components/CarDetails/CarDetails';




function CarDetailsPage({ cars }) {
    const router = useRouter();


    if (router.isFallback) {
        return <p>Loading....</p>
    }


    return (
        <>
                <Head>
                    <title>CarWig</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {router.isFallback ? <p>Loading......</p> : <CarDetails cars={cars} />}

        </>
    )
}

export default CarDetailsPage


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { cardetails: "NM0GE9F23N1532001" },
            }
        ],
        fallback: true
    }
}


export async function getStaticProps(context) {
    const { cardetails } = context.params;
    // const url = `https://jsonplaceholder.typicode.com/todos/${cardetails}`

    const url = `https://autodigg.com/ad-api/cars/list?vin=${cardetails}`
    const response = await axios.get(url);
    const data = response.data

    return {
        props: {
            cars: data[0],
        }
    }
}


