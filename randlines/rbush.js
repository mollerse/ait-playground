const rbush = require('rbush');
const {JSWord} = require('ait-lang/interfaces');

const tree = JSWord(function() {
  return rbush();
});
tree.produces(1);

const search = JSWord(function(bbox, tree) {
  return tree.search(bbox).data;
});
search.produces(1);

const insert = JSWord(function(bbox, data, tree) {
  tree.insert(bbox, {data});
  return tree;
});
insert.produces(1);

const bbox = JSWord(function([[x1, y1], [x2, y2]]) {
  return [Math.min(x1, x2), Math.min(y1, y2), Math.max(x1, x2), Math.max(y1, y2)];
});
bbox.produces(1);

module.exports = {
  tree, search, insert, bbox
};
