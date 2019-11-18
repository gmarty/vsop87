const assert = require('assert');
const vsop87a = require('../dist/vsop87a.umd.js');

const PRECISION = 10;

describe('vsop87a()', () => {
  it('should return expected values for mercury on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.1300934115);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.4472876716);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0245983802);
  });

  it('should return expected values for mercury on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.3897246931);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.1502242199);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.0236199373);
  });

  it('should return expected values for mercury on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.1683565237);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.2735108157);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.037810363);
  });

  it('should return expected values for mercury on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.325672036);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.0880865802);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0229819912);
  });

  it('should return expected values for mercury on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.2314047967);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.3620120986);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.050858821);
  });

  it('should return expected values for mercury on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.1495554398);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.4409710104);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0218126659);
  });

  it('should return expected values for mercury on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.3938651887);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.1288399755);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.0263344445);
  });

  it('should return expected values for mercury on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.14542411);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.2837569447);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.036525887);
  });

  it('should return expected values for mercury on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.3340760581);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.0655125084);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0260662236);
  });

  it('should return expected values for mercury on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.2146329139);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.375229625);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0503982597);
  });

  it('should return expected values for venus on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.7183022797);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.0326546017);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0410142975);
  });

  it('should return expected values for venus on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.6971428331);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.2033631151);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0430201136);
  });

  it('should return expected values for venus on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.5983535208);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.3958502156);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0398238141);
  });

  it('should return expected values for venus on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.4531193265);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.5692420969);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0335643217);
  });

  it('should return expected values for venus on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.2501974249);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.6732855399);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0229714783);
  });

  it('should return expected values for venus on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.0428334458);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.725984493);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0114025161);
  });

  it('should return expected values for venus on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.1935421816);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.6940567996);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0029302736);
  });

  it('should return expected values for venus on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.3830059585);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.615087557);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0150920021);
  });

  it('should return expected values for venus on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.5643550617);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.4519394442);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0277243709);
  });

  it('should return expected values for venus on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.6660158465);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.2753592311);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0357874175);
  });

  it('should return expected values for earth on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1771354586);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9672416237);
    assert.equal(coord.earth.z.toFixed(PRECISION), -0.0000039);
  });

  it('should return expected values for earth on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1883079649);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9650688844);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0002150325);
  });

  it('should return expected values for earth on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1993918002);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9627974368);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0004307602);
  });

  it('should return expected values for earth on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2104654652);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9603579954);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0006472929);
  });

  it('should return expected values for earth on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2214982928);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9578483181);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.000856825);
  });

  it('should return expected values for earth on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2324780153);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9551975793);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0010692878);
  });

  it('should return expected values for earth on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2435134343);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9524373311);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.001287102);
  });

  it('should return expected values for earth on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2544603371);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9495904257);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0014962103);
  });

  it('should return expected values for earth on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2654547156);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9465233602);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0017037737);
  });

  it('should return expected values for earth on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.2763146784);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9433985307);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0019115387);
  });

  it('should return expected values for mars on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.mars.x.toFixed(PRECISION), 1.3907159264);
    assert.equal(coord.mars.y.toFixed(PRECISION), -0.0134157043);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0344677967);
  });

  it('should return expected values for mars on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.mars.x.toFixed(PRECISION), 0.4284332474);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.355235425);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0389650205);
  });

  it('should return expected values for mars on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.1119219621);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.0963263014);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0049208507);
  });

  it('should return expected values for mars on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.6387489524);
    assert.equal(coord.mars.y.toFixed(PRECISION), 0.2507105242);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0465605913);
  });

  it('should return expected values for mars on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.mars.x.toFixed(PRECISION), -0.8307668241);
    assert.equal(coord.mars.y.toFixed(PRECISION), 1.4098595097);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0504536061);
  });

  it('should return expected values for mars on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.mars.x.toFixed(PRECISION), 0.649525885);
    assert.equal(coord.mars.y.toFixed(PRECISION), 1.3657302245);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0116922368);
  });

  it('should return expected values for mars on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.mars.x.toFixed(PRECISION), 1.3910394546);
    assert.equal(coord.mars.y.toFixed(PRECISION), -0.0543839267);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0371012758);
  });

  it('should return expected values for mars on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.mars.x.toFixed(PRECISION), 0.3890073909);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.3660431023);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0383808949);
  });

  it('should return expected values for mars on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.1440917096);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.0595533316);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0082180884);
  });

  it('should return expected values for mars on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.6278485157);
    assert.equal(coord.mars.y.toFixed(PRECISION), 0.3060194814);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.049421574);
  });

  it('should return expected values for jupiter on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 4.0011740268);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 2.9385810077);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.1017837501);
  });

  it('should return expected values for jupiter on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -3.019122435);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -4.4582563705);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.08586419);
  });

  it('should return expected values for jupiter on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -0.0180390004);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 5.1317748839);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.020044849);
  });

  it('should return expected values for jupiter on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 1.2817318353);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -5.0280079874);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.009125159);
  });

  it('should return expected values for jupiter on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -4.0547959775);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 3.4799857072);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.0779960099);
  });

  it('should return expected values for jupiter on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 4.5891471727);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -1.9870837931);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.0961092251);
  });

  it('should return expected values for jupiter on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -5.4239396005);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -0.5085487291);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.1247760378);
  });

  it('should return expected values for jupiter on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 4.242328634);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 2.5898433579);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.1060307357);
  });

  it('should return expected values for jupiter on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -3.3554806095);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -4.2166702224);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.0919417675);
  });

  it('should return expected values for jupiter on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 0.4207861894);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 5.101959131);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.0280087663);
  });

  it('should return expected values for saturn on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 6.4064068573);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 6.5699929449);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.3690768029);
  });

  it('should return expected values for saturn on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -0.369597375);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -10.0582398188);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.1916854382);
  });

  it('should return expected values for saturn on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -5.679091087);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 7.115247812);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.0978521367);
  });

  it('should return expected values for saturn on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 8.9934758992);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -3.7883225437);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.2866389234);
  });

  it('should return expected values for saturn on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -8.6570276346);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -4.4809792498);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.4216252073);
  });

  it('should return expected values for saturn on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 5.0378574919);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 7.531062579);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.3348880611);
  });

  it('should return expected values for saturn on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 1.2601620699);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -10.0267935693);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.1347052714);
  });

  it('should return expected values for saturn on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -7.1628125747);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 5.7482646991);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.1724961738);
  });

  it('should return expected values for saturn on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 9.3511669242);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -2.1145906249);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.3231241535);
  });

  it('should return expected values for saturn on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -7.9395559173);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -5.8435867016);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.4165601597);
  });

  it('should return expected values for uranus on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 14.4318934159);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -13.7343162527);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.2381421963);
  });

  it('should return expected values for uranus on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -6.4810833337);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -17.8526893406);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.0177935238);
  });

  it('should return expected values for uranus on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -18.2708335178);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 0.9877655715);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.242034428);
  });

  it('should return expected values for uranus on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -4.2214391936);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 18.3160266384);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.1247592568);
  });

  it('should return expected values for uranus on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 16.1020987626);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 11.4900726864);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.1664618891);
  });

  it('should return expected values for uranus on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 17.7683247787);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -9.2421595876);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.2680482375);
  });

  it('should return expected values for uranus on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -0.7868164612);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -19.2532559478);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.063642408);
  });

  it('should return expected values for uranus on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -17.6539243375);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -5.1636568776);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.2124669126);
  });

  it('should return expected values for uranus on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -9.8287104597);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 15.7711888605);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.1914817351);
  });

  it('should return expected values for uranus on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 11.8546461039);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 15.5595370553);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.0950189343);
  });

  it('should return expected values for neptune on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 16.8121116576);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -24.9916630908);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.1272190171);
  });

  it('should return expected values for neptune on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 1.5164557467);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 29.8254538901);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.6491400216);
  });

  it('should return expected values for neptune on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -20.3138943578);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -22.4908255796);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.9309151535);
  });

  it('should return expected values for neptune on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 29.502281195);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 4.5987701114);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.7740507255);
  });

  it('should return expected values for neptune on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -26.5823264272);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 14.1935610229);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.3196842255);
  });

  it('should return expected values for neptune on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 11.1160686193);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -28.0548309589);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.3216732257);
  });

  it('should return expected values for neptune on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 8.0214324006);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 28.723491608);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.7759058527);
  });

  it('should return expected values for neptune on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -24.6234347578);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -17.6514428046);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.9297244003);
  });

  it('should return expected values for neptune on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 29.8303563036);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -2.0338910503);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.6441246887);
  });

  it('should return expected values for neptune on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -22.798517087);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 19.5994768858);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.1206374034);
  });

  it('should return expected values for earth-moon on julian day 2451545', () => {
    const coord = vsop87a(2451545);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.177159144);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9672192891);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), -9.536e-7);
  });

  it('should return expected values for earth-moon on julian day 2415020', () => {
    const coord = vsop87a(2415020);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.1883097013);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9650388428);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0002152687);
  });

  it('should return expected values for earth-moon on julian day 2378495', () => {
    const coord = vsop87a(2378495);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.1993643284);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9627828195);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0004282504);
  });

  it('should return expected values for earth-moon on julian day 2341970', () => {
    const coord = vsop87a(2341970);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2104343221);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9603642782);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0006462945);
  });

  it('should return expected values for earth-moon on julian day 2305445', () => {
    const coord = vsop87a(2305445);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2214911209);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9578778167);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0008589738);
  });

  it('should return expected values for earth-moon on julian day 2268920', () => {
    const coord = vsop87a(2268920);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2324953837);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9552252051);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0010711791);
  });

  it('should return expected values for earth-moon on julian day 2232395', () => {
    const coord = vsop87a(2232395);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2435434218);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9524355203);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0012855339);
  });

  it('should return expected values for earth-moon on julian day 2195870', () => {
    const coord = vsop87a(2195870);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2544800656);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9495642257);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0014936626);
  });

  it('should return expected values for earth-moon on julian day 2159345', () => {
    const coord = vsop87a(2159345);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2654471686);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9464953236);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0017047755);
  });

  it('should return expected values for earth-moon on julian day 2122820', () => {
    const coord = vsop87a(2122820);
    assert.equal(coord['earth-moon'].x.toFixed(PRECISION), -0.2762837551);
    assert.equal(coord['earth-moon'].y.toFixed(PRECISION), 0.9433889919);
    assert.equal(coord['earth-moon'].z.toFixed(PRECISION), 0.0019144183);
  });
});
