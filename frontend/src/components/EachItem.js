import React from 'react'

function EachItem(props) {
    let { item } = props
    let imagelink = item.image.includes(".jpg.jpg")
        ? item.image.replace(".jpg.jpg", ".jpg")
        : item.image
    return (
        <>
            <div className="card border border-secondary eachitem h-100">
                <img className="card-img-top w-50 mt-2 mx-auto rounded h-100" src={imagelink} alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title text-center"><strong>{item.name}</strong></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Category: <button className='btn btn-danger'> {item.Category}</button></h6>
                    <p className="card-text">Costliest Market :<strong>{item.Costliest_Market}</strong></p>
                    <p className="card-text">Costliest Market Price :<strong>{item.Costliest_Market_Price}</strong></p>
                    <p className="card-text">Cheapest Market :<strong>{item.Cheapest_Market}</strong></p>
                    <p className="card-text">Cheapest Market Price :<strong>{item.Cheapest_Market_Price}</strong></p>
                    <p className="card-text">Latest Price Date :<strong>{item.Latest_Price_Date}</strong></p>
                </div>
            </div>
        </>
    )
}

export default EachItem