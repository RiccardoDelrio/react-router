import { useState, useEffect } from "react";



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
        <main>
            <div className="container">
                <div className="row flex-column ">
                    {
                        dataBlogs.map((element, index) =>
                            <div className="col p-3 " key={index}>
                                <div className="card d-flex flex-row ">
                                    <div className='img-container d-flex '>
                                        <img
                                            src={`${apiImg}/${element.image}`}
                                            className="img_card"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <div className="div d-flex column-gap-3 justify-content-between">
                                            <h5 className="card-title">{element.title}</h5>


                                        </div>
                                        <h6 className="card-subtitle mb-2 text-muted ">Tag associati:{element.tags}</h6>
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