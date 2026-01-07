import React from 'react'
import Courses from './Courses'

const AllCourses = (props) => {
    console.log(props.courseData);
    
  return (
    <div>
      AllCourses
      <Courses />
      <Courses />
      <Courses />
      <Courses />
    </div>
  )
}

export default AllCourses
