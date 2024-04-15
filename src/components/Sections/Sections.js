import React from 'react';
import HeroSection from './HeroSection';

import HeroThreeSection from './HeroThreeSection';
import HeroFourSection from './HeroFourSection';

const Sections = () => {
  //Rendering every of the section components
  return (
    <main>
      <HeroSection />

      <HeroThreeSection />
      <HeroFourSection />
    </main>
  );
  //END
};

export default Sections;
