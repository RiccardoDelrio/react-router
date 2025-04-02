import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Post() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const apiImg = "http://localhost:3000/imgs/"


    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
                console.log(data);

            })
            .catch(error => console.error('Error:', error))

        if (id) {

        }
    }, [id])

    return (
        !product ? ("Loading...") :
            (
                <main className="py-5">
                    <div className="container">
                        <div className="col-12" key={"1"}>
                            <div className="card p-3">
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-4">
                                        <img
                                            src={`${apiImg}/${product.image}`}
                                            className="img_card rounded"
                                            alt={product.title}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title mb-3">{product.title}</h3>
                                            <div className="mb-3">
                                                <span className="badge  me-2">
                                                    {product.tags}
                                                </span>
                                            </div>
                                            <p className="card-text">{product.content}</p>
                                            <p className="card-text d-flex justify-content-between">
                                                <small className="text-muted">
                                                    Pubblicato il: {new Date().toLocaleDateString()}
                                                </small>
                                                <div>
                                                    <button className="btn " onClick={() => navigate(`/post/${parseInt(id) - 1}`)}><i class="fa fa-arrow-left" aria-hidden="true"></i>
                                                    </button>
                                                    <button className="btn " onClick={() => navigate(`/post/${parseInt(id) + 1}`)}><i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                    </button>

                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
    )
}

export default Post;