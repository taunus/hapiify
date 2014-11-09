'use strict';

var specials = /{([a-z]+)(\?|\*([0-9]+)?)?}/gi;
var leads = ['?', '*'];

function transform (r) {
  return r.replace(specials, named);
}

function named (match, name, modifier, count) {
  return ':' + name + transformModifier(modifier);
}

function transformModifier (modifier) {
  if (typeof modifier !== 'string') {
    return '';
  }
  var leading = modifier[0];
  if (leads.indexOf(leading) !== -1) {
    return leading;
  }
  return '';
}

module.exports = transform;
