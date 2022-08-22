import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EachItem from './EachItem'
import Loading from './Loading'

function DataFruits() {
    const [fruitsdata, setFruitsData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/fruits').then((resp) => resp.data).then((data) => {
            setFruitsData(data)
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
                        {fruitsdata.map((item, i) => {
                            return <div className="col-md-4 mt-3 mb-4 mr-5" key={i}>
                                <EachItem item={item} />
                            </div>
                        })}
                    </div>}

            </div>
        </>
    )
}

export default DataFruits