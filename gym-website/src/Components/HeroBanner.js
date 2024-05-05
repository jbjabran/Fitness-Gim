import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HeroImg from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: "50px", xs: "30px" }, ml: { sm: "50px" } }} position={"relative"} p="20px ">
            <div className="row">
                <div className='column'>
                    {/*  logo brand name*/}
                    <Typography color={"#FF2625"} fontWeight={'600'} fontSize={"26px"}>
                        Fitness club
                    </Typography>

                    {/* 2nd typo */}
                    <Typography fontWeight={'700'}
                        sx={{ fontSize: { lg: "44px", xs: "40px" }, mb: "23px", mt: "30px" }}>
                        Sweat,Smile <br />
                        & Repeat
                    </Typography>

                    {/* 3rd typo */}
                    <Typography fontSize={"24px"} fontFamily={'Alegreya'} lineHeight={"35px"} mb={4}>
                        Check out the most effective exercises
                    </Typography>

                    {/* button of explore exercise */}
                    {/* <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#ff2625', padding: '15px' }}>Explore Exercise</Button> */}
                    <Stack>
                        <a href="#exercises" style={{ marginTop: '10px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
                    </Stack>
                    <Typography
                        fontWeight={600}
                        color={'#FF2625'}
                        sx={{
                            opacity: 0.1,
                            display: { lg: 'block', xs: 'none' }
                        }}
                        fontSize={'150px'}>
                        Exercise
                    </Typography>
                </div>

                <div className="column"><img src={HeroImg} alt="banner" className='HeroBannerImg' width={'450px'} height={"600px"} /></div>
            </div>
        </Box >
    )
}

export default HeroBanner