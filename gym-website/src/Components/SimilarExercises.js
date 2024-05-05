import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import HorizontalScroll from "./HorizontalScroll";
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      {/* same muscle  */}
      <Typography variant={'h3'} mb={5}>
        Exercises that hit the same muscle
      </Typography>
      <Stack direction={'row'} sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? <HorizontalScroll data={targetMuscleExercises}/>:<Loader/>}
      </Stack>

      {/* same equipment */}
      <Typography variant={'h3'} mb={5}>
        Exercises that hit the same equipment
      </Typography>
      <Stack direction={'row'} sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length? <HorizontalScroll data={targetMuscleExercises} /> :<Loader/>}
      </Stack>

    </Box>
  )
}

export default SimilarExercises