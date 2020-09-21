import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg width="200px" height="117px" viewBox="0 0 400 117" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-3"><g id="Group-2" transform="translate(120.000000, 5.000000) scale(1.5, 1.5)" fill={fill} font-family="Avenir-Heavy, Avenir" font-size="80" font-weight="600" letter-spacing="4.80000019"><text id="COVID-19-THESIS"><tspan x="-15" y="40">COVID-19 THESIS</tspan></text></g><g id="noun_no-flight_3339146" transform="translate(42.000000, 58.500000) scale(-0.65, 0.65) translate(-63.000000, -58.500000) "><path d="M125.652407,49.5971469 C125.336828,48.2302255 124.302183,47.1434652 122.952407,46.7611469 L119.882407,45.8921469 C114.138059,19.6284364 91.1956046,0.686710424 64.3193482,0.0182305954 C37.4430917,-0.650249233 13.5873324,17.1274879 6.54440672,43.0731469 C3.95240672,44.6321469 1.58240672,46.2811469 0.915406723,47.2601469 C0.0109029564,48.5446023 -0.240006453,50.1784741 0.237406723,51.6751469 C0.60999614,52.726192 1.47430039,53.5277193 2.55040672,53.8201469 L4.65640672,54.4201469 C4.57040672,55.7231469 4.51140672,57.0421469 4.51140672,58.3601469 C4.51140672,90.5909326 30.639621,116.719147 62.8704067,116.719147 C95.1011924,116.719147 121.229407,90.5909326 121.229407,58.3601469 C121.229407,57.6481469 121.203407,56.9441469 121.178407,56.2411469 L124.470407,53.3291469 C125.515969,52.3940848 125.96902,50.9636376 125.652407,49.5971469 Z M3.37040672,50.9331469 C3.21748187,50.9004743 3.09601551,50.7844236 3.05640672,50.6331469 C2.91544518,50.0492523 3.03871354,49.4329105 3.39340672,48.9481469 C3.76240672,48.4701469 6.30040672,46.5691469 10.5004067,44.2601469 L26.0234067,48.6821469 C26.3115096,48.7646087 26.609735,48.8063468 26.9094067,48.8061469 C27.9847706,48.8036659 28.9906144,48.2742154 29.6014067,47.3891469 L30.4244067,46.1751469 C31.0185955,45.3126886 31.1605944,44.2166855 30.8058161,43.2312784 C30.4510379,42.2458714 29.6429938,41.4919143 28.6354067,41.2061469 L23.6354067,39.7911469 C28.2924884,39.0538312 33.0495454,39.2472269 37.6314067,40.3601469 L65.1814067,48.1601469 L55.5944067,57.7471469 L49.8474067,56.1201469 C48.750774,55.8093847 47.5757839,56.2028804 46.8874813,57.1114044 C46.1991787,58.0199284 46.1384133,59.2575666 46.7344067,60.2291469 C46.8405673,60.4018507 46.9803306,60.5514756 47.1454067,60.6691469 L50.3814067,62.9611469 L49.3814067,63.9611469 C49.1184067,63.8881469 48.8544067,63.8171469 48.5924067,63.7431469 L3.37040672,50.9331469 Z M14.6074067,42.3121469 C15.6454067,41.8701469 16.6854067,41.4581469 17.5284067,41.1791469 L27.8174067,44.0931469 C27.8961956,44.1164006 27.9586191,44.1767375 27.984537,44.2546905 C28.0104549,44.3326436 27.9965867,44.418346 27.9474067,44.4841469 L27.1284067,45.6921469 C27.0660078,45.7838053 26.9526664,45.8262583 26.8454067,45.7981469 L14.6074067,42.3121469 Z M21.5514067,37.1011469 C27.839696,24.8553533 39.2344487,16.0284273 52.6632643,13.0003989 C66.0920798,9.97237048 80.1722902,13.0550139 91.1074067,21.4171469 C91.2260801,21.5074489 91.2991843,21.6452502 91.3074067,21.7941469 C91.3183446,21.9380028 91.2657202,22.079431 91.1634067,22.1811469 L67.6114067,45.7351469 L38.4484067,37.4751469 C32.9076342,36.1383051 27.1438977,36.0107451 21.5494067,37.1011469 L21.5514067,37.1011469 Z M53.1644067,60.1821469 L52.5344067,60.8131469 L50.6294067,59.4601469 L53.1644067,60.1821469 Z M46.9524067,66.3951469 L26.6964067,86.6511469 C26.5953336,86.7551762 26.4529333,86.8083928 26.3084067,86.7961469 C26.1600143,86.787112 26.0228392,86.7141465 25.9324067,86.5961469 C19.6098426,78.317405 16.2468183,68.1572052 16.3814067,57.7411469 L46.9524067,66.3951469 Z M62.8704067,113.719147 C32.3108676,113.684429 7.54612505,88.919686 7.51140672,58.3601469 C7.51140672,57.3221469 7.55040672,56.2851469 7.61140672,55.2521469 L13.4114067,56.8951469 C13.0768032,68.2537353 16.6560382,79.3822683 23.5494067,88.4161469 C24.1656725,89.221229 25.0988336,89.7218785 26.1104067,89.7901469 C26.1884067,89.7901469 26.2664067,89.7971469 26.3434067,89.7971469 C27.2713435,89.7969487 28.1612228,89.4282639 28.8174067,88.7721469 L93.2864067,24.3021469 C94.0011405,23.5863455 94.372099,22.5968585 94.3040875,21.587606 C94.2360759,20.5783536 93.7357152,19.6475831 92.9314067,19.0341469 C80.9427134,9.86664372 65.4250938,6.67294085 50.7905626,10.3610811 C36.1560314,14.0492214 24.0054131,24.2157709 17.7934067,37.9701469 C17.5474067,38.0391469 17.3034067,38.1011469 17.0574067,38.1701469 C14.7516719,38.9546486 12.499273,39.8879427 10.3144067,40.9641469 C18.0583684,17.5712485 40.3305883,2.11177393 64.954549,3.03762262 C89.5785097,3.96347131 110.626949,21.0517811 116.592407,44.9601469 L113.755407,44.1601469 C112.854189,43.903476 111.890182,43.9856478 111.045407,44.3911469 L110.439407,44.6811469 C108.814761,38.9979455 106.177098,33.6548659 102.653407,28.9091469 C102.044172,28.0883086 101.107868,27.57325 100.088407,27.4981469 C99.0724035,27.4197486 98.0731093,27.7907374 97.3544067,28.5131469 L33.0204067,92.8441469 C32.300318,93.5673302 31.9305286,94.568044 32.0073328,95.5856996 C32.084137,96.6033552 32.5999333,97.5372325 33.4204067,98.1441469 C41.9294462,104.479708 52.2618118,107.888512 62.8704067,107.860147 C85.8206492,107.694072 105.703894,91.9087554 111.070407,69.5941469 C111.081502,69.5363156 111.089182,69.4778811 111.093407,69.4191469 C112.795191,68.2849253 114.039882,66.5842366 114.606407,64.6191469 C114.606407,64.6191469 115.106407,62.9441469 115.317407,61.9931469 C115.359898,61.7910286 115.378359,61.5845976 115.372407,61.3781469 L118.212407,58.8661469 C117.903469,89.2224233 93.2282294,113.679633 62.8704067,113.719147 Z M69.9524067,76.8191469 C72.5924675,78.6906994 75.6908807,79.8108284 78.9174067,80.0601469 L82.5314067,80.3391469 C82.6114067,80.3391469 82.6894067,80.3471469 82.7684067,80.3471469 C83.9855529,80.3415671 85.0755661,79.592455 85.5170084,78.458169 C85.9584507,77.3238831 85.6615777,76.0350215 84.7684067,75.2081469 C83.5594067,74.0901469 82.2064067,72.8441469 80.8274067,71.5771469 C82.7847401,71.6191469 84.7417401,71.6401469 86.6984067,71.6401469 C93.5094067,71.6401469 100.298407,71.3881469 106.945407,70.8871469 C107.192407,70.8691469 107.429407,70.8151469 107.670407,70.7751469 C101.961291,90.8234886 83.7152171,104.705574 62.8704067,104.860147 C52.9064917,104.888152 43.201527,101.688131 35.2084067,95.7391469 C35.08646,95.6502167 35.0102686,95.5117534 35.0004067,95.3611469 C34.9889283,95.2157308 35.0415243,95.0725529 35.1444067,94.9691469 L60.1944067,69.9131469 L69.9524067,76.8191469 Z M62.3524067,67.7571469 L66.2304067,63.8791469 L67.5974067,64.2661469 C68.3295715,64.476365 69.0042811,64.8504817 69.5704067,65.3601469 C72.2094067,67.7341469 78.4834067,73.4751469 82.7604067,77.3411469 L79.1464067,77.0601469 C76.4620169,76.8548634 73.8836867,75.9247981 71.6864067,74.3691469 L62.3524067,67.7571469 Z M106.729407,67.8871469 C98.2294067,68.5291469 89.5014067,68.7591469 80.7834067,68.5681469 C79.6644067,68.5451469 78.5474067,68.5021469 77.4304067,68.4481469 C75.0634067,66.2821469 72.9044067,64.3171469 71.5824067,63.1281469 C70.7324415,62.370089 69.7309454,61.8015065 68.6444067,61.4601469 L78.2444067,51.8601469 L112.370407,61.5281469 L111.727407,63.7971469 C111.079659,66.0733986 109.083867,67.7061745 106.724407,67.8901469 L106.729407,67.8871469 Z M80.6704067,49.4341469 L99.4704067,30.6341469 C99.5764122,30.5310238 99.7218304,30.4787748 99.8692269,30.4908502 C100.016623,30.5029256 100.151599,30.5781457 100.239407,30.6971469 C103.649733,35.2906606 106.17478,40.4791129 107.685407,45.9971469 L93.1334067,52.9601469 L80.6704067,49.4341469 Z M122.470407,51.0891469 L113.708407,58.8401469 C113.558407,58.7691469 97.4924067,54.1991469 97.4924067,54.1991469 L112.336407,47.0931469 C112.522122,47.004779 112.733737,46.987352 112.931407,47.0441469 L122.131407,49.6441469 C122.426856,49.7284062 122.653623,49.9658773 122.724175,50.2648958 C122.794728,50.5639142 122.69803,50.8777061 122.471407,51.0851469 L122.470407,51.0891469 Z" id="Shape" fill={fill} fill-rule="nonzero"></path></g></g></g></svg>

  );
}
