/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['db/meetings.js']) {
  _$jscoverage['db/meetings.js'] = [];
  _$jscoverage['db/meetings.js'][1] = 0;
  _$jscoverage['db/meetings.js'][8] = 0;
  _$jscoverage['db/meetings.js'][9] = 0;
  _$jscoverage['db/meetings.js'][13] = 0;
  _$jscoverage['db/meetings.js'][14] = 0;
  _$jscoverage['db/meetings.js'][15] = 0;
  _$jscoverage['db/meetings.js'][23] = 0;
  _$jscoverage['db/meetings.js'][24] = 0;
  _$jscoverage['db/meetings.js'][28] = 0;
  _$jscoverage['db/meetings.js'][29] = 0;
  _$jscoverage['db/meetings.js'][30] = 0;
}
_$jscoverage['db/meetings.js'][1]++;
var connect = require("./connect"), noevil = require("see-no-evil"), util = require("../util"), CriteriaSpec = {session: true};
_$jscoverage['db/meetings.js'][8]++;
module.exports.getAll = (function (qs, cb) {
  _$jscoverage['db/meetings.js'][9]++;
  var wrap = noevil({error: cb});
  _$jscoverage['db/meetings.js'][13]++;
  connect.ensureConnected(wrap((function (nul, db) {
  _$jscoverage['db/meetings.js'][14]++;
  db.collection("meetings", wrap((function (nul, meetColl) {
  _$jscoverage['db/meetings.js'][15]++;
  meetColl.find(util.normalizeCriteria(qs, CriteriaSpec), util.buildOptionsObject(qs)).toArray(cb);
})));
})));
});
_$jscoverage['db/meetings.js'][23]++;
module.exports.get = (function (meetingId, cb) {
  _$jscoverage['db/meetings.js'][24]++;
  var wrap = noevil({error: cb});
  _$jscoverage['db/meetings.js'][28]++;
  connect.ensureConnected(wrap((function (nul, db) {
  _$jscoverage['db/meetings.js'][29]++;
  db.collection("meetings", wrap((function (nul, meetColl) {
  _$jscoverage['db/meetings.js'][30]++;
  meetColl.findOne({id: meetingId}, cb);
})));
})));
});
_$jscoverage['db/meetings.js'].source = ["var connect = require('./connect'),","  noevil = require('see-no-evil'),","  util = require('../util'),","  CriteriaSpec = {","    session: true","  }","","module.exports.getAll = function(qs, cb) {","  var wrap = noevil({","    error: cb","  })","","  connect.ensureConnected(wrap(function(nul, db) {","    db.collection('meetings', wrap(function(nul, meetColl) {","      meetColl.find(","        util.normalizeCriteria(qs, CriteriaSpec),","        util.buildOptionsObject(qs)","      ).toArray(cb)","    }))","  }))","}","","module.exports.get = function(meetingId, cb) {","  var wrap = noevil({","    error: cb","  })","","  connect.ensureConnected(wrap(function(nul, db) {","    db.collection('meetings', wrap(function(nul, meetColl) {","      meetColl.findOne({id: meetingId}, cb)","    }))","  }))","}"];
