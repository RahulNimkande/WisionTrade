import Link from 'next/link'
import React from 'react'

const SmallFooter = () => {
    return (
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © 2023, <Link href="/">WISION TRADE.</Link> Driving International Trade Success.
                
              </p>
            </div>
          </div>
        </footer>
    )
}

export default SmallFooter
