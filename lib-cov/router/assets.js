/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['router/assets.js']) {
  _$jscoverage['router/assets.js'] = [];
  _$jscoverage['router/assets.js'][1] = 0;
  _$jscoverage['router/assets.js'][3] = 0;
  _$jscoverage['router/assets.js'][8] = 0;
  _$jscoverage['router/assets.js'][13] = 0;
}
_$jscoverage['router/assets.js'][1]++;
var routes = [];
_$jscoverage['router/assets.js'][3]++;
routes.push({path: "/", handler: "serveIndex"});
_$jscoverage['router/assets.js'][8]++;
routes.push({path: /^\/(index\.html|\w+\.css|\w+\.js)$/, handler: "serveFile"});
_$jscoverage['router/assets.js'][13]++;
module.exports = routes;
_$jscoverage['router/assets.js'].source = ["var routes = []","","routes.push({","  path: '/',","  handler: 'serveIndex'","})","","routes.push({","  path: /^\\/(index\\.html|\\w+\\.css|\\w+\\.js)$/,","  handler: 'serveFile'","})","","module.exports = routes"];