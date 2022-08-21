import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EachItem from './EachItem'
import Loading from './Loading'

function DataPulses() {
    const [pulsesdata, setPulsesData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/pulses').then((resp) => resp.data).then((data) => {
            setPulsesData(data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <div className="container">
                {loading
                    ? <Loading />
                    :
                    <div className="row mx-auto">
                        {pulsesdata.map((item, i) => {
                            return <div className="col-md-4 mt-3 mb-4 mr-5" key={i}>
                                <EachItem item={item} />
                            </div>
                        })}
                    </div>}

            </div>
        </>
    )
}
export default DataPulses