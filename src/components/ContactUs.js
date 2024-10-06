import React from 'react'

export default function ContactUs() {
  return (
    <div className='contactus mt-2 p-trans container-fluid'>
            <div className='p-trans-title'>
                <h1>Contact us</h1>
                <h2>Contact Information</h2>
            </div>
        <div class="team-member">
                        <div class="ms-4 image-wrapper">
                            <img class="img-fluid" src={require('../images/profile_pic.png')} alt="alternative"/>
                        </div> 
                        <p class="p-large ms-4"><strong>Satish Avula</strong></p>
                        <p class="job-title ms-4">CEO & Managing Director</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="me-auto">
                                <div class="fw-bold">Mobile</div>
                                9032446649, 4035689580
                                </div>
                                <i class="fa-solid fa-phone"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="me-auto">
                                <div class="fw-bold">Email id</div>
                                satishavula0408@gmail.com
                                </div>
                                <i class="fa-solid fa-envelope"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-5 me-auto">
                                <div class="fw-bold">Working hours</div>
                                24/y anytime
                                </div>
                                <i class="fa-solid fa-house-circle-check"></i>
                            </li>
                        </ul>
        </div>
    </div>
  )
}
