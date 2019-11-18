// VSOP87 series version A
// Heliocentric dynamical ecliptic and equinox J2000
// Rectangular (x,y,z) coordinates in AU (Astronomical Units)

import mercury from './vsop87a-mercury';
import venus from './vsop87a-venus';
import earth from './vsop87a-earth';
import mars from './vsop87a-mars';
import jupiter from './vsop87a-jupiter';
import saturn from './vsop87a-saturn';
import uranus from './vsop87a-uranus';
import neptune from './vsop87a-neptune';
import earthMoon from './vsop87a-earth-moon';
import { getT } from '../utils/index';

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
    'earth-moon': earthMoon(t),
  };
};
