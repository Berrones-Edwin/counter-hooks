import { useEffect, useRef, useState } from "react";
const initialValue = {
    data: "",
    error: null,
    loading: true,
};

export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setValue(initialValue);
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => {
                if (isMounted)
                    setValue({
                        loading: false,
                        error: null,
                        data: resp,
                    });
            });
    }, [url]);

    return value;
};
