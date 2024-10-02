import React from 'react'

export default function 
() {
  return (
    <div className='services'>
        <div className='services-title'>
            <h1>Services</h1>
        </div>
        <div class="container centered-container">
    <div class="row" >
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
                <img src={require("../images/person-transport.jpg")} class="card-img-top services-icon1" alt="Person"/>
                <div class="card-body">
                    <h5 class="card-title">Person Transportation</h5>
                    <p class="card-text">Travel quickly</p>
                    <a href="/ptrans" class="btn btn-primary">Start Booking</a>
                </div>
            </div>
        </div>
        
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card" >
                <img src={require("../images/delivery_truck_005.jpg")} class="card-img-top services-icon2 ms-lg-5 ms-sm-3" alt="Delivery Truck"/>
                <div class="card-body">
                    <h5 class="card-title">Good Transportation</h5>
                    <p class="card-text">Get your products delivered quickly.</p>
                    <a href="#" class="btn btn-primary">Start Booking</a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
