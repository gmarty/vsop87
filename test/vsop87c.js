const assert = require('assert');
const vsop87c = require('../dist/vsop87c.umd.js');

const PRECISION = 10;

describe('vsop87c()', () => {
  it('should return expected values for mercury on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.1300934112);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.4472876717);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0245983802);
  });

  it('should return expected values for mercury on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.3932698769);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.1406751043);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.0236616333);
  });

  it('should return expected values for mercury on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.1548281758);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.2814058364);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.0376921749);
  });

  it('should return expected values for mercury on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.3312331229);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.0640513914);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0230592735);
  });

  it('should return expected values for mercury on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.1950803107);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.3828531309);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0505441569);
  });

  it('should return expected values for mercury on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.2020188182);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.4195626841);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0212980091);
  });

  it('should return expected values for mercury on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.4084179067);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.0700940263);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.0265456213);
  });

  it('should return expected values for mercury on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.mercury.x.toFixed(PRECISION), -0.0951835365);
    assert.equal(coord.mercury.y.toFixed(PRECISION), 0.3043652763);
    assert.equal(coord.mercury.z.toFixed(PRECISION), 0.0360858544);
  });

  it('should return expected values for mercury on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.3404269126);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.0004094321);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0262202012);
  });

  it('should return expected values for mercury on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.mercury.x.toFixed(PRECISION), 0.127958835);
    assert.equal(coord.mercury.y.toFixed(PRECISION), -0.4129965856);
    assert.equal(coord.mercury.z.toFixed(PRECISION), -0.0496477652);
  });

  it('should return expected values for venus on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.718302279);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.0326545995);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0410142975);
  });

  it('should return expected values for venus on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.6919778854);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.2203045663);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0429874499);
  });

  it('should return expected values for venus on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.5783536698);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.4245514325);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0396658692);
  });

  it('should return expected values for venus on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.4103332105);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.6008366749);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0331993665);
  });

  it('should return expected values for venus on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.1835053718);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.6944530427);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0223743314);
  });

  it('should return expected values for venus on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.045673889);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.725823814);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0105778293);
  });

  it('should return expected values for venus on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.2925184049);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.6584829436);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0038981667);
  });

  it('should return expected values for venus on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.481762208);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.5412019869);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0161128116);
  });

  it('should return expected values for venus on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.venus.x.toFixed(PRECISION), 0.6411201421);
    assert.equal(coord.venus.y.toFixed(PRECISION), 0.3341571871);
    assert.equal(coord.venus.z.toFixed(PRECISION), -0.0286090464);
  });

  it('should return expected values for venus on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.venus.x.toFixed(PRECISION), -0.7099110735);
    assert.equal(coord.venus.y.toFixed(PRECISION), -0.1240161268);
    assert.equal(coord.venus.z.toFixed(PRECISION), 0.0364255617);
  });

  it('should return expected values for earth on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1771354615);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9672416229);
    assert.equal(coord.earth.z.toFixed(PRECISION), -0.0000039);
  });

  it('should return expected values for earth on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1647294827);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9693720024);
    assert.equal(
      coord.earth.z.toFixed(PRECISION),
      -(5.579e-7).toFixed(PRECISION)
    );
  });

  it('should return expected values for earth on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1522449491);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9713689619);
    assert.equal(
      coord.earth.z.toFixed(PRECISION),
      (2.038e-7).toFixed(PRECISION)
    );
  });

  it('should return expected values for earth on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1397668624);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9731643443);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0000024631);
  });

  it('should return expected values for earth on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1272616591);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.974853887);
    assert.equal(coord.earth.z.toFixed(PRECISION), -0.000001609);
  });

  it('should return expected values for earth on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1147252848);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9763645265);
    assert.equal(coord.earth.z.toFixed(PRECISION), -0.0000020004);
  });

  it('should return expected values for earth on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.1022656436);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9777418151);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0000037246);
  });

  it('should return expected values for earth on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.0897381298);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9789899623);
    assert.equal(coord.earth.z.toFixed(PRECISION), 0.0000014875);
  });

  it('should return expected values for earth on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.0773033683);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9799998884);
    assert.equal(coord.earth.z.toFixed(PRECISION), -0.0000012777);
  });

  it('should return expected values for earth on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.earth.x.toFixed(PRECISION), -0.0647576071);
    assert.equal(coord.earth.y.toFixed(PRECISION), 0.9808979021);
    assert.equal(coord.earth.z.toFixed(PRECISION), -0.0000030761);
  });

  it('should return expected values for mars on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.mars.x.toFixed(PRECISION), 1.3907159218);
    assert.equal(coord.mars.y.toFixed(PRECISION), -0.013415706);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0344677967);
  });

  it('should return expected values for mars on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.mars.x.toFixed(PRECISION), 0.3952725706);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.365284204);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.038665453);
  });

  it('should return expected values for mars on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.1640169843);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.040846124);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0054605962);
  });

  it('should return expected values for mars on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.6160583003);
    assert.equal(coord.mars.y.toFixed(PRECISION), 0.3697531114);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0464755338);
  });

  it('should return expected values for mars on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.mars.x.toFixed(PRECISION), -0.6896577496);
    assert.equal(coord.mars.y.toFixed(PRECISION), 1.4840391395);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0492235328);
  });

  it('should return expected values for mars on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.mars.x.toFixed(PRECISION), 0.8106181241);
    assert.equal(coord.mars.y.toFixed(PRECISION), 1.2767287234);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0100837679);
  });

  it('should return expected values for mars on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.mars.x.toFixed(PRECISION), 1.3682927953);
    assert.equal(coord.mars.y.toFixed(PRECISION), -0.2563584217);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0371492613);
  });

  it('should return expected values for mars on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.mars.x.toFixed(PRECISION), 0.1516988677);
    assert.equal(coord.mars.y.toFixed(PRECISION), -1.412284759);
    assert.equal(coord.mars.z.toFixed(PRECISION), -0.0362328071);
  });

  it('should return expected values for mars on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.3274727561);
    assert.equal(coord.mars.y.toFixed(PRECISION), -0.8181547191);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0102739788);
  });

  it('should return expected values for mars on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.mars.x.toFixed(PRECISION), -1.5224566563);
    assert.equal(coord.mars.y.toFixed(PRECISION), 0.6524641789);
    assert.equal(coord.mars.z.toFixed(PRECISION), 0.0489639473);
  });

  it('should return expected values for jupiter on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 4.0011739729);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 2.938581026);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.1017837501);
  });

  it('should return expected values for jupiter on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -3.1268885679);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -4.3833244169);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.0869356576);
  });

  it('should return expected values for jupiter on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 0.2320147906);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 5.1265494302);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.0223783436);
  });

  it('should return expected values for jupiter on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 0.9111045637);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -5.1081933867);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.0057585786);
  });

  it('should return expected values for jupiter on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -3.6969935264);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 3.858024575);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.075092748);
  });

  it('should return expected values for jupiter on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 4.3137648979);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -2.5299346444);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.0942014785);
  });

  it('should return expected values for jupiter on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -5.440154918);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 0.2866406676);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.1259503903);
  });

  it('should return expected values for jupiter on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 4.6200396688);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 1.8327269764);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.1105815012);
  });

  it('should return expected values for jupiter on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), -4.1078797676);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), -3.4875973204);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), 0.1000010863);
  });

  it('should return expected values for jupiter on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.jupiter.x.toFixed(PRECISION), 1.519136897);
    assert.equal(coord.jupiter.y.toFixed(PRECISION), 4.888616189);
    assert.equal(coord.jupiter.z.toFixed(PRECISION), -0.0385666565);
  });

  it('should return expected values for saturn on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 6.406406782);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 6.569992847);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.3690768029);
  });

  it('should return expected values for saturn on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -0.6146416433);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -10.0461993857);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.1939776737);
  });

  it('should return expected values for saturn on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -5.3256669097);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 7.3835415374);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.0948256372);
  });

  it('should return expected values for saturn on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 8.692763123);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -4.4352082613);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.2845245099);
  });

  it('should return expected values for saturn on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -9.0518360159);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -3.6171280351);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.4262838732);
  });

  it('should return expected values for saturn on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 5.9153005788);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 6.862946408);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.3438712176);
  });

  it('should return expected values for saturn on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -0.2128973849);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -10.1032378666);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.1483307262);
  });

  it('should return expected values for saturn on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -6.0841827843);
    assert.equal(coord.saturn.y.toFixed(PRECISION), 6.8799721146);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.1639880235);
  });

  it('should return expected values for saturn on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.saturn.x.toFixed(PRECISION), 8.7651857163);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -3.8844835882);
    assert.equal(coord.saturn.z.toFixed(PRECISION), -0.3202091755);
  });

  it('should return expected values for saturn on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.saturn.x.toFixed(PRECISION), -9.0192283867);
    assert.equal(coord.saturn.y.toFixed(PRECISION), -3.9782745625);
    assert.equal(coord.saturn.z.toFixed(PRECISION), 0.4294447827);
  });

  it('should return expected values for uranus on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 14.4318933505);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -13.7343158729);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.2381421963);
  });

  it('should return expected values for uranus on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -6.9142977663);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -17.6894115248);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.0219752002);
  });

  it('should return expected values for uranus on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -18.2009931564);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 1.8769054707);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.2422602627);
  });

  it('should return expected values for uranus on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -2.8725042471);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 18.5754947897);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.1124718875);
  });

  it('should return expected values for uranus on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 17.1435210736);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 9.8688935302);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.1780035971);
  });

  it('should return expected values for uranus on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 16.5140119842);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -11.3323922781);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.2588956123);
  });

  it('should return expected values for uranus on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -3.5812895193);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -18.9336732631);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.037196346);
  });

  it('should return expected values for uranus on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -18.2738161643);
    assert.equal(coord.uranus.y.toFixed(PRECISION), -2.0946851368);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.2224238136);
  });

  it('should return expected values for uranus on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.uranus.x.toFixed(PRECISION), -6.5914700062);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 17.3751653226);
    assert.equal(coord.uranus.z.toFixed(PRECISION), 0.163623761);
  });

  it('should return expected values for uranus on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.uranus.x.toFixed(PRECISION), 14.951805106);
    assert.equal(coord.uranus.y.toFixed(PRECISION), 12.6122126488);
    assert.equal(coord.uranus.z.toFixed(PRECISION), -0.1283414181);
  });

  it('should return expected values for neptune on julian day 2451545', () => {
    const coord = vsop87c(2451545);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 16.8121111222);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -24.9916630358);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.1272190171);
  });

  it('should return expected values for neptune on julian day 2415020', () => {
    const coord = vsop87c(2415020);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 2.2429528712);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 29.7794830302);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.6559452812);
  });

  it('should return expected values for neptune on julian day 2378495', () => {
    const coord = vsop87c(2378495);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -21.3855253884);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -21.4739440135);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.94189554);
  });

  it('should return expected values for neptune on julian day 2341970', () => {
    const coord = vsop87c(2341970);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 29.7592752326);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 2.4313629968);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.778742881);
  });

  it('should return expected values for neptune on julian day 2305445', () => {
    const coord = vsop87c(2305445);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -25.0753375458);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 16.7126213836);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.3085091531);
  });

  it('should return expected values for neptune on julian day 2268920', () => {
    const coord = vsop87c(2268920);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 7.6259089976);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -29.1970035319);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.3528023108);
  });

  it('should return expected values for neptune on julian day 2232395', () => {
    const coord = vsop87c(2232395);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 12.1172445471);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 27.2486873864);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.8159624537);
  });

  it('should return expected values for neptune on julian day 2195870', () => {
    const coord = vsop87c(2195870);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -27.2598513119);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -13.218533584);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.960328195);
  });

  it('should return expected values for neptune on julian day 2159345', () => {
    const coord = vsop87c(2159345);
    assert.equal(coord.neptune.x.toFixed(PRECISION), 28.8728659385);
    assert.equal(coord.neptune.y.toFixed(PRECISION), -7.7682281056);
    assert.equal(coord.neptune.z.toFixed(PRECISION), -0.6434491288);
  });

  it('should return expected values for neptune on julian day 2122820', () => {
    const coord = vsop87c(2122820);
    assert.equal(coord.neptune.x.toFixed(PRECISION), -17.9958638451);
    assert.equal(coord.neptune.y.toFixed(PRECISION), 24.0846111039);
    assert.equal(coord.neptune.z.toFixed(PRECISION), 0.0826739833);
  });
});
