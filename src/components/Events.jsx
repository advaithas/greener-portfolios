import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sizing } from '@mui/system';

export default function MediaCard() {
  return (
    <div className='font-poppins'>
      <h1 className='text-black text-2xl md:text-2xl lg:text-5xl p-4 m-10 text-center'>WELCOME TO THE EVENTS SECTIONS!</h1>

      <div class="flex flex-row  justify-center items-center m-10">
      The Entrepreneurship Club is an initiative of the fellow Entrepreneurs at PESU ECC that aims to foster the spirit of entrepreneurship amongst the students of PES University.<br/> Below are some of the activities and events that the club conducted recently to encourage students to foray into the field of innovation and business:
      </div>
       

      <div className='lg:grid grid-cols-2 gap-4 m-10 px-10'>

      

      <Card className='w-[345] md:w-[600px] lg:w-[600px] xl:w-[600px] m-10 font-poppins' sx={{ maxWidth: 800 }}>
        <CardMedia
          className='h-[140] lg:h-[500px]'
          sx={{ height: 350 }}
          image="./src/components/assets/cards/SHE.jpg"
          title="SHE Summit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SHE-Summit -23
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Don't miss your chance to hear from this panel of supremely accomplished women!<br/>SHE-Summit is where all the action is at. Boys, girls and faculty invited. Snacks and goodies for all attendees!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card className='w-[345] md:w-[600px] lg:w-[700px] xl:w-[600px]   m-10 font-poppins' sx={{ maxWidth: 800 }}>
        <CardMedia
          sx={{height: 350  }}
          image="./src/components/assets/cards/wolf.jpg"
          title="Wolf of Wall Street"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wolf of Wall Street-22
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Hurry up and register for a night full of expert speaker sessions, trading, entertainment, surprise games, free goodies and a chance to win a ton of exciting prizes from a prize pool of ₹30,000!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      </div>
      
    </div>
    
    
  );
}