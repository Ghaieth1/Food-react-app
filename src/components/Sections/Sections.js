import React from 'react';
import HeroSection from './HeroSection';

import HeroThreeSection from './HeroThreeSection';
import HeroFourSection from './HeroFourSection';
import HeroFiveSection from './HeroFiveSection';
import HeroSixSection from './HeroSixSection';
import HeroSevenSection from './HeroSevenSection';
import HeroTwoSection from './HeroTwoSection';

const Sections = () => {
  //Rendering every of the section components
  return (
    <main>
      <HeroSection />
      <HeroTwoSection />
      <HeroThreeSection />
      <HeroFourSection />
      <HeroFiveSection />
      <HeroSixSection />
      <HeroSevenSection />
    </main>
  );
  //END
};

export default Sections;
