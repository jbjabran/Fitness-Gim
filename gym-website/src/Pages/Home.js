import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises from '../Components/Exercises';

const Home = () => {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  // console.log(bodyPart)

  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home