import React from 'react'

function Home() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>Real Estate</h1>
                    <div class="row mt-5">
                        <div class="col-lg-6">
                            <img width="500" height="350" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz--XYWGDYMRFOk1VsIkJC9bK5ocFa0mnQ&s" />
                        </div>

                        <div class="col-lg-6 pt-1">
                            <h3>FIND YOUR DREAM HOUSE</h3>
                            <p><b>#1.best selling Agency..! Your local area real EState specialist..!</b></p>
                            <div class="card mt-4 bg-secondary text-white">
                                <div class="card-body p-3">
                                    <p>10 years on Marketing</p>
                                    <p>5000+ Happy Clients</p>
                                    <p>500+ Positive Ratings</p>
                                    <p>14000+ e-mails answered</p>
                                    <p>More offers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
