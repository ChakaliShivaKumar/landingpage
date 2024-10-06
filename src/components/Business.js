import React from 'react'
import Model1 from './Model1'

export default function Business() {
    return (
        <div className='p-trans container-fluid'>
            <div className='p-trans-title'>
                <h1>Business</h1>
                <h2>with LEZIT TRANSPORTS</h2>
            </div>
            <div className='p-trans-main row justify-content-center'>
                <div className="card col-lg-3" >
                    <div className="card-body">
                        <h5 className="card-title">Join as Service provider</h5>
                        <p className="card-text">Any person/organisation who have both vehicle and driver to drive such vehicle(s) can join with LEZIT TRANSPORTS to grow together with more rides.</p>
                        
                        <button type="button" class="btn btn-primary align-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={console.log('hi')}>
                        Join
                        </button>
                    </div>
                </div>
                <div className="card col-lg-3" >
                    <div class="card-body">
                        <h5 class="card-title">Join as vehicle owner</h5>
                        <p class="card-text">Any person/organisation who want to rent their own vehicle for generating revenue can join with LEZIT TRANSPORTS as vehicle owner. Management of such vehicles will be taken by either owner or LEZIT based on terms & conditions.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Join
                        </button>
                    </div>
                </div>
                <div className="card col-lg-3" >
                    <div class="card-body">
                        <h5 class="card-title">Join as LEZIT Driver</h5>
                        <p class="card-text">Any person who have proper driving licence can join with LEZIT TRANSPORTS as LEZIT driver and grow with us.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Join
                        </button>
                    </div>
                </div>
            </div>
            <Model1/>
        </div>
      )
}
