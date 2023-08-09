import React from 'react'
import Image from 'next/image'

const skills =[
    {skill: "a"},
    {skill: "b"},
    {skill: "c"},
    {skill: "d"},
    {skill: "e"},
    {skill: "f"},
    {skill: "g"},
    {skill: "h"},
    {skill: "i"},
    {skill: "j"},


]

const AboutSection = () => {
  return (
    <section id="about">
        
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">About me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                     Get to know me
                     
                     </h1>
                    <p>
                    Hi, my name is Eric and I am a{" "}
                    <span className="font-bold">{"passionate"}</span>,
                    <span className="font-bold">{" self-motivated"}</span>, and
                    <span className="font-bold">{" super curious"}</span> Cybersecurity & Devops Engineer
                    based in the amazing city of Budapest, Hungary.
                    </p>
                    <br/>
                    <p>
                    Hi, my name is Eric and I am a{" "}
                    <span className="font-bold">{"passionate"}</span>,
                    <span className="font-bold">{" self-motivated"}</span>, and
                    <span className="font-bold">{" super curious"}</span> Cybersecurity & Devops Engineer
                    based in the amazing city of Budapest, Hungary.
                    </p>
                    <br/>
                    <p>
                        Life is{" "}
                        <span className="font-bold text-teal-500">
                        wonderful</span>{" "}
                        , there's too much to do to be bored !
                        <br/>
                        I have an insatiable passion for technology of all kinds.
                        My days are filled with the constant search for new challenges and the desire to break down the walls of convention.
                        Whether it's in the field of IT security, web development or even artificial intelligence 
                        - my hobby outside working hours - every day represents a new opportunity for me to innovate, learn and push back the boundaries of what's possible.
                        
                     </p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                    My Skills
                    </h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {skills.map((item, idx) => {
                        return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>;
                        })}

                    </div>
                    <Image src="/development.png" alt="" width={325} height={325} className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"/>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default AboutSection