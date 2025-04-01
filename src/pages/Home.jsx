import logo from "../assets/img/logo.png"
import { useState, useEffect } from "react";



function Home() {

    return (
        <main>
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Welcome to Recipe Blog</h1>
                        <p className="col-md-8 fs-4">
                            Discover delicious recipes from around the world. Whether you're a beginner or a seasoned chef, you'll find inspiration for your next meal here.
                        </p>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;