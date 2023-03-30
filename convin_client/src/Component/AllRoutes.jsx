import React,{useEffect, useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Layout from './Layout'
import VideoPlayer from './Video/VideoPlayer';

export default function AllRoutes() {
  const [bucket, setBucket] = useState([]);

  useEffect(()=>{
    const newBucket = [{
      bucketName: "Education",
      bucketVideo: [
        {
          videoTitle: "How to find sum",
          videoFile: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        }
      ]
    }]
    setBucket([...newBucket]);
  },[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage bucket={bucket} setBucket={setBucket}/>}/>
          <Route path='/video/:id' element={<VideoPlayer bucket={bucket}/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
