import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EachItem from './EachItem'
import Loading from './Loading'

function DataCereals() {
    const [cereralsdata, setCereals] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/cereals').then((resp) => resp.data).then((data) => {
            setCereals(data)
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
                        {cereralsdata.map((item, i) => {
                            return <div className="col-md-4 mt-3 mb-4 mr-5" key={i}>
                                <EachItem item={item} />
                            </div>
                        })}
                    </div>}

            </div>
        </>
    )
}

export default DataCereals