import React, { useEffect, useState, createContext, useContext } from "react";

// Define the API URL for fetching movies
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=fd253300d084263a8c1eb96ee5e669ef&language=en-US&page=1`;

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query, setQuery] =useState("Terrifie 3")

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.results) { // Check if results are present
                setMovies(data.results);
                setIsLoading(false);
            } else {
                setIsError({
                    show: true,
                    msg: data.status_message || "An error occurred",
                });
                setIsLoading(false);
            }
        } catch (error) {
            setIsError({
                show: true,
                msg: error.message,
            });
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMovies(API_URL);
    }, []);

    return (
        <AppContext.Provider value={{ isLoading, isError, movies }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the context
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
