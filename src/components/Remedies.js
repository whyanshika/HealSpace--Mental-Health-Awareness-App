import React from 'react';

const Remedies = () => {
  
  const videos = [
    { id: 'video1', title: 'Yoga for Mental Health', youtubeId: 'd3LPrhI0v-w' },
    { id: 'video2', title: 'Meditation for Stress Relief', youtubeId: 'inpok4MKVLM' },
    { id: 'video3', title: 'Tips for Better Sleep', youtubeId: 'sTANio_2E0Q' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-16">
      <div className="container mx-auto px-6">
       
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Resources that you can use to improve your wellness
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
             
              <iframe
                className="w-full h-48"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

             
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Remedies;
