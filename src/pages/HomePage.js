import React, { useEffect, useState } from 'react';
import apiService from "../app/apiService";
import {set, useForm} from "react-hook-form";
import { Container } from '@mui/material';
//import { API_KEY } from '../app/config';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`genre/movie/list?api_key=148c8c91a329d210cfc8b8b2ed6c79d0&language=en`);
        setMovies(res.data);
        setError("");
      }catch(error){
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
      // const moviesData = await fetchMovies();
      // setMovies(moviesData);
      //console.log(res);
    };
    loadMovies();
  }, []);

  return (
    <Container xs={{display: "flex", minHeight: "100vh", mt: 3}}>
      <Stack>
        
      </Stack>
    </Container>
  );
};

export default HomePage;
