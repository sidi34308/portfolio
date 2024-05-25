"use client"
import React from 'react';

const Card = ({ image, title, description, techIcons, liveSiteLink }) => {
    return (
        <div className="cards ">
            <img className="projectimg w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className=" tech-icons ">
                {techIcons.map((icon, index) => (
                    <img key={index} src={icon} alt="tech-icon" className="bg-white rounded-full border border-neutral-200 " style={{ transform: `translateX(-${5 * index * 2}px)` }} />
                ))}
            </div>
            <div className=" px-6 pt-4 pb-4">
                <a href={liveSiteLink} className="text-teal-500 hover:text-teal-600 font-semibold " target="_blank" rel="noopener noreferrer">
                    Check Live Site &rarr;
                </a>
            </div>
        </div>
    );
};

export default Card;
