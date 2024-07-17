// Libraries
"use client";
import React from 'react';
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

// Achievements Data
const List = [
    {
        metric: "Projects",
        value: 10,
    },
    {
        metric: "Awards",
        value: 5,
    },
    {
        metric: "Years",
        value: 2,
    },
];

const AchievementsSection = () => {
    return (
        <section className='h-full py-5 grid grid-cols-3 bg-[#146464] border-2 border-[#35dddd] rounded-xl'>
            {List.map((achievement, index) => (
                <div key={index} className='flex flex-col items-center justify-center'>
                    <h2 className='text-white text-4xl font-bold'>
                        <AnimatedNumbers
                            includeComma
                            animateToNumber={achievement.value}
                            locale='en-US'
                            className='text-white text-4xl font-bold'
                            configs={(_, index) => ({
                                mass: 1,
                                friction: 50,
                                tension: 280 * (index + 1),
                            })}
                        />
                    </h2>
                    <p className='text-[#ecebeb] text-base'>{achievement.metric}</p>
                </div>
            ))}
        </section>
    );
};

export default AchievementsSection;