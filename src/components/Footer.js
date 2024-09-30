import React from 'react'

export default function Footer() {
  return (
    <footer className='container-fluid footer'>
        <div>
        <h5>Reach & follow us at</h5>
        </div>
        <div className="social-media">
            <a className='sm-icon' href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                <img src={require('../images/facebook.png')} alt="LinkedIn"/>
            </a>
            <a className='sm-icon' href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                <img src={require('../images/facebook.png')} alt="Facebook"/>
            </a>
            <a className='sm-icon' href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <img src={require('../images/facebook.png')} alt="Instagram"/>
            </a>
            <a className='sm-icon' href="https://www.x.com" target="_blank" aria-label="X">
                <img src={require('../images/twitter.png')} alt="X"/>
            </a>
        </div>
    </footer>
  )
}
