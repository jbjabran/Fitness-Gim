import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from "@mui/material";


import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';


const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexeriseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState([])
  const [equipmentExercises, setequipmentMuscleExercises] = useState([])

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: 'smooth' })

    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      setexerciseDetail(exerciseDetailData)
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query${exerciseDetailData.name} exercise`, youtubeOptions)
      setexeriseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      settargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setequipmentMuscleExercises(equipmentExercisesData)
    }
    fetchExerciseData();
  }, [id])
  

  if (!exerciseDetail) return <div>No data</div>
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>

      {/* detail of exercises  */}
      <Detail exerciseDetail={exerciseDetail} />

      {/* videos regarding those exercises  */}
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

      {/* related exercise panel */}
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail