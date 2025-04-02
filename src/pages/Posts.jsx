import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


function Posts() {
    const [dataBlogs, SetDataBlogs] = useState([]) //dati ricevuti dalla chiamata fetch
    const apiImg = "http://localhost:3000/imgs/"

    const mainCall = () => {
        fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                SetDataBlogs(data) //set di dati ottenuti dalla api
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        mainCall() //attivo allo start()
    }, [])

    return (
        <main className="py-5">
            <div className="container">
                <h1 className="text-center mb-5">Le nostre ricette</h1>
                <div className="row g-4">
                    {dataBlogs.map((element, index) =>
                        <div className="col-12" key={index}>
                            <div className="card p-3">
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-4">
                                        <Link to={`/post/${element.id}`}>

                                            <img
                                                src={`${apiImg}/${element.image}`}
                                                className="img_card rounded"
                                                alt={element.title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title mb-3">{element.title}</h3>
                                            <div className="mb-3">
                                                <span className="badge  me-2">
                                                    {element.tags}
                                                </span>
                                            </div>
                                            <p className="card-text">{element.content}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Pubblicato il: {new Date().toLocaleDateString()}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Posts;