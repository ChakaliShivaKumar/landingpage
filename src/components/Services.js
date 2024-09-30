import React from 'react'

export default function 
() {
  return (
    <div className='services'>
        <div>
            <h1>Services</h1>
        </div>
        <div class="container centered-container">
    <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
                <img src={require("../images/person-transport.jpg")} class="card-img-top services-icon1" alt="Person"/>
                <div class="card-body">
                    <h5 class="card-title">Card Title 1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card" >
                <img src={require("../images/delivery_truck_005.jpg")} class="card-img-top services-icon2 ms-lg-5 ms-sm-3" alt="Delivery Truck"/>
                <div class="card-body">
                    <h5 class="card-title">Card Title 2</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
