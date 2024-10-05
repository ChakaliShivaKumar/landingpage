import React from 'react'
import Model1 from './Model1'

export default function Gtrans() {
    return (
        <div className='p-trans container-fluid'>
            <div className='p-trans-title'>
                <h1>Services</h1>
                <h2>Good Transportation</h2>
            </div>
            <div className='p-trans-main row justify-content-center'>
                <div className="card col-lg-5" >
                    <div className="card-body">
                        <h5 className="card-title">Logistics</h5>
                        <p className="card-text">Book a transport vehicle for delivering goods from manufacturer to retailer, wholesaler, supplier, and retailer, with terms and conditions.</p>
                        
                        <button type="button" class="btn btn-primary align-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={console.log('hi')}>
                        Book now
                        </button>
                    </div>
                </div>
                <div className="card col-lg-5" >
                    <div class="card-body">
                        <h5 class="card-title">Order Delivery</h5>
                        <p class="card-text">Book a transport vehicle for a goods order requiring delivery from one location to a specified location, with terms and conditions.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book now
                        </button>
                    </div>
                </div>
            </div>
            <Model1/>
        </div>
      )
}
