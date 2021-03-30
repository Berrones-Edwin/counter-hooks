import { useEffect, useState } from "react";
const initialValue = {
    data: "",
    error: null,
    loading: true,
};

export const useFetch = (url) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => {
                setValue({
                    loading: false,
                    error: null,
                    data: resp,
                });
            });
    }, [url]);

    return value;
};
