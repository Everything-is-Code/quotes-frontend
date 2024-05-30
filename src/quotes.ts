import {ChangeEvent, useCallback, useState} from "react";
import axios from "axios";


const getQuote = () => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(false)

    const userInputCallback = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
        try{
            const { data } = await axios.get(`quotes-backend.quotes.svc.cluster.local/hello/greeting/quote`)
            setData(data)
            setError(false)

        } catch {
            setError(true)
            setData(undefined)
        }
    }, [])


    return {userInputCallback, data, error}
}

export default getQuote