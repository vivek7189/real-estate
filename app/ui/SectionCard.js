import React from 'react';

const InsightToolCard = ({ bgClass, iconSrc, title, description, figureSrc, link }) => {
  return (
    <div
      className={`insightToolCard ${bgClass} p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105`}
     
    >
      <div className="topBox flex items-center mb-4">
        <div className="icon mr-4">
          <img src={iconSrc} alt={title} className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold">
          <a href={link} target="_self">{title}</a>
        </h3>
      </div>
      <p className="mb-4 text-gray-700">{description}</p>
      <figure className="mb-4">
        <img src={figureSrc} alt={title} className="w-full rounded-lg" />
      </figure>
      <div className="btnBox text-yellow-600 font-bold flex items-center">
        Explore Now<em className="ml-2 fas fa-angle-right"></em>
      </div>
    </div>
  );
};

export default InsightToolCard;
