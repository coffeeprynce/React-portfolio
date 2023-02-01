import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";



export default function Aboutme() {
  return (
    <main>

      <div className="container2">
      <h1>About Page</h1>
      <h3>
       Hi there I am a graduate from the University of Minnesota bootcamp for full stack web development!
       Lets build something amazing together!
      </h3>
      <div className='icons'>
      <span className='htmlicon'>
          <AiFillHtml5 />
      </span>
      <span className='reacticon'>
          <GrReactjs/>
        </span>
        <span className='mongoicon'>
          <DiMongodb/>
          </span>
      </div>
      </div>
    </main>
  )};