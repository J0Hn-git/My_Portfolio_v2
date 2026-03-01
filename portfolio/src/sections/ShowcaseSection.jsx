import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap/gsap-core';

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    

  return (
    <section ref={sectionRef} id='work'  className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src='/images/project1.png' alt='Ryde'/>
                    </div>
                    <div className='text-content'>
                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App.</h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built with React Native, Expo & TailwindCSS for a fast user-friendly experience.
                        </p>
                    </div>
                </div>

                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='images/vectorcv.png' alt='ryde'/>
                        </div>
                        <h2>VectorCV - AI Resume Analyzer</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src='images/streamly.png' alt='ryde'/>
                        </div>
                        <h2>Streamly - Netflix Clone</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection