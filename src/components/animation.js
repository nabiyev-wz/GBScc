import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden animation">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/zpDza9rd9_4?si=13XC6royqe9DVDDB&autoplay=1&mute=1&controls=0&loop=1&playlist=zpDza9rd9_4"
          title="Chanel Coco Mademoiselle"
          allow="autoplay; fullscreen"
          style={{ pointerEvents: 'none' }}
        ></iframe>
      </div>

      {/* Nozik shaffof qatlam */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Matn va tugma */}
      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
          Chanel Parfyumlar
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-white/90">
          Noziklik va go'zallik ramzi
        </p>
        <button className="px-8 py-3 bg-[#B4945A] hover:bg-[#8B7355] text-white rounded-full text-lg font-semibold transition duration-300 border border-white/20">
          Kashf eting
        </button>
      </div>
    </div>
  );
};

export default AnimatedBackground;
