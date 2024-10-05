import React from 'react'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="container-fluid text-center home">
        <div class="row">
            <div className="col-lg-8 titles mt-lg-5">
                <h1>LEZIT TRANSPORTS</h1>
                <h5>a transportation hub….</h5>
                <h5>One stop solution for all your transportation purposes</h5>
            </div>
            <div class="col-lg-4 sidebar mt-lg-5">
                `<div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-secondary" type="button">Book now</button>
                    <button class="btn btn-secondary" type="button">Vehicle rentals</button>
                    <button class="btn btn-secondary" type="button">Shuttle/commute transportation</button>
                    <button class="btn btn-secondary" type="button">Drivers</button>
                    <button class="btn btn-secondary" type="button">Logistics</button>
                    <button class="btn btn-secondary" type="button">Interstate/Intrastate transportation</button>
                    <button class="btn btn-secondary" type="button">Order delivery</button>
                </div>
            </div>
        </div>
    </div>
  )
}
