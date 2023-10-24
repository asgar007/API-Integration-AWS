import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { usersUrl } from '../service/api';
import { Autocomplete, TextField } from '@mui/material';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const containerStyle = {
    
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '16px', // Add padding for spacing between cards
  };
  const cardStyle = {
    width: '50%',
    backgroundColor: '#E8E5EA',
    margin: '10px'
  }
  const searchStyle = {
    width: '50%',
    backgroundColor: '#E8E5EA',
    margin: '10px'
  }
  const searchBar = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  }

  useEffect(()=>{
    const controller = new AbortController(); // this is for Avoiding Race Condition  
    ;(async ()=>{
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(`${usersUrl}/api/user/alljobs?search=${search}`,{ signal:controller.signal });
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request cancelled', error.message)
          return
        }
        setError(true);
      }
      
    })()

     //cleanup
    return ()=>{
      controller.abort();
    }
  },[search])
  return (
    <>
    <div style={searchBar}>
      <TextField id="outlined-basic" label="Search Any Field" variant="outlined" onChange={(e)=> setSearch(e.target.value)} />
      </div>
    <div style={containerStyle}>
      
      { error && (<h1>Something went wrong!</h1>)}
      { loading && (<h1>Loading...</h1>)}
      {
        jobs.map((job)=>{
          return(
              <Card variant="outlined" key={job._id} style={cardStyle}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {job.title}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.requirement}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.description}
                  </Typography>
                </CardContent>
              </Card>
            
          )
        })
       
      }
    </div>
    </>
  );
};

export default Dashboard;
