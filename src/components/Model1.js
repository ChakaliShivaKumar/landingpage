import React from 'react'
import DateTimePicker from './DateTimePicker'

export default function 
() {

    
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Vehicle Rental</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className='container row g-2'>
                <div class="input-group col-10">
                    <span class="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" class="form-control"/>
                    <input type="text" aria-label="Last name" class="form-control"/>
                </div>
                <div class="input-group col-10">
                    <span class="input-group-text">Mobile</span>
                    <input type="text" aria-label="Mobile" class="form-control"/>
                </div>
                <div class="input-group col-10">
                    <span class="input-group-text">Email</span>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="input-group col-10">
                    <span class="input-group-text">Date and Time</span>
                <DateTimePicker/>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
