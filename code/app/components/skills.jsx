import React from 'react';
const myskills = [
    {
        title: "Artistic Vision and Visual Design",
        description: "With a strong sense of art and visuals, honed through my work as a graphic designer and my hobby as a fine artist, I bring a unique aesthetic perspective to my tech projects. This blend of artistic talent and technical expertise allows me to create visually appealing and user-friendly designs that stand out.",
        imgSrc: "/about/draw.svg",
    },
    {
        title: "Problem-Solving and Technical Proficiency",
        description: "I possess robust problem-solving abilities and technical skills, enabling me to tackle complex challenges efficiently. My background in technology equips me with the knowledge to develop innovative solutions and optimize processes, ensuring that projects are completed successfully and to a high standard.",
        imgSrc: "/about/settings.svg",
    },
    {
        title: "Team Collaboration and Communication",
        description: "I am a team-oriented professional who thrives in collaborative environments. My excellent communication skills and ability to work well with others make me an effective team player, capable of contributing to group success and fostering a positive, productive work atmosphere.",
        imgSrc: "/about/team.svg",
    },
    {
        title: "Rapid Learning and Adaptability",
        description: "My ability to learn quickly and adapt to new technologies and methodologies is one of my strongest assets. I stay updated with industry trends and continuously seek opportunities to expand my skill set, ensuring that I remain proficient and versatile in a fast-paced and ever-evolving field.",
        imgSrc: "/about/learn.svg",
    },
];

const skills = () => {
    return (
        <>

            <div className='flex gap-3 pt-5 flex-wrap'>
                <div className='bg-white p-2 rounded-lg'><img src='/tailwind-icon.png' className='h-12' /></div>
                <div className='bg-white p-2  rounded-lg'><img src='/nextjs-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/react-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/tailwind-icon.png' className='h-12' /></div>
                <div className='bg-white p-2  rounded-lg'><img src='/nextjs-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/react-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/tailwind-icon.png' className='h-12' /></div>
                <div className='bg-white p-2  rounded-lg'><img src='/nextjs-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/react-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/tailwind-icon.png' className='h-12' /></div>
                <div className='bg-white p-2  rounded-lg'><img src='/nextjs-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/react-icon.png' className='h-12' /></div>
                <div className='bg-white p-2 rounded-lg'><img src='/react-icon.png' className='h-12' /></div>

            </div>
            <div className='flex flex-col gap-0'>
                {myskills.map((skill, index) => (
                    <div key={index} className=' flex xl:flex-row gap-2 p-5 bg-white rounded-[13px] border border-white relative mt-5'>
                        <div className='flex flex-col'>
                            <h2 className=' font-bold mb-1 text-[#2bab9c]'>{skill.title}</h2>
                            <p className='paragraph mb-5'>{skill.description}</p>
                        </div>

                        <img src={skill.imgSrc} className='p-2 ' alt={skill.title} />
                    </div>
                ))}
            </div>

        </>);
};

export default skills;
