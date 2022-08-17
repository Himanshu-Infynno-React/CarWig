import axios from 'axios';
import {useRouter} from 'next/router'

function cardetails() {

    // console.log(data)
    const router = useRouter(); 
    const {cardetails} = router.query


    return (
        <>
        <h1>Hello{cardetails}</h1>
        
        </>
    )
}

export default cardetails


