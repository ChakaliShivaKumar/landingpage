import { Modal } from 'bootstrap'
import React, { useState } from 'react'
import Model1 from './Model1'

export default function 
() {

  return (
    <div className='p-trans container-fluid'>
        <div className='p-trans-title'>
            <h1>Services</h1>
            <h2>Person Transportation</h2>
        </div>
        <div className='p-trans-main row justify-content-center'>
            <div className="card col-lg-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Vehicle rentals</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Rent</h6>
                    <p className="card-text">Rent a vehicle for your needs (Includes driver from service provider) with terms & conditions</p>
                    
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={console.log('hi')}>
                    Reserve
                    </button>
                </div>
            </div>
            <div className="card col-lg-2" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Vehicle rentals</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Self-Drive</h6>
                    <p class="card-text">Rent a vehicle for your needs (Excludes driver from service provider) with terms & conditions</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Reserve
                    </button>
                </div>
            </div>
            <div className="card col-lg-2" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Book Vehicle</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Shuttle/Commute</h6>
                    <p class="card-text">For students, employees, workers, any other persons etc who regularly travel from one place to another (with terms & conditions)</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Reserve
                    </button>
                </div>
            </div>
        </div>
        <div className='row p-trans-main justify-content-center'>
            <div className="card col-2" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Book drivers</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Drivers for Rent</h6>
                    <p class="card-text">For your own vehicles (with terms and conditions)</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Reserve
                    </button>
                </div>
            </div>
            <div className="card col-2" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Interstate</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">To travel other states (with terms and conditions)</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Reserve
                    </button>
                </div>
            </div>
        </div>
        <Model1/>
    </div>
  )
}
