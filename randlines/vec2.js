const {JSWord} = require('ait-lang/interfaces');

const intersects = JSWord(function([[p0x, p0y], [p1x, p1y]], [[p2x, p2y], [p3x, p3y]]) {
    const s1x = p1x - p0x;
    const s1y = p1y - p0y;
    const s2x = p3x - p2x;
    const s2y = p3y - p2y;

    const s = (-s1y * (p0x - p2x) + s1x * (p0y - p2y)) / (-s2x * s1y + s1x * s2y);
    const t = ( s2x * (p0y - p2y) - s2y * (p0x - p2x)) / (-s2x * s1y + s1x * s2y);

    return s >= 0 && s <= 1 && t >= 0 && t <= 1;
});
intersects.produces(1);

module.exports = {
  intersects
};
