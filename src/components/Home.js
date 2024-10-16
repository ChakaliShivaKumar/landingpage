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
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Book Now</button>
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Vehicle rentals</button>
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Shuttle/commute</button>
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Drivers</button>
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Logistics</button>
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Interstate/Intrastate</button>
                    <button class="btn btn-primary btn-lg rounded-pill shadow-sm px-4 py-2" type="button">Order delivery</button>
                </div>
            </div>
        </div>
    </div>
  )
}
