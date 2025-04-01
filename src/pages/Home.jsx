import logo from "../assets/img/logo.png"
import { useState, useEffect } from "react";

function Home() {
    return (
        <main>
            <div className="container py-5">
                <div className="custom-jumbotron p-5">
                    <div className="container-fluid py-5 position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-8 jumbotron-content">
                                <h1 className="jumbotron-title">
                                    Benvenuti nel Blog delle Ricette
                                </h1>
                                <p className="jumbotron-text">
                                    Scopri un mondo di sapori unici e ricette straordinarie.
                                    Dalla cucina tradizionale alle innovazioni culinarie più ardite,
                                    qui troverai l'ispirazione per il tuo prossimo capolavoro in cucina.
                                </p>
                                <button className="btn btn-light btn-lg mt-4 shadow-sm">
                                    Scopri le Ricette
                                </button>
                            </div>
                            <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
                                <img
                                    className="jumbotron-img img-fluid"
                                    src={logo}
                                    alt="Recipe Blog Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;