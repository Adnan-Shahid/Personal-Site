import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import finn from '../images/FinnLANDLab_logo.png';
import temerity from '../images/TemerityAnalytics_logo.png';
import eccc from '../images/eccc_logo.jpg';
import index from '../images/indexexchange_logo.png';
import UofT from '../images/UofT_logo.png';
import rhking from '../images/rhking_logo.png';
import Experience from '../Experience/Experience.js'
import FadeInSection from '../FadeInSection.js';

class JourneyPanel extends Component {
    state = {
        experiences: [
            {
                logo: finn,
                position: 'Lab Programmer,',
                duration: 'September 2019 - February 2020',
                workplace: 'Finn LAND Lab',
                points: [
                    'At the Finn LAND Lab, I assisted research assistants and graduate students in programming experiments for their research, this went from debugging their code to writing complex scripts to accomodate their experiments',
                    'The members of the lab had varying differences of experience with programming, with some being amazing developers and others just starting to learn programming.' + 
                        ' Because of this, I developed my ability to communicate technical concepts to a non-technical audience and was able to greatly help their growth as programmers',
                    'I was also given a really interesting chance to program experiments for MEG and MRI machines in Sick Kids Hospital. I even got to work on site to configure code to work with the machines, which was a wonderful and insightful opportunity',
                    'Working at the Finn LAND Lab gave me a unique perspective into the field of psychology, and the varying levels of complexity within the experiments being done! From working with controllers for memory games to creating a dynamic programming script to make a uniformly random dataset!'
                ]
            },
            {
                logo: temerity,
                position: 'Full Stack Developer,',
                duration: 'January 2019 - August 2019',
                workplace: 'Temerity Analytics',
                points: [
                    'If my first work experience was hitting the ground running, this would be a full sprint. At Temerity Analytics I was initially one of four developers,' + 
                        ' (eventually one of six for my last four months), so I had a very significant role to play in the development of the product',
                    'This was my first small startup experience, where right upon starting, I had to learn Angular 2, NgRx, which is essentially redux for Angular, and Django within my first week!',
                    'At Temerity, I really wanted to challenge myself, so I volunteered for a lot of the harder tasks/assignments that required a lot of innovation and critical thinking on my part',
                    'One major assignment I did that was unique was that I created a messaging system to allow for clients to select any component on the website and start a conversation specific to it.' + 
                        ' This task had a lot of unique challenges that I had never come across before. From the actual selection of the components to the managing of the communication between multiple users on each one.',
                    'Another unique task I did was developing an insights page. The page was made to allow for intelligent data aggregation to  deliver valuable information to clients about their company.' + 
                        ' This was the first time I ever had to look into a field outside of Computer Science (marketing) and really try to look for meaningful data connections',
                    'Working at Temerity Analytics allowed me to delve into the perspective of a marketer and gave me a real insight into that world thanks to the amazing team there. I was able to participate in crucial client meetings as a full time employee, something that I would have never thought I\'d get a chance to do.' + 
                        ' It was an amazing learning experience where I felt I grew exponentially as a developer'
                ]
            },
            {
                logo: eccc,
                position: 'Scientific Programmer,',
                duration: 'May 2017 - August 2017',
                workplace: 'Environment and Climate Change Canada',
                points: [
                    'Working at Environment and Climate Change Canada changed a lot of my perception towards programming.' + 
                        ' Here, the work I did was helping towards a positive cause, and it became much more fulfilling as a result.' +
                        ' During one of the tasks I was assigned, I was able to find a rather major bug with an older graphing tool that I was porting over to Python.' +
                        ' Amending the issue actually allowed for researchers to get much more accurate data from a weather instrument!',
                    'One task my manager gave me was to get an old archiving tool a previous co-op made working.' + 
                        ' The previous student left the code with no comments and my manager with no understanding of how to use it.' + 
                        ' Here, I had to work through the entire codebase to understand and create a very specific format file that allowed the code to function.' + 
                        ' However, upon decrypting it, I noticed very obvious performance issues, and I was able to apply a simple solution that significantly sped of the archiving tool. This made it potentially a 1000 times faster.' + 
                        ' This was absolutely crucial as the datasets the researchers were working with were several terabytes in size! Changing the speed for archiving something from 3 days to 1!',
                    'At ECCC I wrote various python scripts for parsing large amounts of weather instrument data to human readable csv files and mapping it to various types, from 2D graphs to 3D representations on Google Earth.',
                    'Working at ECCC provided me with a unique look into the public sector and gave me a chance to learn a lot about how we get our weather data! It was an incredibly fulfilling and enjoyable experience to work at Environment and Climate Change Canada'
                ]
            },
            {
                logo: index,
                position: 'Software Engineer,',
                duration: 'September 2016 - December 2016',
                workplace: 'Index Exchange',
                points: [
                    'Index Exchange was my first real job, entering in as a first year who knew nothing about web development and none of the stack that was used, it truly gave meaning to the expression, "hit the ground running"',
                    'I had to learn Javascript, Angular 1 and SQL as fast as possible within my first week as we started to work almost immediately after my first day. A challenging, yet rewarding endeavor, it helped form a much faster paced learning style that I now use today',
                    'The initial task my team was given was to develop a RESTful API web service using Angular and Node.JS to display advertising statistics and client performance through a dashboard for managers and clients to use. This was my first experience working in an agile development team and we were able to successfully complete the team project we were tasked a month ahead of time! With the extra time, we were actually able to assist another team in completing their projects just before the deadline!',
                    'Working at Index Exchange taught me to learn quick and learn well providing me with an amazing first work experience as a Software Engineer'
                ]
            },
            {
                logo: UofT,
                position: 'BSc in Computer Science (Specialist in Software Engineering),',
                duration: 'Earned April 2020',
                workplace: 'University of Toronto',
                points: [
                    'UofT was where I first learned of the intricacies and complexities within Computer Science and where I was truly able to develop my skills and challenge myself daily',
                    'From algorithms like dijkstra\'s to complex concepts like Dynamic Programming, UofT provided me with a platform to delve into my passion and gain as much as I wanted',
                    'Fortunately, UofT also provided me with the chance to take multiple internships, where I truly got to experience the field and solidify my desire to be a developer. UofT helped me discover my love for building products that make people\'s lives better.',
                    'The wide variety of courses allowed me to discover what fields in Computer Science I truly enjoyed and what I would like to focus on in the future. As well as providing me with windows into other areas of expertise like working with hardware and getting an understanding network security',
                    'UofT helped solidify what I love to do, gifted me with a love for learning and a desire for challenge while surrounding me with plenty of amazing peers to learn from.'
                ]
            },
            {
                logo: rhking,
                position: 'Class of 2015',
                workplace: 'R.H. King Academy',
                points: [
                    'R.H. King was the place where I discovered my passion for Computer Science and programming in general. For me, programming was the one thing in school that never felt like work, it always was engaging and as challenging as I wanted it to be',
                    'I am always thankful for my amazing ICS teacher Mr. Ryu for facilitating a wonderful learning environment where I learned what I would eventually want to do for the rest of my life',
                    'Finally, it was here that I learned how to make and created my very first project, a game based off the popular flash game "Stick Avalanche" using C#'
                ]
            },
        ]
    }
    
    render () {
        return (
            <Segment vertical>
                <div className="flexColumn">
                    <div className="panelHeader"><h1>My Journey</h1></div>
                    <div className="divider"></div>
                    <div className="flexColumn">
                        {this.state.experiences.map((experience, index) => {
                            return (
                                <FadeInSection key={index}>
                                    <Experience logo={experience.logo} workplace={experience.workplace} position={experience.position} duration={experience.duration} points={experience.points}/>
                                </FadeInSection>
                            )
                        })}
                    </div>
                </div>
            </Segment>
        )
    }
}

export default JourneyPanel;