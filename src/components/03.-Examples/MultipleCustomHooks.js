import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
    const [counter, increment, decrement] = useCounter(1);
    const { data, loading } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );
    // let author,
    //     quote = "";
    // if (data && data[0]) {
    //     quote = data[0].quote;
    //     author = data[0].author;
    // }

    const { quote, author } = !!data && data[0];

    return (
        <div className="container">
            <h3 className="mb-3">Multiple Hooks</h3>
            {loading ? (
                <p className="alert alert-primary">Cargando datos...</p>
            ) : (
                <>
                    <figure>
                        <blockquote className="blockquote">
                            <p>{quote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            {/* Someone famous in{" "} */}
                            <cite title="Source Title">{author}</cite>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between">
                        {counter > 1 && (
                            <button
                                onClick={decrement}
                                className="btn btn-outline-secondary"
                            >
                                Anterior
                            </button>
                        )}

                        <button
                            onClick={increment}
                            className="btn btn-secondary"
                        >
                            Siguiente
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MultipleCustomHooks;
