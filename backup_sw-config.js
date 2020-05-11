module.exports = {
 staticFileGlobs: [
  'images/**.jpg',
  'images/**.png',
  'assets/**/**.css',
  'assets/**/**.html',
  'assets/**/**.jpg',
  'assets/**/**.svg',
  'assets/**/**.png',
  'assets/**/**.webp',
  'assets/**/**.ico',
  'assets/**/**.eot',
  'assets/**/**.otf',
  'assets/**/**.ttf',
  'assets/**/**.woff',
  'assets/**/**.woff2'
 ],
 runtimeCaching: [{
  urlPattern: /^https:\/\/ronisetiawan7\.github\.io\//,
  handler: 'networkFirst'
 }]
}