import React from 'react';

function AboutUs() {
    const team = [
        {
            name: "Riccardo Delrio",
            role: "CEO & Founder",
            description: "Esperto in sviluppo web con 10+ giorni di disperazione"
        },
        {
            name: "Giuseppe Colucci",
            role: "Lead Designer",
            description: "Specialista in merendine con un occhio per i dettagli"
        },
        {
            name: "Davide Morisco",
            role: "Senior Developer",
            description: "Full-stack developer fra 10 anni "
        }
    ]
    return (
        <main className="container py-5">
            <section className="about-section mb-5 card p-3">
                <h1 className="mb-4">Chi Siamo</h1>
                <div className="row">
                    <div className="col-12">
                        <p className="lead">
                            Siamo un team appassionato di sviluppatori e designer dedicati
                            alla creazione di esperienze digitali innovative.
                        </p>
                        <p>
                            La nostra missione è fornire soluzioni tecnologiche
                            all'avanguardia che aiutino le aziende a crescere e prosperare
                            nel mondo digitale.
                        </p>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <h2 className="mb-4">Il Nostro Team</h2>
                <div className="row g-4">
                    {team.map((member, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                                    <p className="card-text">{member.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default AboutUs;
