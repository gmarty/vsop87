// VSOP87 series version C
// Heliocentric dynamical ecliptic and equinox of the date
// Rectangular (x,y,z) coordinates in AU (Astronomical Units)

import mercury from './vsop87c-mercury';
import venus from './vsop87c-venus';
import earth from './vsop87c-earth';
import mars from './vsop87c-mars';
import jupiter from './vsop87c-jupiter';
import saturn from './vsop87c-saturn';
import uranus from './vsop87c-uranus';
import neptune from './vsop87c-neptune';

const getT = (jd) => (jd - 2451545) / 365250;

export default (jdtt = 2451545) => {
  const t = getT(jdtt);
  return {
    mercury: mercury(t),
    venus: venus(t),
    earth: earth(t),
    mars: mars(t),
    jupiter: jupiter(t),
    saturn: saturn(t),
    uranus: uranus(t),
    neptune: neptune(t),
  };
};
